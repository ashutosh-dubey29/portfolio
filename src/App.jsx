// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Functions from './components/FunctionsTesting';
// import SolarShowcase from './components/SolarAnimation';
// import SolarDashboard from './components/SolarDashboard';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white scroll-smooth">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="functions">
        <About />
      </section>
{/* 
      <section id="solar-panels">
        <Functions />
      </section>

      <section id="solar-panels">
        <SolarShowcase />
      </section>

      <section id="solar-panels">
        <SolarDashboard />
      </section> */}

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
