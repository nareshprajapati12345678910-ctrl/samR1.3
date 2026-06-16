import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import VideoShowcase from "@/components/sections/VideoShowcase";
import TeamMembers from "@/components/sections/TeamMembers";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <VideoShowcase />
        <TeamMembers />
        <Contact />
      </main>
      <footer className="py-12 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">&copy; {new Date().getFullYear()} samR1. All rights reserved.</p>
      </footer>
    </div>
  );
}