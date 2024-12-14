import { urlForImage } from "@/lib/cms/utils";
import Image from "next/image";
import CodeBlock from "./code";
import { PortableTextComponents } from "next-sanity";

export const components: PortableTextComponents = {
   types: {
      code: ({ value }) => <CodeBlock code={value.code} language={value.language}/>,
     image: ({ value }) => <div className="relative rounded-md w-full aspect-video overflow-hidden"><Image src={urlForImage(value)?.auto("format").url() as string} fill alt="a blog image" className="object-cover" /></div>
   }
}