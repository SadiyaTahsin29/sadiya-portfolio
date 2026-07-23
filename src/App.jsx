import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import AskPortfolio from "./components/AskPortfolio";
import Projects from "./components/Projects";
import MoreProjects from "./components/MoreProjects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <div className="background-grid" />

      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <AskPortfolio />
        <Projects />
        <MoreProjects />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}