"use client"

import client from "@/lib/sanity"
import { Blog } from "@/types/sanity"
import { ArrowLeft, Loader2 } from "lucide-react"
import Error from "./Error"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { useQuery } from "@tanstack/react-query"
import { formatDate } from "@/lib/utils"
import { PortableText } from "@portabletext/react"
import { components } from "@/lib/constants"

const BlogTemplate = ({ slug }: { slug: string }) => {
   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["blog"],
      queryFn: async () => {
         const res = await client.fetch(`*[_type == 'blogs' && slug.current == '${slug}']`)
         return res[0] as Blog
      }
   })
   
   if(isLoading) {
      return (
         <div className="py-16 flex flex-col gap-2 justify-center items-center">
            <Loader2 className="w-10 h-10 animate-spin" strokeWidth={1.6}/>
            <p className="text-sm text-muted-foreground font-medium">Loading please wait ...</p>
         </div>
      )
   } 
   
   if(isError) {
      return <Error />
   }
   
   return (
      <section className="max-w-3xl mx-auto">
         <Link 
            href="/" 
            className={buttonVariants({ 
               variant: "link", 
               className: "no-underline flex items-center gap-1 group px-0" 
            })}
         >  
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 duration-300"/>
            Go back
         </Link>
         
         {data && (
            <>
               <h2 className="pt-8 pb-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{data.title}</h2>
               <p className="flex items-center gap-2 pt-2 text-sm text-muted-foreground font-medium">
                  <span>{formatDate(data.datePublished)}</span> ~
                  <span>{" " + data.timeToRead} min read</span>
               </p>
               
               <div className="py-6 prose dark:prose-invert">
                  <PortableText 
                     value={data.content}
                     components={components}
                  />
               </div>
            </>
         )}
         
      </section>
   )
}

export default BlogTemplate
