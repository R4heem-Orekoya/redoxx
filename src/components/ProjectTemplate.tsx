"use client"

import { useQuery } from "@tanstack/react-query"
import client, { urlFor } from "@/lib/sanity";
import { Project } from "@/types/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, ExternalLink, Github, Loader2 } from "lucide-react";
import Error from "./Error";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { components } from "@/lib/constants";

const ProjectTemplate = ({ slug }: { slug: string }) => {
   const { data, isLoading, isError } = useQuery({
      queryKey: ["project"],
      queryFn: async () => {
         const res = await client.fetch(`*[_type == 'projects' && slug.current == '${slug}']`)
         return res[0] as Project
      }
   })
   
   if (isLoading){
      return (
         <div className="flex flex-col gap-2 justify-center items-center min-h-[80vh]">
            <Loader2 className="w-10 h-10 animate-spin" strokeWidth={1.6}/>
            <p className="text-sm text-muted-foreground font-medium">Loading please wait ...</p>
         </div>
      )
   } 
   
   if (isError) return <div className="pt-12 flex justify-center min-h-[90vh]"><Error /></div>
   
   return (
      <section className="max-w-3xl mx-auto py-6">
         <Link href="/" className="w-fit flex items-center gap-1 hover:underline group">  
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 duration-300"/>
            Go back
         </Link>
         
         {data && (
            <>
               <img 
                  src={urlFor(data.thumbnail.asset._ref)} 
                  alt={data.title} 
                  className="w-full aspect-[16/10] object-cover border rounded-lg mt-8"
               />
               <h2 className="pt-8 pb-1 text-xl md:text-2xl lg:text-3xl font-semibold">{data.title}</h2>
               <p className="text-muted-foreground text-sm">
                  {data.techStack.map((stack, i) => (
                     <span key={i}>
                        {stack}
                        {(i !== data.techStack.length - 1) && " - "} 
                     </span>
                  ))}
               </p>
               <div className="py-6 prose prose-violet prose-img:aspect-video prose-img:border prose-img:object-cover sm:prose-lg prose-p:font-light prose-ul:font-light dark:prose-invert">
                  <PortableText 
                     value={data.description}
                     components={components}
                  />
               </div>
               
               <h4 className="mt-8 text-xl font-semibold">Project Links</h4>
               <div className="flex gap-4 mt-4">
                  <a href={data.githubLink} className="hover:opacity-70 flex items-center gap-2 text-sm duration-300">
                     <Github className="w-4 h-4" strokeWidth={1.5}/>
                     Github
                  </a>   
                  <a href={data.siteLink} className="hover:opacity-70 flex items-center gap-2 text-sm duration-300">
                     <ExternalLink className="w-4 h-4" strokeWidth={1.5}/>
                     Live Preview
                  </a>   
               </div>
            </>
         )}
      </section>
   )
}

export default ProjectTemplate
