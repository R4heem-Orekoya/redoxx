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
               <div className="relative w-full aspect-video overflow-hidden rounded-lg border-[0.5px] mt-6">
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
                  <figcaption className="mt-3 mb-6 text-center text-sm text-muted-foreground">
                     {value.caption}
                  </figcaption>
               )}
            </figure>
         );
      },
      customTable: ({ value }: { value: TableValueProps }) => (
         <Table value={value} />
      ),
      youtube: ({ value }: { value: { url: string } }) => {
         return <VideoPlayer url={value.url} />;
      },
   },

   block: {
      normal: ({ children }) => (
         <p className="leading-relaxed mt-4 text-muted-foreground">
            {children}
         </p>
      ),
      h1: ({ children }) => (
         <h1 className="scroll-m-20 text-center text-3xl md:text-4xl font-semibold tracking-tight text-balance mt-10 mb-4">
            {children}
         </h1>
      ),
      h2: ({ children }) => (
         <h2 className="scroll-m-20 border-b mt-10 pb-2 text-2xl font-medium tracking-tight first:mt-0">
            {children}
         </h2>
      ),
      h3: ({ children }) => (
         <h3 className="scroll-m-20 text-xl mt-8 font-medium tracking-tight">
            {children}
         </h3>
      ),
      h4: ({ children }) => (
         <h4 className="scroll-m-20 text-lg mt-6 font-medium tracking-tight">
            {children}
         </h4>
      ),
      blockquote: ({ children }) => (
         <blockquote className="mt-6 border-l-3 border-l-foreground pl-4 py-2 italic text-muted-foreground">
            {children}
         </blockquote>
      ),
   },

   list: {
      bullet: ({ children }) => (
         <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
            {children}
         </ul>
      ),
      number: ({ children }) => (
         <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground">
            {children}
         </ol>
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
      strong: ({ children }) => (
         <strong className="font-semibold text-foreground">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
         <code className="px-1.5 py-0.5 text-sm text-foreground font-jetbrain font-medium rounded-md border bg-secondary before:hidden after:hidden">
            {children}
         </code>
      ),
   },
};
