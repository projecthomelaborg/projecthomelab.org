// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sections, GITHUB_REPO } from './scripts/site-map.mjs';

export default defineConfig({
  site: 'https://www.projecthomelab.org',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    starlight({
      title: 'Project Homelab',
      description:
        'A community guide to planning, building and running a homelab: hardware, hypervisors, containers, storage, networking and more.',
      logo: { src: './src/assets/mark.svg', alt: '' },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'Source on GitHub', href: GITHUB_REPO },
        { icon: 'comment-alt', label: 'Forums', href: 'https://forums.projecthomelab.org' },
      ],
      editLink: { baseUrl: `${GITHUB_REPO}/edit/main/` },
      lastUpdated: true,
      customCss: [
        '@fontsource-variable/archivo/wdth.css',
        '@fontsource/atkinson-hyperlegible-next/400.css',
        '@fontsource/atkinson-hyperlegible-next/400-italic.css',
        '@fontsource/atkinson-hyperlegible-next/700.css',
        '@fontsource-variable/jetbrains-mono/index.css',
        './src/styles/theme.css',
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://www.projecthomelab.org/og-image.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#207FB2' } },
      ],
      sidebar: [
        ...sections.map((s) => ({
          label: s.label,
          collapsed: s.dir !== 'start-here',
          items: [{ autogenerate: { directory: s.dir } }],
        })),
        {
          label: 'About the project',
          items: [
            { label: 'About', slug: 'about' },
            { label: 'Contribute', slug: 'contribute' },
          ],
        },
      ],
    }),
  ],
});
