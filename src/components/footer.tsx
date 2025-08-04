import { socials } from "@/lib/constants";

export default function Footer() {
   return (
      <footer className="mt-16 flex justify-between flex-wrap items-center gap-4 container max-w-[692px] px-4 mx-auto">
         <p className="text-sm text-muted-foreground">Raheem Orekoya</p>

         <ul className="flex gap-4 items-center">
            {socials.map((social, i) => (
               <li key={i} className="hover:opacity-85 cursor-pointer">
                  <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={`link to my ${social.title} account`}>{social.icon}</a>
               </li>
            ))}
         </ul>
      </footer>
   )
}
