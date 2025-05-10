import { socials } from "@/lib/constants";
import { Button, buttonVariants } from "@/components/ui/button"
import { SiReaddotcv } from "react-icons/si"
import Link from "next/link"

export default function Intro() {
   return (
      <section className="py-8 items-center">
         <h1 className="text-[22px] font-medium tracking-tight mb-4">Hi, I&apos;m Raheem</h1>
         <p className="text-muted-foreground mb-6">
            I&apos;m a Full Stack Developer. I design and build products that feel simple,
            purposeful, and thoughtfully crafted.
            I focus on clear interactions, clean
            architecture, and small details that often go
            unnoticed — but add up to a better experience.
         </p>
         <p className="text-muted-foreground">
            I like making things that work well and feel good to use.
            I usually build everything in code, and I&apos;ve worked
            on a few freelance and personal projects along the way.
         </p>
         <div className="flex items-center flex-wrap gap-4 sm:gap-6 mt-8">
            <Button className="rounded-3xl flex items-center gap-1 font-semibold cursor-pointer">
               Resume
               <SiReaddotcv className="w-3 h-3" strokeWidth={0.5} />
            </Button>
            <ul className="flex flex-wrap gap-2">
               {socials.map((social) => (
                  <li key={social.title}>
                     <Link
                        aria-label={`link to my ${social.title} account`}
                        href={social.link}
                        className={buttonVariants({ className: "rounded-full border", variant: "outline", size: "icon" })}
                     >
                        {social.icon}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}
