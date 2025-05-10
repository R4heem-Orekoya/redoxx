import { defineQuery } from "next-sanity";

export const projectsQuery = defineQuery(`*[_type == "project"]{
  _id, title, slug, projectLogo, 
  githubLink, siteLink, excerpt, 
  thumbnail {
    asset->{
      url,
      metadata {
        lqip
      }
    }
  }, techStack, description
}`)

export const blogsQuery = defineQuery(`*[_type == "blog"] | order(datePublished desc) {
  _id,
  title,
  excerpt,
  datePublished,
  thumbnail {
      asset->{
        url,
        metadata {
          lqip
        }
      }
  },
  slug,
  content
}`)

export const blogQuery = defineQuery(`*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  thumbnail {
    asset->{
      url,
      metadata {
        lqip
      }
    }
  },
  tags,
  datePublished,
  content
}`)

export const projectQuery = defineQuery(`*[_type == "project" && slug.current == $slug] [0] {
  _id,
  title,
  excerpt,
  thumbnail {
    asset->{
      url,
      metadata {
        lqip
      }
    }
  },
  tags,
  description,
  techStack,
  githubLink,
  siteLink,
}`)