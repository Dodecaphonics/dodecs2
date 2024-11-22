import { defineCollection, reference, z } from 'astro:content';

const members = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    hometown: z.string(),
    major: z.string(),
    fact: z.string(),
    image: image(),
    year: z.number()
  })
})

export const collections = { members };