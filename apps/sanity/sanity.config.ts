import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { defineConfig } from '@sanity-typed/types';
import type { InferSchemaValues } from '@sanity-typed/types';

const config = defineConfig({
  name: 'default',
  title: 'genesisriv-tree',

  projectId: 'l2ne4htk',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config;

/** Typescript type of all types! */
export type SanityValues = InferSchemaValues<typeof config>;