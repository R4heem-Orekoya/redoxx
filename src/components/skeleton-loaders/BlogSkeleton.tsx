import { repeat } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"

const BlogSkeleton = () => {
   return (
      <ul className="mt-12 grid gap-8">
         {repeat(2).map((i) => (
            <li key={i} className="flex items-start justify-between gap-8">
               <div className="grid gap-3 flex-1">
                  <Skeleton className="h-8 w-full"/>
                  <div className="grid gap-2 mt-1">
                     <Skeleton className="w-full h-2 rounded-sm"/>
                     <Skeleton className="w-full h-2 rounded-sm"/>
                     <Skeleton className="w-2/3 h-2 rounded-sm"/>
                  </div>
                  <div className="flex items-center gap-2">
                     <Skeleton className="w-20 h-3 rounded-sm"/>
                     <Skeleton className="w-20 h-3 rounded-sm"/>
                  </div>
               </div>
               <Skeleton className="min-w-48 aspect-[16/10] max-sm:hidden"/>
            </li>
         ))}
      </ul>
   )
}

export default BlogSkeleton
