import { socials } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { SiReaddotcv } from "react-icons/si";
import Link from "next/link";

export default function Intro() {
   return (
      <section className="py-8 items-center">
         <h1 className="text-[22px] font-medium tracking-tight mb-4">
            Hi, I&apos;m Raheem
         </h1>
         <p className="text-muted-foreground mb-6">
            I&apos;m a frontend engineer who designs and builds interfaces that
            are simple, purposeful, and a joy to use. I care deeply about the
            small details, those subtle interactions that make an experience feel
            intuitive and thoughtfully crafted.
         </p>
         <p className="text-muted-foreground">
            I&apos;ve worked on a range of freelance and personal projects, all built
            from the ground up in code. My goal is always the same: create
            digital experiences that not only work beautifully but feel good to
            use.
         </p>
         <div className="flex items-center flex-wrap gap-4 sm:gap-6 mt-8">
            <Link
               href={process.env.NEXT_PUBLIC_RESUME_LINK!}
               target="_blank"
               className={buttonVariants({
                  className:
                     "rounded-3xl flex items-center gap-1 font-semibold cursor-pointer",
               })}
            >
               Resume
               <SiReaddotcv className="w-3 h-3" strokeWidth={0.5} />
            </Link>
            <ul className="flex flex-wrap gap-2">
               {socials.map((social) => (
                  <li key={social.title}>
                     <Link
                        aria-label={`link to my ${social.title} account`}
                        href={social.link}
                        target="_blank"
                        className={buttonVariants({
                           className: "rounded-full",
                           variant: "secondary",
                           size: "icon",
                        })}
                     >
                        {social.icon}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}
