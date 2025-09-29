import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    name: "StockTalks.in",
    description: "A modern trading and stock analysis platform — real-time market data, trading education, crypto analysis, and interactive charts.",
    link: "https://stocktalks.in/",
    image: "/stocktalks.png",
    tech: ["React", "TradingView", "API integration"]
  },
  {
    name: "VrindavanGhar.com",
    description: "Spiritual real estate site for Krishna devotees — smooth image galleries, WhatsApp forms, and beautiful themed UX.",
    link: "https://vrindavanghar.com/",
    image: "/vrindavan.png",
    tech: ["React", "Tailwind CSS", "Animations"]
  },
  {
    name: "Radha Devi Media Solutions",
    description: "Digital marketing and content agency site — branded designs, SEO-driven layout, and custom business sections.",
    link: "https://radhadevimediasolutions.com/",
    image: "/radhadevi.jpeg",
    tech: ["React", "SEO", "Business CMS"]
  },
  {
    name: "Solarkia.in",
    description: "Solar energy business site — product slideshows, booking forms, warranty/consultation, and futuristic service pages.",
    link: "https://solarkia.in/",
    image: "/solar.png",
    tech: ["React", "Booking Forms", "Service Pages"]
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 }
};

const Projects = () => (
  <section id="projects" className="py-20 px-4 md:px-20 bg-gradient-to-tr from-black via-gray-900 to-gray-800">
    <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Clients & Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {projects.map((p, idx) => (
        <motion.div
          key={p.name}
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.25 }}
        >
          <Tilt glareEnable glareMaxOpacity={0.15} scale={1.04} className="cursor-pointer">
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <div className="rounded-3xl overflow-hidden shadow-3xl bg-gradient-to-tr from-gray-800/70 to-gray-700/80 border border-cyan-400/15 hover:border-cyan-400 transition-all duration-300">
                <div className="relative h-48 w-full bg-gradient-to-br from-cyan-400/30 to-pink-400/20 flex items-center justify-center">
                  <img src={p.image} alt={p.name} className="object-cover w-full h-full" />
                  <span className="absolute top-3 right-4 bg-black/70 text-white px-3 py-1 rounded-xl text-xs border border-cyan-400/30">Live</span>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className="text-gray-300 mb-2">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tech.map((tag, i) => (
                      <span key={i} className="bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
