import React, { useState, useEffect } from 'react';

/* ─── Interfaces & Skill Data ────────────────────────────────── */
interface HakiSkill {
  name: string;
  icon: string;
  proficiency: number; // 0-100
  role: string;
}

interface HakiCategory {
  id: 'observation' | 'armament' | 'conquerors';
  title: string;
  japanese: string;
  themeColor: string;
  glowClass: string;
  activeBorder: string;
  bgGradient: string;
  bulletColor: string;
  icon: string;
  description: string;
  skills: HakiSkill[];
}

const hakiCategories: HakiCategory[] = [
  {
    id: 'observation',
    title: "Observation Haki",
    japanese: "Kenbunshoku Haki",
    themeColor: "text-[#79A0E3]", // Sleek blue
    glowClass: "shadow-[0_0_35px_rgba(121,160,227,0.3)] border-[#79A0E3]/50",
    activeBorder: "border-[#79A0E3]",
    bgGradient: "from-[#79A0E3]/10 to-transparent",
    bulletColor: "bg-[#79A0E3]",
    icon: "visibility",
    description: "Grants absolute user-experience foresight. Predicts rendering cycles, visualizes state transitions before they execute, and perceives type-safety boundaries.",
    skills: [
      { name: "React.js", icon: "code", proficiency: 95, role: "Component Core Mastery" },
      { name: "React Native", icon: "app_shortcut", proficiency: 92, role: "Mobile Channel Pilot" },
      { name: "TypeScript", icon: "terminal", proficiency: 90, role: "Strict Typings Guardian" },
      { name: "JavaScript", icon: "javascript", proficiency: 95, role: "Core Engine Logic" },
      { name: "CSS3 / HTML5", icon: "web", proficiency: 93, role: "Layout Architect" },
      { name: "Zustand & Redux", icon: "hub", proficiency: 88, role: "State Synchronization" }
    ]
  },
  {
    id: 'armament',
    title: "Armament Haki",
    japanese: "Busoshoku Haki",
    themeColor: "text-[#FFDB3C]", // Glowing gold
    glowClass: "shadow-[0_0_35px_rgba(255,219,60,0.25)] border-[#FFDB3C]/50",
    activeBorder: "border-[#FFDB3C]",
    bgGradient: "from-[#FFDB3C]/10 to-transparent",
    bulletColor: "bg-[#FFDB3C]",
    icon: "shield",
    description: "Hardens the software infrastructure. Coats backend pipelines in unbreakable armor to shield databases, secure endpoints, and absorb concurrent user traffic spikes.",
    skills: [
      { name: "Node.js & Express", icon: "dns", proficiency: 90, role: "Server Runtime Core" },
      { name: "AWS Lambda", icon: "cloud", proficiency: 88, role: "Serverless Calculations" },
      { name: "DynamoDB / Mongo", icon: "database", proficiency: 86, role: "Database Persistence" },
      { name: "Cognito Auth", icon: "lock", proficiency: 85, role: "Secured Identity Shield" },
      { name: "CloudFront CDN", icon: "public", proficiency: 87, role: "Global Delivery Pipeline" },
      { name: "AWS S3 Storage", icon: "cloud_upload", proficiency: 90, role: "Static Asset Vault" }
    ]
  },
  {
    id: 'conquerors',
    title: "Conqueror's Haki",
    japanese: "Haoshoku Haki",
    themeColor: "text-[#FF7373]", // Crimson Red
    glowClass: "shadow-[0_0_35px_rgba(255,115,115,0.3)] border-[#FF7373]/50",
    activeBorder: "border-[#FF7373]",
    bgGradient: "from-[#FF7373]/10 to-transparent",
    bulletColor: "bg-[#FF7373]",
    icon: "bolt",
    description: "The rare ability to dominate complex networks. Bends APIs, compiler bundlers, and testing runners to absolute submission while orchestrating cross-functional teams.",
    skills: [
      { name: "GraphQL & REST", icon: "sync_alt", proficiency: 91, role: "Network Data Dominator" },
      { name: "CI/CD Pipelines", icon: "build", proficiency: 88, role: "Continuous Assembly" },
      { name: "AI/ML Integration", icon: "psychology", proficiency: 85, role: "Autonomous Co-Piloting" },
      { name: "Vite / Webpack", icon: "speed", proficiency: 90, role: "Bundle Compression Haki" },
      { name: "Jest / Testing", icon: "bug_report", proficiency: 87, role: "Debug & Quality Suppression" },
      { name: "Agile / Git Flow", icon: "groups", proficiency: 92, role: "Fleet Coordination" }
    ]
  }
];

export const Bounties: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<HakiCategory>(hakiCategories[0]);
  const [animateProgress, setAnimateProgress] = useState(false);

  // Trigger progress bar animation on tab change
  useEffect(() => {
    setAnimateProgress(false);
    const timer = setTimeout(() => setAnimateProgress(true), 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="bounties" className="py-24 px-margin-mobile md:px-margin-desktop max-w-[1600px] mx-auto w-full border-t-4 border-surface-container-highest bg-[#000E1C]/40 relative overflow-hidden">
      
      {/* Background Ambience Orbs matching the active Haki color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000 ease-in-out opacity-25"
        style={{
          background: activeCategory.id === 'observation' ? '#79A0E3' : activeCategory.id === 'armament' ? '#FFDB3C' : '#FF7373'
        }}
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2f363b 1px, transparent 1px)",
          backgroundSize: '24px 24px'
        }}
      />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="inline-block px-4 py-1.5 border border-secondary/30 rounded-full mb-4 neon-glow bg-surface-container-highest/40 backdrop-blur-sm">
          <span className="font-label-sm text-xs text-secondary uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#ffdb3c]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span> <span className="text-[#b8070f] font-bold">Combat Statistics</span>
          </span>
        </div>
        <h2 className="font-display-xl text-display-xl text-on-surface uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,219,60,0.2)]">
          Haki <span className="text-secondary">Arsenal</span>
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
          Mastery of multiple disciplines forged in the software development crucible. Select a Haki aspect to review proficiency scores.
        </p>
      </div>

      {/* Main Interactive Dojo Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* LEFT COLUMN: 3 Massive Interactive Haki Core Orbs */}
        <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
          {hakiCategories.map((cat) => {
            const isSelected = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`glass-panel border-2 p-5 rounded-2xl text-left transition-all duration-500 relative overflow-hidden flex items-center gap-4 bg-surface-dim/30 hover:bg-surface-bright/10 ${
                  isSelected ? cat.glowClass : 'border-surface-container-highest opacity-70 hover:opacity-100 hover:scale-[1.01]'
                }`}
              >
                {/* Background Color Flare */}
                {isSelected && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${cat.bgGradient} opacity-50 pointer-events-none`} />
                )}

                {/* Left side circular orb */}
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-surface-lowest relative flex-shrink-0 transition-all duration-500 ${
                  isSelected ? cat.activeBorder + ' scale-110 shadow-inner' : 'border-surface-container-highest'
                }`}>
                  {/* Rotating rings inside orb */}
                  {isSelected && (
                    <div className={`absolute inset-1 rounded-full border border-dashed animate-[spin_8s_linear_infinite] ${cat.themeColor} opacity-50`} />
                  )}
                  <span className={`material-symbols-outlined text-2xl transition-all ${isSelected ? cat.themeColor : 'text-outline-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {cat.icon}
                  </span>
                </div>

                {/* Right side labels */}
                <div className="flex-grow">
                  <span className="font-mono text-[9px] text-outline-variant tracking-widest block uppercase">
                    {cat.japanese}
                  </span>
                  <h3 className="font-title-md text-base text-on-surface uppercase tracking-wide font-bold">
                    {cat.title}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant line-clamp-1 mt-0.5">
                    {cat.skills.length} Advanced Techniques
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: The Training / Skills Assessment Console */}
        <div className="lg:col-span-8 glass-panel manga-border rounded-2xl p-6 md:p-8 bg-surface-dim/20 relative flex flex-col justify-between overflow-hidden">
          
          {/* Header info */}
          <div className="border-b border-surface-container-highest pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-[#b8070f] tracking-widest uppercase block font-bold">[ UNLEASHED MODE ]</span>
                <h3 className={`font-display-md text-2xl ${activeCategory.themeColor} uppercase tracking-wide font-bold mt-1`}>
                  {activeCategory.title}
                </h3>
              </div>
              <div className="bg-surface-container-high px-4 py-1.5 rounded-lg border border-surface-container-highest text-center">
                <span className="font-mono text-xs text-[#b8070f] tracking-wider uppercase block font-bold">AVERAGE POWER</span>
                <span className="font-display-md text-lg text-[#ffdb3c] font-black">
                  {Math.round(activeCategory.skills.reduce((acc, s) => acc + s.proficiency, 0) / activeCategory.skills.length)}%
                </span>
              </div>
            </div>
            
            <p className="font-body-md text-sm text-on-surface-variant mt-4 leading-relaxed">
              {activeCategory.description}
            </p>
          </div>

          {/* Techniques Grid with Proficiency Levels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow">
            {activeCategory.skills.map((skill, idx) => (
              <div 
                key={idx}
                className="bg-surface-lowest/40 border border-surface-container-highest p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:bg-surface-bright/10 hover:border-surface-container-highest group"
                style={{
                  animation: 'fadeSlideUp 0.5s ease-out forwards',
                  animationDelay: `${idx * 80}ms`
                }}
              >
                {/* Skill Icon */}
                <div className={`w-11 h-11 rounded-lg border border-surface-container-highest bg-surface-lowest flex items-center justify-center flex-shrink-0 text-primary-fixed-dim transition-transform group-hover:scale-105`}>
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {skill.icon}
                  </span>
                </div>

                {/* Progress & Label info */}
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-title-md text-sm text-on-surface font-semibold group-hover:text-secondary-container transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-[#ffdb3c] font-black">
                      {skill.proficiency}%
                    </span>
                  </div>
                  
                  {/* Custom Progress Bar */}
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${activeCategory.bulletColor} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: animateProgress ? `${skill.proficiency}%` : '0%',
                        boxShadow: '0 0 8px currentColor'
                      }}
                    />
                  </div>
                  
                  <span className="font-mono text-[9px] text-[#b8070f] uppercase tracking-wider block mt-1 font-bold">
                    {skill.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
