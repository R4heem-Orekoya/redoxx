import Blogs from "@/components/sections/Blogs"
import Intro from "@/components/sections/Intro"
import Projects from "@/components/sections/Projects"

export const dynamic = "force-dynamic"

const Page = () => {
  return (
    <main>
      <Intro />
      <Projects />
      <Blogs />
    </main>
  )
}

export default Page
