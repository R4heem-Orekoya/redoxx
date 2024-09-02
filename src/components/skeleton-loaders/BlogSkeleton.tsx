import { repeat } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"

const BlogSkeleton = () => {
   return (
      <ul className="mt-8 grid gap-6">
         {repeat(3).map((i) => (
            <li key={i} className="grid gap-2">
               <Skeleton className="h-6 w-full sm:w-[80%]"/>
               <Skeleton className="h-3 w-2/3 rounded-sm"/>
               <Skeleton className="h-3 w-1/3 rounded-sm"/>
            </li>
         ))}
      </ul>
   )
}

export default BlogSkeleton
