import { PROJECTS } from "../../data/projects";
import { motion } from "framer-motion";

export default function ProjectsOverlay() {
  return (
    <div className="absolute top-20 overflow-y-auto h-[90vh] w-full flex justify-center">
      <div className="max-w-7xl w-full text-white">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="border border-gray-600 rounded-xl md:p-5 p-4 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA pair */}
              <div className="mt-5 flex gap-4">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white text-black rounded-full text-sm
                   hover:opacity-80 transition"
                >
                  GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-white text-white rounded-full text-sm
                   hover:bg-white hover:text-black transition"
                  >
                    View Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
