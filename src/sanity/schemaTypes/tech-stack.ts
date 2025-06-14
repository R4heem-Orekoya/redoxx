import { defineField, defineType } from "sanity";

export const techStack = defineType({
   name: "techStack",
   title: "Tech Stack",
   type: "object",
   fields: [
      defineField({
         name: "name",
         title: "Technology Name",
         type: "string",
         validation: Rule => Rule.required()
      }),
      defineField({
         name: "logo",
         title: "Technology Logo",
         type: "image",
         options: {
            hotspot: true,
         },
         validation: Rule => Rule.required()
      }),
      defineField({
         name: "logoLight",
         title: "Technology Light",
         type: "image",
         options: {
            hotspot: true,
         },
      }),
   ]
})