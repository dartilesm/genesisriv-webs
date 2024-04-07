import type { InferSchemaValues } from '@sanity-typed/types';
import { defineConfig } from '@sanity-typed/types';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

const config = defineConfig({
  name: 'default',
  title: 'Centro de Links - Genesis Rivero - Sanity.io',
  
  projectId: import.meta.env.SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_SANITY_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config;

/** Typescript type of all types! */
export type SanityValues = InferSchemaValues<typeof config>;