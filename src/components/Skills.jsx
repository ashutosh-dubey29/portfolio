import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaAngular, FaCogs, FaNetworkWired } from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'React JS', icon: <FaReact /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'Kafka', icon: <FaNetworkWired /> },
  { name: 'Microservices', icon: <FaCogs /> },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-3xl text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}>
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center hover:scale-110 transition-transform duration-300">
            {skill.icon}
            <p className="mt-2 text-lg">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
