import { components } from "@/components/portable-text";
import { formatDate, timeToRead } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { blogQuery, blogsQuery } from "@/sanity/lib/queries";
import { CalendarDays, ClockFading } from "lucide-react";
import { Metadata } from "next";
import { PortableText, toPlainText } from "next-sanity";
import { notFound } from "next/navigation";

interface Props {
   params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
   const data = await client.fetch(blogsQuery);

   return data.map((post) => post.slug as unknown as string);
}

export async function generateMetadata(
   props: Props,

): Promise<Metadata> {
   const params = await props.params;
   const { data: blog } = await sanityFetch({
      query: blogQuery,
      params,
      tags: ["blog"],
   });

   if (!blog || !blog._id) {
      return {
         title: "Raheem's Blog Post",
         description: "This is a blog post written by Raheem Orekoya.",
      };
   }
   
   return {
      title: blog.title,
      description: blog.excerpt,
      authors: [{ name: "Orekoya Babatunde Raheem" }, { name: "Redoxx" }],
      keywords: [...blog.tags!],
   } satisfies Metadata;
}

export default async function Page({ params }: Props) {
   const slug = await params;
   const { data: blog } = await sanityFetch({
      query: blogQuery,
      params: slug,
   });

   if (!blog || !blog._id) return notFound();

   return (
      <main>
         <section className="py-12">
            <h1 className="pb-2 text-xl md:text-2xl font-medium">
               {blog.title}
            </h1>
            <div className="flex items-center justify-between gap-2  mt-4 text-sm">
               <p className="flex items-center gap-1">
                  <span>
                     <ClockFading className="size-4" />
                  </span>
                  <span>{timeToRead(toPlainText(blog.content!))} min read</span>
               </p>
               <p className="flex items-center gap-1">
                  <span>
                     <CalendarDays className="size-4" />
                  </span>
                  <span>{formatDate(blog.datePublished!)}</span>
               </p>
            </div>

            <div className="py-6">
               <PortableText value={blog.content!} components={components} />
            </div>
         </section>
      </main>
   );
}
