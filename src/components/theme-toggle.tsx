"use client"

import { useTheme } from "next-themes"


import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"

export function ModeToggle() {
   const { setTheme, resolvedTheme } = useTheme()
   const [mounted, setMounted] = useState(false)
   
   useEffect(() => {
      setMounted(true)
   }, [])
  
   if (!mounted) {
      return null
   }

   return (
      <Button
         size="icon"
         variant="ghost"
         onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
         }}
      >
         {resolvedTheme === 'dark' ? (
            <SunIcon className='w-4 h-4 text-purple-500' />
            ) : (
            <MoonIcon className='w-4 h-4 text-purple-500' />
         )}
      </Button>
   )
}
