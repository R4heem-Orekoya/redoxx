"use client"

import { urlFor } from "@/sanity/lib/image"
import { useTheme } from "next-themes"
import { ProjectsQueryResult } from "../../sanity.types"

interface ProjectLogoProps {
   project: ProjectsQueryResult[number]
}

export default function ProjectLogo ({ project }: ProjectLogoProps) {
   const { resolvedTheme } = useTheme()
   
   return (
      <img src={urlFor(resolvedTheme === "light" ? (project.projectLogoLight ?? project.projectLogo!) : project.projectLogo!).url()} alt={`${project?.title} logo image`} className="size-6 border rounded" />
   )
}