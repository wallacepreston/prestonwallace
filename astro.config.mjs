import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://prestonwallace.com',
  base: '/',
  output: 'static',
  integrations: [
    tailwind({
      // Let Astro handle PostCSS internally
    }),
  ],
  build: {
    assets: '_assets',
  },
});
