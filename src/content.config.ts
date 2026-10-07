import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './content/blog', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    image: z.string(),
    imageAlt: z.string(),
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

export const collections = { blog };
