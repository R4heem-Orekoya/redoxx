import ProjectTemplate from "@/components/ProjectTemplate";
import client, { urlFor } from "@/lib/sanity";
import { Metadata } from "next";

interface Props {
   params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const slug = params.slug
   
   const project = await client.fetch(`*[_type == 'projects' && slug.current == '${slug}'] {title, excerpt, thumbnail}`)
   
   return {
      title: `Redoxx Project | ${project[0]?.title}`,
      description: project[0]?.excerpt,
      openGraph: {
         url: urlFor(project[0]?.thumbnail.asset._ref)
      }
   }
}

const Page = ({ params }: Props) => {
   
   return (
      <ProjectTemplate slug={params.slug}/>
   )
}

export default Page
