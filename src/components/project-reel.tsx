import { sanityFetch } from "@/sanity/lib/live"
import { projectsQuery } from "@/sanity/lib/queries"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { urlFor } from "@/sanity/lib/image"

export default async function ProjectReel({ perPage }: { perPage?: number}) {
   const { data } = await sanityFetch({
      query: projectsQuery,
      tags: ["project"]
   })
   
   const projects = perPage ? data.slice(0, perPage) : data

   return (
      <ul className="grid col-span-1 md:grid-cols-2 gap-3 max-w-full">
         {projects && projects.map((project) => (
            <li key={project._id} className="col-span-1 px-3 pt-4 pb-2.5 border rounded-lg overflow-hidden">
               <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                     <img src={urlFor(project.projectLogo!).url()} alt={`${project.title} logo image`} className="size-6 border rounded" />
                     <Link href={`/projects/${project.slug?.current}`} className="text-sm group-hover:text-muted-foreground hover:underline underline-offset-4 decoration-muted-foreground decoration-dotted">
                        {project.title}
                     </Link>
                  </div>

                  <div className="flex items-center gap-2">
                     <Link href={project.siteLink!}>
                        <ExternalLink className="w-4 h-4 hover:text-muted-foreground duration-300" strokeWidth={1.6} />
                     </Link>
                     <Link href={project.githubLink!}>
                        <SiGithub className="w-4 h-4 hover:text-muted-foreground duration-300" strokeWidth={0.2} />
                     </Link>
                  </div>
               </div>
               <p className="my-4 text-[14px] text-muted-foreground line-clamp-2">
                  {project.excerpt}
               </p>
               <ScrollArea className="pb-1.5">
                  <div className="flex gap-2 items-center">
                     {project.techStack?.map((stack) => (
                        <Badge key={stack.name} variant="outline" className="gap-1.5 whitespace-nowrap">
                           <div className="size-4 grid place-items-center">
                              <img src={urlFor(stack.logo!).url()} className="object-contain rounded-xs" /> 
                           </div>
                           {stack.name}
                        </Badge>
                     ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
               </ScrollArea>
            </li>
         ))}
      </ul>
   )
}
