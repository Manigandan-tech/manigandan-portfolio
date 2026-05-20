import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import resume from "../assets/resume/Manigandan_Resume.pdf";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center pt-24 md:pt-20"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-ping"></div>

        <div className="absolute top-40 right-40 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>

        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-cyan-300 rounded-full opacity-20 animate-bounce"></div>

        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-cyan-500 rounded-full opacity-40 animate-ping"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-20 lg:gap-10 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-sm sm:text-lg mb-3 tracking-widest uppercase">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Manigandan K
          </h1>

          <div className="text-xl sm:text-2xl md:text-4xl mt-5 font-semibold text-cyan-400">
            Aspiring Data Analyst | Power BI Developer
          </div>

          <p className="text-gray-400 mt-6 leading-relaxed text-base sm:text-lg max-w-xl text-justify">
            Passionate about transforming raw data into meaningful business
            insights using Power BI, SQL, Python, DAX, and modern analytics
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10">
            <a
              href="#projects"
              className="bg-cyan-400 hover:bg-cyan-300 hover:scale-105 text-black px-7 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </a>

            <motion.a
              href={resume}
              download="Manigandan_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-7 py-3 rounded-2xl font-semibold transition duration-300"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">
            <a
              href="https://github.com/Manigandan-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mani-gandan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Floating Analytics Card 1 */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 left-0 bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-xl"
          >
            <h3 className="text-cyan-400 text-sm">Revenue Growth</h3>
            <p className="text-2xl font-bold">+42%</p>
          </motion.div>

          {/* Floating Analytics Card 2 */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 right-0 bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-xl"
          >
            <h3 className="text-cyan-400 text-sm">Projects</h3>
            <p className="text-2xl font-bold">03+</p>
          </motion.div>

          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-[70vw] h-[70vw] max-w-[420px] max-h-[420px] rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
