import { Socials } from "@/lib/constants"

const Footer = () => {
   return (
      <footer className="w-[90%] max-w-3xl py-12 mx-auto flex max-sm:flex-col-reverse gap-6 items-center justify-between">
         <p className="text-xs text-muted-foreground">© 2024 Your Company. All rights reserved.</p>
         
         <ul className="flex items-center gap-4">
            {Socials.map((social) => (
               <li key={social.title}>
                  <a href={social.link}>{social.icon}</a>
               </li>
            ))}
         </ul>
      </footer>
   )
}

export default Footer
