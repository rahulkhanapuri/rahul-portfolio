import React from 'react';

interface SkillBounty {
  name: string;
  category: string;
  icon: string;
  bounty: string;
  glowColor: string;
}

export const Bounties: React.FC = () => {
  const skillBounties: SkillBounty[] = [
    {
      name: "React.JS",
      category: "Frontend Combatant",
      icon: "code",
      bounty: "฿ 5,000,000",
      glowColor: "haki-glow-gold"
    },
    {
      name: "React Native",
      category: "Mobile Fleet Commander",
      icon: "app_shortcut",
      bounty: "฿ 4,800,000",
      glowColor: "haki-glow-gold"
    },
    {
      name: "TypeScript",
      category: "Strict Typings Guardian",
      icon: "terminal",
      bounty: "฿ 4,500,000",
      glowColor: "haki-glow-gold"
    },
    {
      name: "Node.JS",
      category: "Backend Command Ship",
      icon: "dns",
      bounty: "฿ 4,200,000",
      glowColor: "haki-glow-gold"
    },
    {
      name: "AWS Serverless",
      category: "Cloud Winds Navigator",
      icon: "cloud",
      bounty: "฿ 6,500,000",
      glowColor: "haki-glow-gold"
    },
    {
      name: "Zustand & State",
      category: "Synchronization Specialist",
      icon: "hub",
      bounty: "฿ 3,500,000",
      glowColor: "haki-glow-gold"
    },
    {
      name: "GraphQL & REST",
      category: "Data Flow Master",
      icon: "sync_alt",
      bounty: "฿ 3,800,000",
      glowColor: "haki-glow-gold"
    },
    {
      name: "Databases (Mongo/Dynamo)",
      category: "Deep Sea Archives",
      icon: "database",
      bounty: "฿ 4,000,000",
      glowColor: "haki-glow-gold"
    },
    {
      name: "AI & Developer Tools",
      category: "Autonomous Helper Haki",
      icon: "psychology",
      bounty: "฿ 3,200,000",
      glowColor: "haki-glow-gold"
    }
  ];

  return (
    <section id="bounties" className="py-24 px-margin-mobile md:px-margin-desktop max-w-[1600px] mx-auto w-full border-t-4 border-surface-container-highest bg-[#001a33]/10 relative">
      {/* Glow Backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Section Title */}
      <div className="flex items-center gap-4 mb-16">
        <span className="material-symbols-outlined text-display-xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
        <h2 className="font-display-xl text-display-xl text-on-surface uppercase tracking-tighter">
          Bounties <span className="text-secondary opacity-50">/ Tech Deck</span>
        </h2>
      </div>

      {/* Wanted Poster Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillBounties.map((skill, idx) => (
          <div 
            key={idx}
            className="bounty-card group glass-panel manga-border p-6 rounded-xl relative overflow-hidden flex flex-col justify-between h-[320px] transition-all duration-300 hover:-translate-y-2 hover:border-secondary/80 hover:shadow-[0_0_40px_rgba(255,219,60,0.3)] bg-surface-dim/40 cursor-pointer"
          >
            {/* Wanted Overlay stamp */}
            <div className="absolute top-0 right-0 bg-on-tertiary-container text-secondary font-label-sm text-label-sm py-1 px-4 rounded-bl-lg border-b border-l border-on-tertiary-container z-10 shadow-[0_0_15px_rgba(247,47,76,0.5)] font-bold tracking-widest animate-pulse">
              WANTED
            </div>

            {/* Poster Details */}
            <div className="z-10 flex flex-col items-center justify-center flex-grow pt-4">
              {/* Icon Holder */}
              <div className="w-24 h-24 rounded-full border-2 border-secondary/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform bg-surface-dim/80 backdrop-blur-md relative">
                <div className="absolute inset-0 rounded-full border border-secondary animate-ping opacity-10 group-hover:opacity-35"></div>
                <span className="material-symbols-outlined text-[54px] text-secondary group-hover:text-secondary-fixed transition-colors">
                  {skill.icon}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="font-headline-lg text-2xl text-on-surface text-center leading-none mb-2 tracking-tight group-hover:text-secondary-container transition-colors">
                {skill.name}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant text-center tracking-wide font-medium">
                {skill.category}
              </p>
            </div>

            {/* Bounty Value */}
            <div className="z-10 border-t-2 border-surface-container-highest/60 pt-4 text-center">
              <div className="text-xs text-outline-variant font-label-sm uppercase tracking-widest mb-1">Dead or Alive</div>
              <span className="font-title-md text-2xl text-secondary font-black tracking-wider">
                {skill.bounty}
              </span>
            </div>

            {/* Visual gradient shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent opacity-80 z-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
