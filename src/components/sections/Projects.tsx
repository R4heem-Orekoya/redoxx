import SectionHeading from "../SectionHeading"
import ProjectReel from "../ProjectReel"

const Projects = () => {
   
   return (
      <section className="py-12 sm:py-16">
         <SectionHeading title="Projects" reversed={true}/>
         <ProjectReel />
      </section>
   )
}

export default Projects
