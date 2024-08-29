"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
   const { resolvedTheme } = useTheme()
   return (
      <Link href="/" className="flex items-center gap-2">
         <div className="relative h-10 w-10">
            {resolvedTheme === "dark" ? (
               <Image src="/logo-dark.png" fill alt="logo"/> 
            ) : (
               <Image src="/logo-light.png" fill alt="logo"/> 
            )}
         </div>
      </Link>
   )
}

export default Logo
