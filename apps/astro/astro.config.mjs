import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [
    sanity({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET,
      apiVersion: "v2023-03-01",
      useCdn: true
    }), 
    react(),
    tailwind()
  ],
  output: "server",
  adapter: vercel()
});