import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Nare Kuzu Evi Yönetim Paneli',

  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'yeni-proje-id-buraya',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
