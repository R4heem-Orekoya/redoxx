'use client'

import { PropsWithChildren } from "react"
import Sonner from "./sonner"
import Theme from "./theme"
import { ReactLenis } from '@/lib/lenis'

type ProvidersProps = PropsWithChildren

export default function Index({ children }: ProvidersProps) {
   return (
      <Theme>
         <ReactLenis root>
            {children}
            <Sonner />
         </ReactLenis>
      </Theme>
   )
}