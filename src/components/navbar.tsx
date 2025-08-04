import Logo from "./logo";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
   return (
      <nav className="container max-w-[692px] px-4 h-16 mx-auto flex justify-between items-center">
         <Logo />
         <ThemeToggle />
      </nav>
   )
}