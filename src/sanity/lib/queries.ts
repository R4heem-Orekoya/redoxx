import { defineQuery } from "next-sanity";

export const projectsQuery = defineQuery(`*[_type == "project"]{
  _id, title, slug, projectLogo, 
  githubLink, siteLink, excerpt, 
  thumbnail {
    "image": asset->url,
    "lqip": asset->metadata.lqip
  }, techStack, description
}`)

export const POST_QUERY =
   defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`)