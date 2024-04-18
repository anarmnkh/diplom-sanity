import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'diplom-sanity',

  projectId: 'la4k77bh',
  dataset: 'news',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
