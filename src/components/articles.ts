import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from '../../scripts/site-map.mjs';

export type Article = CollectionEntry<'docs'>;

/** Articles in a section folder, in sidebar order, excluding its overview page. */
export async function articlesIn(dir: string): Promise<Article[]> {
  const all = await getCollection('docs', (e) => e.id.startsWith(`${dir}/`) && e.id !== `${dir}/index` && e.id !== dir);
  return all.sort(
    (a, b) =>
      (a.data.sidebar?.order ?? 99) - (b.data.sidebar?.order ?? 99) ||
      a.data.title.localeCompare(b.data.title),
  );
}

export async function sectionsWithArticles() {
  return Promise.all(sections.map(async (s) => ({ ...s, articles: await articlesIn(s.dir) })));
}

export const hrefFor = (e: Article) => `/${e.id.replace(/\/index$/, '')}/`;
