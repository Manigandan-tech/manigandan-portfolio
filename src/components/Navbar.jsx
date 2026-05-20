import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "projects",
    "skills",
    "experience",
    "leadership",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((id) => document.getElementById(id));

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#home"
          className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent"
        >
          MG
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link}`}
              className={`capitalize transition duration-300 font-medium relative ${
                activeSection === link
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {link}

              {activeSection === link && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 -bottom-2 h-[2px] w-full bg-cyan-400 rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                className={`capitalize text-lg transition ${
                  activeSection === link ? "text-cyan-400" : "text-white"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
