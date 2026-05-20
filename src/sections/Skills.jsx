import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data Analytics",
    skills: ["Power BI", "DAX", "Excel", "Data Visualization"],
  },

  {
    title: "Programming",
    skills: ["Python", "Flask", "Pandas", "JavaScript"],
  },

  {
    title: "Database",
    skills: ["SQL", "MySQL", "Database Management"],
  },

  {
    title: "Business Intelligence",
    skills: ["KPI Reporting", "Dashboard Development", "Data Modeling"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-[-100px] top-20 w-[300px] h-[300px] bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

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
            Expertise
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Technical Skills
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8">
                {category.title}
              </h2>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-3 rounded-2xl text-sm md:text-base cursor-pointer transition"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
