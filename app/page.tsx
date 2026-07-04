import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/sections/about";
import { Projects } from "./components/sections/projects";
import Contact from "./components/sections/contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground px-4 py-4 sm:px-8 sm:py-6 md:px-16 md:py-10 flex flex-col border-0 relative">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Sections */}
      <main className="flex-1 flex flex-col gap-20 md:gap-28 mt-8 md:mt-12 border-0">
        
        {/* Hero & Project Carousel */}
        <Hero />
        
        {/* Divider */}
        <div className="h-[1px] bg-zinc-100 w-full border-0" />
        
        {/* Projects Detail Grid */}
        <section id="projects" className="scroll-mt-12 border-0">
          <Projects />
        </section>
        
        {/* Divider */}
        <div className="h-[1px] bg-zinc-100 w-full border-0" />
        
        {/* Contact Section */}
        <section id="contact" className="scroll-mt-12 border-0 pb-6">
          <Contact />
        </section>
        
      </main>
    </div>
  );
}