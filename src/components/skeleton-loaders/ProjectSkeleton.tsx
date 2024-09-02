import { repeat } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"

const ProjectSkeleton = () => {
   return (
      <ul className="grid md:grid-cols-2 gap-6 mt-12">
         {repeat(2).map((i) => (
            <li key={i} className="grid gap-2">
               <Skeleton className="aspect-video rounded-md "/>
               <Skeleton className="h-4 max-sm:h-3 rounded-sm w-full sm:mt-2"/>
               <Skeleton className="h-4 max-sm:h-3 rounded-sm w-2/3"/>
            </li> 
         ))}
      </ul>
   )
}

export default ProjectSkeleton
