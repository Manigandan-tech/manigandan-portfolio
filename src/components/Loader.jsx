import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <motion.h1
          initial={{ letterSpacing: "0px" }}
          animate={{ letterSpacing: "8px" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-cyan-400 text-xl md:text-3xl font-black uppercase"
        >
          Initializing Portfolio
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "220px" }}
          transition={{ duration: 2 }}
          className="h-[3px] bg-cyan-400 mx-auto mt-8 rounded-full"
        />

        <p className="text-gray-500 mt-6 tracking-[4px] text-sm uppercase">
          Loading Analytics Systems...
        </p>
      </motion.div>
    </div>
  );
}

export default Loader;
