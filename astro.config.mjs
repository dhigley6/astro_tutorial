// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://dhigley6.github.io',
  base: '/astro_tutorial',
  integrations: [preact()]
});