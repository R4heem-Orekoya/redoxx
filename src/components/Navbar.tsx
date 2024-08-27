import Link from "next/link"
import Logo from "./Logo"
import { ArrowRight } from "lucide-react"

const Navbar = () => {
   return (
      <header className="fixed top-0 w-full">
         <nav className="w-[min(1200px,90%)] h-20 mx-auto flex justify-between items-center">
            <Logo />
            
            <ul className="flex gap-8 items-center max-sm:hidden">
               <li className="text-sm font-medium hover:text-muted-foreground duration-300">
                  <Link href="#">About</Link>
               </li>
               <li className="text-sm font-medium hover:text-muted-foreground duration-300">
                  <Link href="#">Projects</Link>
               </li>
               <li className="text-sm font-medium hover:text-muted-foreground duration-300">
                  <Link href="#">Articles</Link>
               </li>
               <li className="text-sm font-medium hover:text-muted-foreground duration-300">
                  <Link href="#" className="flex items-center gap-1 group">
                     Contact
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-300" strokeWidth={1.5}/>
                  </Link>
               </li>
            </ul>
            
         </nav>
      </header>
   )
}

export default Navbar