// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Endereço público: usado para canonical, og:image e dados estruturados.
  site: 'https://atelier-artmisia.vercel.app', // TROCAR depois de publicar (igual a SITE.url)
  trailingSlash: 'never',
  build: { format: 'directory' },
});
