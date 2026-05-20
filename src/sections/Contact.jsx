import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500 opacity-10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">Contact</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Let’s Connect
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-relaxed text-justify">
            Open to full-time opportunities, analytics projects, professional
            collaborations, and meaningful business impact through data-driven
            solutions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LinkedIn */}
          <motion.a
            whileHover={{ y: -8 }}
            href="https://www.linkedin.com/in/mani-gandan/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
          >
            <div className="flex justify-center mb-6 text-5xl text-cyan-400">
              <FaLinkedin />
            </div>

            <h2 className="text-2xl font-bold mb-4">LinkedIn</h2>

            <p className="text-gray-400">
              Connect professionally and explore my career journey.
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ y: -8 }}
            href="https://github.com/Manigandan-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
          >
            <div className="flex justify-center mb-6 text-5xl text-cyan-400">
              <FaGithub />
            </div>

            <h2 className="text-2xl font-bold mb-4">GitHub</h2>

            <p className="text-gray-400">
              Explore my projects, repositories, and technical work.
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ y: -8 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manidreamer14@gmail.com"
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300 shadow-xl"
          >
            <div className="flex justify-center mb-6 text-5xl text-cyan-400">
              <FaEnvelope />
            </div>

            <h2 className="text-2xl font-bold mb-4">Email</h2>

            <p className="text-gray-400">
              Reach out for collaborations, opportunities, or discussions.
            </p>
          </motion.a>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 mt-20 pt-10 text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            Transforming Data into Insights • Designed & Developed by Manigandan
            K
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
