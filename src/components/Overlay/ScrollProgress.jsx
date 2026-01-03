import { SECTIONS } from "../../constants/sections";

export default function ScrollProgress({ currentSection, onSectionChange }) {
  const sections = Object.values(SECTIONS);

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-10">
      {sections.map((section) => {
        const isActive = currentSection === section;
        return (
          <button
            key={section}
            onClick={() => onSectionChange(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-white scale-125 shadow-[0_0_8px_2px_rgba(0,255,255,0.7)]"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
          />
        );
      })}
    </div>
  );
}
