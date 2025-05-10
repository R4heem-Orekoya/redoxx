"use client"

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { SiBuymeacoffee } from "react-icons/si"
import posthog from "posthog-js"

export default function Buymecoffee() {
   const pathname = usePathname()
   
   const shouldShow = pathname.startsWith("/projects") || pathname.startsWith("/blogs")
   
   return (
      <>
         {shouldShow && (
            <Button size="icon" className="h-12 w-12 text-2xl bg-purple-500 hover:bg-purple-400 fixed bottom-6 right-6 md:bottom-8 md:right-8" asChild>
               <a onClick={() => {
                  posthog.capture('clicked_buyme_coffee_btn', { page: pathname })
               }}
               href={process.env.NEXT_PUBLIC_BUY_ME_COFFEE!} target="_blank" rel="noopener noreferrer">
                  <SiBuymeacoffee size={24} />
               </a>
            </Button>
         )}
      </>
   )
}