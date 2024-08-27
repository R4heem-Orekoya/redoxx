import BlogTemplate from "@/components/BlogTemplate"
import client, { urlFor } from "@/lib/sanity"
import { Metadata } from "next"

interface Props {
   params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const slug = params.slug
   
   const blog = await client.fetch(`*[_type == 'blogs' && slug.current == '${slug}'] {title, excerpt, thumbnail}`)
   
   return {
      title: `Redoxx Blog | ${blog[0]?.title}`,
      description: blog[0]?.excerpt,
      openGraph: {
         url: urlFor(blog[0]?.thumbnail.asset._ref)
      }
   }
}

const Page = ({ params }: Props) => {
   return (
      <BlogTemplate slug={params.slug}/>
   )
}

export default Page
