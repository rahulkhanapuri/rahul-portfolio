import React from 'react';
import { Terminal } from '../components/Terminal';

interface HeroProps {
  onRecruitClick: () => void;
  onJourneyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRecruitClick, onJourneyClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Rahul Khanapuri Portfolio Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdMocE_uq77Hdn8QwkfBpxkf3ZaQQE983oM7e_OmteQVwZLbbbF6HQ_yw8bk94c8BB4gsgBTgKCOS5SKggiW1AOaSRDr-ei7pwNVvnaB142y3CGWdJPkEb1BzoQg-9YpJb84gBnm4zGpflx-BxjOfg0JcTYagdiAAC31VSEzguaxdCErPE7H8wNiwcpJE6tDtSx5JpFDqx0BkRa5GEqnrEmQnhkDfn96slKMwlbezJU2qDuIZ1tUL_-Y-ClgXSKlPjKr3BYciCrfJ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50"></div>
      </div>

      {/* Floating Particles/Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-tertiary rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Title & Text */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8 relative">
          <div className="absolute -left-8 -top-8 w-16 h-16 border-t-4 border-l-4 border-secondary/50 pointer-events-none hidden md:block"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-secondary/50 pointer-events-none hidden md:block"></div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-surface-container-low/80 backdrop-blur-md border border-secondary/30 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(255,219,60,0.1)]">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(255,219,60,0.8)] animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Available for Bounties</span>
          </div>

          {/* Display Banner */}
          <h1 className="font-display-xl text-display-xl md:text-[80px] text-on-surface leading-[1.1] md:leading-[1.0] font-black drop-shadow-2xl flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface to-surface-tint">Senior Full-Stack</span>
            <span className="relative inline-block text-secondary">
              Software Engineer
              <span className="absolute -bottom-2 left-0 w-1/3 h-2 bg-secondary shadow-[0_0_15px_rgba(255,219,60,0.5)]"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-body-lg md:text-[20px] text-on-surface-variant max-w-2xl border-l-4 border-surface-container-highest pl-6 py-2 bg-gradient-to-r from-surface-container-low/50 to-transparent leading-relaxed">
            I am <strong className="text-secondary">Rahul Khanapuri</strong>. Navigating the digital seas with over 2 years of scalable engineering experience. Forging robust enterprise platforms and mobile apps using <strong className="text-primary">React</strong>, <strong className="text-secondary">React Native</strong>, <strong className="text-tertiary">TypeScript</strong>, and <strong className="text-secondary-fixed">AWS</strong> serverless fleets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto">
            <button 
              onClick={onRecruitClick}
              className="relative group overflow-hidden bg-secondary-container text-on-secondary-container font-title-md text-title-md px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(255,219,60,0.3)] hover:shadow-[0_0_30px_rgba(255,219,60,0.5)] transition-all duration-300 border border-secondary/50 flex items-center justify-center gap-3 font-bold uppercase tracking-wider scale-98 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sailing</span>
              Recruit Captain
            </button>
            <button 
              onClick={onJourneyClick}
              className="relative group bg-surface-container/50 backdrop-blur-md text-tertiary font-title-md text-title-md px-8 py-4 rounded-lg border-2 border-tertiary/50 hover:border-tertiary hover:bg-tertiary/10 shadow-[0_0_15px_rgba(255,179,179,0.1)] hover:shadow-[0_0_25px_rgba(255,179,179,0.4)] transition-all duration-300 flex items-center justify-center gap-3 font-bold uppercase tracking-wider scale-98 active:scale-95"
            >
              <span className="material-symbols-outlined">menu_book</span>
              View Logbook
            </button>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8 flex items-center gap-4 bg-surface-container/30 backdrop-blur-sm border border-surface-container-highest px-6 py-3 rounded-xl">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Arsenal:</span>
            <div className="flex gap-3">
              <span className="w-8 h-8 rounded-md bg-surface-bright/50 flex items-center justify-center text-primary shadow-inner border border-primary/20" title="Frontend Haki">
                <span className="material-symbols-outlined text-sm">code</span>
              </span>
              <span className="w-8 h-8 rounded-md bg-surface-bright/50 flex items-center justify-center text-secondary shadow-inner border border-secondary/20" title="Database Strategy">
                <span className="material-symbols-outlined text-sm">database</span>
              </span>
              <span className="w-8 h-8 rounded-md bg-surface-bright/50 flex items-center justify-center text-tertiary shadow-inner border border-tertiary/20" title="Cloud Sails">
                <span className="material-symbols-outlined text-sm">cloud</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Panel */}
        <div className="lg:col-span-5 hidden lg:flex justify-end relative">
          <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full"></div>
          <Terminal />
        </div>
      </div>
    </section>
  );
};
