"use client"

import { useTheme } from "next-themes"
import { Badge } from "./ui/badge"
import { urlFor } from "@/sanity/lib/image"
import { ProjectsQueryResult } from "../../sanity.types"

interface TechStackBadgeProps {
   stack: NonNullable<ProjectsQueryResult[number]["techStack"]>[number]
}

export default function TechStackBadge({ stack }: TechStackBadgeProps) {
   const { resolvedTheme } = useTheme()
   
   return (
      <Badge key={stack.name} variant="outline" className="gap-1.5 whitespace-nowrap">
         <div className="size-3 grid place-items-center">
            <img src={urlFor(resolvedTheme === "light" ? (stack.logoLight ?? stack.logo!) : stack.logo!).url()} className="object-contain rounded-xs" />
         </div>
         {stack.name}
      </Badge>
   )
}