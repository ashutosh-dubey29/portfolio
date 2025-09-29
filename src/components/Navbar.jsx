import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo/Profile + Name grouped side by side */}
        <div className="flex items-center">
          <img
            src="/portfolio.png"
            alt="Ashutosh Dubey"
            className="h-8 w-8 rounded-full mr-3 border-2 border-cyan-400 object-cover"
          />
          <div className="font-bold text-xl text-cyan-400 cursor-pointer">
            Ashutosh Dubey
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((item, idx) => (
            <li key={idx} className="text-lg font-semibold">
              <Link
                to={item.to}
                smooth
                spy
                offset={-80}
                duration={500}
                activeClass="text-cyan-400"
                className="cursor-pointer transition-colors hover:text-cyan-400"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-3xl text-cyan-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="md:hidden backdrop-blur-md bg-gray-900/90 fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-40"
          >
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((item, idx) => (
                <li key={idx} className="text-2xl font-semibold">
                  <Link
                    to={item.to}
                    smooth
                    spy
                    offset={-80}
                    duration={500}
                    activeClass="text-cyan-400"
                    className="cursor-pointer transition-colors hover:text-cyan-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
