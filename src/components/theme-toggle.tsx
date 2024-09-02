"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"

export function ModeToggle() {
   const { setTheme, resolvedTheme } = useTheme()
   const [mounted, setMounted] = useState(false)
   
   useEffect(() => {
      setMounted(true)
   }, [])
  
   if (!mounted) {
      return <div></div>
   }

   return (
      <button
         onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
         }}
      >
         {resolvedTheme === 'dark' ? (
            <SunIcon className='w-4 h-4 text-violet-500' />
            ) : (
            <MoonIcon className='w-4 h-4 text-violet-500' />
         )}
      </button>
   )
}
