import { defineField, defineType } from 'sanity'

export const project = defineType({
   name: "project",
   title: "Projects",
   type: "document",
   fields: [
      defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required().min(3).max(100),
      }),
      defineField({
         title: 'Project Logo',
         name: 'projectLogo',
         type: 'image',
         validation: (Rule) => Rule.required()
      }),
      defineField({
         title: "Github Link",
         name: "githubLink",
         type: "url",
         validation: Rule => Rule.required().uri({ scheme: ['https'] }).error('A valid HTTPS link is required.'),
      }),
      defineField({
         title: "Site Link",
         name: "siteLink",
         type: "url",
         validation: Rule => Rule.required().uri({ scheme: ['https'] }).error('A valid HTTPS link is required.'),
      }),
      defineField({
         title: "Excerpt",
         name: "excerpt",
         type: "text",
         validation: Rule => Rule.max(300).warning('Excerpt should not be too long.'),
      }),
      defineField({
         title: "Thumbnail",
         name: "thumbnail",
         type: "image",
         options: {
            hotspot: true,
         },
         validation: Rule => Rule.required()
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
         title: "Tech Stack",
         name: "techStack",
         type: "array",
         of: [{ type: "techStack" }],
         validation: Rule => Rule.required()
      }),
      defineField({
         title: "Description",
         name: "description",
         type: "blockContent"
      })
   ]
})