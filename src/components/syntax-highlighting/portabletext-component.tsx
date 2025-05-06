import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/cms/utils";
import CodeBlock from "./code-block";

export const components: PortableTextComponents = {
   types: {
      code: ({ value }) => (
         <div className="mt-4">
            <CodeBlock value={value} />
         </div>
      ),
      image: ({ value }) => {
         const imageUrl = urlForImage(value)?.auto("format").url();
         if (!imageUrl) return null;

         return (
            <div className="relative w-full aspect-video overflow-hidden rounded-md mt-4">
               <Image
                  src={imageUrl}
                  alt={value.alt || "Blog image"}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 800px, 100vw"
                  priority
               />
            </div>
         );
      },
   },

   block: {
      normal: ({ children }) => (
         <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
      ),
      h1: ({ children }) => (
         <h1 className="text-2xl font-semibold tracking-tight scroll-m-20">{children}</h1>
      ),
      h2: ({ children }) => (
         <h2 className="text-xl font-medium tracking-tight scroll-m-20 mt-10 border-b pb-3">{children}</h2>
      ),
      h3: ({ children }) => (
         <h3 className="text-lg font-medium tracking-tight scroll-m-20 mt-8">{children}</h3>
      ),
      h4: ({ children }) => (
         <h4 className="text-base font-medium tracking-tight scroll-m-20 mt-8">{children}</h4>
      ),
      blockquote: ({ children }) => (
         <div className="mt-6 p-2 border rounded-lg flex items-center gap-4">
            <div className="w-1 py-4 bg-primary rounded h-full"/>
            <blockquote className="my-0 italic text-muted-foreground flex-1">
               {children}
            </blockquote>  
         </div>
      ),
   },

   list: {
      bullet: ({ children }) => (
         <ul className="my-6 ml-6 list-disc  [&>li]:mt-3">{children}</ul>
      ),
      number: ({ children }) => (
         <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
      ),
   },

   marks: {
      link: ({ children, value }) => {
         const href = value?.href || "#";
         const isExternal = href.startsWith("http");

         return (
            <Link
               href={href}
               target={isExternal ? "_blank" : undefined}
               rel={isExternal ? "noopener noreferrer" : undefined}
               className="underline underline-offset-4 text-primary hover:opacity-80"
            >
               {children}
            </Link>
         );
      },
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => <code className="px-2 py-1 rounded border bg-secondary before:hidden after:hidden">{children}</code>
   },
};
