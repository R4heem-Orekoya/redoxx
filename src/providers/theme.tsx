"use client"

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

type ThemeProps = PropsWithChildren

export default function Theme({ children }: ThemeProps) {
   return (
      <ThemeProvider
         enableSystem
         attribute='class'
         defaultTheme='system'
         disableTransitionOnChange
      >
         {children}
      </ThemeProvider>
   )
}