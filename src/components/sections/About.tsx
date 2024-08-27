import { ArrowRight } from "lucide-react"
import SectionHeading from "../SectionHeading"
import { Socials, Tools } from "@/lib/constants"
import { Badge } from "../ui/badge"

const About = () => {
   return (
      <section className="py-12 sm:py-16">
         <SectionHeading title="About"/>
         <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-12">
            <div className="col-span-1 md:col-span-4">
               <div className="grid gap-4 text-white">
                  <p>
                     Hey! I&apos;m Raheem, a full-stack developer from Nigeria 
                     with a passion for coding and mathematics. I specialize 
                     in backend development using Node.js and Express, but I&apos;m 
                     also proficient in frontend technologies like React and 
                     Next.js. This allows me to tackle projects from start to 
                     finish with a comprehensive understanding of both client-side 
                     and server-side development.
                  </p>
                  <p>
                     I&apos;ve honed my skills through continuous learning, coding 
                     projects, and tackling complex mathematical problems. 
                     I&apos;m currently seeking new opportunities to leverage my 
                     technical expertise and contribute to innovative projects.
                  </p>
                  <p>
                     If you&apos;re looking for a skilled developer with a strong foundation in 
                     both backend and frontend development and a passion for problem-solving, 
                     let&apos;s connect!
                  </p>
               </div>
               <div className="flex items-center gap-6 mt-8">
                  <p className="flex gap-1 items-center text-muted-foreground">
                     <span>My links</span>
                     <span><ArrowRight className="w-4 h-4"/></span>
                  </p>
                  <ul className="flex items-center gap-4">
                     {Socials.map((social) => (
                        <li key={social.title}><a href={social.link}>{social.icon}</a></li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="col-span-1 md:col-span-2 grid gap-8">
               {Tools.map((tool) => (
                  <div key={tool.title}>
                     <h2 className="flex items-center gap-2">
                        <div className="p-1 bg-white w-fit grid place-items-center rounded-sm">
                           {tool.icon}
                        </div>
                        <span className="font-medium">{tool.title}</span>
                     </h2>
                     
                     <div className="flex flex-wrap gap-2 mt-4">
                        {tool.tools.map((t, i) => (
                           <Badge key={i} variant="secondary" className="rounded-sm py-1 px-2">{t}</Badge>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default About
