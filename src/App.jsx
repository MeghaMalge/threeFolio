import Scene from "./components/scenes";
import Navbar from "./components/Overlay/Navbar";
import ScrollProgress from "./components/Overlay/ScrollProgress";
import Overlay from "./components/Overlay";
import { useSection } from "./context/SectionContext";
import { useEffect } from "react";
import { SECTIONS } from "./constants/sections";

export default function App() {
  const { section, setSection } = useSection();

  const sections = Object.values(SECTIONS);

  useEffect(() => {
    if (section === SECTIONS.PROJECTS) return;

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
      <Overlay section={section} />
      <Navbar onSectionChange={setSection} currentSection={section} />
      <ScrollProgress currentSection={section} onSectionChange={setSection} />
    </div>
  );
}
