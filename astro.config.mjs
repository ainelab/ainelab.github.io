// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User/organization GitHub Pages site → served from root.
export default defineConfig({
  site: 'https://ainelab.github.io',
  server: { port: 4321, host: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
