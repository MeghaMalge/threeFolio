import { SECTIONS } from "../../constants/sections";

export default function Navbar({ onSectionChange, currentSection }) {
  const links = Object.values(SECTIONS);

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 text-sm font-light tracking-wide z-10">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => onSectionChange(link)}
          className={`transition-colors ${
            currentSection === link ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {link}
        </button>
      ))}
    </nav>
  );
}
