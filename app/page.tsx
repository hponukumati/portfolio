import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";

export default function Home() {
  const [speechify, statusCheck, findex, movieTheatre] = projects;

  return (
    <div id="top">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Hero />
          <About />
          <Skills />
          <ProjectCard id="projects" project={speechify} />
          <ProjectCard project={statusCheck} />
          <ProjectCard project={findex} />
          <ProjectCard project={movieTheatre} />
          <Contact />
        </div>
        <footer className="mt-10 text-center text-xs text-muted">
          © {new Date().getFullYear()} Sri Harsha Ponukumati
        </footer>
      </main>
    </div>
  );
}
