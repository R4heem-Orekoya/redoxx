import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Redoxx')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('blog').title('Blog Posts'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project', 'blog'].includes(item.getId()!),
      ),
    ])
