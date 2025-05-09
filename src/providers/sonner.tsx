"use client"

import { Toaster } from "sonner"
import { useTheme } from 'next-themes'

export default function Sonner() {
   const { resolvedTheme } = useTheme()
   
   return (
      <Toaster 
         className="font-Montserrat"
         position="top-center" 
         theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
         richColors
      />
   )
}