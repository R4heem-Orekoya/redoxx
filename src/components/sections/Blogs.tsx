import Link from "next/link"
import BlogReels from "../BlogReels"
import { ArrowUp } from "lucide-react"

const Blogs = () => {
   return (
      <section className="py-8">
         <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Articles</h2>
            {/* <Link href="/blog" className="max-sm:text-sm w-fit flex items-center group hover:underline underline-offset-2 decoration-muted-foreground">
               see all
               <ArrowUp className="w-4 h-4 ml-1 rotate-45 group-hover:rotate-90 duration-300" strokeWidth={1.6}/>
            </Link>  */}
         </div>
         <BlogReels />
      </section>
   )
}

export default Blogs
