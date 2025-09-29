// File: SolarComponents.jsx

import React from "react";
import { motion } from "framer-motion";

// 1. SolarSunAnimation - Animated Sun Orbit
export const SolarSunAnimation = () => (
  <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-yellow-100 to-blue-300">
    <motion.div
      className="absolute w-24 h-24 bg-yellow-400 rounded-full shadow-lg"
      animate={{ x: [0, 400], y: [0, 100, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <p className="absolute bottom-4 left-4 text-sm text-gray-800">Tracking the Sun</p>
  </div>
);

// 2. SolarPanelFlipCard - 3D Flip Info Card
export const SolarPanelFlipCard = () => (
  <div className="perspective-[1000px] w-72 h-48 m-4">
    <div className="relative w-full h-full transition-transform duration-700 transform hover:rotate-y-180">
      <div className="absolute w-full h-full bg-green-200 rounded-lg p-4 backface-hidden">Solar Panel Specs</div>
      <div className="absolute w-full h-full bg-blue-600 text-white rounded-lg p-4 transform rotate-y-180 backface-hidden">Efficiency: 21%<br />Power: 350W</div>
    </div>
  </div>
);

// 3. SolarPowerCounter - Dynamic Power Output Counter
export const SolarPowerCounter = () => {
  const [power, setPower] = React.useState(300);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPower((prev) => 300 + Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white text-center p-4 shadow-md rounded-xl w-60">
      <h3 className="text-lg font-bold text-gray-700">Current Output</h3>
      <p className="text-4xl font-mono text-green-600">{power}W</p>
    </div>
  );
};

// 4. SolarBatteryLevel - Battery Fill Animation
export const SolarBatteryLevel = () => (
  <div className="w-40 h-20 border-4 border-gray-700 rounded-lg relative overflow-hidden">
    <motion.div
      className="absolute bottom-0 left-0 w-full bg-green-500"
      initial={{ height: "20%" }}
      animate={{ height: "80%" }}
      transition={{ duration: 2 }}
    />
    <p className="absolute top-2 left-2 text-sm font-bold">Battery: 80%</p>
  </div>
);

// 5. SolarInstallSteps - Step-by-step Animated Guide
export const SolarInstallSteps = () => {
  const steps = ["Site Survey", "Design", "Installation", "Activation"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 }}
          className="bg-yellow-100 p-4 text-center rounded-xl shadow hover:scale-105 transition"
        >
          {step}
        </motion.div>
      ))}
    </div>
  );
};

// 6. SolarPanelGrid - Hoverable Panel Grid
export const SolarPanelGrid = () => (
  <div className="grid grid-cols-3 gap-2 p-4">
    {Array.from({ length: 9 }).map((_, i) => (
      <div
        key={i}
        className="aspect-square bg-blue-500 hover:bg-green-400 transition duration-300 rounded shadow"
      ></div>
    ))}
  </div>
);

// 7. SolarOutputGraph - Placeholder for animated output graph
export const SolarOutputGraph = () => (
  <div className="p-4 bg-white rounded shadow w-full max-w-xl">
    <p className="text-center text-gray-600">[Animated Graph Placeholder]</p>
  </div>
);

// 8. DayNightToggle - Toggle effect showing sun/moon
export const DayNightToggle = () => {
  const [isDay, setIsDay] = React.useState(true);
  return (
    <div
      className={`w-32 h-32 rounded-full flex items-center justify-center transition-colors duration-700 ${isDay ? "bg-yellow-300" : "bg-gray-800"}`}
      onClick={() => setIsDay(!isDay)}
    >
      <span className="text-white text-xl">{isDay ? "🌞" : "🌚"}</span>
    </div>
  );
};

// 9. SolarTiltAnimation - Tilt changing panel
export const SolarTiltAnimation = () => (
  <motion.div
    className="w-64 h-32 bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg shadow-xl"
    animate={{ rotateX: [0, 30, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
  >
    <p className="text-center pt-12 text-white font-bold">Tilt Adjust</p>
  </motion.div>
);

// 10. SunPathChart - Simulated sun path
export const SunPathChart = () => (
  <svg width="300" height="150" className="mx-auto my-4">
    <path d="M0,100 Q150,-50 300,100" stroke="#fbbf24" fill="transparent" strokeWidth="4" />
    <motion.circle
      r="10"
      fill="#facc15"
      animate={{ cx: [0, 150, 300], cy: [100, 0, 100] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
  </svg>
);

// 11. SolarQuotePopup - Floating call-to-action
export const SolarQuotePopup = () => (
  <motion.div
    className="fixed bottom-4 right-4 bg-cyan-600 text-white px-4 py-2 rounded shadow-xl cursor-pointer"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
  >
    Get a Free Solar Quote ⚡
  </motion.div>
);

// 12. AnimatedPanelSpecs - Expandable panel specs
export const AnimatedPanelSpecs = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-72 mx-auto p-4 bg-gray-100 rounded shadow cursor-pointer" onClick={() => setOpen(!open)}>
      <h4 className="font-bold text-lg text-center">Solar Panel X</h4>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: open ? "auto" : 0 }}
        className="overflow-hidden mt-2 text-sm text-gray-600"
      >
        <ul className="list-disc pl-5">
          <li>Efficiency: 20%</li>
          <li>Voltage: 24V</li>
          <li>Durability: IP67</li>
        </ul>
      </motion.div>
    </div>
  );
};

// 13. SolarHero3D - Hero Banner with floating 3D effect
export const SolarHero3D = () => (
  <div className="relative h-64 bg-gradient-to-br from-white to-blue-100 overflow-hidden">
    <motion.img
      src="/solar-panel.png"
      alt="Floating Solar Panel"
      className="absolute w-48 h-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <h2 className="absolute bottom-4 w-full text-center font-bold text-2xl text-gray-700">Harness the Power of the Sun</h2>
  </div>
);

// You can now import these components individually or use them in a page to showcase different animated solar-related UI features.

const SolarShowcase = () => {
  return (
    <div className="space-y-8 p-8">
      <SolarSunAnimation />
      <SolarPanelFlipCard />
      <SolarPowerCounter />
      <SolarBatteryLevel />
      <SolarInstallSteps />
      <SolarPanelGrid />
      <SolarOutputGraph />
      <DayNightToggle />
      <SolarTiltAnimation />
      <SunPathChart />
      <SolarQuotePopup />
      <AnimatedPanelSpecs />
      <SolarHero3D />
    </div>
  );
};

export default SolarShowcase;
