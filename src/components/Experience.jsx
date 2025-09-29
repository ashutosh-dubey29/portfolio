import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Full-Time',
    date: '2023 - Present',
    description:
      'Building scalable microservices architecture, Kafka pipelines, and modern backend systems with Java.',
  },
  {
    title: 'Freelancer',
    company: '',
    date: '2022 - Present',
    description:
      'Worked with startups and enterprises to build responsive frontend and scalable backend solutions.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Experience</h2>
      <div className="flex flex-col space-y-10 max-w-3xl mx-auto">
        {experiences.map(({ title, company, date, description }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="relative pl-12 border-l-4 border-cyan-500"
          >
            <FaBriefcase className="absolute left-0 top-0 bg-cyan-500 rounded-full p-2 text-black" size={24} />
            <h3 className="text-2xl font-semibold">{title}</h3>
            {company && <h4 className="text-cyan-400 mb-1">{company}</h4>}
            <time className="block mb-3 text-gray-400">{date}</time>
            <p className="text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
