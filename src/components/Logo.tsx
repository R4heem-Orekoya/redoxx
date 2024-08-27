
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Logo = () => {
   return (
      <Link href="/" className="flex items-center gap-2">
         <div className="relative h-10 w-10">
            <Image src="/logo.png" fill alt="logo"/>
         </div>
         <p className="font-medium max-sm:hidden">
            redoxx
            <span className="text-primary text-lg">.</span>
         </p>
      </Link>
   )
}

export default Logo
