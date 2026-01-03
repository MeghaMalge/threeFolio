import { SECTIONS } from "../../constants/sections";
import { useSection } from "../../context/SectionContext";
import SocialLinks from "./SocialLinks";

export default function HomeOverlay() {
  const { setSection } = useSection();
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none">
      <div className="md:max-w-2xl w-full bg-black/40 backdrop-blur-xs md:p-8 p-4 rounded-2xl text-white mt-6">
        <h1 className="md:text-5xl text-3xl md:text-5xl font-bold text-white">
          Megha Malge
        </h1>

        <SocialLinks />

        <p className="mt-4 md:text-lg text-gray-300 md:max-w-xl">
          I am a frontend-heavy full stack developer focused on building
          performant, scalable, and visually polished web applications. I enjoy
          working with React, optimizing performance, and crafting clean user
          experiences.
        </p>
        <div className="mt-8 flex justify-center gap-6 pointer-events-auto">
          <button
            onClick={() => setSection(SECTIONS.PROJECTS)}
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
          >
            View Projects
          </button>

          <a
            href="/MalgeMegha.pdf"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-full hover:opacity-80 transition"
          >
            Resume
          </a>
        </div>
      </div>

      <span className="absolute bottom-10 text-gray-400 text-sm animate-pulse">
        Scroll to explore ↓
      </span>
    </div>
  );
}
