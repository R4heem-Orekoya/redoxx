import Image from "next/image"
import { Badge } from "../ui/badge"
import { BriefcaseBusiness } from "lucide-react"

const Header = () => {
   return (
      <section className="flex flex-wrap gap-4 items-center">
         <div className="relative shrink-0 size-32 rounded-full border border-muted grid place-items-center">
            <Image src="/logo.png" alt="logo" width="40" height="40" className="aspect-square"/>
         </div>
         <div className="grid">
            <h1 className="text-lg md:text-xl font-semibold">Raheem Orekoya</h1>
            <p className="text-sm text-muted-foreground">Fullstack Web Developer based in Nigeria.</p>
            <Badge className="w-fit mt-4 flex items-center gap-2 py-1.5 px-2">
               <BriefcaseBusiness className="w-4 h-4"/>
               <span>Available for work</span>
               <div className="size-3 bg-green-500 rounded-full animate-pulse grid place-items-center" />
            </Badge>
         </div>
      </section>
   )
}

export default Header
