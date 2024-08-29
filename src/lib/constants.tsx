import { Github, Instagram, Laugh, Terminal, Twitter } from "lucide-react";
import { PortableTextComponents } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { urlFor } from "./sanity";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


export const Socials = [
  {
    title: "Twitter",
    link: "x.com/Redoxx_code",
    icon: <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary duration-300" strokeWidth={1.6}/>
  },
  {
    title: "Github",
    link: "https://github.com/R4heem-Orekoya",
    icon: <Github className="w-5 h-5 text-muted-foreground hover:text-primary duration-300" strokeWidth={1.6}/>
  },
  {
    title: "Instagram",
    link: "instagram.com/redoxx_code",
    icon: <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary duration-300" strokeWidth={1.6}/>
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