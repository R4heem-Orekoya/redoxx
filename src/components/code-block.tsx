"use client"
import {
   CodeBlock as Code,
   CodeBlockCopyButton,
} from "@/components/ai-elements/code-block";

type codeTypes = {
   value: {
      code: string;
      language: string;
      filename?: string | null;
   };
};

export default function CodeBlock({ value }: codeTypes) {
   const lang = value.language === "golang" ? "go" : value.language;
   return (
      <div className="my-6">
         <Code code={value.code} language={lang} className="rounded-lg">
            <CodeBlockCopyButton
               onCopy={() => console.log("Copied code to clipboard")}
               onError={() => console.error("Failed to copy code to clipboard")}
            />
         </Code>
      </div>
   );
}
