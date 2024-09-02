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
      <ul className="mt-8 grid gap-6">
         {blogs && blogs.map((blog: Blog) => (
            <li key={blog._id}>
               <Link href={`/blog/${blog.slug.current}`} className="flex max-sm:flex-col items-start justify-between gap-8 max-sm:gap-1 group">
                  <div className="grid gap-1 flex-1">
                     <h4 className="font-medium group-hover:underline underline-offset-2">{blog.title}</h4>
                     <p className="text-sm text-muted-foreground max-sm:line-clamp-2">{blog.excerpt}</p>
                  </div>
                  <p className="min-w-fit flex items-center gap-2 mt-1 text-sm font-medium">
                     <span>{formatDate(blog.datePublished)}</span>
                     {/* <span>{" " + blog.timeToRead} min read</span> */}
                  </p>
               </Link>
            </li>
         ))}
      </ul>
   )
}

export default BlogReels
