import React from 'react';
import { Terminal } from '../components/Terminal';

interface HeroProps {
  onRecruitClick: () => void;
  onJourneyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRecruitClick, onJourneyClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 bg-[#000814]">

      {/* Immersive Ocean & Fog Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Rahul Khanapuri Portfolio Background"
          className="w-full h-full object-cover opacity-20 mix-blend-screen scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdMocE_uq77Hdn8QwkfBpxkf3ZaQQE983oM7e_OmteQVwZLbbbF6HQ_yw8bk94c8BB4gsgBTgKCOS5SKggiW1AOaSRDr-ei7pwNVvnaB142y3CGWdJPkEb1BzoQg-9YpJb84gBnm4zGpflx-BxjOfg0JcTYagdiAAC31VSEzguaxdCErPE7H8wNiwcpJE6tDtSx5JpFDqx0BkRa5GEqnrEmQnhkDfn96slKMwlbezJU2qDuIZ1tUL_-Y-ClgXSKlPjKr3BYciCrfJ"
        />
        {/* Ocean Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/70"></div>
      </div>

      {/* Floating Aura Particles (Conqueror's Haki Effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[160px] anim-orb-float" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[160px] anim-orb-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] anim-orb-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Navigation Line / Latitude grid marker */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[9px] text-primary/30 tracking-widest vertical-text select-none hidden xl:block">
        LOG_ROUTE: RED_LINE // COORDINATES: 12.97° N, 77.59° E
      </div>

      <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-[1400px]">

        {/* LEFT COLUMN: Command Title, HUD Telemetry & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 relative">

          {/* Status Telemetry Tag */}
          <div className="flex items-center gap-2.5 bg-surface-container-low/75 border border-secondary/30 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(255,219,60,0.1)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(255,219,60,0.8)] animate-[ping_2s_linear_infinite]" />
            <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-black">
              STATUS: Available for Bounties
            </span>
          </div>

          {/* Master Typography Design */}
          <div className="relative">
            {/* Spinning Compass background behind Title */}
            <div className="absolute -left-16 -top-16 w-48 h-48 border border-dashed border-primary/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />

            <h1 className="font-display-xl text-4xl sm:text-5xl md:text-[68px] leading-[1.05] text-on-surface uppercase tracking-tighter font-black drop-shadow-md select-none">
              Senior Software<br />
              <span className="text-secondary drop-shadow-[0_0_20px_rgba(255,219,60,0.4)] relative inline-block">
                 Engineer
                <span className="absolute -bottom-1.5 left-0 w-1/3 h-1.5 bg-secondary shadow-[0_0_10px_rgba(255,219,60,0.5)]" />
              </span>
            </h1>
          </div>

          {/* Crew Leaderboard Stats (HUD Telemetry Panel) */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-lg bg-surface-lowest/40 backdrop-blur-md p-3.5 rounded-xl border border-surface-container-highest/60 font-mono text-[10px]">
            <div className="border-r border-surface-container-highest pr-2">
              <span className="text-[#b8070f] font-bold block">COORDINATES</span>
              <span className="text-[#ffdb3c] font-black uppercase truncate block mt-0.5">12.97°N, 77.59°E</span>
            </div>
            <div className="border-r border-surface-container-highest px-2">
              <span className="text-[#b8070f] font-bold block">ERA AT SEA</span>
              <span className="text-[#ffdb3c] font-black uppercase block mt-0.5">2+ Years Active</span>
            </div>
            <div className="pl-2">
              <span className="text-[#b8070f] font-bold block">BOUNTY VAL</span>
              <span className="text-[#ffdb3c] font-black uppercase block mt-0.5"> ₹ 9,00,000</span>
            </div>
          </div>

          {/* Subtitle Intro */}
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant max-w-2xl border-l-4 border-primary pl-5 py-2.5 bg-gradient-to-r from-primary/5 to-transparent leading-relaxed">
            I am <strong className="text-secondary font-bold">Rahul Khanapuri</strong>, a veteran navigator of backend structures and client-side interfaces. I design and assemble complex serverless fleets using <strong className="text-primary">React</strong>, <strong className="text-tertiary">TypeScript</strong>, and <strong className="text-secondary-fixed">AWS Cloud Infrastructure</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <button
              onClick={onRecruitClick}
              className="relative group bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-title-md text-sm font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(255,219,60,0.25)] hover:shadow-[0_0_30px_rgba(255,219,60,0.45)] transition-all duration-300 border border-secondary/40 flex items-center justify-center gap-2.5 uppercase tracking-wider scale-98 active:scale-95"
            >
              <span className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>sailing</span>
              Recruit Captain
            </button>
            <button
              onClick={onJourneyClick}
              className="relative group bg-surface-dim/40 backdrop-blur-md text-tertiary font-title-md text-sm font-bold px-8 py-4 rounded-xl border-2 border-tertiary/40 hover:border-tertiary hover:bg-tertiary/10 shadow-[0_0_15px_rgba(255,179,179,0.1)] hover:shadow-[0_0_25px_rgba(255,179,179,0.35)] transition-all duration-300 flex items-center justify-center gap-2.5 uppercase tracking-wider scale-98 active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">menu_book</span>
              View Logbook
            </button>
          </div>

          {/* Quick Cargo Indicators */}
          <div className="flex items-center gap-3.5 mt-4 text-xs font-mono text-outline-variant bg-surface-lowest/20 px-4 py-2 rounded-lg border border-surface-container-highest/40">
            <span className="text-[#b8070f] font-bold">VESSEL ARSENAL:</span>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 rounded border border-primary/20 bg-primary/5 text-primary text-[10px]" title="Frontend UI">FRONTEND</span>
              <span className="px-2 py-0.5 rounded border border-secondary/20 bg-secondary/5 text-secondary text-[10px]" title="Core Logic">BACKEND</span>
              <span className="px-2 py-0.5 rounded border border-tertiary/20 bg-tertiary/5 text-tertiary text-[10px]" title="Cloud Edge">AWS CLOUD</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Terminal Command Board */}
        <div className="lg:col-span-5  lg:flex justify-end relative">
          {/* Radial glowing backing matching primary theme */}
          <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
          <Terminal />
        </div>

      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-lr;
        }
      `}</style>

    </section>
  );
};
