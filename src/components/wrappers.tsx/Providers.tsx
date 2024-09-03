'use client'

import { PropsWithChildren } from "react"
import TanstackQuery from "./TanstackQuery"
import Sonner from "./Sonner"
import Theme from "./Theme"
import { ReactLenis } from '@/lib/lenis'

type ProvidersProps = PropsWithChildren

const Providers = ({ children }: ProvidersProps) => {
   return (
      <Theme>
         <ReactLenis root>
            <TanstackQuery>
               {children}
               <Sonner />
            </TanstackQuery>
         </ReactLenis>
      </Theme>
   )
}

export default Providers
