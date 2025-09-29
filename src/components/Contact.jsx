import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const floatingShape = (className, color, animateY, delay) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: [0, animateY, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay }}
    style={{ background: color }}
  />
);

const Contact = () => (
  <section
    id="contact"
    className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex justify-center items-center overflow-hidden p-4"
  >
    {floatingShape(
      "absolute top-10 left-12 w-28 h-28 rounded-full blur-2xl z-0",
      "rgba(34,211,238,0.22)", 36, 0
    )}
    {floatingShape(
      "absolute bottom-16 right-20 w-16 h-16 rounded-full blur-3xl z-0",
      "rgba(244,114,182,0.22)", -24, 2.5
    )}
    {floatingShape(
      "absolute top-2/3 left-2/4 w-32 h-32 rounded-full blur-2xl z-0",
      "rgba(96,165,250,0.22)", 48, 1.2
    )}

    <motion.div
      className="z-10 backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl p-10 w-full max-w-lg border border-cyan-500/20"
      initial={{ opacity: 0, scale: 0.93, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-2 font-mono drop-shadow-md">Contact</h2>
      <p className="text-center text-gray-300 mb-6">
        Let's connect, collaborate or just say hello!
      </p>
      <form className="flex flex-col gap-5">
        <motion.input
          whileFocus={{ scale: 1.025, borderColor: "#38bdf8" }}
          className="bg-white/15 rounded-lg p-3 text-lg border border-transparent focus:border-cyan-400 duration-300 outline-none"
          type="text"
          placeholder="Your Name"
        />
        <motion.input
          whileFocus={{ scale: 1.025, borderColor: "#a21caf" }}
          className="bg-white/15 rounded-lg p-3 text-lg border border-transparent focus:border-fuchsia-700 duration-300 outline-none"
          type="email"
          placeholder="Your Email"
        />
        <motion.textarea
          whileFocus={{ scale: 1.025, borderColor: "#06b6d4" }}
          className="bg-white/15 rounded-lg p-3 text-lg border border-transparent focus:border-cyan-500 duration-300 outline-none"
          rows="5"
          placeholder="Your Message"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.07, backgroundColor: "#0891b2" }}
          className="bg-cyan-500 text-white py-3 rounded-lg font-semibold drop-shadow transition-colors duration-300"
        >
          🚀 Send Message
        </motion.button>
      </form>

      <div className="flex justify-center gap-7 mt-8">
        <motion.a
          href="mailto:your@email.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#38bdf8" }}
          className="text-cyan-400 hover:text-cyan-200 text-2xl bg-black/20 p-3 rounded-full border border-cyan-400/40 shadow-md transition-colors duration-300"
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#38bdf8" }}
          className="text-cyan-400 hover:text-cyan-200 text-2xl bg-black/20 p-3 rounded-full border border-cyan-400/40 shadow-md transition-colors duration-300"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#38bdf8" }}
          className="text-cyan-400 hover:text-cyan-200 text-2xl bg-black/20 p-3 rounded-full border border-cyan-400/40 shadow-md transition-colors duration-300"
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </motion.div>
  </section>
);

export default Contact;
