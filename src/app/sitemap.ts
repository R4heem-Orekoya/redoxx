import { sanityFetch } from "@/lib/cms/live";
import { allBlogsQuery, allProjectsQuery } from "@/lib/cms/queries";
import { Blog, Project } from "@/types/sanity";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const { data: projectData } = await sanityFetch({
      query: allProjectsQuery
   })
   const projects: Project[] = projectData
   
   const { data: blogData } = await sanityFetch({
      query: allBlogsQuery
   })
   const blogs: Blog[] = blogData
   
   const projectLinks: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/project/${project.slug?.current}`,
      lastModified: project._updatedAt
   }))
   
   const blogLinks: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/blog/${blog.slug?.current}`,
      lastModified: blog._updatedAt
   }))
   
   return [
      {
         url: process.env.NEXT_PUBLIC_SITE_DOMAIN!,
         lastModified: new Date(),
         priority: 1
      },
      ...projectLinks,
      ...blogLinks
   ]
}