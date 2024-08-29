"use client"

import client, { urlFor } from "@/lib/sanity"
import { Blog } from "@/types/sanity"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import BlogSkeleton from "./skeleton-loaders/BlogSkeleton"
import Error from "./Error"
import { formatDate } from "@/lib/utils"

const BlogReels = () => {
   const { data: blogs, isLoading, isError } = useQuery({
      queryKey: ["blogs"],
      queryFn: async () => {
         const res = await client.fetch(`*[_type == 'blogs']| order(_createdAt asc)`) as Blog[]
         return res         
      }
   })
   
   if(isLoading) return <BlogSkeleton />
   
   if(isError) return <Error error="Error fetching blog posts 🥲"/>
   
   return (
      <ul className="mt-12 grid gap-8">
         {blogs && blogs.map((blog: Blog) => (
            <li key={blog._id} className="flex items-center justify-between gap-8">
               <div className="grid gap-3 flex-1">
                  <Link href={`/blog/${blog.slug.current}`} className="text-xl font-medium">{blog.title}</Link>
                  <p className="text-sm text-muted-foreground max-sm:line-clamp-2">{blog.excerpt}</p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                     <span>{formatDate(blog.datePublished)}</span> ~
                     <span>{" " + blog.timeToRead} min read</span>
                  </p>
               </div>
               <Link href={`/blog/${blog.slug.current}`} className="w-48 aspect-[16/10] rounded-md border border-muted max-sm:hidden overflow-hidden">
                  <img src={urlFor(blog.thumbnail.asset._ref)} alt={blog.title} className="w-full h-full object-cover"/>
               </Link>
            </li>
         ))}
      </ul>
   )
}

export default BlogReels
