import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string(),
  }),
});

export const collections = {
  pages: pagesCollection,
};