import { defineQuery } from "next-sanity";

const projectField = `
   _id,
   title,
   githubLink,
   siteLink,
   excerpt,
   thumbnail,
   slug,
   techStack
`

const blogField = `
   _id,
   title,
   excerpt,
   datePublished,
   slug
`

export const allProjectsQuery = defineQuery(`
   *[_type == "projects"]| order(_createdAt desc) { ${projectField} }
`)

export const allBlogsQuery = defineQuery(`
   *[_type == "blogs"] | order(_createdAt desc) { ${blogField} }
`)

export const projectQuery = defineQuery(`
   *[_type == "projects" && slug.current == $slug] [0] 
   {
      _id,
      title,
      thumbnail,
      description,
      techStack,
      githubLink,
      siteLink,
   }
`)

export const blogQuery = defineQuery(`
   *[_type == "blogs" && slug.current == $slug] [0] 
   {
      _id,
      title,
      thumbnail,
      datePublished,
      timeToRead,
      content,
   }
`)