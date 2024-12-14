import { sanityFetch } from "@/lib/cms/live";
import { projectQuery } from "@/lib/cms/queries";
import { resolveOpenGraphImage, urlForImage } from "@/lib/cms/utils";
import { Project } from "@/types/sanity";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { components } from "@/components/syntax-highlighting/portabletext-component";

export const dynamic = "force-dynamic"

interface Props {
   params: Promise<{ slug: string }>
}


export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const params = await props.params
   const { data } = await sanityFetch({
      query: projectQuery,
      params,
   })

   const project: Project = data

   if (!project._id) {
      return {
         title: "Redoxx Project",
         description: "This is a project built by redoxx."
      }
   }

   const previousImages = (await parent).openGraph?.images || [];
   const ogImage = resolveOpenGraphImage(project?.thumbnail);

   return {
      title: `Redoxx project | ${project.title}`,
      description: project.excerpt,
      authors: [{ name: "Orekoya Babatunde" }, { name: "Redoxx" }],
      openGraph: {
         title: project.title,
         description: project.excerpt,
         siteName: "redoxx",
         images: ogImage ? [ogImage, ...previousImages] : previousImages,
      }
   } satisfies Metadata
}

const Page = async ({ params }: Props) => {
   const slug = await params
   const { data } = await sanityFetch({
      query: projectQuery,
      params: slug,
   })

   const project: Project = data
   
   if (!project._id) return notFound()

   return (
      <main>
         <Link href="/" className="w-fit flex items-center gap-1 hover:underline group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 duration-300" />
            Go back
         </Link>

         <div className="relative w-full aspect-[16/9] border rounded-lg overflow-hidden mt-8">
            <Image
               src={urlForImage(project.thumbnail)?.auto("format").url() as string}
               fill objectFit="contain"
               alt={data.title + "thumbnail image"}
            />
         </div>

         <section>
            <h2 className="pt-8 pb-1 text-xl md:text-2xl lg:text-3xl font-semibold">{data.title}</h2>
            <p className="text-muted-foreground text-sm">
               {project.techStack.map((stack, i) => (
                  <span key={i}>
                     {stack}
                     {(i !== data.techStack.length - 1) && " - "}
                  </span>
               ))}
            </p>

            <div className="py-6 prose prose-violet prose-img:aspect-video prose-img:border prose-img:object-cover sm:prose-lg prose-p:font-light prose-ul:font-light dark:prose-invert">
               <PortableText
                  value={data.description}
                  components={components}
               />
            </div>

            <h4 className="mt-8 text-xl font-semibold">Project Links</h4>
            <div className="flex gap-4 mt-4">
               <a aria-label={`link to ${data.title} prject github repo`} href={data.githubLink} className="hover:opacity-70 flex items-center gap-2 text-sm duration-300">
                  <Github className="w-4 h-4" strokeWidth={1.5} />
                  Github
               </a>
               <a aria-label={`link to ${data.title} prject live demo`} href={data.siteLink} className="hover:opacity-70 flex items-center gap-2 text-sm duration-300">
                  <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                  Live Preview
               </a>
            </div>
         </section>
      </main>
   )
}

export default Page
