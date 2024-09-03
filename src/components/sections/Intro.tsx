import { ArrowDownToLine } from "lucide-react"
import { Button } from "../ui/button"
import { Socials } from "@/lib/constants"

const Intro = () => {
   return (
      <section className="py-8 grid gap-8 items-center max-w-xl">
         <div>
            <h1 className="text-lg font-semibold">Raheem Orekoya</h1>
            <p className="text-muted-foreground text-sm">
               Fullstack developer
            </p>
            <p className="text-muted-foreground text-sm">Lagos, Nigeria</p>
         </div>
         <div>
            <h2 className="text-lg font-semibold mb-3">Crafting Digital Experiences: From Idea to Implementation</h2>
            <p className="text-muted-foreground">
               I specialize in frontend development using <span className="text-primary font-semibold">React</span> and <span className="text-primary font-semibold">Next.js</span>, 
               with a strong passion for crafting dynamic and responsive web 
               applications. Additionally, I have experience in backend development 
               using <span className="text-primary font-semibold">Node.js</span> and <span className="text-primary font-semibold">Express js</span>. 
            </p>
            <p className="text-muted-foreground mt-3">
               To complement my technical skills, I also have little experience in 
               UI design using <span className="text-primary font-semibold">Figma</span>,
               allowing me to create visually appealing and user-friendly interfaces.
            </p>
         </div>
         <div className="flex flex-wrap gap-4 sm:gap-8">
            <Button size="sm" className="max-sm:h-8 rounded-full px-4 flex items-center gap-1 font-semibold">
               Resume
               <ArrowDownToLine className="w-3 h-3" strokeWidth={1.6}/>
            </Button>
            <ul className="flex flex-wrap gap-2">
               {Socials.map((social) => (
                  <li 
                     key={social.title} 
                     className="size-8 sm:size-9 overflow-hidden bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80"
                  >
                     <a aria-label={`link to my ${social.title} account`} href={social.link} className="size-8 sm:size-9 grid place-content-center">
                        {social.icon}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default Intro
