import Logo from "./logo";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
   return (
      <nav className="container max-w-3xl px-6 h-20 mx-auto flex justify-between items-center">
         <Logo />
         <ThemeToggle />
      </nav>
   )
}