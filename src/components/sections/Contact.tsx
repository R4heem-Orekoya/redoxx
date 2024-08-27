import { Mail } from "lucide-react"
import SectionHeading from "../SectionHeading"

const Contact = () => {
   return (
      <section className="py-12 sm:py-16">
         <div className="p-8 max-sm:p-6 bg-neutral-900 rounded-lg max-w-lg mx-auto">
            <SectionHeading title="Contact" className="mx-auto" hasLine={false} />
            <p className="text-center max-sm:text-sm mt-4 text-muted-foreground">
               Shoot me an email if you want to connect! 
               You can also find me on <span className="text-white font-medium hover:underline"><a href="#">Twitter</a></span> or <span className="text-white font-medium hover:underline"><a href="#">Instagram </a></span> 
               if that&apos;s more your speed.
            </p>
            <a href="mailto:raheemorekoya1@gmail.com" className="flex items-center justify-center gap-2 mt-4 opacity-70 hover:opacity-100 max-sm:text-sm">
               <Mail strokeWidth={1.5} className="flex-shrink-0 max-sm:w-4 max-sm:h-4"/>
               <span>raheemorekoya1@gmail.com</span>
            </a>
         </div>
      </section> 
   )
}

export default Contact
