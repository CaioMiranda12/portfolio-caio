import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <div>
      <Header />

      <div>
        <Hero />

        <Projects />
      </div>
    </div>
  )
}