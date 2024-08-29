'use client'

import { PropsWithChildren } from "react"
import TanstackQuery from "./TanstackQuery"
import Sonner from "./Sonner"
import Theme from "./Theme"

type ProvidersProps = PropsWithChildren

const Providers = ({ children }: ProvidersProps) => {
   return (
      <Theme>
         <TanstackQuery>
            {children}
            <Sonner />
         </TanstackQuery>
      </Theme>
   )
}

export default Providers
