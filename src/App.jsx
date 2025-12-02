import { useState, useEffect } from "react";
import Scene from "./components/Scene";
import Navbar from "./components/Overlay/Navbar";
import SectionCard from "./components/Overlay/SectionCard";
import ScrollProgress from "./components/Overlay/ScrollProgress";

const sections = ["Home", "About", "Experience", "Projects", "Contact"];

export default function App() {
  const [section, setSection] = useState("Home");

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = (e) => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const delta = e.deltaY;
        const currentIndex = sections.indexOf(section);

        if (delta > 0 && currentIndex < sections.length - 1) {
          setSection(sections[currentIndex + 1]);
        } else if (delta < 0 && currentIndex > 0) {
          setSection(sections[currentIndex - 1]);
        }
      }, 100);
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [section]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Scene section={section} />
      <SectionCard section={section} />
      <Navbar onSectionChange={setSection} currentSection={section} />
      <ScrollProgress currentSection={section} onSectionChange={setSection} />
    </div>
  );
}
