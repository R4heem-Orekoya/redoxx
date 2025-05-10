import { components } from "@/components/portable-text"
import { formatDate, resolveOpenGraphImage, timeToRead } from "@/lib/utils"
import { sanityFetch } from "@/sanity/lib/live"
import { blogQuery } from "@/sanity/lib/queries"
import { Metadata, ResolvingMetadata } from "next"
import { PortableText, toPlainText } from "next-sanity"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params
  const { data: blog } = await sanityFetch({
    query: blogQuery,
    params,
    tags: ["blog"]
  })

  if (!blog || !blog._id) {
    return {
      title: "Raheem's Blog Post",
      description: "This is a blog post written by Raheem Orekoya."
    }
  }

  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(blog.thumbnail!);

  return {
    title: blog.title,
    description: blog.excerpt,
    authors: [{ name: "Orekoya Babatunde Raheem" }, { name: "Redoxx" }],
    keywords: [...blog.tags!],
    openGraph: {
      title: blog.title!,
      description: blog.excerpt!,
      siteName: "redoxx",
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title!,
      description: blog.excerpt!,
      images: ogImage ? [ogImage, ...previousImages] : previousImages
    }
  } satisfies Metadata
}

export default async function Page({ params }: Props) {
  const slug = await params
  const { data: blog } = await sanityFetch({
    query: blogQuery,
    params: slug,
  })

  if (!blog || !blog._id) return notFound()

  return (
    <main>
      <section className="py-12">
        <h2 className="pb-2 text-2xl md:text-3xl font-medium">{blog.title}</h2>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{formatDate(blog.datePublished!)}</span> .
          <span>{timeToRead(toPlainText(blog.content!))} min read</span>
        </p>

        <div className="py-6 dark:prose-invert">
          <PortableText
            value={blog.content!}
            components={components}
          />
        </div>
      </section>
    </main>
  )
}