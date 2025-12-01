export default function Navbar() {
  const links = ["Home", "About", "Experience", "Projects", "Contact"];
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 text-sm font-light tracking-wide z-10">
      {links.map((link) => (
        <button
          key={link}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link}
        </button>
      ))}
    </nav>
  );
}
