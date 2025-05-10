import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { techStack } from './tech-stack'
import { project } from './project'
import { table } from './table'
import { youtube } from './youtube'
import { blog } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, techStack, project, table, youtube, blog],
}