// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { satteri } from '@astrojs/markdown-satteri';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.anthonyfurman.com',
  integrations: [react()],
  markdown: {
    // keep quotes/apostrophes in the markdown as typed
    processor: satteri({ features: { smartPunctuation: false } }),
  },
  vite: {
    resolve: {
      // allow importing by doing "@components", "@styles"
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      },
    },
    css: {
      // scss classes are kebab-case (.header-container) but used as camelCase (styles.headerContainer)
      modules: { localsConvention: 'camelCaseOnly' },
      // the scss files share variables via @import, which sass has deprecated
      preprocessorOptions: { scss: { silenceDeprecations: ['import'] } },
    },
  },
});
