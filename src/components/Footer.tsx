import { Socials } from "@/lib/constants"

const Footer = () => {
   return (
      <footer className="pt-12 flex justify-between flex-wrap items-center gap-4 container max-w-3xl mx-auto">
         <p className="text-sm text-muted-foreground font-medium">Raheem Orekoya</p>
         
         <ul className="flex gap-4 items-center">
            {Socials.map((social, i) => (
               <li key={i} className="hover:opacity-85">
                  <a href={social.link} aria-label={`link to my ${social.title} account`}>{social.icon}</a>
               </li>
            ))}
         </ul>
      </footer>
   )
}

export default Footer
