import { components } from "@/components/portable-text"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { resolveOpenGraphImage } from "@/lib/utils"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { sanityFetch } from "@/sanity/lib/live"
import { projectQuery, projectsQuery } from "@/sanity/lib/queries"
import { ExternalLink } from "lucide-react"
import { Metadata, ResolvingMetadata } from "next"
import { PortableText } from "next-sanity"
import Image from "next/image"
import { notFound } from "next/navigation"
import { SiGithub } from "react-icons/si"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const data = await client.fetch(projectsQuery)

  return data.map(project => project.slug as unknown as string)
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params
  const { data: project } = await sanityFetch({
    query: projectQuery,
    params,
    tags: ["project"]
  })

  if (!project || !project._id) {
    return {
      title: "Raheem's Blog Post",
      description: "This is a blog post written by Raheem Orekoya."
    }
  }

  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(project.thumbnail!);

  return {
    title: project.title,
    description: project.excerpt,
    authors: [{ name: "Orekoya Babatunde Raheem" }, { name: "Redoxx" }],
    keywords: project.tags! && [...project.tags!],
    openGraph: {
      title: project.title!,
      description: project.excerpt!,
      siteName: "redoxx",
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title!,
      description: project.excerpt!,
      images: ogImage ? [ogImage, ...previousImages] : previousImages
    }
  } satisfies Metadata
}

export default async function Page({ params }: Props) {
  const slug = await params
  const { data: project } = await sanityFetch({
    query: projectQuery,
    params: slug,
  })

  if (!project || !project._id) return notFound()

  return (
    <>
      <main>
        <div className="relative w-full aspect-[16/9] border rounded-lg overflow-hidden mt-8">
          <Image
            src={urlFor(project.thumbnail!)?.auto("format").url() as string}
            fill objectFit="contain"
            alt={project.title + "thumbnail image"}
            placeholder="blur"
            blurDataURL={project.thumbnail?.asset?.metadata?.lqip as string}
          />
        </div>

        <section>
          <h1 className="pt-8 pb-4 text-xl md:text-2xl lg:text-3xl font-medium">{project.title}</h1>
          <ScrollArea className="pb-1.5">
            <div className="flex gap-2 items-center">
              {project.techStack?.map((stack) => (
                <Badge key={stack.name} variant="outline" className="gap-1.5 whitespace-nowrap">
                  <div className="size-4 grid place-items-center">
                    <img src={urlFor(stack.logo!).url()} className="object-contain rounded-xs" />
                  </div>
                  {stack.name}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="py-6 prose prose-violet prose-img:aspect-video prose-img:border prose-img:object-cover sm:prose-lg prose-p:font-light prose-ul:font-light dark:prose-invert">
            <PortableText
              value={project.description!}
              components={components}
            />
          </div>

          <h4 className="mt-8 text-xl font-semibold">Project Links</h4>
          <div className="flex gap-4 mt-4">
            <a aria-label={`link to ${project.title} prject github repo`} href={project.githubLink!} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 flex items-center gap-2 text-sm duration-300">
              <SiGithub className="w-4 h-4" strokeWidth={1} />
              Github
            </a>
            <a aria-label={`link to ${project.title} prject live demo`} href={project.siteLink!} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 flex items-center gap-2 text-sm duration-300">
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              Live Preview
            </a>
          </div>
        </section>
      </main>
    </>
  )
}