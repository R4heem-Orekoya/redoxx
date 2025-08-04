import { Refractor, registerLanguage } from "react-refractor";
import js from "refractor/javascript";
import ts from "refractor/typescript";
import rust from "refractor/rust"
import tsx from "refractor/tsx";
import jsx from "refractor/jsx";
import sql from "refractor/sql";
import bash from "refractor/bash";
import markdown from "refractor/markdown";
import css from "refractor/css";
import scss from "refractor/scss";
import python from "refractor/python";
import html from "refractor/markup";
import yaml from "refractor/yaml";
import graphql from "refractor/graphql";
import json from "refractor/json";
import java from "refractor/java";
import go from "refractor/go"
import c from "refractor/c"
import cpp from "refractor/cpp"
import Clipboard from "./clip-board";

registerLanguage(js);
registerLanguage(c);
registerLanguage(cpp);
registerLanguage(go)
registerLanguage(rust)
registerLanguage(ts);
registerLanguage(jsx);
registerLanguage(tsx);
registerLanguage(sql);
registerLanguage(bash);
registerLanguage(markdown);
registerLanguage(css);
registerLanguage(scss);
registerLanguage(python);
registerLanguage(html);
registerLanguage(yaml);
registerLanguage(graphql);
registerLanguage(json);
registerLanguage(java);

type codeTypes = {
   value: {
      code: string;
      language: string;
      filename?: string | null;
   };
};

export default function CodeBlock({ value }: codeTypes) {
   const lang = value.language === "golang" ? "go" : value.language
   return (
      <div className="my-6">
         <div className="flex items-center justify-between border bg-secondary text-secondary-foreground rounded-t-lg px-4 py-3 translate-y-2">
            {value.filename && <p className="text-sm font-jetbrain">{value.filename}</p>}
            <Clipboard content={value.code} />
         </div>
         <Refractor
            language={lang ?? "jsx"}
            value={value.code}
            className="font-jetbrain text-sm p-4 bg-background border-x border-b rounded-b-lg tracking-tight"
         />
      </div>
   )
}