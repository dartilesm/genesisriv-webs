/* import type { InferSchemaValues } from '@sanity-typed/types';
import { defineConfig } from '@sanity-typed/types';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas'; */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import { schemaTypes } from "./schemaTypes";

const config = defineConfig([
  {
    name: 'production',
    title: 'Genesisriv - Production',
    
    projectId: import.meta.env.SANITY_STUDIO_SANITY_PROJECT_ID,
    dataset: 'production',
    
    basePath: '/production',
    
    plugins: [structureTool(), visionTool()],
  
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'development',
    title: 'Genesisriv - Development',
    
    
    projectId: import.meta.env.SANITY_STUDIO_SANITY_PROJECT_ID,
    dataset: 'development',
    
    basePath: '/development',

    plugins: [structureTool(), visionTool()],
  
    schema: {
      types: schemaTypes,
    },
  },
])

export default config;