import { AnimatePresence, motion } from "framer-motion";
import HomeOverlay from "./HomeOverlay";
import ExperienceOverlay from "./ExperienceOverlay";
import ProjectsOverlay from "./ProjectsOverlay";

const overlayMap = {
  Home: HomeOverlay,
  Experience: ExperienceOverlay,
  Projects: ProjectsOverlay,
};

export default function OverlayController({ section }) {
  const OverlayComponent = overlayMap[section];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={section}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 z-10"
      >
        <OverlayComponent />
      </motion.div>
    </AnimatePresence>
  );
}
