import { Socials } from "@/lib/constants"

const Footer = () => {
   return (
      <footer className="mt-16 sm:mt-24 flex justify-between flex-wrap items-center gap-4 container max-w-3xl mx-auto">
         <p className="text-sm text-muted-foreground font-medium">Raheem Orekoya</p>
         
         <ul className="flex gap-4 items-center">
            {Socials.map((social, i) => (
               <li key={i} className="hover:opacity-85">
                  <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={`link to my ${social.title} account`}>{social.icon}</a>
               </li>
            ))}
         </ul>
      </footer>
   )
}

export default Footer
