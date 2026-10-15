"use client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { projects } from "./data/projects";

export default function Home() {
  useScrollAnimation([
    ".section-head",
    ".project",
    ".about-left",
    ".about-right",
    ".contact-top",
    ".contact-section h2",
    ".contact-bottom",
    "footer",
  ]);

  return (
    <main>
      <Header />
      <Hero />
      <Ticker />
      <WorkSection projects={projects} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
