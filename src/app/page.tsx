import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <div>
      <Header />

      <div>
        <Hero />

        <Projects />

        <About />

        <Skills />

        <Contact />

        <Footer />
      </div>
    </div>
  )
}