import React from 'react';
import { motion } from 'framer-motion';
import AnimatedAvatar from './../animation/AnimatedAvatar'
import SimpleAnimatedAvatar from './../animation/SimpleAnimatedAvatar'

const About = () => (
  <section id="about" className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black">
    
    {/* Animated Avatar */}
    <motion.div
      className="mb-8 md:mb-0 md:mr-16"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <AnimatedAvatar />
      {/* <SimpleAnimatedAvatar/> */}
    </motion.div>
    
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="max-w-xl text-white"
    >
      <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
      <p className="text-lg leading-relaxed">
        Hi, I'm <strong>Ashutosh Dubey</strong>, a passionate <strong>Software Engineer</strong> with 2+ years of professional experience designing robust microservices architectures and scalable backend systems using Java, Kafka, and React/Angular frontends.
        <br /><br />
        As a <strong>freelancer</strong>, I have delivered high-quality websites for clients worldwide, always seeking elegant solutions and taking pride in my work.
        <br /><br />
        I love to dive deep into <strong>system design</strong>, collaborate on creative projects, and continuously learn new technologies.
      </p>
    </motion.div>
  </section>
);

export default About;
