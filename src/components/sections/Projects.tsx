import SectionHeading from "../SectionHeading"
import ProjectReel from "../ProjectReel"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

const Projects = () => {
   return (
      <section className="py-12 sm:py-16">
         <SectionHeading title="Projects" reversed={true}/>
         <ProjectReel />
         <Link href="/project" className="mt-8 w-fit flex items-center group hover:underline underline-offset-2 decoration-muted-foreground">
            see all
            <ArrowUp className="w-4 h-4 rotate-45 group-hover:rotate-90 duration-300" strokeWidth={1.6}/>
         </Link>
      </section>
   )
}

export default Projects
