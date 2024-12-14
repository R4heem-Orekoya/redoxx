import { Github, Linkedin, Send, Twitter } from "lucide-react";

export const Socials = [
  {
    title: "Mail",
    link: `mailto:${process.env.NEXT_PUBLIC_EMAIL!}`,
    icon: <Send className="w-4 h-4" strokeWidth={1.7} />
  },
  {
    title: "Github",
    link: process.env.NEXT_PUBLIC_GITHUB_URL!,
    icon: <Github className="w-4 h-4" strokeWidth={1.7} />
  },
  {
    title: "LinkedIn",
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL!,
    icon: <Linkedin className="w-4 h-4" strokeWidth={1.7} />
  },
  {
    title: "Twitter",
    link: process.env.NEXT_PUBLIC_TWITTER_URL!,
    icon: <Twitter className="w-4 h-4" strokeWidth={1.7} />
  }
]