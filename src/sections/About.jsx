import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-20 w-[300px] h-[300px] bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side */}
          <div>
            <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
              About Me
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
              Transforming Data Into Business Insights
            </h1>

            <p className="text-gray-400 leading-relaxed text-base sm:text-lg text-justify">
              I am an aspiring Data Analyst passionate about business
              intelligence, analytics, and modern data visualization
              technologies. My focus is on building impactful analytical
              solutions using Power BI, SQL, Python, DAX, and dashboard
              engineering techniques.
            </p>

            <p className="text-gray-400 leading-relaxed text-base sm:text-lg mt-6 text-justify">
              I enjoy transforming raw datasets into meaningful insights that
              help support business decision-making and performance analysis.
              Alongside technical development, I also have experience organizing
              large-scale college events and leadership activities.
            </p>
          </div>

          {/* Right Side */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-cyan-400 text-3xl md:text-4xl font-black">
                  05+
                </h2>

                <p className="text-gray-300 mt-3">Certifications</p>
              </div>

              <div>
                <h2 className="text-cyan-400 text-3xl md:text-4xl font-black">
                  03+
                </h2>

                <p className="text-gray-300 mt-3">Projects</p>
              </div>

              <div>
                <h2 className="text-cyan-400 text-3xl md:text-4xl font-black">
                  Power BI
                </h2>

                <p className="text-gray-300 mt-3">Dashboard Development</p>
              </div>

              <div>
                <h2 className="text-cyan-400 text-3xl md:text-4xl font-black">
                  SQL
                </h2>

                <p className="text-gray-300 mt-3">Data Querying & Analysis</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
