import { Blog } from "@/types/sanity"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { sanityFetch } from "@/lib/cms/live"
import { allBlogsQuery } from "@/lib/cms/queries"

const BlogReels = async () => {
   const { data } = await sanityFetch({
      query: allBlogsQuery
   })
   const blogs: Blog[] = data
   
   return (
      <ul className="mt-8 grid gap-6">
         {blogs && blogs.map((blog: Blog) => (
            <li key={blog._id}>
               <Link href={`/blog/${blog.slug.current}`} className="flex max-sm:flex-col items-start justify-between gap-8 max-sm:gap-1 group">
                  <div className="grid gap-1 flex-1">
                     <h3 className="group-hover:underline underline-offset-2 line-clamp-1">{blog.title}</h3>
                     <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                  </div>
                  <p className="min-w-fit flex items-center gap-2 mt-1 text-sm text-muted-foreground">
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
