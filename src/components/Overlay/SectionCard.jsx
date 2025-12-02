import { motion, AnimatePresence } from "framer-motion";

export default function SectionCard({ section }) {
  const sectionContent = {
    Home: {
      title: "Hi, I’m Megha 👋",
      desc: "Frontend-focused Full Stack Developer crafting interactive, performant, and elegant web experiences.",
    },
    About: {
      title: "About Me",
      desc: "I love combining design and code to create user-focused digital experiences. When not coding, I paint, sketch, and explore creative ideas.",
    },
    Experience: {
      title: "Experience",
      desc: "Worked at Jar and Publicis Sapient, building scalable frontends with React, Next.js, TailwindCSS, and Django backends.",
    },
    Projects: {
      title: "Projects",
      desc: "Developed multiple full-stack applications — from CMS-driven sites to e-commerce flows, focusing on modular and maintainable architecture.",
    },
    Contact: {
      title: "Let’s Connect",
      desc: "Interested in collaborating or just saying hi? Reach out via LinkedIn or email.",
    },
  };

  const { title, desc } = sectionContent[section] || {};

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={section}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="pointer-events-auto bg-white/20 backdrop-blur-lg border border-white/3 text-black text-center p-6 rounded-2xl w-[320px] md:w-[420px]"
        >
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-sm leading-relaxed">{desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
