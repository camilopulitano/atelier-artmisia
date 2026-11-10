// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Endereço público: usado para canonical, og:image e dados estruturados.
  site: 'https://atelierartmisia.com.br', // igual a SITE.url em src/config/site.ts
  trailingSlash: 'never',
  build: { format: 'directory' },
});
