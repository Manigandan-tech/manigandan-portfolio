import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

/* Project Images */
import sales1 from "../assets/projects/sales-dashboard-1.jpg";
import sales2 from "../assets/projects/sales-dashboard-2.jpg";

import econsultMain from "../assets/projects/econsult-main.jpg";
import econsultReport from "../assets/projects/econsult-report.jpg";
import econsultWordcloud from "../assets/projects/econsult-wordcloud.jpg";
import econsultTrend from "../assets/projects/econsult-trend.jpg";

const projects = [
  {
    title: "E-Consultation Sentiment Analyzer",

    image: econsultMain,

    gallery: [econsultReport, econsultWordcloud, econsultTrend],

    description:
      "AI-powered sentiment analytics platform for analyzing citizen feedback using Python, Flask, data visualization, and sentiment intelligence techniques.",

    features: [
      "Sentiment classification system",
      "Interactive analytical visualizations",
      "Citizen feedback processing",
      "Data-driven reporting workflow",
    ],

    tech: ["Python", "Flask", "Pandas", "Matplotlib"],

    github:
      "https://github.com/Manigandan-tech/E-consultation-sentiment-feedback-analyzer",
  },

  {
    title: "Sales Analytics Dashboard",

    image: sales1,

    gallery: [sales1, sales2],

    description:
      "Interactive Power BI dashboard for KPI tracking, customer analytics, revenue analysis, DAX reporting, and business intelligence visualization.",

    features: [
      "Revenue KPI dashboard",
      "Customer analytics tracking",
      "DAX-based calculations",
      "Interactive business insights",
    ],

    tech: ["Power BI", "DAX", "SQL", "Excel"],

    github:
      "https://github.com/Manigandan-tech/sales-analytics-dashboard-powerbi",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-black text-white py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-black">Featured Projects</h1>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:border-cyan-400 transition duration-300 shadow-xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-cyan-500/5"></div>

              <div className="relative z-10">
                {/* Preview Image */}
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[220px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-5">{project.title}</h2>

                <p className="text-gray-400 leading-relaxed mb-8 text-justify">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 hover:scale-105 text-black px-6 py-3 rounded-2xl font-semibold transition duration-300"
                >
                  <FaGithub />
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center px-4 py-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0f0f0f] border border-white/10 rounded-[32px] w-full max-w-4xl h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed top-6 right-6 z-[100000] bg-black/70 backdrop-blur-md border border-white/10 w-12 h-12 rounded-full text-2xl text-gray-300 hover:text-white hover:border-cyan-400 transition"
              >
                ✕
              </button>

              <div className="p-6 md:p-10">
                <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
                  Project Details
                </p>

                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  {selectedProject.title}
                </h1>

                <p className="text-gray-400 leading-relaxed text-justify mb-8">
                  {selectedProject.description}
                </p>

                {/* Gallery */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {selectedProject.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img
                        src={image}
                        alt="project"
                        className="w-full h-[200px] object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-5">Key Features</h2>

                  <ul className="space-y-3 text-gray-300">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-2xl font-semibold transition duration-300"
                >
                  GitHub Repository
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
