import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-20 w-[350px] h-[350px] bg-cyan-500 opacity-10 blur-[140px] rounded-full"></div>

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
            Experience Console
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Data Analyst Internship
          </h1>
        </motion.div>

        {/* Main Console */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>

                <p className="uppercase tracking-[4px] text-cyan-400 text-sm">
                  Internship Active
                </p>
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                Cubiksoft Technologies Pvt. Ltd.
              </h2>

              <p className="text-gray-400 text-base md:text-lg mb-8">
                Data Analyst Intern | Dec 2025 - Feb 2026
              </p>

              <p className="text-gray-400 leading-relaxed text-justify text-base sm:text-lg">
                Worked on interactive business intelligence solutions using
                Power BI, SQL, Excel, and DAX for KPI reporting, dashboard
                engineering, customer analytics, and revenue trend analysis.
                Focused on transforming business datasets into meaningful
                analytical insights using modern BI techniques.
              </p>
            </div>

            {/* Right Side Dashboard */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* KPI Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 border border-white/10 rounded-3xl p-6"
              >
                <p className="text-cyan-400 text-sm mb-3 uppercase tracking-[3px]">
                  Dashboards
                </p>

                <h1 className="text-4xl md:text-5xl font-black">02+</h1>

                <p className="text-gray-400 mt-4">
                  Business Intelligence Dashboards Developed
                </p>
              </motion.div>

              {/* KPI Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 border border-white/10 rounded-3xl p-6"
              >
                <p className="text-cyan-400 text-sm mb-3 uppercase tracking-[3px]">
                  Tools Used
                </p>

                <h1 className="text-2xl md:text-3xl font-black">Power BI</h1>

                <p className="text-gray-400 mt-4">
                  SQL, Excel, DAX & Data Modeling
                </p>
              </motion.div>

              {/* KPI Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 border border-white/10 rounded-3xl p-6"
              >
                <p className="text-cyan-400 text-sm mb-3 uppercase tracking-[3px]">
                  Analytics
                </p>

                <h1 className="text-2xl md:text-3xl font-black">KPI</h1>

                <p className="text-gray-400 mt-4">
                  Revenue, Customer & Trend Analysis
                </p>
              </motion.div>

              {/* KPI Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 border border-white/10 rounded-3xl p-6"
              >
                <p className="text-cyan-400 text-sm mb-3 uppercase tracking-[3px]">
                  Focus Area
                </p>

                <h1 className="text-2xl md:text-3xl font-black">BI</h1>

                <p className="text-gray-400 mt-4">
                  Dashboard Engineering & Data Visualization
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
