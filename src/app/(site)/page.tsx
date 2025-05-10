import Blogs from "@/components/sections/blogs";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects";

export default async function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <Blogs />
    </main>
  )
}
