import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator"

interface SectionHeadingProps {
   title: string
   reversed?: boolean
   hasLine?: boolean
   className?: string
}

const SectionHeading = ({ title, className, reversed, hasLine = true }: SectionHeadingProps) => {
   return (
      <div className={cn("flex gap-8 items-center", { "flex-row-reverse": reversed })}>
         <h2 className={cn("text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold", className)}>{title}.</h2>
         {hasLine && <Separator className="flex-1 h-[0.5px] opacity-45"/>}
      </div>
   )
}

export default SectionHeading
