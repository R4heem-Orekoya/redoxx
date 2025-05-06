import { components } from "@/components/syntax-highlighting/portabletext-component"
import { sanityFetch } from "@/lib/cms/live"
import { blogQuery } from "@/lib/cms/queries"
import { resolveOpenGraphImage } from "@/lib/cms/utils"
import { formatDate } from "@/lib/utils"
import { Blog } from "@/types/sanity"
import { Metadata, ResolvingMetadata } from "next"
import { PortableText } from "next-sanity"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

interface Props {
   params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const params = await props.params
   const { data } = await sanityFetch({
      query: blogQuery,
      params,
   })

   const blog: Blog = data

   if (!blog._id) {
      return {
         title: "Raheem's Blog Post",
         description: "This is a blog post written by Raheem Orekoya."
      }
   }

   const previousImages = (await parent).openGraph?.images || [];
   const ogImage = resolveOpenGraphImage(blog.thumbnail);

   return {
      title: blog.title,
      description: blog.excerpt,
      authors: [{ name: "Orekoya Babatunde Raheem" }, { name: "Redoxx" }],
      openGraph: {
         title: blog.title,
         description: blog.excerpt,
         siteName: "redoxx",
         images: ogImage ? [ogImage, ...previousImages] : previousImages,
      }
   } satisfies Metadata
}

const Page = async ({ params }: Props) => {
   const slug = await params
   const { data } = await sanityFetch({
      query: blogQuery,
      params: slug,
   })

   const project: Blog = data

   if (!project._id) return notFound()

   return (
      <main>
         <section className="py-12">
            <h2 className="pb-2 text-2xl md:text-3xl font-medium">{data.title}</h2>
            <p className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
               <span>{formatDate(data.datePublished)}</span> .
               <span>{" " + data.timeToRead} min read</span>
            </p>

            <div className="py-6 dark:prose-invert">
               <PortableText
                  value={data.content}
                  components={components}
               />
            </div>
         </section>
      </main>
   )
}

export default Page
