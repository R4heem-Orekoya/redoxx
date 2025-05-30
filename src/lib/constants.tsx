import { SiMaildotru, SiGithub, SiX, SiLinkedin } from "react-icons/si"

export const socials = [
   {
      title: "Mail",
      link: `mailto:${process.env.NEXT_PUBLIC_EMAIL!}`,
      icon: <SiMaildotru className="w-4 h-4" strokeWidth={0.2} />
   },
   {
      title: "Github",
      link: process.env.NEXT_PUBLIC_GITHUB_URL!,
      icon: <SiGithub className="w-4 h-4" strokeWidth={0.2} />
   },
   {
      title: "Twitter",
      link: process.env.NEXT_PUBLIC_TWITTER_URL!,
      icon: <SiX className="w-4 h-4" strokeWidth={0.1} />
   },
   {
      title: "LinkedIn",
      link: process.env.NEXT_PUBLIC_LINKEDIN_URL!,
      icon: <SiLinkedin className="w-4 h-4" strokeWidth={0.1} />
   }
]