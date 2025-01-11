import { glob } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		cover: z.string(),
		author: reference('authors'),
		tags: z.array(reference('tags')),
		categories: z.array(reference('categories')),
		isExternalLink: z.boolean().default(false),
		link: z.string().optional(),
		draft: z.boolean(),
	}),
});

const tags = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './tags' }),
	schema: z.object({
		title: z.string(),
	}),
});

const categories = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './categories' }),
	schema: z.object({
		title: z.string(),
		order: z.number().optional(),
	}),
});

const authors = defineCollection({
	loader: glob({ pattern: '**/[^_]*.json', base: './authors' }),
	schema: z.object({
		name: z.string(),
		image: z.string(),
		rol: z.string(),
		bio: z.string(),
		email: z.string(),
		social: z.array(
			z.object({
				name: z.string(),
				url: z.string(),
				icon: z.string(),
			})
		),
	}),
});

const jobs = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		company: z.string(),
		icon: z.string(),
		location: z.string(),
		url: z.string(),
		published: z.boolean(),
		createDate: z.string().datetime(),
		roles: z.array(
			z.object({
				role: z.string(),
				startDate: z.string().datetime(),
				endDate: z.string().datetime().optional(),
				achievements: z.array(z.string()),
			})
		),
	}),
});

const technologies = defineCollection({
	type: 'data',
	schema: z.object({
		id: z.string(),
		name: z.string(),
		icon: z.string().optional(),
		url: z.string(),
	}),
});

const projects = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		cover: z.string().optional(),
		date: z.string().datetime(),
		repository: z.string().optional(),
		url: z.string().optional(),
		company: z.string(),
		tech: z.array(reference('technologies')),
		showInProjects: z.boolean().default(false),
		featured: z.boolean().default(false),
		priority: z.number().default(0),
		published: z.boolean().default(false),
		content: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
	authors,
	jobs,
	technologies,
	projects,
	tags,
	categories
};
