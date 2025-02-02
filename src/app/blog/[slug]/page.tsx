import { components } from "@/components/syntax-highlighting/portabletext-component"
import { sanityFetch } from "@/lib/cms/live"
import { blogQuery } from "@/lib/cms/queries"
import { resolveOpenGraphImage } from "@/lib/cms/utils"
import { formatDate } from "@/lib/utils"
import { Blog } from "@/types/sanity"
import { ArrowLeft } from "lucide-react"
import { Metadata, ResolvingMetadata } from "next"
import { PortableText } from "next-sanity"
import Link from "next/link"
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
         <Link href="/" className="w-fit flex items-center gap-1 hover:underline group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 duration-300" />
            Go back
         </Link>

         <section className="pt-8">
            <h2 className="pb-1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">{data.title}</h2>
            <p className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
               <span>{formatDate(data.datePublished)}</span> .
               <span>{" " + data.timeToRead} min read</span>
            </p>

            <div className="py-6 prose prose-zinc prose-img:aspect-video prose-img:border prose-img:object-cover prose-lg prose-p:font-light prose-ul:font-light dark:prose-invert">
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
