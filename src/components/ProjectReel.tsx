import Link from "next/link"
import { Project } from "@/types/sanity"
import { ExternalLink } from "lucide-react"
import { sanityFetch } from "@/lib/cms/live"
import { allProjectsQuery } from "@/lib/cms/queries"
import { SiGithub } from "react-icons/si"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Badge } from "./ui/badge"

const ProjectReel = async () => {
   const { data } = await sanityFetch({
      query: allProjectsQuery
   })
   const projects: Project[] = data
   
   return (
      <ul className="grid md:grid-cols-2 gap-3">
         {projects && projects.map((project: Project) => (
            <li key={project._id} className="col-span-1 px-3 py-4 border rounded-lg">
               <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                     <img src="./logo-DT6jzyIC.png" alt="" className="size-6 border rounded"/>
                     <Link href={project.siteLink} className="flex items-center gap-1 group duration-300">
                        <h3 className="text-sm group-hover:text-muted-foreground hover:underline underline-offset-4 decoration-muted-foreground decoration-dotted">{project.title}</h3>
                        <ExternalLink className="w-3 h-3 group-hover:text-muted-foreground" strokeWidth={1.6}/>
                     </Link>
                  </div>
                  
                  <Link href={project.githubLink}>
                     <SiGithub className="w-4 h-4 hover:text-muted-foreground duration-300" strokeWidth={0.2} />
                  </Link>
               </div>
               <p className="my-4 text-[14px] text-muted-foreground line-clamp-2">
                  {project.excerpt}
               </p>
               <ScrollArea className="w-full whitespace-nowrap pb-1.5">
                  <div className="flex gap-2 items-center ">
                     {project.techStack.map((stack) => (
                        <Badge key={stack} variant="outline" className="px-2 gap-1.5">
                           {/* <React /> */}
                           {stack}
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

export default ProjectReel
