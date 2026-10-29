import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Title of the page on the old MediaWiki site, used for redirects.
        wikiTitle: z.string().optional(),
        // True for articles that were started on the wiki but never finished.
        stub: z.boolean().optional(),
      }),
    }),
  }),
};
