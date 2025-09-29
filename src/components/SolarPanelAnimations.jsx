/* SolarPanelAnimations.jsx
 * Drop-in animated / stylised solar-panel elements
 * -----------------------------------------------
 * 10 animations   : Idle, Pulse, Rotate, SunTrack, DataFlow,
 *                   Ripple, Charge, Flip, Spark, Efficiency
 * 3  2-D effects  : Glow, ScanLine, DataLabel
 * 3  3-D effects  : PanelTilt, Shadow, DepthGlint
 *
 * Usage example:
 *   import { PulsePanel, Glow, PanelTilt } from './SolarPanelAnimations';
 *   ...
 *   <PanelTilt>
 *     <PulsePanel size={160} color="#00ff90"/>
 *   </PanelTilt>
 */

import React from 'react';

/* ------------------------------------------------------------------
 * Helper styles used by many components
 * ------------------------------------------------------------------ */
const panelBase = {
  position: 'relative',
  background: '#111',
  border: '1px solid #333',
  borderRadius: 8,
  overflow: 'hidden',
  display: 'inline-block',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6,1fr)',
  gridTemplateRows: 'repeat(10,1fr)',
  width: '100%',
  height: '100%',
};

const cell = {
  background: 'rgba(0,255,144,0.35)',
  margin: 1,
  borderRadius: 2,
};

/* ------------------------------------------------------------------
 * 10 Animation Components
 * ------------------------------------------------------------------ */

// 1. Idle (subtle shimmer)
export const IdlePanel = ({ size = 120, color = '#00ff90' }) => (
  <div
    style={{
      ...panelBase,
      width: size,
      height: size * 1.6,
      animation: 'idle 4s ease-in-out infinite',
    }}
  >
    <div style={grid}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} style={{ ...cell, background: `${color}55` }} />
      ))}
    </div>
    <style>{`
      @keyframes idle {
        0%,100% {filter: brightness(1);}
        50% {filter: brightness(1.15);}
      }
    `}</style>
  </div>
);

// 2. Pulse
export const PulsePanel = ({ size = 120, color = '#00ff90' }) => (
  <div
    style={{
      ...panelBase,
      width: size,
      height: size * 1.6,
      animation: `pulse 2s infinite`,
    }}
  >
    <div style={grid}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} style={{ ...cell, background: color }} />
      ))}
    </div>
    <style>{`
      @keyframes pulse {
        0%   {box-shadow: 0 0 0 0 ${color}aa;}
        70%  {box-shadow: 0 0 0 ${size / 3}px ${color}00;}
        100% {box-shadow: 0 0 0 0 ${color}00;}
      }
    `}</style>
  </div>
);

// 3. Rotate
export const RotatePanel = ({ size = 120 }) => (
  <div
    style={{
      ...panelBase,
      width: size,
      height: size * 1.6,
      animation: 'rotate 8s linear infinite',
    }}
  >
    <div style={grid}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} style={cell} />
      ))}
    </div>
    <style>{`
      @keyframes rotate {
        from {transform: rotateY(0deg);}
        to   {transform: rotateY(360deg);}
      }
    `}</style>
  </div>
);

// 4. SunTrack (panel tilts toward an imaginary sun)
export const SunTrackPanel = ({ size = 120 }) => {
  const [angle, setAngle] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setAngle((a) => (a + 1) % 360), 60);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      style={{
        ...panelBase,
        width: size,
        height: size * 1.6,
        transform: `perspective(400px) rotateY(${Math.sin(angle * 0.02) * 35}deg)`,
        transition: 'transform 0.1s linear',
      }}
    >
      <div style={grid}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} style={cell} />
        ))}
      </div>
    </div>
  );
};

// 5. DataFlow (animated dots running across)
export const DataFlowPanel = ({ size = 120 }) => (
  <div style={{ ...panelBase, width: size, height: size * 1.6 }}>
    <div style={grid}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          style={{
            ...cell,
            animation: `flow 2s linear infinite`,
            animationDelay: `${(i % 6) * 0.2}s`,
          }}
        />
      ))}
    </div>
    <style>{`
      @keyframes flow {
        0%   {background:rgba(0,255,144,.05);}
        50%  {background:rgba(0,255,144,.9);}
        100% {background:rgba(0,255,144,.05);}
      }
    `}</style>
  </div>
);

// 6. Ripple (expanding rings)
export const RipplePanel = ({ size = 120 }) => (
  <div
    style={{
      ...panelBase,
      width: size,
      height: size * 1.6,
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        border: '2px solid #00ff90',
        borderRadius: '50%',
        animation: 'ripple 2s infinite',
      }}
    />
    <div style={grid}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} style={cell} />
      ))}
    </div>
    <style>{`
      @keyframes ripple {
        0%   {transform:scale(.3);opacity:1;}
        100% {transform:scale(1.5);opacity:0;}
      }
    `}</style>
  </div>
);

// 7. Charge (battery-like fill-up)
export const ChargePanel = ({ size = 120 }) => (
  <div
    style={{
      ...panelBase,
      width: size,
      height: size * 1.6,
      background: 'linear-gradient(to top, #00ff90 0%, #00ff90 var(--p,0%), #111 var(--p,0%))',
      animation: 'charge 3s linear infinite',
    }}
  >
    <div style={grid}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} style={{ ...cell, background: 'transparent' }} />
      ))}
    </div>
    <style>{`
      @keyframes charge {
        0%   {--p:0%;}
        100% {--p:100%;}
      }
    `}</style>
  </div>
);

// 8. Flip (card flip)
export const FlipPanel = ({ size = 120 }) => (
  <div
    style={{
      ...panelBase,
      width: size,
      height: size * 1.6,
      animation: 'flip 2.5s infinite',
    }}
  >
    <div style={grid}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} style={cell} />
      ))}
    </div>
    <style>{`
      @keyframes flip {
        0%,100%{transform:rotateY(0deg);}
        50%{transform:rotateY(180deg);}
      }
    `}</style>
  </div>
);

// 9. Spark (random flash)
export const SparkPanel = ({ size = 120 }) => {
  const [flash, setFlash] = React.useState(false);
  React.useEffect(() => {
    const id = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 200);
    }, 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      style={{
        ...panelBase,
        width: size,
        height: size * 1.6,
        filter: flash ? 'brightness(2) contrast(1.2)' : 'brightness(1)',
        transition: 'filter 0.15s',
      }}
    >
      <div style={grid}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} style={cell} />
        ))}
      </div>
    </div>
  );
};

// 10. Efficiency (meter bar on side)
export const EfficiencyPanel = ({ size = 120 }) => {
  const [eff, setEff] = React.useState(20);
  React.useEffect(() => {
    const id = setInterval(() => setEff(Math.floor(Math.random() * 60) + 40), 800);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      style={{
        ...panelBase,
        width: size,
        height: size * 1.6,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ ...grid, width: '80%' }}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} style={cell} />
        ))}
      </div>
      <div
        style={{
          width: 8,
          height: `${eff}%`,
          background: '#00ff90',
          marginLeft: 6,
          transition: 'height 0.4s',
        }}
      />
    </div>
  );
};

/* ------------------------------------------------------------------
 * 2-D Effects (wrappers)
 * ------------------------------------------------------------------ */

// Glow wrapper (adds blurred colored aura)
export const Glow = ({ children, color = '#00ff90', size = 20 }) => (
  <div style={{ filter: `drop-shadow(0 0 ${size}px ${color})` }}>{children}</div>
);

// Scan-line overlay
export const ScanLine = ({ children, opacity = 0.25 }) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {children}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0,255,144,${opacity}) 2px,
          rgba(0,255,144,${opacity}) 4px
        )`,
        pointerEvents: 'none',
      }}
    />
  </div>
);

// Simple data-label overlay
export const DataLabel = ({ children, text = '120 W' }) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {children}
    <div
      style={{
        position: 'absolute',
        top: 4,
        right: 4,
        background: '#0009',
        color: '#0f9',
        padding: '2px 6px',
        fontSize: 10,
        borderRadius: 3,
      }}
    >
      {text}
    </div>
  </div>
);

/* ------------------------------------------------------------------
 * 3-D Effects (wrappers)
 * ------------------------------------------------------------------ */

// PanelTilt (CSS 3-D rotation)
export const PanelTilt = ({ children, rx = 15, ry = -20 }) => (
  <div
    style={{
      perspective: 800,
      display: 'inline-block',
    }}
  >
    <div
      style={{
        transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  </div>
);

// Shadow helper (drops an elliptical shadow)
export const Shadow = ({ children, offset = 15, blur = 20 }) => (
  <div
    style={{
      display: 'inline-block',
      filter: `drop-shadow(${offset}px ${offset}px ${blur}px rgba(0,0,0,.6))`,
    }}
  >
    {children}
  </div>
);

// Depth-glint (moving specular highlight)
export const DepthGlint = ({ children }) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {children}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(135deg, rgba(255,255,255,.25) 0%, transparent 40%, transparent 60%, rgba(255,255,255,.15) 100%)',
        animation: 'glint 4s infinite',
        pointerEvents: 'none',
      }}
    />
    <style>{`
      @keyframes glint {
        0%   {transform: translateX(-100%) translateY(-100%);}
        100% {transform: translateX(100%) translateY(100%);}
      }
    `}</style>
  </div>
);