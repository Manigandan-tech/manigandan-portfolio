import { motion } from "framer-motion";

const stats = [
  {
    number: "03+",
    title: "Projects Completed",
  },
  {
    number: "05+",
    title: "Certifications",
  },
  {
    number: "3 Months",
    title: "Internship Experience",
  },
  {
    number: "10+",
    title: "Technologies",
  },
];

function Stats() {
  return (
    <section className="bg-black text-white py-20 md:py-28 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center shadow-xl hover:border-cyan-400 transition duration-300"
            >
              <h1 className="text-4xl md:text-5xl font-black text-cyan-400">
                {item.number}
              </h1>

              <p className="mt-4 text-gray-300 text-lg">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
