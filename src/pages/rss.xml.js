import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { defineConfig } from "astro/config";


export async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-uk</language>`,
  });
}