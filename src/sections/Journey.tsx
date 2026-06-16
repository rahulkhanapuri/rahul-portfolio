import React, { useState, useEffect } from 'react';

/* ─── Interfaces & Data ───────────────────────────────────────── */
interface Milestone {
  id: number;
  title: string;
  subtitle: string;
  dates: string;
  coords: string;
  status: string;
  description: string;
  treasures: string[];
  tech: string[];
  // Grid/SVG percentage positions
  mapX: number; // 0-100%
  mapY: number; // 0-100%
  icon: string;
}

const milestones: Milestone[] = [
  {
    id: 0,
    title: "The Academy Isles",
    subtitle: "Education & Foundations",
    dates: "2017 - 2023",
    coords: "16.18° N, 75.70° E",
    status: "ARCHIVED",
    description: "Laid down the bedrock of computer engineering, computational mathematics, and software design principles. Navigated through fundamental programming logic, data structures, and systemic algorithms.",
    treasures: [
      "B.E. in Computer Science & Engineering - Basaveshwar Engineering College (2020 – 2023)",
      "Diploma in Computer Science - SNJPSNMS Polytechnic (2017 – 2020)"
    ],
    tech: ["Data Structures", "Algorithms", "C/C++", "Java", "SQL", "OOP Design"],
    mapX: 25,
    mapY: 70,
    icon: "school"
  },
  {
    id: 1,
    title: "Urneeds Outpost",
    subtitle: "Senior Software Engineer Campaign",
    dates: "Jan 2024 - Apr 2026",
    coords: "12.97° N, 77.59° E (Bangalore)",
    status: "ACTIVE VOYAGE",
    description: "Took command of core application architecture. Engineered complex hospital & laboratory workflows, structured medical calculation frameworks, and managed high-performance consumer mobile channels.",
    treasures: [
      "Laboratory Management System: Supported OPD, ED, and Inpatient diagnostic pipelines.",
      "Urneeds Consumer Mobile App: Developed complete React Native + TS application.",
      "Reusable UI System: Authored modular design components decreasing design-to-code time.",
      "Mentored engineering cadets and introduced clean coding paradigms."
    ],
    tech: ["React.js", "React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "DynamoDB", "Material UI"],
    mapX: 75,
    mapY: 30,
    icon: "rocket_launch"
  }
];

/* ─── HUD Stat Counter ───────────────────────────────────────── */
const InstrumentMeter: React.FC<{ value: string; label: string; active: boolean; index: number }> = ({
  value, label, active, index
}) => {
  return (
    <div
      className={`glass-panel border-t-2 p-5 text-center relative overflow-hidden transition-all duration-500 bg-surface-dim/40 ${active
        ? 'border-secondary shadow-[0_0_25px_rgba(255,219,60,0.25)] scale-[1.03] bg-surface-bright/20'
        : 'border-surface-container-highest opacity-70 hover:opacity-100 hover:scale-[1.01]'
        }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Decorative gauge tick marks */}
      <div className="absolute top-2 left-2 right-2 flex justify-between pointer-events-none opacity-20">
        <span className="text-[6px] font-mono">0%</span>
        <span className="text-[6px] font-mono">50%</span>
        <span className="text-[6px] font-mono">100%</span>
      </div>
      <div className="w-1.5 h-1.5 rounded-full absolute top-2.5 left-1/2 -translate-x-1/2 bg-outline-variant animate-pulse" />

      <div className={`font-display-xl text-display-md md:text-display-xl ${active ? 'text-secondary drop-shadow-[0_0_10px_rgba(255,219,60,0.4)]' : 'text-on-surface'} mt-3`}>
        {value}
      </div>
      <div className="font-label-sm text-[10px] md:text-label-sm text-[#b8070f] uppercase tracking-widest mt-1 font-bold">
        {label}
      </div>
    </div>
  );
};

export const Journey: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [typingText, setTypingText] = useState<string>('');
  const activeMilestone = milestones[activeIndex];

  // Typewriter effect when milestone changes
  useEffect(() => {
    let active = true;
    let currentText = '';
    let charIndex = 0;
    const rawText = activeMilestone.description;
    setTypingText('');

    const type = () => {
      if (!active) return;
      if (charIndex < rawText.length) {
        currentText += rawText.charAt(charIndex);
        setTypingText(currentText);
        charIndex++;
        setTimeout(type, 12);
      }
    };
    type();

    return () => {
      active = false;
    };
  }, [activeIndex]);

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/5 via-[#000E1C] to-surface-dim border-t-4 border-surface-container-highest">

      {/* Chart Graticule / Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(177,200,233,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(177,200,233,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Compass Rose Accent Background */}
      <div className="absolute -right-24 -top-24 w-96 h-96 border border-primary/10 rounded-full pointer-events-none opacity-25 flex items-center justify-center animate-[spin_120s_linear_infinite]">
        <div className="w-80 h-80 border border-dashed border-primary/20 rounded-full" />
        <div className="w-64 h-64 border border-primary/10 rounded-full" />
        <div className="absolute w-full h-px bg-primary/10" />
        <div className="absolute h-full w-px bg-primary/10" />
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1.5 border border-secondary/30 rounded-full mb-4 neon-glow bg-surface-container-highest/40 backdrop-blur-sm">
            <span className="font-label-sm text-xs text-secondary uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">explore</span> Log Pose Navigation
            </span>
          </div>
          <h2 className="font-display-xl text-display-xl text-on-surface uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,219,60,0.2)]">
            Charting the <span className="text-secondary">Unknown</span>
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
            Plotting the course of technical voyages and professional crew deployments across the Grand Line of web architecture.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT PANEL: Log Pose Navigation Chart */}
          <div className="lg:col-span-5 glass-panel manga-border rounded-2xl p-6 relative bg-surface-dim/20 flex flex-col justify-between overflow-hidden min-h-[400px]">

            {/* Chart Title / Coordinates Header */}
            <div className="flex justify-between items-center z-10 mb-4 bg-surface-container-lowest/60 p-3 rounded-lg border border-surface-container-highest font-mono text-xs">
              <div className="flex items-center gap-2 text-[#b8070f] font-bold">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                <span className="tracking-widest uppercase">NAV_CHART.sys</span>
              </div>
              <div className="text-[#b8070f] font-bold">
                WIND: <span className="text-[#ffdb3c] font-black">14KTS SE</span>
              </div>
            </div>

            {/* Interactive Sea Chart Area */}
            <div className="flex-grow relative border border-dashed border-primary/20 rounded-xl bg-surface-lowest/40 backdrop-blur-sm overflow-hidden min-h-[280px]">

              {/* Latitude/Longitude lines */}
              <div className="absolute inset-x-0 top-1/4 border-b border-primary/5 font-mono text-[8px] text-[#b8070f] font-bold pl-2">LAT 15° N</div>
              <div className="absolute inset-x-0 top-2/3 border-b border-primary/5 font-mono text-[8px] text-[#b8070f] font-bold pl-2">LAT 12° N</div>
              <div className="absolute left-1/3 inset-y-0 border-r border-primary/5 font-mono text-[8px] text-[#b8070f] font-bold pt-2 pl-1">LON 75° E</div>
              <div className="absolute left-2/3 inset-y-0 border-r border-primary/5 font-mono text-[8px] text-[#b8070f] font-bold pt-2 pl-1">LON 77° E</div>

              {/* Navigation SVG Routes */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b1c8e9" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#ffdb3c" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ffb3b3" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Underlay route shadow */}
                <path
                  d="M 25 70 C 40 70, 60 30, 75 30"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.4)"
                  strokeWidth="3"
                />
                {/* Dashed background path */}
                <path
                  d="M 25 70 C 40 70, 60 30, 75 30"
                  fill="none"
                  stroke="rgba(255, 219, 60, 0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
                {/* Active Glowing Path */}
                <path
                  d="M 25 70 C 40 70, 60 30, 75 30"
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-[dash_8s_linear_infinite]"
                  style={{ strokeDashoffset: 100 }}
                />
              </svg>

              {/* Interactive Node Islands */}
              {milestones.map((m, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveIndex(idx)}
                    className="absolute group/node z-20 focus:outline-none"
                    style={{
                      left: `${m.mapX}%`,
                      top: `${m.mapY}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Ring Pulse */}
                    <span className={`absolute -inset-4 rounded-full border border-dashed transition-all duration-500 scale-90 opacity-0 group-hover/node:opacity-100 group-hover/node:scale-110 ${isActive ? 'border-secondary opacity-60 scale-105 animate-[spin_12s_linear_infinite]' : 'border-primary/30'
                      }`} />

                    {/* Glowing Core */}
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-surface-lowest transition-all duration-300 ${isActive
                      ? 'border-secondary text-secondary shadow-[0_0_15px_rgba(255,219,60,0.6)] scale-110'
                      : 'border-primary/40 text-primary/70 hover:border-secondary hover:text-secondary hover:scale-105'
                      }`}>
                      <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {m.icon}
                      </span>
                    </div>

                    {/* Tooltip Label */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-lowest/90 border border-surface-container-highest px-2.5 py-1 rounded text-[10px] font-mono tracking-wider opacity-80 group-hover/node:opacity-100 transition-opacity font-bold">
                      {m.title}
                    </div>
                  </button>
                );
              })}

              {/* Moving Vessel (Ship) Marker */}
              <div
                className="absolute z-30 pointer-events-none transition-all duration-1000 ease-in-out"
                style={{
                  left: `${activeMilestone.mapX}%`,
                  top: `${activeMilestone.mapY}%`,
                  transform: 'translate(-50%, -100%)', // Lift slightly off core
                }}
              >
                {/* Ship Indicator Glow */}
                <div className="w-6 h-6 rounded-full bg-secondary/15 absolute -left-1.5 -top-1.5 animate-ping" />
                <span className="material-symbols-outlined text-secondary text-2xl drop-shadow-[0_0_8px_rgba(255,219,60,0.8)] animate-[floatY_3s_ease-in-out_infinite]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  sailing
                </span>
              </div>
            </div>

            {/* Instruction Footer */}
            <div className="mt-4 text-[10px] font-mono text-outline-variant text-center tracking-wider">
              [ CLICK ON CHART NODES TO PLOT SHIFT IN VOYAGE ]
            </div>
          </div>

          {/* RIGHT PANEL: Captain's Log Reader */}
          <div className="lg:col-span-7 glass-panel manga-border rounded-2xl p-6 relative bg-surface-dim/20 flex flex-col justify-between min-h-[400px]">

            {/* Terminal Topbar */}
            <div className="flex justify-between items-center border-b border-surface-container-highest pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/40" />
                <span className="w-3 h-3 rounded-full bg-secondary/40" />
                <span className="w-3 h-3 rounded-full bg-primary/40" />
                <span className="font-mono text-xs text-[#b8070f] ml-2 tracking-wide uppercase font-bold">captains_log.sh</span>
              </div>
              <div className="font-mono text-[10px] text-[#b8070f] font-bold bg-surface-container-high px-2.5 py-1 rounded border border-surface-container-highest">
                STATUS: <span className="text-[#ffdb3c] font-black">{activeMilestone.status}</span>
              </div>
            </div>

            {/* Main Content Viewer */}
            <div className="flex-grow flex flex-col justify-between">

              {/* Log Metadata Headers */}
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-display-md text-2xl text-secondary uppercase tracking-tight">
                    {activeMilestone.title}
                  </h3>
                  <span className="font-mono text-xs text-[#ffdb3c] font-black tracking-widest">{activeMilestone.dates}</span>
                </div>
                <div className="font-mono text-xs text-[#ffdb3c] font-black mt-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#b8070f]">pin_drop</span>
                  COORDS: {activeMilestone.coords}
                </div>
              </div>

              {/* Log Entry Narrative */}
              <div className="min-h-[90px] font-body-md text-sm text-on-surface-variant leading-relaxed bg-surface-lowest/30 p-4 rounded-xl border border-surface-container-highest/60 relative overflow-hidden">
                {/* Watermark grid coordinate */}
                <div className="absolute right-3 bottom-1 font-mono text-[9px] text-primary/10 tracking-widest select-none font-bold">
                  {activeMilestone.coords}
                </div>
                <p className="font-mono text-[13px]">
                  {typingText}
                  <span className="w-1.5 h-3.5 ml-0.5 inline-block bg-secondary animate-pulse" />
                </p>
              </div>

              {/* Discoveries / Accomplishments (Treasures) */}
              <div className="mt-5 space-y-3">
                <h4 className="font-label-sm text-xs text-[#b8070f] uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-[#ffdb3c]">token</span> Discoveries & Loot Acquired
                </h4>
                <div className="grid grid-cols-1 gap-2.5 max-h-[160px] overflow-y-auto pr-1">
                  {activeMilestone.treasures.map((treasure, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-surface-lowest/40 p-2.5 rounded-lg border border-surface-container-highest hover:bg-surface-bright/10 transition-colors"
                      style={{
                        animation: 'fadeSlideUp 0.5s ease-out forwards',
                        animationDelay: `${idx * 150}ms`
                      }}
                    >
                      <span className="material-symbols-outlined text-secondary text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                        workspace_premium
                      </span>
                      <p className="font-body-md text-xs text-on-surface leading-relaxed">{treasure}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack badging */}
              <div className="mt-5 pt-4 border-t border-surface-container-highest">
                <h4 className="font-label-sm text-[10px] text-[#b8070f] uppercase tracking-widest font-bold mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-[#ffdb3c]">terminal</span> Skills Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeMilestone.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] bg-primary/5 text-primary border border-primary/20 px-2 py-0.5 rounded uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* HUD Statistics Instruments */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-panel-gap">
          <InstrumentMeter value="2+" label="Years at Sea" active={activeIndex === 1} index={0} />
          <InstrumentMeter value="25%+" label="App Optimization" active={activeIndex === 1} index={1} />
          <InstrumentMeter value="30%" label="Dev Time Saved" active={activeIndex === 1} index={2} />
          <InstrumentMeter value="23+" label="Haki Skills" active={activeIndex === 0 || activeIndex === 1} index={3} />
        </div>

      </div>
    </section>
  );
};
