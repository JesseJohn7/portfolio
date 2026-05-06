'use client';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';


export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      {/* Hero Section - Main Content */}
      <section id="hero" aria-label="Hero section showcasing Jesse John - Senior Developer">
        <Hero />
      </section>
      
      {/* Featured Projects Section */}
      <section id="projects" aria-label="Featured projects by jesse_can_code">
        <Projects/>
      </section>
      
      {/* Technical Skills Section */}
      <section id="skills" aria-label="Technical skills and expertise">
        <Skills/>
      </section>
      
      {/* Services Section */}
      <section id="services" aria-label="Services offered by Jesse John">
        <Services/>
      </section>
      
      {/* Professional Experience Section */}
      <section id="experience" aria-label="Professional experience and background">
        <Experience/>
      </section>
      
      {/* Contact Section */}
      <section id="contact" aria-label="Get in touch with Jesse John">
        <Contact/>
      </section>
    </main>
  );
}