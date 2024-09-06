import ProjectTemplate from "@/components/ProjectTemplate";
import client, { urlFor } from "@/lib/sanity";
import { Metadata } from "next";

interface Props {
   params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const slug = params.slug
   const project = await client.fetch(`*[_type == 'projects' && slug.current == '${slug}'] {title, excerpt, thumbnail}`)
   
   if(!project){
      return {
         title: "Redoxx Project",
         description: "This is a project built by redoxx."
      }
   }
   
   return {
      title: `Redoxx project | ${project[0].title}`,
      description: project[0].excerpt,
      openGraph: {
         title: project[0].title,
         description: project[0].excerpt,
         siteName: "redoxx",
         images: [
            {
                  url: urlFor(project[0].thumbnail).url(),
                  width: 1260,
                  height: 800
            } 
         ],
         url: `/project/${slug}`
      }
   }
}

const Page = ({ params }: Props) => {
   
   return (
      <ProjectTemplate slug={params.slug}/>
   )
}

export default Page
