import React from 'react';
import { motion } from 'framer-motion';

const AnimatedAvatar = () => {
  return (
    <motion.div
      className="relative w-56 h-56"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Animated glow background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Avatar SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill="#1f2937" stroke="#06b6d4" strokeWidth="3" />
        
        {/* Face */}
        <circle cx="100" cy="100" r="80" fill="#fbbf24" />
        
        {/* Eyes */}
        <motion.circle
          cx="80" cy="85" r="8" fill="#1f2937"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.circle
          cx="120" cy="85" r="8" fill="#1f2937"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        
        {/* Smile */}
        <motion.path
          d="M 80 120 Q 100 140 120 120"
          stroke="#1f2937"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          animate={{ d: ["M 80 120 Q 100 140 120 120", "M 80 125 Q 100 135 120 125", "M 80 120 Q 100 140 120 120"] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Hair */}
        <path d="M 30 70 Q 50 20 100 25 Q 150 20 170 70 Q 160 50 100 45 Q 40 50 30 70" fill="#1f2937" />
        
        {/* Animated particles around avatar */}
        <motion.circle
          cx="50" cy="50" r="3" fill="#06b6d4"
          animate={{
            cx: [50, 60, 50],
            cy: [50, 40, 50],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="150" cy="160" r="2" fill="#ec4899"
          animate={{
            cx: [150, 140, 150],
            cy: [160, 170, 160],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
      
      {/* Floating code symbols */}
      {/* <motion.div
        className="absolute -top-4 -right-4 text-cyan-400 text-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {'</>'}
      </motion.div> */}
      
      {/* <motion.div
        className="absolute -bottom-4 -left-4 text-pink-400 text-lg"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -360],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        ⚡
      </motion.div> */}
    </motion.div>
  );
};

export default AnimatedAvatar;
