import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Resume from "./sections/Resume.jsx";
import Contact from "./sections/Contact.jsx";

/**
 * Main Application Component
 * 
 * Crafted with plain JavaScript and React (JSX).
 * No TypeScript syntax, interfaces, or generics.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#090b10] text-slate-200 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
