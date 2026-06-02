import React from 'react';

interface ProjectIsland {
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  badge: string;
  badgeColor: string;
  logTitle: string;
  logColor: string;
  tags: string[];
  duration: string;
  highlights: string[];
}

export const Islands: React.FC = () => {
  const projects: ProjectIsland[] = [
    {
      name: "Healthcare LMS",
      category: "Enterprise Laboratory Platform",
      badge: "Medical Island",
      badgeColor: "bg-primary/20 text-primary border-primary/50",
      logTitle: "Clinical System log",
      logColor: "text-primary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-8KUEL-CEBjnbY3JaOf6Hk5zOeupGShO4w5kJIpDTm4XW7oOdY9yryjGZ4RIvTI7Mjy_zRSGWI5a-N2gVUj_YqUUbLasEw_1ASQVHlOFdprAxo3qr421qtDwig1HJqB5DjkIK4X9FwSqA20WvHK4COeXfq-RY6pBE3CemWtXgZjnzGfp4k_j7o60SDBGEAa4TFO8gCF_JO-bb1oaeIKRujw_12Q-1aocpvBKsb5EYdBCojQrHasCaDtDcE6bnOYdzBB0SbER15GWy",
      imageAlt: "Stylized anime medical facility floating on ocean",
      description: "End-to-end development of a scalable hospital management platform covering OPD, ED, and inpatient medical workflows.",
      duration: "01/2024 - 04/2026",
      tags: ["React", "TypeScript", "MUI", "Node.js", "Express", "GraphQL", "AWS Lambda", "DynamoDB"],
      highlights: [
        "Boosted app performance by 25%+ with splitting, lazy loading, and memoized renders.",
        "Architected dynamic reporting engine enabling calculations for flexible lab parameters.",
        "Designed reusable MUI component library accelerating delivery workflows by 30%."
      ]
    },
    {
      name: "Urneeds Consumer App",
      category: "Patient Utility Vessel",
      badge: "Consumer Mobile Fleet",
      badgeColor: "bg-tertiary/20 text-tertiary border-tertiary/50",
      logTitle: "Mobile Log pose",
      logColor: "text-tertiary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVpYQyisB_GMtusH8Md59YMcLw672kIueUDioFhWHzgMJUe58SGrC1LE-nP5pk4sHAE5ZEE-Yw84J8bkH12TBbf_z1NIdQwmQiRfn0j1T2tpPdUoGjUYz68oYl4LPIoYeWmB0HQx9rxotE-hnaQZSPVUX--igAbabFtp2rh6sKkgl-3OtyC223jSw-Fvm9ZfrLCYAfkSTj6NTXZbG6fpUA3ovYypI4Tt2N33MntJV1WXknp3CyyA39HtcabwR4a52_eqplkY3MXQih",
      imageAlt: "Futuristic lab devices carved into crystal towers",
      description: "Consumer mobile application developed to handle appointment bookings, digital reports, and invoice tracking for hospital patients.",
      duration: "01/2024 - 04/2026",
      tags: ["React Native", "TypeScript", "React Native Paper", "Zustand", "Context API"],
      highlights: [
        "Enabled secure, lightweight report access and mobile medical search portals.",
        "Implemented Zustand state caching resulting in highly stable offline UI updates.",
        "Resolved critical rendering bugs to increase app store ratings and uptime."
      ]
    },
    {
      name: "JsonByte Platform",
      category: "Developer Utility Engine",
      badge: "Validator Archipelago",
      badgeColor: "bg-secondary/20 text-secondary border-secondary/50",
      logTitle: "Developer Logbook",
      logColor: "text-secondary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbjNGTufMNQIWrT1UX4NcxRpE62ZXOtuWoa06fiKICebzfoSzCtE0kCBzciQq0hsCU1STunVQzXx11u6238_Ofj_h1bPsEACqu7LLXVrusJCeip6zHMpKBJEvWONW6zA3x9xRoPq7gW0hTxblFAoa5x2RGxVJDo1HQDaGd2NWhj90RStJTvEzcf2KZZqdGidCJD9mmpuEQNwwouga1T9AfaWg4He7CHXbcMuDWEMMn5ZBcHPREm_dby3cCjQkZ0-JL4bZpDNVcdy1Q",
      imageAlt: "Server racks integrated into floating ancient ruins",
      description: "A fast, client-oriented processing toolbox supporting schema validations, code minification, and XML/CSV format mappings.",
      duration: "01/2026 - 02/2026",
      tags: ["React", "TypeScript", "Tailwind CSS", "AWS S3", "CloudFront", "Route 53"],
      highlights: [
        "Engineered zero-latency browser parsing handling massive nested JSON outputs.",
        "Created an intuitive sidebar layout optimized for developer validator streams.",
        "Configured secure AWS CDN cloud distribution with Route 53 DNS routes."
      ]
    }
  ];

  return (
    <section id="islands" className="py-24 px-margin-mobile md:px-margin-desktop max-w-[1600px] mx-auto w-full border-t-4 border-surface-container-highest bg-[#001a33]/10 relative">
      {/* Background radial gradient */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="material-symbols-outlined text-display-xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
        <h2 className="font-display-xl text-display-xl text-on-surface uppercase tracking-tighter">
          Islands <span className="text-primary opacity-50">/ Archipelago</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-gutter">
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className={`island-card group relative h-[560px] rounded-2xl overflow-hidden manga-border haki-glow-blue transition-all duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_0_40px_rgba(177,200,233,0.3)] cursor-pointer ${
              idx === 1 ? 'md:mt-8' : idx === 2 ? 'lg:-mt-8' : ''
            }`}
          >
            {/* Background Image */}
            <img 
              alt={project.imageAlt} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75"
              src={project.image}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"></div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end h-full">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {/* Badge Category */}
                <span className={`inline-block px-3 py-1 border font-label-sm text-xs rounded-full mb-3 backdrop-blur-md font-bold uppercase tracking-wider ${project.badgeColor}`}>
                  {project.badge}
                </span>

                {/* Project Title */}
                <h3 className="font-headline-lg text-3xl text-on-surface leading-tight mb-2 uppercase drop-shadow-md">
                  {project.name}
                </h3>
                
                <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 group-hover:opacity-0 group-hover:max-h-0 transition-all duration-300 mb-2">
                  {project.description}
                </p>

                {/* Adventure Log (Reveals on Hover) */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[380px] group-hover:opacity-100 transition-all duration-500 overflow-hidden mt-4">
                  <div className="glass-panel p-4 rounded-lg border border-primary/30 bg-surface-dim/80 backdrop-blur-md">
                    <h4 className={`font-title-md text-sm font-bold uppercase mb-2 flex items-center gap-2 ${project.logColor}`}>
                      <span className="material-symbols-outlined text-sm">history_edu</span>
                      {project.logTitle}
                    </h4>
                    
                    <span className="text-xs text-outline-variant font-mono block mb-2">{project.duration}</span>
                    
                    {/* Bullet Highlights */}
                    <ul className="list-none space-y-1 mb-3 text-xs text-on-surface-variant font-body-md pl-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-secondary">
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex gap-1.5 flex-wrap pt-2 border-t border-surface-container-highest/60">
                      {project.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-[10px] rounded border border-outline-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
