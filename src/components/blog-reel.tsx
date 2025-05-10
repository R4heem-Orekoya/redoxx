import { formatDate, timeToRead } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/live'
import { blogsQuery } from '@/sanity/lib/queries'
import { toPlainText } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

export default async function BlogReel({ perPage }: { perPage?: number}) {
   const { data } = await sanityFetch({
      query: blogsQuery,
      tags: ["blog"]
   })
   
   const blogs = perPage ? data.slice(0, perPage) : data

   return (
      <ul className="mt-8 grid gap-6">
         {blogs && blogs.map((blog) => (
            <li key={blog._id}>
               <Link href={`/blogs/${blog.slug?.current}`} className="flex max-sm:flex-col items-start justify-between gap-8 max-sm:gap-1 group">
                  <div className="grid gap-1 flex-1">
                     <h3 className="group-hover:underline underline-offset-2 line-clamp-1">{blog.title}</h3>
                     <p className="text-sm text-muted-foreground line-clamp-1">{blog.excerpt}</p>
                  </div>
                  <p className="min-w-fit flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                     <span>{formatDate(blog.datePublished!)}.</span>
                     <span>{timeToRead(toPlainText(blog.content!))} min read</span>
                  </p>
               </Link>
            </li>
         ))}
      </ul>
   )
}