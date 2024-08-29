import Link from "next/link"
import Logo from "./Logo"
import { ModeToggle } from "./theme-toggle"

const Navbar = () => {
   return (
      <header className="sticky top-0 z-50 w-full bg-background/40 backdrop-blur-md">
         <nav className="w-[90%] max-w-3xl h-20 mx-auto flex justify-between items-center">
            <Logo />
            
            <ul className="flex gap-8 items-center max-sm:hidden">
               <li className="text-sm font-medium hover:text-muted-foreground duration-300">
                  <Link href="#">Projects</Link>
               </li>
               <li className="text-sm font-medium hover:text-muted-foreground duration-300">
                  <Link href="#">Articles</Link>
               </li>
               <li className="text-sm font-medium hover:text-muted-foreground duration-300">
                  <Link href="#">Contact</Link>
               </li>
            </ul>
            <ModeToggle />
         </nav>
      </header>
   )
}

export default Navbar