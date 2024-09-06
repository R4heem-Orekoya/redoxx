import BlogTemplate from "@/components/BlogTemplate"
import client, { urlFor } from "@/lib/sanity"
import { Metadata } from "next"

interface Props {
   params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const slug = params.slug
   const blog = await client.fetch(`*[_type == 'blogs' && slug.current == '${slug}'] {title, excerpt, thumbnail}`)
   
   if(!blog){
      return {
         title: "Redoxx Blog Post",
         description: "This is a blog post written by redoxx."
      }
   }
   
   return {
      title: blog[0].title,
      description: blog[0].excerpt,
      openGraph: {
         title: blog[0].title,
         description: blog[0].excerpt,
         siteName: "redoxx",
         images: [
           {
               url: urlFor(blog[0].thumbnail).url(),
               width: 1260,
               height: 800
           } 
         ],
         url: `/blog/${slug}`
      }
   }
}

const Page = ({ params }: Props) => {
   return (
      <BlogTemplate slug={params.slug}/>
   )
}

export default Page
