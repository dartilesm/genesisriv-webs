import svelte from "@astrojs/svelte";
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel";
import sanity from "@sanity/astro";

import icon from "astro-icon";
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    experimental: {
        svg: {
            mode: "sprite"
        }
    },
    integrations: [sanity({
        projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
        dataset: import.meta.env.VITE_SANITY_DATASET,
        token: import.meta.env.VITE_SANITY_API_READ_TOKEN,
        apiVersion: "v2023-03-01",
        useCdn: true
    }), tailwind(), svelte(), icon({
        iconDir: "src/assets/icons"
    })],
    output: "server",
    adapter: vercel()
});