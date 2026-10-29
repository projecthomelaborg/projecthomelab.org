#!/usr/bin/env node
// Convert a MediaWiki Special:Export XML file into Starlight Markdown pages.
//
//   npm run import:wiki -- wiki-export/export.xml [path/to/wiki/images]
//
// - Article placement comes from scripts/site-map.mjs.
// - #REDIRECT pages become 301s instead of pages.
// - Articles with almost no prose are not published; they become "wanted".
// - If you pass the wiki's images/ folder (from cPanel), referenced images
//   are copied into public/media/wiki/. Otherwise pages point at the old
//   /images/x/xy/File.png paths, which keep working as long as that folder
//   stays in public_html.
//
// Requires pandoc (https://pandoc.org) on your PATH.

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { XMLParser } from 'fast-xml-parser';
import { sections, handWritten, extraRedirects, MIN_PROSE_CHARS } from './site-map.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = join(ROOT, 'src/content/docs');
const MEDIA_DIR = join(ROOT, 'public/media/wiki');

const [xmlPath = join(ROOT, 'wiki-export/export.xml'), imagesDir = join(ROOT, 'wiki-export/images')] = process.argv.slice(2);
if (!existsSync(xmlPath)) {
  console.error(`Export file not found: ${xmlPath}`);
  process.exit(1);
}
const haveImages = existsSync(imagesDir);

// ---------- helpers ----------
const normTitle = (t) => {
  let s = decodeURIComponent(String(t).replace(/%(?![0-9a-f]{2})/gi, '%25'))
    .replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const yaml = (s) => JSON.stringify(String(s));

// ---------- read export ----------
const parser = new XMLParser({ ignoreAttributes: true, isArray: (n) => n === 'page' });
const doc = parser.parse(readFileSync(xmlPath, 'utf8'));
const pages = new Map();
for (const p of doc.mediawiki.page) {
  const rev = Array.isArray(p.revision) ? p.revision.at(-1) : p.revision;
  const text = typeof rev.text === 'object' ? rev.text['#text'] ?? '' : String(rev.text ?? '');
  pages.set(normTitle(p.title), { title: String(p.title), text, timestamp: rev.timestamp });
}

// ---------- placement ----------
const placement = new Map(); // normTitle -> { dir, slug, label, order, section }
for (const sec of sections) {
  sec.pages.forEach(([title, slug, label], i) => {
    placement.set(normTitle(title), { dir: sec.dir, slug, label: label ?? title, order: i + 1, section: sec });
  });
}

// ---------- pass 1: redirects, conversion, decide published vs wanted ----------
const redirectTargets = new Map(); // normTitle -> normTitle | url
for (const [k, p] of pages) {
  const m = p.text.match(/^\s*#REDIRECT\s*\[\[([^\]|#]+)/i);
  if (m) redirectTargets.set(k, normTitle(m[1]));
}
for (const [k, v] of Object.entries(extraRedirects)) {
  redirectTargets.set(normTitle(k), v.startsWith('/') || v.startsWith('http') ? v : normTitle(v));
}

const images = new Map(); // filename -> src
let imageIndex = null;
function findImage(name) {
  if (!haveImages) return null;
  if (!imageIndex) {
    imageIndex = new Map();
    const walk = (d) => {
      for (const f of readdirSync(d)) {
        const p = join(d, f);
        if (statSync(p).isDirectory()) { if (!/^(thumb|temp|archive|deleted|lockdir)$/.test(f)) walk(p); }
        else imageIndex.set(f.toLowerCase(), p);
      }
    };
    walk(imagesDir);
  }
  return imageIndex.get(name.toLowerCase()) ?? null;
}
function imageSrc(rawName) {
  let name = rawName.trim().replace(/ /g, '_');
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (images.has(name)) return images.get(name);
  let src;
  const local = findImage(name);
  if (local) {
    mkdirSync(MEDIA_DIR, { recursive: true });
    copyFileSync(local, join(MEDIA_DIR, name));
    src = `/media/wiki/${encodeURIComponent(name)}`;
  } else {
    const h = createHash('md5').update(name).digest('hex');
    src = `/images/${h[0]}/${h.slice(0, 2)}/${encodeURIComponent(name)}`;
  }
  images.set(name, src);
  return src;
}

const IMG_KEYWORDS = /^(thumb|thumbnail|frame|frameless|border|left|right|center|centre|none|upright.*|\d+(x\d+)?px|x\d+px|link=.*|alt=.*|class=.*)$/i;
const figures = [];
function figureToken(name, params) {
  const caption = params.filter((p) => !IMG_KEYWORDS.test(p.trim())).pop()?.trim() ?? '';
  const widthMatch = params.join('|').match(/(\d+)(?:x\d+)?px/);
  const id = figures.push({ src: imageSrc(name), caption, width: widthMatch ? Number(widthMatch[1]) : null }) - 1;
  return `WIKIFIG${id}X`;
}
function figureHtml(i) {
  const f = figures[i];
  const alt = (f.caption || basename(decodeURIComponent(f.src)).replace(/\.[a-z]+$/i, '').replace(/[_-]+/g, ' ')).replace(/"/g, '&quot;');
  const style = f.width && f.width < 600 ? ` style="max-width:${f.width}px"` : '';
  return `<figure class="wiki-figure"${style}><img src="${f.src}" alt="${alt}" loading="lazy" decoding="async">${f.caption ? `<figcaption>${f.caption}</figcaption>` : ''}</figure>`;
}

function citeBook(params) {
  const g = (k) => params[k] ?? '';
  const author = [g('last'), g('first')].filter(Boolean).join(', ');
  return [author && `${author}${g('year') ? ` (${g('year')})` : ''}.`, g('title') && `''${g('title')}''.`, g('publisher') && `${g('publisher')}.`, g('isbn') && `ISBN ${g('isbn')}.`, g('pages') && `pp. ${g('pages')}.`]
    .filter(Boolean).join(' ');
}

const unknownTemplates = new Map();
function expandTemplates(text, meta) {
  let guard = 0;
  const re = /\{\{([^{}]*)\}\}/;
  while (re.test(text) && guard++ < 500) {
    text = text.replace(re, (_, inner) => {
      const parts = inner.split('|');
      const name = parts[0].trim().toLowerCase();
      const pos = []; const named = {};
      for (const p of parts.slice(1)) {
        const eq = p.indexOf('=');
        if (eq > 0 && /^[\w\s-]+$/.test(p.slice(0, eq))) named[p.slice(0, eq).trim().toLowerCase()] = p.slice(eq + 1).trim();
        else pos.push(p);
      }
      switch (name) {
        case 'wikimedia-stub': case 'stub': case 'stubnotice':
          meta.stub = true; return '';
        case 'ipaddr': return `${pos[0] ?? ''}/${pos[1] ?? ''}`;
        case 'gaps': return pos.map((s) => s.trim()).join(',');
        case 'cite book': return citeBook(named);
        case 'refn': return `<ref>${pos.join('|')}</ref>`;
        case 'quote':
          if (/quoted material/i.test(named.text ?? pos[0] ?? '')) return ''; // empty template boilerplate
          return `<blockquote>${named.text ?? pos[0]}${named.author ? ` — ${named.author}` : ''}</blockquote>`;
        default:
          unknownTemplates.set(name, (unknownTemplates.get(name) ?? 0) + 1);
          return '';
      }
    });
  }
  return text;
}

function preprocess(text, meta) {
  text = text.replace(/\r\n/g, '\n').replace(/\t/g, ' ');
  text = text.replace(/\[\[\s*Category\s*:[^\]]*\]\]/gi, '');
  text = text.replace(/__(NO)?TOC__|__FORCETOC__|__NOEDITSECTION__/g, '');
  text = expandTemplates(text, meta);
  // galleries
  text = text.replace(/<gallery[^>]*>([\s\S]*?)<\/gallery>/gi, (_, body) =>
    '\n\n' + body.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
      const [file, ...params] = l.replace(/^(File|Image):/i, '').split('|');
      return figureToken(file, params);
    }).join('\n\n') + '\n\n');
  // images: [[File:Name.png|opt|opt|caption]] (captions may contain links)
  text = text.replace(/\[\[\s*(?:File|Image)\s*:((?:[^\[\]]|\[\[[^\]]*\]\]|\[[^\]]*\])*)\]\]/gi, (m, inner, offset, all) => {
    const [file, ...params] = inner.split('|');
    const lineStart = all.lastIndexOf('\n', offset) + 1;
    const inTable = /^\s*[|!]/.test(all.slice(lineStart, offset));
    const tok = figureToken(file, params);
    return inTable ? tok : `\n\n${tok}\n\n`;
  });
  // user and special links -> plain text
  text = text.replace(/\[\[\s*(?:User|Special|Talk|User talk)\s*:[^\]|]*\|([^\]]+)\]\]/gi, '$1');
  text = text.replace(/\[\[\s*(?:User|Special|Talk|User talk)\s*:([^\]|]+)\]\]/gi, (_, t) => t.replace(/_/g, ' '));
  return text;
}

function pandoc(wikitext) {
  return execFileSync('pandoc', ['-f', 'mediawiki', '-t', 'gfm', '--wrap=none'], { input: wikitext, encoding: 'utf8', maxBuffer: 64 << 20 });
}

const proseLength = (md) => md
  .replace(/WIKIFIG\d+X/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
  .replace(/^#+.*$/gm, '')
  .replace(/[*_`#>|\-:]/g, '')
  .replace(/\s+/g, ' ').trim().length;

const converted = new Map();
for (const [k, place] of placement) {
  const p = pages.get(k);
  if (!p) { console.warn(`! Not in export: ${k}`); continue; }
  if (redirectTargets.has(k) && !redirectTargets.get(k).startsWith?.('/')) {
    console.warn(`! ${k} is a redirect in the wiki; check site-map.mjs`);
  }
  const meta = { stub: false };
  const md = pandoc(preprocess(p.text, meta));
  converted.set(k, { ...place, md, meta, page: p, published: proseLength(md) >= MIN_PROSE_CHARS });
}

// ---------- URL resolution ----------
const urlFor = (k, seen = new Set()) => {
  if (seen.has(k)) return null; seen.add(k);
  if (handWritten[k]) return handWritten[k];
  const c = converted.get(k);
  if (c) return c.published ? `/${c.dir}/${c.slug}/` : `/${c.dir}/`;
  const r = redirectTargets.get(k);
  if (r) return r.startsWith?.('/') || r.startsWith?.('http') ? r : urlFor(r, seen);
  return null;
};
for (const key of Object.keys(handWritten)) handWritten[normTitle(key)] ??= handWritten[key];

function resolveLink(target) {
  let [t, anchor] = String(target).replace(/&amp;/g, '&').split('#');
  if (/^(https?:|mailto:|\/)/.test(t)) return target;
  const url = urlFor(normTitle(t));
  if (!url) return null;
  return anchor && !url.includes('#') ? `${url}#${anchor.toLowerCase().replace(/[_\s]+/g, '-')}` : url;
}

// ---------- pass 2: post-process and write ----------
// Only the section folders are generated; hand-written pages at the top
// level of src/content/docs (home, about, contribute) are left alone.
for (const sec of sections) rmSync(join(DOCS, sec.dir), { recursive: true, force: true });
mkdirSync(join(ROOT, 'src/data'), { recursive: true });
for (const sec of sections) {
  mkdirSync(join(DOCS, sec.dir), { recursive: true });
  writeFileSync(join(DOCS, sec.dir, 'index.mdx'), [
    '---',
    `title: ${yaml(sec.label)}`,
    `description: ${yaml(sec.blurb)}`,
    'sidebar:\n  order: 0\n  label: Overview',
    'tableOfContents: false',
    '---',
    '',
    "import SectionIndex from '../../../components/SectionIndex.astro';",
    '',
    `<SectionIndex dir=${yaml(sec.dir)} />`,
    '',
  ].join('\n'));
}
const wanted = [];
const brokenLinks = new Map();

function postprocess(md, c) {
  // markdown wikilinks [text](Target "wikilink")
  md = md.replace(/\[((?:[^\[\]]|\[[^\]]*\])*)\]\(<?(.+?)>?\s+"wikilink"\)/g, (_, text, target) => {
    const url = resolveLink(target);
    if (!url) { brokenLinks.set(target, (brokenLinks.get(target) ?? 0) + 1); return text; }
    return `[${text}](${url})`;
  });
  // html wikilinks (inside tables)
  md = md.replace(/<a href="([^"]+)" title="wikilink">([\s\S]*?)<\/a>/g, (_, target, text) => {
    const url = resolveLink(target);
    if (!url) { brokenLinks.set(target, (brokenLinks.get(target) ?? 0) + 1); return text; }
    return `<a href="${url}">${text}</a>`;
  });
  // tidy pandoc table attributes
  md = md.replace(/\s(class="(odd|even|header)"|style="[^"]*")/g, '');
  // figures: standalone paragraphs become blocks, inline ones stay inline
  md = md.replace(/^WIKIFIG(\d+)X\s*$/gm, (_, i) => `\n${figureHtml(Number(i))}\n`);
  md = md.replace(/WIKIFIG(\d+)X/g, (_, i) => figureHtml(Number(i)));
  // first H1 becomes the page title; any other H1 becomes H2
  let h1 = null;
  md = md.replace(/^# (.+)$/m, (_, t) => { h1 = t.trim(); return ''; });
  md = md.replace(/^# /gm, '## ');
  // drop empty headings at the very end (e.g. "== Hybrid Lab ==" with nothing under it)
  md = md.replace(/(\n#{2,6} [^\n]+\s*)+$/g, '\n');
  md = md.replace(/\n{3,}/g, '\n\n').trim() + '\n';
  return { md, h1 };
}

function describe(md) {
  for (const block of md.split(/\n\s*\n/)) {
    const b = block.trim();
    if (!b || /^(#|<|-|\*|\||\d+\.|:::|!\[|>)/.test(b)) continue;
    let s = b.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
    if (s.length < 40) continue;
    if (s.length > 158) s = s.slice(0, 155).replace(/\s+\S*$/, '') + '…';
    return s;
  }
  return null;
}

for (const [k, c] of converted) {
  if (!c.published) {
    wanted.push({ title: c.label, section: c.section.label, dir: c.dir, wikiTitle: c.page.title });
    continue;
  }
  const { md, h1 } = postprocess(c.md, c);
  const title = h1 && h1.length < 90 && normTitle(h1) !== k ? h1 : c.label;
  // Drop a leading heading that only repeats the page title.
  const same = (a, b) => a.toLowerCase().replace(/[^a-z0-9]/g, '') === b.toLowerCase().replace(/[^a-z0-9]/g, '');
  let body = md.replace(/^(#{2,3}) (.+)\n+/, (m, _, t) => (same(t, title) || same(t, c.label) || same(t, c.page.title) ? '' : m));
  const description = describe(body) ?? `${c.label}: a community guide from Project Homelab.`;
  const stubNote = c.meta.stub
    ? `:::note[This article is unfinished]\nIt was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).\n:::\n\n`
    : '';
  const fm = [
    '---',
    `title: ${yaml(title)}`,
    `description: ${yaml(description)}`,
    `sidebar:\n  label: ${yaml(c.label)}\n  order: ${c.order}`,
    `lastUpdated: ${String(c.page.timestamp).slice(0, 10)}`,
    `wikiTitle: ${yaml(c.page.title)}`,
    c.meta.stub ? 'stub: true' : null,
    '---',
  ].filter(Boolean).join('\n');
  const out = join(DOCS, c.dir, `${c.slug}.md`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, `${fm}\n\n${stubNote}${body}`);
}

// ---------- redirects + wanted list ----------
const redirects = {};
for (const k of new Set([...pages.keys(), ...redirectTargets.keys(), ...Object.keys(handWritten)])) {
  const url = urlFor(k);
  if (url) redirects[k] = url;
}
writeFileSync(join(ROOT, 'src/data/redirects.json'), JSON.stringify(redirects, null, 2) + '\n');
writeFileSync(join(ROOT, 'src/data/wanted.json'), JSON.stringify(wanted, null, 2) + '\n');

// ---------- report ----------
const published = [...converted.values()].filter((c) => c.published);
console.log(`Published ${published.length} articles (${published.filter((c) => c.meta.stub).length} marked unfinished).`);
console.log(`Wanted (not published): ${wanted.length} → ${wanted.map((w) => w.wikiTitle).join(', ')}`);
console.log(`Redirects: ${Object.keys(redirects).length}`);
console.log(`Images: ${images.size} referenced, ${haveImages ? 'copied to public/media/wiki' : 'pointing at legacy /images/ paths'}`);
if (unknownTemplates.size) console.log(`Templates dropped: ${[...unknownTemplates].map(([n, c]) => `${n}×${c}`).join(', ')}`);
if (brokenLinks.size) console.log(`Links to pages that never existed (kept as plain text): ${brokenLinks.size}`);
