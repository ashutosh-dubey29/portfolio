// SolarComponents.jsx
// A collection of 13 unique, animated, responsive React 19 functional components
// All themed around solar energy and panels

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

/* ----------------------------------------------------------
   1. SunPathTracker – 3D arc that follows fake sun movement
---------------------------------------------------------- */
export function SunPathTracker() {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setAngle(prev => (prev + 1) % 360), 50);
    return () => clearInterval(id);
  }, []);

  // 3D CSS transform
  const x = 50 + 45 * Math.cos((angle * Math.PI) / 180);
  const y = 50 + 45 * Math.sin((angle * Math.PI) / 180);

  return (
    <section className="relative w-full h-64 flex items-center justify-center bg-sky-100 rounded-2xl overflow-hidden">
      <div className="absolute w-full h-full" style={{ perspective: '600px' }}>
        <motion.div
          className="absolute w-12 h-12 bg-yellow-400 rounded-full shadow-lg"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: 'translate(-50%, -50%) rotateX(60deg)',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
      <p className="absolute bottom-4 text-sm font-semibold text-slate-700">
        3D Sun Path Tracker
      </p>
    </section>
  );
}

/* ----------------------------------------------------------
   2. SolarPowerMeter – circular power gauge with glow
---------------------------------------------------------- */
export function SolarPowerMeter({ value = 76 }) {
  const circumference = 2 * Math.PI * 45;
  return (
    <section className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-2xl w-full aspect-square">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            stroke="#1e293b"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            stroke="#22d3ee"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (value / 100) * circumference}
            transform="rotate(-90 50 50)"
            className="drop-shadow-[0_0_6px_#22d3ee]"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - (value / 100) * circumference }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-cyan-300 font-bold text-2xl">
          {value}%
        </div>
      </div>
      <h3 className="mt-2 text-sm text-slate-400">Solar Output</h3>
    </section>
  );
}

/* ----------------------------------------------------------
   3. BatteryLevelCards – flip card energy storage
---------------------------------------------------------- */
export function BatteryLevelCards() {
  const levels = [
    { name: 'Home', level: 87 },
    { name: 'Grid', level: 42 },
    { name: 'Car', level: 66 },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {levels.map(({ name, level }) => (
        <motion.div
          key={name}
          className="relative w-full h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg"
          whileHover={{ rotateY: 180 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <p className="text-slate-100 font-bold">{name}</p>
            <p className="text-cyan-300 text-3xl font-mono">{level}%</p>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center bg-cyan-500 rounded-xl"
            style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          >
            <p className="text-slate-900 font-bold">Charged</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

/* ----------------------------------------------------------
   4. SunToggle – day/night toggle switch
---------------------------------------------------------- */
export function SunToggle({ isDay, setIsDay }) {
  return (
    <button
      onClick={() => setIsDay(!isDay)}
      className="relative w-24 h-10 rounded-full bg-slate-800 flex items-center p-1 transition-colors duration-500"
    >
      <motion.div
        className="absolute w-8 h-8 bg-yellow-400 rounded-full"
        animate={{ x: isDay ? 0 : 40 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <span className="ml-10 text-xs text-white">☀️ / 🌙</span>
    </button>
  );
}

/* ----------------------------------------------------------
   5. ScrollRevealPanels – staggered reveal of solar facts
---------------------------------------------------------- */
export function ScrollRevealPanels() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const facts = [
    'Solar panels can last 25+ years.',
    '1 hour of sunlight = yearly world energy.',
    'Panels work in cloudy weather.',
  ];

  return (
    <motion.section style={{ scale }} className="space-y-4">
      {facts.map((fact, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="bg-white p-4 rounded-xl shadow-md"
        >
          {fact}
        </motion.div>
      ))}
    </motion.section>
  );
}

/* ----------------------------------------------------------
   6. DraggablePanel – drag to rotate a solar cell
---------------------------------------------------------- */
export function DraggablePanel() {
  return (
    <section className="relative w-full h-64 bg-slate-100 rounded-2xl overflow-hidden">
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg shadow-xl cursor-grab"
      />
      <p className="absolute bottom-4 left-4 text-sm text-slate-600">
        Drag the solar cell
      </p>
    </section>
  );
}

/* ----------------------------------------------------------
   7. HoverGlowGrid – mouse proximity glow
---------------------------------------------------------- */
export function HoverGlowGrid() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <section
      onMouseMove={handleMove}
      className="relative w-full h-64 grid grid-cols-5 bg-slate-900 rounded-2xl"
    >
      {[...Array(25)].map((_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const distance = Math.sqrt((col * 64 - mouse.x) ** 2 + (row * 64 - mouse.y) ** 2);
        const brightness = Math.max(0, 1 - distance / 200);
        return (
          <div
            key={i}
            className="border border-slate-700"
            style={{
              background: `rgba(34, 211, 238, ${brightness})`,
            }}
          />
        );
      })}
    </section>
  );
}

/* ----------------------------------------------------------
   8. FloatingKWhCounter – springy number ticker
---------------------------------------------------------- */
export function FloatingKWhCounter() {
  const [kwh, setKwh] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setKwh(prev => prev + Math.random() * 0.1), 1000);
    return () => clearInterval(id);
  }, []);

  const spring = useSpring(kwh, { stiffness: 50, damping: 20 });

  return (
    <section className="flex items-center justify-center w-full h-32 bg-gradient-to-r from-green-400 to-cyan-500 rounded-2xl">
      <motion.span className="text-white text-3xl font-mono">
        {spring}
      </motion.span>
      <span className="text-white text-2xl ml-1">kWh</span>
    </section>
  );
}

/* ----------------------------------------------------------
   9. SolarRoof3D – small 3D roof viewer
---------------------------------------------------------- */
export function SolarRoof3D() {
  return (
    <section className="w-full h-64 flex items-center justify-center bg-slate-200 rounded-2xl">
      <div
        className="relative w-48 h-32"
        style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
      >
        <motion.div
          className="absolute inset-0 bg-slate-700"
          style={{ transform: 'rotateX(60deg) rotateZ(45deg)' }}
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500"
              style={{
                width: 40,
                height: 20,
                left: (i % 4) * 50,
                top: Math.floor(i / 4) * 30,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   10. CloudShadowOverlay – parallax cloud shadow
---------------------------------------------------------- */
export function CloudShadowOverlay() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <section className="relative w-full h-64 bg-sky-400 rounded-2xl overflow-hidden">
      <motion.div
        style={{ x }}
        className="absolute top-10 left-0 w-32 h-16 bg-white/40 rounded-full blur-xl"
      />
      <p className="absolute bottom-4 left-4 text-white font-bold">Cloud shadows</p>
    </section>
  );
}

/* ----------------------------------------------------------
   11. AnimatedGaugeBar – horizontal animated bar
---------------------------------------------------------- */
export function AnimatedGaugeBar({ value = 60 }) {
  return (
    <section className="w-full p-4 bg-slate-800 rounded-2xl">
      <h3 className="text-slate-300 mb-2">Daily Yield</h3>
      <div className="w-full h-6 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   12. SolarSystemOrbit – mini orbit of planets (sun in center)
---------------------------------------------------------- */
export function SolarSystemOrbit() {
  return (
    <section className="relative w-full h-64 flex items-center justify-center bg-slate-900 rounded-2xl">
      <motion.div
        className="absolute w-20 h-20 bg-yellow-400 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-6 h-6 bg-gray-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          offsetPath: 'circle(70px at center)',
        }}
      />
      <motion.div
        className="absolute w-4 h-4 bg-blue-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 2 }}
        style={{
          offsetPath: 'circle(100px at center)',
        }}
      />
    </section>
  );
}

/* ----------------------------------------------------------
   13. PanelEfficiencyRing – interactive ring slider
---------------------------------------------------------- */
export function PanelEfficiencyRing() {
  const [efficiency, setEfficiency] = useState(80);
  return (
    <section className="flex flex-col items-center w-full p-4 bg-slate-800 rounded-2xl">
      <input
        type="range"
        min="0"
        max="100"
        value={efficiency}
        onChange={e => setEfficiency(e.target.value)}
        className="w-full max-w-xs mb-2 accent-cyan-500"
      />
      <svg className="w-32 h-32" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          strokeWidth="8"
          stroke="#334155"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          strokeWidth="8"
          stroke="#22d3ee"
          strokeDasharray={2 * Math.PI * 40}
          strokeDashoffset={(2 * Math.PI * 40 * (100 - efficiency)) / 100}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          className="drop-shadow-[0_0_4px_#22d3ee]"
        />
      </svg>
      <p className="text-cyan-300 font-bold">{efficiency}% Efficiency</p>
    </section>
  );
}