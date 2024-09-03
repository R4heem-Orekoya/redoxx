"use client"

import client, { urlFor } from "@/lib/sanity"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { Project } from "@/types/sanity"
import { Separator } from "./ui/separator"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import ProjectSkeleton from "./skeleton-loaders/ProjectSkeleton"
import Error from "./Error"

interface ProjectReelProps{
    
}

const ProjectReel = ({ } : ProjectReelProps) => {
   const { data: projects, isLoading, isError } = useQuery({
      queryKey: ["projects"],
      queryFn: async () => {
         const res = await client.fetch(`*[_type == 'projects']| order(_createdAt asc)`) as Project[]
         return res
      }
   })
   
   if(isLoading) return <ProjectSkeleton />
   
   if(isError) return <Error error="Error fetching projects 🥲!!"/>
   
   return (
      <ul className="grid md:grid-cols-2 gap-6 mt-8">
         {projects && projects.map((project: Project) => (
            <li key={project._id} className="col-span-1">
               <Link href={`/project/${project.slug.current}`} className="relative block aspect-video rounded-md bg-secondary overflow-hidden px-6 max-sm:px-4">
                  <img src={urlFor(project.thumbnail.asset._ref)} alt={project.title} className="w-full h-full object-cover translate-y-8 max-sm:translate-y-6 rounded-md hover:translate-y-6 max-sm:hover:translate-y-4 hover:rotate-2 hover:scale-[1.03] duration-300"/>
               </Link>
               <div className="flex items-center justify-between gap-4 pt-3 pb-1">
                  <h3 className="font-medium">{project.title}</h3>
                  {/* <Separator className="flex-1"/> */}
                  <ul className="flex items-center gap-3">
                     <li>
                        <a href={project.githubLink}>
                           <Github className="w-4 h-4 hover:opacity-70 duration-300" strokeWidth={1.5}/>
                        </a>
                     </li>
                     <li>
                        <a href={project.siteLink}>
                           <ExternalLink className="w-4 h-4 hover:opacity-70 duration-300" strokeWidth={1.5}/>
                        </a>
                     </li>
                  </ul>
               </div>
               <p className="text-muted-foreground text-xs sm:text-sm">
                  {project.techStack.map((stack, i) => (
                     <span key={i}>
                        {stack}
                        {i !== project.techStack.length - 1 && " - "} 
                     </span>
                  ))}
               </p>
            </li>
         ))}
      </ul>
   )
}

export default ProjectReel
