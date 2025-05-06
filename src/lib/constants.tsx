import { SiMaildotru, SiGithub, SiX } from "react-icons/si"

export const Socials = [
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
  }
]