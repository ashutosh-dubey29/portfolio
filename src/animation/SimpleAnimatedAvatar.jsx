import React from 'react';
import { motion } from 'framer-motion';

const SimpleAnimatedAvatar = () => {
  return (
    <motion.div
      className="relative w-56 h-56 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated face */}
        <motion.div
          className="text-8xl"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          👨‍💻
        </motion.div>
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-4 right-4 text-cyan-400"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          ✨
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SimpleAnimatedAvatar;
