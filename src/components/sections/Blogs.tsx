import Link from "next/link"
import BlogReels from "../BlogReels"
import SectionHeading from "../SectionHeading"
import { ArrowUp } from "lucide-react"

const Blogs = () => {
   return (
      <section className="py-12 sm:py-16">
         <SectionHeading title="Articles"/>
         <BlogReels />
         <Link href="/blog" className="mt-8 w-fit flex items-center group hover:underline underline-offset-2 decoration-muted-foreground">
            see all
            <ArrowUp className="w-4 h-4 rotate-45 group-hover:rotate-90 duration-300" strokeWidth={1.6}/>
         </Link>
      </section>
   )
}

export default Blogs
