import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Providers from "@/providers"

export default function NotFound() {
   return (
      <Providers>
         <main className="grid place-items-center-safe min-h-screen px-6 lg:px-8 font-inter">
            <div className="text-center">
               <p className="text-base font-semibold text-purple-500">404</p>
               <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">Page not found</h1>
               <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
               <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="/" className={buttonVariants()}>Go back home</Link>
               </div>
            </div>
         </main>
      </Providers>
   )
}