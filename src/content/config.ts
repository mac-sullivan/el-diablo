import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    body: z.string().optional(), // optional if you're not using this field
  }),
});

export const collections = {
  pages,
};
