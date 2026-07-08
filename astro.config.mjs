// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { remarkCodeMeta } from './src/lib/remark-code-meta.ts';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
  site: 'https://brianifran.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm, remarkCodeMeta],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      syntaxHighlight: false,
    }),
    sitemap(),
  ],

  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkGfm, remarkCodeMeta],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});
