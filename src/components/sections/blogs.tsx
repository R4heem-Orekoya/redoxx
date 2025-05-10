import Link from "next/link";
import BlogReel from "../blog-reel";
import { ArrowRight } from "lucide-react";

export default function Blogs() {
   return (
      <section className="mt-16 sm:mt-24">
         <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-medium">Articles</h2>
            
            <Link href="blogs" className="text-sm flex items-center gap-2 hover:text-muted-foreground">
               See All
               <ArrowRight className="w-4 h-4"/>
            </Link>
         </div>
         <BlogReel perPage={8}/>
      </section>
   )
}
