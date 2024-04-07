/// <reference types="vite/client" />

interface ImportMetaEnv {
    SANITY_STUDIO_SANITY_PROJECT_ID: string
    SANITY_STUDIO_SANITY_DATASET: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}