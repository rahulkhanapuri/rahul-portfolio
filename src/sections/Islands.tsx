import React, { useState } from 'react';

/* ─── Project Interfaces ─────────────────────────────────────── */
interface ProjectIsland {
  id: number;
  name: string;
  category: string;
  islandName: string;
  status: string;
  duration: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  tags: string[];
  themeColor: string;
  glowColor: string;
  borderAccent: string;
  bgFlare: string;
  coords: string;
}

const projects: ProjectIsland[] = [
  {
    id: 0,
    name: "Healthcare LMS",
    category: "Enterprise Laboratory Platform",
    islandName: "Medical Island",
    status: "SYSTEMS OPERATIONAL",
    duration: "Jan 2024 - Apr 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-8KUEL-CEBjnbY3JaOf6Hk5zOeupGShO4w5kJIpDTm4XW7oOdY9yryjGZ4RIvTI7Mjy_zRSGWI5a-N2gVUj_YqUUbLasEw_1ASQVHlOFdprAxo3qr421qtDwig1HJqB5DjkIK4X9FwSqA20WvHK4COeXfq-RY6pBE3CemWtXgZjnzGfp4k_j7o60SDBGEAa4TFO8gCF_JO-bb1oaeIKRujw_12Q-1aocpvBKsb5EYdBCojQrHasCaDtDcE6bnOYdzBB0SbER15GWy",
    imageAlt: "Stylized anime medical facility floating on ocean",
    description: "Architected a scalable Hospital Laboratory Management Platform supporting complex outpatient, emergency, and inpatient diagnostic workloads.",
    highlights: [
      "Boosted runtime application performance by 25%+ with bundle splitting, lazy loading, and memoization.",
      "Engineered dynamic calculation engine for custom laboratory diagnostic parameters.",
      "Designed unified MUI reusable component library, accelerating future team sprints by 30%."
    ],
    tags: ["React", "TypeScript", "Material UI", "Node.js", "Express", "GraphQL", "AWS Lambda", "DynamoDB"],
    themeColor: "text-primary",
    glowColor: "shadow-[0_0_35px_rgba(177,200,233,0.3)]",
    borderAccent: "border-primary/40",
    bgFlare: "rgba(177,200,233,0.15)",
    coords: "08° 14' N, 77° 32' E"
  },
  {
    id: 1,
    name: "Urneeds Patient App",
    category: "Mobile Utility Vessel",
    islandName: "Consumer Shores",
    status: "DEPLOYED & SECURED",
    duration: "Jan 2024 - Apr 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVpYQyisB_GMtusH8Md59YMcLw672kIueUDioFhWHzgMJUe58SGrC1LE-nP5pk4sHAE5ZEE-Yw84J8bkH12TBbf_z1NIdQwmQiRfn0j1T2tpPdUoGjUYz68oYl4LPIoYeWmB0HQx9rxotE-hnaQZSPVUX--igAbabFtp2rh6sKkgl-3OtyC223jSw-Fvm9ZfrLCYAfkSTj6NTXZbG6fpUA3ovYypI4Tt2N33MntJV1WXknp3CyyA39HtcabwR4a52_eqplkY3MXQih",
    imageAlt: "Futuristic lab devices carved into crystal towers",
    description: "Constructed the cross-platform consumer-facing application helping patients schedule appointments, securely download digital test logs, and track transactions.",
    highlights: [
      "Developed secure, encrypted offline reports and fast diagnostic lookup portals.",
      "Integrated Zustand state-caching structures maintaining fluid UI feedback on patchy networks.",
      "Identified and suppressed rendering bottlenecks to achieve consistent 60fps interaction speed."
    ],
    tags: ["React Native", "TypeScript", "Zustand", "Context API", "React Native Paper"],
    themeColor: "text-tertiary",
    glowColor: "shadow-[0_0_35px_rgba(255,179,179,0.3)]",
    borderAccent: "border-tertiary/40",
    bgFlare: "rgba(255,179,179,0.15)",
    coords: "12° 58' N, 77° 35' E"
  },
  {
    id: 2,
    name: "JsonByte Validator",
    category: "Developer Utility Engine",
    islandName: "Validator Archipelago",
    status: "STANDBY IN CALM BELT",
    duration: "Jan 2026 - Feb 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbjNGTufMNQIWrT1UX4NcxRpE62ZXOtuWoa06fiKICebzfoSzCtE0kCBzciQq0hsCU1STunVQzXx11u6238_Ofj_h1bPsEACqu7LLXVrusJCeip6zHMpKBJEvWONW6zA3x9xRoPq7gW0hTxblFAoa5x2RGxVJDo1HQDaGd2NWhj90RStJTvEzcf2KZZqdGidCJD9mmpuEQNwwouga1T9AfaWg4He7CHXbcMuDWEMMn5ZBcHPREm_dby3cCjQkZ0-JL4bZpDNVcdy1Q",
    imageAlt: "Server racks integrated into floating ancient ruins",
    description: "Forged a zero-latency client-side toolkit facilitating instant JSON parsing, validator checks, minification, and conversion schemes.",
    highlights: [
      "Implemented high-speed JavaScript structures parsing massive nested payloads instantly.",
      "Configured highly-durable static distributions via AWS S3, Route 53, and CloudFront edge CDN nodes.",
      "Created sleek developer workspace interface with rapid sidebar toggles."
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "AWS S3", "CloudFront", "Route 53"],
    themeColor: "text-secondary",
    glowColor: "shadow-[0_0_35px_rgba(255,219,60,0.25)]",
    borderAccent: "border-secondary/40",
    bgFlare: "rgba(255,219,60,0.15)",
    coords: "00° 00' N, 00° 00' W"
  }
];

export const Islands: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [blueprintActive, setBlueprintActive] = useState<boolean>(false);
  const activeProject = projects[activeIndex];

  return (
    <section id="islands" className="py-24 px-margin-mobile md:px-margin-desktop max-w-[1600px] mx-auto w-full border-t-4 border-surface-container-highest bg-[#000E1C]/40 relative overflow-hidden">
      
      {/* Background Flare that matches the active project theme */}
      <div 
        className="absolute -right-20 bottom-1/4 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000 ease-in-out opacity-20"
        style={{
          background: activeProject.id === 0 ? '#b1c8e9' : activeProject.id === 1 ? '#ffb3b3' : '#ffdb3c'
        }}
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(47,54,59,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(47,54,59,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="inline-block px-4 py-1.5 border border-secondary/30 rounded-full mb-4 neon-glow bg-surface-container-highest/40 backdrop-blur-sm">
          <span className="font-label-sm text-xs text-secondary uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>map</span> Expedition logs
          </span>
        </div>
        <h2 className="font-display-xl text-display-xl text-on-surface uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,219,60,0.2)]">
          Islands <span className="text-primary opacity-80">/ Archipelago</span>
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
          Navigate through the target islands conquered during my developmental campaigns, each housing specialized software treasures.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* LEFT COMPONENT: Interactive Holographic Island Visualizer */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          
          {/* Island Preview Window */}
          <div 
            className={`glass-panel border-2 rounded-2xl relative overflow-hidden aspect-[4/3] flex flex-col justify-between bg-surface-dim/30 transition-all duration-500 ${activeProject.glowColor}`}
            onMouseEnter={() => setBlueprintActive(true)}
            onMouseLeave={() => setBlueprintActive(false)}
          >
            {/* Project Image */}
            <img 
              alt={activeProject.imageAlt} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                blueprintActive ? 'scale-105 blur-[2px] opacity-40' : 'opacity-85'
              }`}
              src={activeProject.image}
            />

            {/* Radar Sweep Overlay on hover (Sonar simulation) */}
            {blueprintActive && (
              <div className="absolute inset-0 z-10 pointer-events-none border border-primary/20 flex items-center justify-center overflow-hidden">
                {/* Horizontal scanner line */}
                <div className="absolute inset-x-0 h-[2px] bg-primary/40 shadow-[0_0_10px_rgba(177,200,233,0.8)] animate-[scan_2s_linear_infinite]" />
                
                {/* Grid wireframe texture */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #b1c8e9 1px, transparent 1px),
                      linear-gradient(to bottom, #b1c8e9 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />
                
                {/* Sonar coordinate printout */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-primary bg-background/80 px-2 py-1 border border-primary/20 rounded">
                  SCAN STATUS: BLUEPRINT_GRID // OK
                </div>
                
                <span className="font-mono text-xs text-primary font-bold animate-pulse">
                  [ HOLOGRAPHIC SONAR SWEEP ACTIVE ]
                </span>
              </div>
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80" />

            {/* Target marker (Top-right corner telemetry) */}
            <div className="absolute top-4 right-4 bg-background/70 border border-surface-container-highest px-3 py-1.5 rounded-lg font-mono text-[9px] flex flex-col gap-0.5">
              <span className="text-[#b8070f] font-bold">TARGET: <span className="text-[#ffdb3c] font-black">{activeProject.coords}</span></span>
              <span className="text-[#b8070f] font-bold">HDG: <span className="text-[#ffdb3c] font-black">214° SW</span></span>
            </div>

            {/* Display labels */}
            <div className="relative p-6 z-20 mt-auto">
              <span className="font-mono text-[9px] text-outline-variant tracking-widest block uppercase">
                {activeProject.category}
              </span>
              <h3 className="font-headline-lg text-2xl text-on-surface uppercase drop-shadow-md">
                {activeProject.name}
              </h3>
            </div>
          </div>

          {/* Navigational Island Selector Buttons */}
          <div className="flex flex-col gap-3">
            {projects.map((proj, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`glass-panel border p-4 rounded-xl flex items-center justify-between text-left transition-all duration-300 bg-surface-dim/30 hover:bg-surface-bright/10 ${
                    isSelected 
                      ? `${proj.borderAccent} ${proj.glowColor} scale-[1.02] border-2`
                      : 'border-surface-container-highest opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${isSelected ? proj.themeColor : 'text-outline-variant'}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-title-md text-sm text-on-surface font-bold uppercase tracking-wider">
                        {proj.islandName}
                      </h4>
                      <span className="font-mono text-[9px] text-[#b8070f] font-bold block">
                        COORDS: <span className="text-[#ffdb3c] font-black">{proj.coords}</span>
                      </span>
                    </div>
                  </div>
                  
                  <span className={`material-symbols-outlined text-base transition-transform duration-300 ${
                    isSelected ? proj.themeColor + ' translate-x-1' : 'text-outline-variant'
                  }`}>
                    arrow_forward_ios
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* RIGHT COMPONENT: Manifest details drawer */}
        <div className="lg:col-span-7 glass-panel manga-border rounded-2xl p-6 md:p-8 bg-surface-dim/20 relative flex flex-col justify-between">
          
          {/* Manifest header telemetry */}
          <div className="flex justify-between items-center border-b border-surface-container-highest pb-4 mb-6 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#b8070f] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span>SHIPPING_MANIFEST.db</span>
            </div>
            <div className="text-[#b8070f] font-bold">
              ERA: <span className="text-[#ffdb3c] font-black">{activeProject.duration}</span>
            </div>
          </div>

          {/* Details block */}
          <div className="flex-grow flex flex-col justify-between gap-6">
            
            {/* Description log */}
            <div>
              <span className="font-mono text-[9px] text-[#b8070f] tracking-widest uppercase block font-bold">[ OBJECTIVE REPORT ]</span>
              <h3 className="font-display-md text-2xl text-on-surface uppercase tracking-tight mt-1">
                {activeProject.name}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mt-3 leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            {/* Ship Manifest Checklist */}
            <div className="space-y-3">
              <h4 className="font-label-sm text-xs text-[#b8070f] uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#ffdb3c]">assignment_turned_in</span>
                Campaign Achievements
              </h4>
              <div className="space-y-2.5">
                {activeProject.highlights.map((highlight, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 bg-surface-lowest/40 border border-surface-container-highest/60 p-3.5 rounded-xl hover:bg-surface-bright/10 transition-colors"
                    style={{
                      animation: 'fadeSlideUp 0.6s ease-out forwards',
                      animationDelay: `${idx * 150}ms`
                    }}
                  >
                    {/* Glowing golden tick */}
                    <span className="material-symbols-outlined text-secondary text-sm flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <p className="font-body-md text-xs md:text-sm text-on-surface leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cargo Box (Technologies) */}
            <div className="pt-4 border-t border-surface-container-highest">
              <h4 className="font-label-sm text-[10px] text-[#b8070f] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#ffdb3c]">inventory_2</span>
                Cargo Inventory (Tech Stack)
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="font-mono text-[10px] bg-primary/5 text-primary border border-primary/20 px-2.5 py-1 rounded-md uppercase tracking-wider transition-all hover:bg-primary/15 hover:border-primary/40 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Embedded Scan animation keyframes style tag */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}</style>

    </section>
  );
};
