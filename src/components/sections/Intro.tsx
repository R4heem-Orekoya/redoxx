import { ArrowDownToLine } from "lucide-react"
import { Button } from "../ui/button"
import { Socials } from "@/lib/constants"

const Intro = () => {
   return (
      <section className="py-8 grid gap-8 items-center max-w-xl">
         <div>
            <h1 className="title">Raheem Orekoya</h1>
            <p className="text-muted-foreground text-sm">
               Fullstack developer
            </p>
            <p className="text-muted-foreground text-sm">Lagos, Nigeria</p>
         </div>
         <div>
            <h2 className="title mb-4">From Visual Concepts to Functional Code</h2>
            <p className="text-muted-foreground text-sm">
               Specializing in frontend development with <b className="text-primary">React Js</b> and <b className="text-primary">Next.js</b>. 
               I have a strong passion for creating dynamic and responsive web 
               applications. In addition to my frontend skills, I have experience 
               in backend development using <b className="text-primary">Node.js</b>, <b className="text-primary">JavaScript</b>, and <b className="text-primary">Rust</b>.
            </p>
            <p className="text-muted-foreground text-sm mt-3">
               Alongside my development skills, I also have experience in UI 
               design using Figma, which allows me to create visually appealing 
               and user-friendly interfaces.
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
                     <a href={social.link} className="size-8 sm:size-9 grid place-content-center">
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
