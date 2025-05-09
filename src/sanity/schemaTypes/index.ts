import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { techStack } from './tech-stack'
import { project } from './project'
import { table } from './table'
import { youtube } from './youtube'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, techStack, project, table, youtube],
}