/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_SANITY_PROJECT_ID: string
    VITE_SANITY_DATASET: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}