import Image from "next/image";
import Link from "next/link";
import CodeBlock from "./code-block";
import { TableValueProps } from "@/types";
import { urlFor } from "@/sanity/lib/image";
import Table from "./table";
import VideoPlayer from "./yt-video";
import { PortableTextComponents } from "next-sanity";

export const components: PortableTextComponents = {
   types: {
      code: ({ value }) => (
         <div className="mt-4">
            <CodeBlock value={value} />
         </div>
      ),
      image: ({ value }) => {
         const imageUrl = urlFor(value)?.auto("format").url();
         if (!imageUrl) return null;

         return (
            <figure>
               <div className="relative w-full aspect-video overflow-hidden rounded-md mt-6">
                  <Image
                     src={imageUrl}
                     alt={value.alt || "Blog image"}
                     fill
                     className="object-cover"
                     sizes="(min-width: 768px) 800px, 100vw"
                     priority
                  />
               </div>
               {value.caption && (
                  <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                     {value.caption}
                  </figcaption>
               )}
            </figure>
         )
      },
      customTable: ({ value }: { value: TableValueProps }) => (
         <Table value={value} />
      ),
      youtube: ({ value }: { value: { url: string } }) => {
         return <VideoPlayer url={value.url} />
      },
   },

   block: {
      normal: ({ children }) => (
         <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
      ),
      h1: ({ children }) => (
         <h1 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight text-balance">{children}</h1>
      ),
      h2: ({ children }) => (
         <h2 className="scroll-m-20 border-b mt-8 pb-3 text-2xl font-medium tracking-tight first:mt-0">{children}</h2>
      ),
      h3: ({ children }) => (
         <h3 className="scroll-m-20 text-xl font-medium tracking-tight">{children}</h3>
      ),
      h4: ({ children }) => (
         <h4 className="scroll-m-20 text-lg font-medium tracking-tight">{children}</h4>
      ),
      blockquote: ({ children }) => (
         <div className="mt-6 p-2 border rounded-lg flex items-center gap-4">
            <blockquote className="my-0 pl-3 border-l-[5px] border-foreground rounded text-muted-foreground flex-1">
               {children}
            </blockquote>
         </div>
      ),
   },

   list: {
      bullet: ({ children }) => (
         <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
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
               className="underline underline-offset-2 decoration-purple-600 hover:opacity-80"
            >
               {children}
            </Link>
         );
      },
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => <code className="px-2 py-1 rounded border bg-secondary before:hidden after:hidden">{children}</code>
   },
}