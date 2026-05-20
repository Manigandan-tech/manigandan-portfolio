import { motion } from "framer-motion";
import { useState } from "react";

import event1 from "../assets/leadership/event1.jpg";
import event2 from "../assets/leadership/event2.jpg";
import event3 from "../assets/leadership/event3.jpg";
import event4 from "../assets/leadership/event4.jpg";
import event5 from "../assets/leadership/event5.jpg";
import event6 from "../assets/leadership/event6.jpg";
import event7 from "../assets/leadership/event7.jpg";
import event8 from "../assets/leadership/event8.jpg";
import event9 from "../assets/leadership/event9.jpg";
import event10 from "../assets/leadership/event10.jpg";

import award1 from "../assets/leadership/award1.jpg";
import award2 from "../assets/leadership/award2.jpg";
import award3 from "../assets/leadership/award3.jpg";
import award4 from "../assets/leadership/award4.jpg";
import award5 from "../assets/leadership/award5.jpg";

const eventImages = [
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
  event7,
  event8,
  event9,
  event10,
];

const awardImages = [award1, award2, award3, award4, award5];

function Leadership() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="leadership"
      className="bg-black text-white py-20 md:py-28 overflow-hidden relative"
    >
      {/* Glow Effects */}
      <div className="absolute top-20 left-[-120px] w-[300px] h-[300px] bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-[-120px] w-[350px] h-[350px] bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Leadership Journey
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Events • Recognition • Achievements
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Organized one of Coimbatore’s major intercollegiate cultural events
            with a passionate team — handling large-scale coordination,
            celebrity interactions, stage activities, audience engagement, and
            event execution to create an unforgettable experience.
          </p>
        </motion.div>
      </div>

      {/* EVENTS ROW */}
      <div className="relative group overflow-hidden mb-12">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
          className="flex gap-6 w-max group-hover:[animation-play-state:paused]"
        >
          {[...eventImages, ...eventImages].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelectedImage(img)}
              className="relative min-w-[280px] md:min-w-[380px] h-[220px] md:h-[280px] rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20 hover:bg-black/5 transition duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* AWARDS ROW */}
      <div className="relative group overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-6 w-max"
        >
          {[...awardImages, ...awardImages].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelectedImage(img)}
              className="relative min-w-[240px] md:min-w-[320px] h-[320px] md:h-[420px] rounded-3xl overflow-hidden border border-white/10 cursor-pointer bg-white"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* POPUP MODAL */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center p-4"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-24 md:top-6 right-6 z-[10000] text-white text-4xl hover:text-cyan-400 transition"
          >
            ×
          </button>

          {/* Image */}
          <motion.img
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] rounded-3xl border border-white/10 shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
}

export default Leadership;
