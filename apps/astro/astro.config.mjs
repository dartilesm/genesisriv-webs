import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET,
      apiVersion: "v2023-03-01",
      useCdn: true
    }), 
    react(),
    tailwind()
  ]
});