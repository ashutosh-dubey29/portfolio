import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <Canvas className="absolute w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[45, 45, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="skyblue" wireframe />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <motion.div className="z-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <h1 className="text-5xl md:text-7xl font-bold">Hi, I'm Ashutosh Dubey</h1>
        <p className="text-xl mt-4">
          <Typewriter
            words={[
              'Software Engineer 🤖',
              'Java Backend Developer ☕',
              'React & Angular Frontend 🚀',
              'Microservices Architect 🧩',
              'Freelancer 💡',
              'System Design Enthusiast 📐'
            ]}
            loop
            cursor
          />
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
