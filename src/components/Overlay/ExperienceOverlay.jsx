import { EXPERIENCE } from "../../data/experience";
import { motion } from "framer-motion";

export default function ExperienceOverlay() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full md:border-t md:mt-[30vh] h-screen flex flex-col-reverse md:flex-row justify-center items-center md:items-start md:gap-10 gap-6 border-gray-600">
        {EXPERIENCE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="relative w-[400px] h-fit"
          >
            {/* Dot */}
            <motion.span
              className="absolute md:block hidden z-10 left-[160px] -top-[10px] w-4 h-4 rounded-full bg-yellow-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: "0 0 8px rgba(255,215,0,0.7)",
              }}
            />

            {/* Content */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="md:absolute mx-auto left-0 -top-5 w-fit p-6 md:pt-16 border bg-white/20 border-gray-600 rounded-2xl text-white"
            >
              <h3 className="text-lg font-semibold whitespace-nowrap">
                {item.title}
              </h3>

              <div className="flex justify-between">
                <p className="text-gray-400 text-sm whitespace-nowrap">
                  {item.company}
                </p>
                <p className="text-sm text-gray-400 whitespace-nowrap">
                  {item.year}
                </p>
              </div>

              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1 whitespace-nowrap">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <span className="absolute bottom-10 text-gray-400 text-sm animate-pulse">
        Scroll to explore ↓
      </span>
    </div>
  );
}
