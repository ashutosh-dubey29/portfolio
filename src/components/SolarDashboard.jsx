// SolarDashboard.jsx
// A single React 19 component that orchestrates all 13 unique solar-themed widgets
// Fully responsive, mobile-first layout via TailwindCSS grid + flex

import {
  SunPathTracker,
  SolarPowerMeter,
  BatteryLevelCards,
  SunToggle,
  ScrollRevealPanels,
  DraggablePanel,
  HoverGlowGrid,
  FloatingKWhCounter,
  SolarRoof3D,
  CloudShadowOverlay,
  AnimatedGaugeBar,
  SolarSystemOrbit,
  PanelEfficiencyRing,
} from './SolarComponents';

import { useState } from 'react';

export default function SolarDashboard() {
  // Shared day/night state used by SunToggle & background theming
  const [isDay, setIsDay] = useState(true);

  return (
    <main
      className={`min-h-screen transition-colors duration-700 p-4 sm:p-6 lg:p-8 font-sans ${
        isDay ? 'bg-slate-100' : 'bg-slate-900'
      }`}
    >
      {/* Header with toggle */}
      <header className="mb-6 flex items-center justify-between">
        <h1
          className={`text-2xl sm:text-3xl font-bold ${
            isDay ? 'text-slate-800' : 'text-slate-100'
          }`}
        >
          Solar Energy Dashboard
        </h1>
        <SunToggle isDay={isDay} setIsDay={setIsDay} />
      </header>

      {/* Responsive grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Row 1 */}
        <SunPathTracker />
        <SolarPowerMeter value={isDay ? 76 : 12} />
        <BatteryLevelCards />

        {/* Row 2 */}
        <ScrollRevealPanels />
        <DraggablePanel />
        <HoverGlowGrid />

        {/* Row 3 */}
        <FloatingKWhCounter />
        <SolarRoof3D />
        <CloudShadowOverlay />

        {/* Row 4 */}
        <AnimatedGaugeBar value={isDay ? 60 : 15} />
        <SolarSystemOrbit />
        <PanelEfficiencyRing />
      </div>
    </main>
  );
}