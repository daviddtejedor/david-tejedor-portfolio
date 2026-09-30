"use client";


import { Hero, AboutMe, Skills, Projects, Contact } from "@/app/components/index.components";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}