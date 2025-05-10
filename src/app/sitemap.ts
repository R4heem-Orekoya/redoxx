import { sanityFetch } from '@/sanity/lib/live'
import { blogsQuery, projectsQuery } from '@/sanity/lib/queries'
import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_DOMAIN
type changeFrequency = "weekly" | "always" | "hourly" | "daily" | "monthly" | "yearly" | "never" | undefined

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const { data: projects } = await sanityFetch({
      query: projectsQuery,
      tags: ["project"]
   })
   
   const { data: blogs } = await sanityFetch({
      query: blogsQuery,
      tags: ["blog"]
   })
   
   const projectEntries = projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug?.current}`,
      lastModified: new Date(project._updatedAt),
      changeFrequency: 'weekly' as changeFrequency,
      priority: 0.8,
   }))
   
   const blogEntries = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug?.current}`,
      lastModified: new Date(blog._updatedAt),
      changeFrequency: 'weekly' as changeFrequency,
      priority: 0.8,
   }))
   
   return [
      {
         url: baseUrl as string,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 1,
      },
      {
         url: `${baseUrl}/projects`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.9,
      },
      {
         url: `${baseUrl}/blogs`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.9,
      },
      ...projectEntries, ...blogEntries
   ]
}