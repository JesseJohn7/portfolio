'use client';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services'
import Skills from './components/Skills';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services/>
      <Projects/>
      <Skills/>
    </main>
  );
}