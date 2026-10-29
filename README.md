# Project Homelab

Source for [projecthomelab.org](https://www.projecthomelab.org), a community guide to planning, building and running a homelab.

The site is built with [Astro Starlight](https://starlight.astro.build). Every article is a Markdown file in `src/content/docs/`, and the build produces plain static HTML that runs on any web host, including cPanel shared hosting. There's no database and no PHP.

Want to write or fix an article? See the [contributing guide](https://www.projecthomelab.org/contribute/).

## Working on the site

```sh
npm install
npm run dev      # http://localhost:4321, reloads as you edit
npm run build    # static site in dist/
npm run preview  # serve dist/ locally
```

Node 20 or newer is required.

## How it's organized

| Path | What it is |
| --- | --- |
| `src/content/docs/<section>/` | Articles, one Markdown file each |
| `src/content/docs/index.mdx` | Homepage |
| `src/content/docs/about.md`, `contribute.mdx` | Hand-written project pages |
| `src/components/` | Homepage rack, section listings, footer |
| `src/styles/theme.css` | Colors and type |
| `scripts/site-map.mjs` | Sections, article placement, and the GitHub repo URL |
| `scripts/build-htaccess.mjs` | Generates `public/.htaccess` (redirects, caching) before each build |
| `scripts/import-mediawiki.mjs` | One-time converter from the old wiki |
| `src/data/redirects.json` | Old wiki title → new URL, used for redirects |

## Deploying

Pushing to `main` builds the site and uploads it over FTPS (`.github/workflows/deploy.yml`). Add three repository secrets first: `FTP_SERVER`, `FTP_USERNAME` and `FTP_PASSWORD`. The FTP account's home folder must be `public_html`.

To deploy by hand instead, run `npm run build` and upload the contents of `dist/`, including the hidden `.htaccess` file, to `public_html` with cPanel's File Manager or any FTP client.

## Moving from the old MediaWiki site

1. **Back up first.** In cPanel, download a full backup of `public_html` and export the wiki's database from phpMyAdmin.
2. **Keep the `images/` folder.** Migrated articles still load their pictures from the wiki's `/images/x/xy/File.png` paths. To make the repository self-contained instead, copy that folder to `wiki-export/images/` and re-run the importer (see below). It copies only the images articles use into `public/media/wiki/`.
3. **Remove MediaWiki.** Delete everything in `public_html` except `images/` and anything unrelated to the wiki. The forums and bug tracker live on their own subdomains and aren't affected.
4. **Upload the new site**, or push to `main` and let the workflow do it.
5. **Drop the wiki database** in cPanel once you're happy. It holds about 79,000 spam accounts and 6,000 spam pages.
6. In Google Search Console, submit `https://www.projecthomelab.org/sitemap-index.xml`.

### What the redirects do

- Every migrated article's old address, in both its `/wiki/Title` and `/index.php?title=Title` forms, returns a permanent redirect (301) to its new page.
- Stub articles that weren't migrated redirect to their section page, where they're listed as not written yet.
- Every other old wiki address returns **410 Gone**. That covers the spam pages, user and talk pages, and special pages. A 410 tells search engines to drop a page straight away instead of retrying it for months, which is the fastest way to clear the spam out of search results.

## Re-running the wiki import

Only needed if you change article placement in `scripts/site-map.mjs` before launch. It overwrites the section folders, so don't re-run it after people start editing articles on GitHub.

```sh
# needs pandoc: https://pandoc.org/installing.html
npm run import:wiki -- wiki-export/export.xml wiki-export/images
```
