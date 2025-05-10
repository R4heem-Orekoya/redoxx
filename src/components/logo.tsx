"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Logo() {
const { resolvedTheme } = useTheme()
   const [mounted, setMounted] = useState(false)
   
   useEffect(() => {
      setMounted(true)
   }, [])
  
   if (!mounted) {
      return <div></div>
   }
   
   return (
      <Link href="/" className="flex items-center gap-2">
         <div className="relative h-6 w-6">
            {resolvedTheme === "dark" ? (
               <Image src="/logo-dark.png" fill alt="logo"/> 
            ) : (
               <Image src="/logo-light.png" fill alt="logo"/> 
            )}
         </div>
      </Link>
   )
}
