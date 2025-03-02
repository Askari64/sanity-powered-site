import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export const sanityConfig = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Test Website',
  plugins: [structureTool()],
  schema: {types: []}, // we will make schema in next commits
})