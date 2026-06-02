// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// For a user GitHub Pages repository, use base '/'.
// If the site is deployed under a project repository later, set BASE_PATH to '/repo-name'.
export default defineConfig({
	site: process.env.SITE_URL || 'https://JorgeA-RD.github.io',
	base: process.env.BASE_PATH || '/',
	integrations: [
		mdx(),
		sitemap()
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	},
	build: {
		inlineStylesheets: 'always',
	},
});
