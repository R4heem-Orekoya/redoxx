import { Github, Instagram, Laugh, Terminal, Twitter } from "lucide-react";
import { PortableTextComponents } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { urlFor } from "./sanity";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const Tools = [
  {
    title: "Use at work",
    icon: <Terminal className="w-4 h-4 text-zinc-950"/>,
    tools: ["HTML", "CSS", "Tailwind", "Javascript", "Typescript", "Framer motion", "ShadCn", "React", "Zustand", "Next js", "Sanity", "NodeJS", "Express", "Postgres", "GitHub", "Vercel", "Railway", "Render"]
  },
  {
    title: "Use for fun",
    icon: <Laugh className="w-4 h-4 text-zinc-950" strokeWidth={1.5}/>,
    tools: ["Figma", "Hono", "MongoDB", "Rust"]
  }
]

export const Socials = [
  {
    title: "Twitter",
    link: "x.com/Redoxx_code",
    icon: <Twitter className="w-5 h-5 hover:opacity-70 duration-300"/>
  },
  {
    title: "Github",
    link: "https://github.com/R4heem-Orekoya",
    icon: <Github className="w-5 h-5 hover:opacity-70 duration-300"/>
  },
  {
    title: "Instagram",
    link: "instagram.com/redoxx_code",
    icon: <Instagram className="w-5 h-5 hover:opacity-70 duration-300"/>
  }
]

export const components: PortableTextComponents = {
   types: { 
      code: ({ value }) => 
        <ScrollArea className="w-full rounded-md">
          <SyntaxHighlighter 
              language={value.language || 'js'} 
              style={vscDarkPlus} 
              customStyle={{ 
                padding: "20px" ,
                borderRadius: "5px", 
                marginBlock: "20px" 
              }}
              wrapLines
            >
              {value.code}
          </SyntaxHighlighter>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>,
      image: ({ value }) => <img src={urlFor(value.asset._ref)} className="w-full aspect-video object-cover rounded-md"/>
   }
}