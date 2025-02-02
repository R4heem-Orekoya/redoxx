import { codeToHtml } from "shiki";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const CodeBlock = async ({ code, language }: { code: string, language: string }) => {
   const lang = language === "golang" ? "go" : language
   const html = await codeToHtml(code, {
      lang,
      theme: 'dark-plus', //one-dark-pro, tokyo-night, poimandres, tokyo-night
   });

   return (
      <ScrollArea className="w-full rounded-md">
         <div className="shiki-div overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />
         <ScrollBar orientation="horizontal" />
      </ScrollArea>
   )
}

export default CodeBlock
