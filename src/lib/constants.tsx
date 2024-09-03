import { Github, Instagram, Send, Terminal, Twitter } from "lucide-react";
import { PortableTextComponents } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { urlFor } from "./sanity";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


export const Socials = [
  {
    title: "Mail",
    link: "mailto:raheemorekoya1@gmail.com",
    icon: <Send className="w-4 h-4" strokeWidth={1.7}/>
  },
  {
    title: "Github",
    link: "https://github.com/R4heem-Orekoya",
    icon: <Github className="w-4 h-4" strokeWidth={1.7}/>
  },
  {
    title: "Twitter",
    link: "https://x.com/Redoxx_code",
    icon: <Twitter className="w-4 h-4" strokeWidth={1.7}/>
  },
  {
    title: "Instagram",
    link: "https://instagram.com/redoxx_code",
    icon: <Instagram className="w-4 h-4" strokeWidth={1.7}/>
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
      image: ({ value }) => <img src={urlFor(value.asset).url()} className="w-full aspect-video object-cover rounded-md"/>
   }
}