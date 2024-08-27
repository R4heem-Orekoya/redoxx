"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

interface TanstackQueryProviderProps {
   children: ReactNode
}

const queryClient = new QueryClient()

const TanstackQueryProvider = ({ children }: TanstackQueryProviderProps) => {
   return (
      <QueryClientProvider client={queryClient}>
         {children}
      </QueryClientProvider>
   )
}

export default TanstackQueryProvider
