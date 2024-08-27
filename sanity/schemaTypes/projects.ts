export default {
   name: "projects",
   type: "document",
   title: "projects",
   fields: [
      {
         title: "Title",
         name: "title",
         type: "string",
         validation: (rule: any) => rule.required()
      },
      {
         title: "Github Link",
         name: "githubLink",
         type: "url",
         validation: (rule: any) => rule.required()
      },
      {
         title: "Site Link",
         name: "siteLink",
         type: "url",
         validation: (rule: any) => rule.required()
      },
      {
         title: "Excerpt",
         name: "excerpt",
         type: "string",
         validation: (rule: any) => rule.required()
      },
      {
         title: "Thumbnail",
         name: "thumbnail",
         type: "image",
         options: {
            hotspot: true
         },
         validation: (rule: any) => rule.required()
      },
      {
         title: "Slug",
         name: "slug",
         type: "slug",
         options: {
            source: 'title',
            slugify: (input:string) => input.toLowerCase().replace(/\s+/g, '-')
         },
         validation: (rule: any) => rule.required()
      },
      {
         title: "Tech Stack",
         name: "techStack",
         type: "array",
         of: [{type: 'string'}],
         validation: (rule: any) => rule.required()
      },
      {
         title: "Description",
         name: "description",
         type: "array",
         validation: (rule: any) => rule.required(),
         of: [
            {
               type: "block",
               styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'H1', value: 'h1'},
                  {title: 'H2', value: 'h2'},
                  {title: 'H3', value: 'h3'},
                  {title: 'H4', value: 'h4'},
                  {title: 'H5', value: 'h5'},
                  {title: 'H6', value: 'h6'},
                  {title: 'Quote', value: 'blockquote'}
               ],
               lists: [
                  {title: 'Bullet', value: 'bullet'},
                  {title: 'Numbered', value: 'number'}
               ], 
               marks: {
                  decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'},
                    {title: 'Code', value: 'code'}
                  ]
               }
            },
            {
               type: 'image'
            },
            {
               type: 'code'
            }
         ]
      },
   ]
}