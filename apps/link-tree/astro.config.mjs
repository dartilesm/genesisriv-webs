import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: {
      mode: "sprite"
    }
  },
  integrations: [
    sanity({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET,
      token: import.meta.env.VITE_SANITY_API_READ_TOKEN,
      apiVersion: "v2023-03-01",
      useCdn: true,
    }),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
});
