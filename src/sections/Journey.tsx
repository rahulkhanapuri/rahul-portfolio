import React from 'react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-[#001A33] to-surface-dim border-t-4 border-surface-container-highest">
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAjZ1-85x_9xmddLKQrlPU7sanyFmklE-LKY-x9EY8v3QP8MwHu1edWKbyuIgVgl_GECJL2AU9k9fbpVkMZ-8QYZp4DrGvBIeEcFztWXRxue0r3JqjNpREW-6S_MngzxaoNqMQspXkLBthj4ON9PkmLJe6QIZXqHYPi5vbR6m2to0p8TI5ufmxlkIe57VZHqAfP5NJhobMwxocLY7OnFS7jVYwbGtPPsxouecw5UzZ2FHXgj5mlGAXPx8rdiqZQ_RsxJdLkpc2QEv9')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-block px-4 py-2 border-2 border-secondary/30 rounded-full mb-6 neon-glow bg-surface-container-highest/50 backdrop-blur-sm">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">explore</span> The Journey Thus Far
            </span>
          </div>
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 uppercase drop-shadow-[0_0_15px_rgba(255,219,60,0.3)]">
            Charting the <br/><span className="text-secondary">Unknown</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl bg-surface-dim/50 backdrop-blur-md manga-border p-8 rounded-xl relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-secondary"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-secondary"></div>
            
            {/* Shonen Avatar */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-tertiary neon-glow-red flex-shrink-0 bg-surface">
              <img 
                alt="Rahul Khanapuri Avatar" 
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdMocE_uq77Hdn8QwkfBpxkf3ZaQQE983oM7e_OmteQVwZLbbbF6HQ_yw8bk94c8BB4gsgBTgKCOS5SKggiW1AOaSRDr-ei7pwNVvnaB142y3CGWdJPkEb1BzoQg-9YpJb84gBnm4zGpflx-BxjOfg0JcTYagdiAAC31VSEzguaxdCErPE7H8wNiwcpJE6tDtSx5JpFDqx0BkRa5GEqnrEmQnhkDfn96slKMwlbezJU2qDuIZ1tUL_-Y-ClgXSKlPjKr3BYciCrfJ"
              />
            </div>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant text-left leading-relaxed">
              Every great developer adventure begins with a single line of code in uncharted IDEs. My voyage through the software engineering sea has been driven by technical curiosity, architecting scalable vessels, and mastering the frontend-backend currents. Here is the log pose map of my engineering crew deployments.
            </p>
          </div>
        </div>

        {/* Treasure Map Timeline */}
        <div className="relative max-w-4xl mx-auto py-12">
          {/* Vertical glowing cable (The route) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-surface-container-highest transform md:-translate-x-1/2 rounded-full z-0 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-b from-secondary via-tertiary to-secondary opacity-50 cable-glow"></div>
          </div>

          {/* Milestone 1: Basaveshwar College / Nidasoshi Polytechnic */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:justify-between mb-24 group">
            <div className="md:w-5/12 hidden md:block text-right pr-12 pt-4">
              <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">2017 - 2023</span>
            </div>
            
            {/* Timeline Node */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-14 h-14 bg-surface-container-highest rounded-full border-4 border-secondary flex items-center justify-center neon-glow group-hover:scale-110 transition-transform z-20">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            
            {/* Content Card */}
            <div className="ml-16 md:ml-0 md:w-5/12 pl-0 md:pl-12 w-full">
              <div className="glass-panel manga-border p-6 relative overflow-hidden group-hover:bg-surface-bright/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <span className="material-symbols-outlined text-6xl">school</span>
                </div>
                <h3 className="font-title-md text-title-md text-secondary mb-1 uppercase">The Academy Isles</h3>
                <h4 className="font-label-sm text-label-sm text-tertiary mb-3 tracking-wider">Education & Foundations</h4>
                <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                  <div>
                    <strong className="text-on-surface block">BE - Computer Science & Engineering</strong>
                    <span className="text-sm text-outline-variant">Basaveshwar Engineering College Bagalkot (2020 – 2023)</span>
                  </div>
                  <div className="border-t border-surface-container-highest pt-2">
                    <strong className="text-on-surface block">Diploma - Computer Science</strong>
                    <span className="text-sm text-outline-variant">SNJPSNMS Trust's Polytechnic Nidasoshi (2017 – 2020)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 2: Urneeds Senior Software Engineer */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:justify-between mb-24 group">
            {/* Content Card (Left on Desktop) */}
            <div className="ml-16 md:ml-0 md:w-5/12 pr-0 md:pr-12 w-full order-2 md:order-1 text-left md:text-right">
              <div className="glass-panel manga-border p-6 relative overflow-hidden group-hover:bg-surface-bright/20 transition-colors border-tertiary/50">
                <div className="absolute top-0 left-0 p-4 opacity-5">
                  <span className="material-symbols-outlined text-6xl">sailing</span>
                </div>
                <h3 className="font-title-md text-title-md text-tertiary mb-1 uppercase">Urneeds Outpost</h3>
                <h4 className="font-label-sm text-label-sm text-secondary mb-3 tracking-wider">Senior Software Engineer (01/2024 – 04/2026)</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-3 leading-relaxed">
                  Led end-to-end development of a Laboratory Management System supporting OPD, ED, and Inpatient workflows. Architected a dynamic medical reporting calculation engine and a reusable MUI-based component library.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Developed the Urneeds consumer mobile app with React Native & TS for booking appointments, viewing lab reports, and tracking invoices. Mentored junior devs and enforced clean architecture.
                </p>
              </div>
            </div>
            
            {/* Timeline Node */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-14 h-14 bg-surface-container-highest rounded-full border-4 border-tertiary flex items-center justify-center neon-glow-red group-hover:scale-110 transition-transform z-20 order-1 md:order-2">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            </div>
            
            <div className="md:w-5/12 hidden md:block text-left pl-12 order-3 pt-4">
              <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">2024 - 2026</span>
            </div>
          </div>

          {/* Milestone 3: JsonByte Creator */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:justify-between group">
            <div className="md:w-5/12 hidden md:block text-right pr-12 pt-4">
              <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">2026 (Recent Voyages)</span>
            </div>
            
            {/* Timeline Node */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-surface rounded-full border-4 border-secondary flex items-center justify-center neon-glow group-hover:scale-110 transition-transform z-20">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>directions_boat</span>
            </div>
            
            {/* Content Card */}
            <div className="ml-16 md:ml-0 md:w-5/12 pl-0 md:pl-12 w-full">
              <div className="glass-panel manga-border p-6 relative overflow-hidden group-hover:bg-surface-bright/20 transition-colors border-secondary">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <span className="material-symbols-outlined text-6xl">code</span>
                </div>
                <h3 className="font-title-md text-title-md text-secondary mb-1 uppercase">JsonByte Vessel</h3>
                <h4 className="font-label-sm text-label-sm text-tertiary mb-3 tracking-wider">Independent Architect (01/2026 – 02/2026)</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Forged a high-performance JSON processing engine featuring formatting, minification, validator parsing, and XML/CSV converters. Deployed scalable delivery pipelines on AWS using S3, CloudFront, and Route 53.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HUD Statistics Dashboard */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-panel-gap">
          <div className="glass-panel border-t-4 border-secondary p-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="font-display-xl text-display-xl text-secondary mb-2">2+</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Years at Sea</div>
          </div>
          <div className="glass-panel border-t-4 border-tertiary p-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="font-display-xl text-display-xl text-tertiary mb-2">25%+</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">App Optimization</div>
          </div>
          <div className="glass-panel border-t-4 border-secondary p-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="font-display-xl text-display-xl text-secondary mb-2">30%</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Dev Time Saved</div>
          </div>
          <div className="glass-panel border-t-4 border-tertiary p-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="font-display-xl text-display-xl text-tertiary mb-2">10+</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Haki Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};
