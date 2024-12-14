'use client'

import { PropsWithChildren } from "react"
import Sonner from "./Sonner"
import Theme from "./Theme"
import { ReactLenis } from '@/lib/lenis'

type ProvidersProps = PropsWithChildren

const Providers = ({ children }: ProvidersProps) => {
   return (
      <Theme>
         <ReactLenis root>
            {children}
            <Sonner />
         </ReactLenis>
      </Theme>
   )
}

export default Providers
