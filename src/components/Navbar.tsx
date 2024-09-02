import Link from "next/link"
import Logo from "./Logo"
import { ModeToggle } from "./theme-toggle"

const Navbar = () => {
   return (
      <nav className="container max-w-3xl h-20 mx-auto flex justify-between items-center">
         <Logo />
         <ModeToggle />
      </nav>
   )
}

export default Navbar