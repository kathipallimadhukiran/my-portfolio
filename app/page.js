"use client";  // Ensure the component runs only on the client-side

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=yourDevUsername`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
