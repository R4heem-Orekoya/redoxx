import { defineField, defineType } from "sanity";
import { BlockquoteIcon } from '@sanity/icons'

export const blog = defineType({
   name: "blog",
   title: "Blogs",
   type: "document",
   icon: BlockquoteIcon,
   fields: [
      defineField({
         title: "Title",
         name: "title",
         type: "string",
         validation: (Rule) => Rule.required().min(3).max(100),
      }),
      defineField({
         title: "Excerpt",
         name: "excerpt",
         type: "text",
         validation: Rule => Rule.max(300).warning('Excerpt should not be too long.'),
      }),
      defineField({
         title: "Date Published",
         name: "datePublished",
         type: "date",
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         title: "Thumbnail",
         name: "thumbnail",
         type: "image",
         options: {
            hotspot: true
         },
         validation: (Rule) => Rule.required()
      }),
      defineField({
         name: "slug",
         title: "Slug",
         type: "slug",
         description: "Add a slug to your post or generate it from the title",
         options: { source: "title" },
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: "tags",
         title: "Tags",
         description: "These tags will be for seo purposes.",
         type: "array",
         of: [{ type: "string" }]
      }),
      defineField({
         name: "content",
         title: "Content",
         type: "blockContent",
         validation: (rule) => rule.required(),
      })
   ]
})