import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────
// Create a free account at https://www.emailjs.com and fill these in
// via a .env file at the project root:
//   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
// ─────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [showLogOutput, setShowLogOutput] = useState(false);
  const [transmitError, setTransmitError] = useState<string | null>(null);
  const [frequency] = useState(1524.8);

  const handleTransmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Transmission requires Captain Alias, Email Frequency, and Message!");
      return;
    }

    setIsTransmitting(true);
    setTransmitError(null);

    // Template parameters – these keys must match the {{…}} placeholders
    // in your EmailJS template (create one in the EmailJS dashboard).
    const templateParams = {
      name: name,
      email: email,
      message: message,
      title: affiliation ? affiliation : "Fleet / Vessel",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setIsTransmitting(false);
      setShowLogOutput(true);
    } catch (err: any) {
      console.error('EmailJS transmission failed:', err);
      setIsTransmitting(false);
      setTransmitError(
        err?.text || err?.message || 'Signal lost in the Calm Belt. Try again later.'
      );
    }
  };

  const handleCloseLog = () => {
    setShowLogOutput(false);
    setTransmitError(null);
    setName('');
    setAffiliation('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 relative flex flex-col justify-center items-center min-h-screen border-t-4 border-surface-container-highest overflow-hidden">
      {/* Tempestuous Moonlit Ocean Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOPQ2UihOP0YboOdpAdUiGRzOKuNpUN-6cwUPXD6L8J_8sKWF2eQARKjNWkPVnLjUvr4yA2DOOI-aksNWxVxzMLwFldwIA80Vzap2UpfvzVDf2Dfsw7om-o_qg1nc8FNJI-CdEkUVk81eB7-StBlIHcGT7-vbjyDwobydzSGrLm1aKEkDjn-npDiFHTs6NeIF479lDGEhe8ndoM0I_6rNOdh4vD8S-iQAP2HrCVMAq4HNjWott-vbyJmnc1Q5x18VLOuFNK-jVfhjo')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-background to-background"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 z-10 px-margin-mobile">
        <h1 className="font-display-xl text-display-xl text-primary drop-shadow-[0_0_15px_rgba(177,200,233,0.6)] mb-2 tracking-tighter uppercase">
          Transponder Snail
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Establish a secure encrypted connection across the Grand Line. Signal strength is optimal.
        </p>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-panel-gap z-10 relative px-margin-mobile">

        {/* Left Panel: Snail Visualizer */}
        <div className="md:col-span-5 glass-panel manga-border rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group min-h-[350px]">
          {/* Neon Corner Borders */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-secondary opacity-50 m-2 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-tertiary opacity-50 m-2 group-hover:opacity-100 transition-opacity"></div>

          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary text-[40px] drop-shadow-[0_0_10px_rgba(255,219,60,0.8)]" style={{ fontVariationSettings: "'FILL' 1" }}>
              cell_tower
            </span>
            <h2 className="font-title-md text-lg text-secondary tracking-widest uppercase font-bold">
              Comm Link
            </h2>
          </div>

          {/* Snail Hologram Graphic */}
          <div className="flex-grow flex items-center justify-center py-8 relative">
            <div className="absolute w-44 h-44 border border-tertiary/20 rounded-full animate-[spin_12s_linear_infinite]"></div>
            <div className="absolute w-32 h-32 border border-secondary/30 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>

            <div className="w-16 h-16 bg-primary rounded-full neon-glow-primary z-10 relative flex items-center justify-center">
              <div className="absolute inset-[2px] bg-background rounded-full"></div>
              <span className={`material-symbols-outlined text-primary text-2xl ${isTransmitting ? 'animate-bounce text-secondary' : 'animate-pulse'}`}>
                sensors
              </span>
            </div>

            {/* Pulsing signal rings when transmitting */}
            {isTransmitting && (
              <>
                <div className="absolute w-24 h-24 border border-secondary rounded-full animate-ping opacity-40"></div>
                <div className="absolute w-36 h-36 border border-tertiary rounded-full animate-ping opacity-25 delay-700"></div>
              </>
            )}
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-end mb-2">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Signal Frequency</span>
              <span className="font-label-sm text-xs text-primary font-mono font-bold">
                {(frequency + (isTransmitting ? Math.sin(Date.now()) * 2 : 0)).toFixed(1)} MHz
              </span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className={`h-full bg-primary transition-all duration-300 ${isTransmitting ? 'w-full bg-secondary' : 'w-[85%]'}`} style={{ boxShadow: '0 0 15px currentColor' }}></div>
            </div>
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="md:col-span-7 glass-panel manga-border rounded-xl p-6 relative bg-surface-dim/30">
          <form onSubmit={handleTransmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Alias */}
              <div className="space-y-1.5">
                <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block font-bold" htmlFor="name">
                  Captain Alias
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline-variant text-lg">person</span>
                  <input
                    className="w-full bg-surface-container-lowest/50 border border-surface-container-highest text-on-surface placeholder:text-outline-variant rounded-lg py-3 pl-10 pr-4 focus:ring-1 focus:ring-secondary focus:border-secondary focus:bg-surface-container-low transition-all font-body-md text-sm outline-none"
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Straw Hat..."
                  />
                </div>
              </div>

              {/* Organization */}
              <div className="space-y-1.5">
                <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block font-bold" htmlFor="affiliation">
                  Fleet / Vessel
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline-variant text-lg">sailing</span>
                  <input
                    className="w-full bg-surface-container-lowest/50 border border-surface-container-highest text-on-surface placeholder:text-outline-variant rounded-lg py-3 pl-10 pr-4 focus:ring-1 focus:ring-secondary focus:border-secondary focus:bg-surface-container-low transition-all font-body-md text-sm outline-none"
                    id="affiliation"
                    type="text"
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                    placeholder="Your Crew / Ship..."
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block font-bold" htmlFor="email">
                Return Frequency (Email)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline-variant text-lg">alternate_email</span>
                <input
                  className="w-full bg-surface-container-lowest/50 border border-surface-container-highest text-on-surface placeholder:text-outline-variant rounded-lg py-3 pl-10 pr-4 focus:ring-1 focus:ring-secondary focus:border-secondary focus:bg-surface-container-low transition-all font-body-md text-sm outline-none"
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="communication@fleet.com"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block font-bold" htmlFor="message">
                Encrypted Transmission Box
              </label>
              <textarea
                className="w-full bg-surface-container-lowest/50 border border-surface-container-highest text-on-surface placeholder:text-outline-variant rounded-lg py-3 px-4 focus:ring-1 focus:ring-secondary focus:border-secondary focus:bg-surface-container-low transition-all font-body-md text-sm outline-none resize-none font-mono"
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Draft your code signal..."
              />
            </div>

            {/* Action */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={isTransmitting}
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-title-md text-sm font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 neon-glow-secondary border border-secondary/50"
              >
                <span className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></span>
                <span className="relative flex items-center gap-2">
                  {isTransmitting ? 'Transmitting Signal...' : 'Transmit Signal'}
                  <span className={`material-symbols-outlined text-xl ${isTransmitting ? 'animate-ping' : ''}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    send
                  </span>
                </span>
              </button>
            </div>

            {/* Error Banner */}
            {transmitError && (
              <div className="mt-4 p-3 rounded-lg border border-error/50 bg-error-container/20 backdrop-blur-sm flex items-start gap-3">
                <span className="material-symbols-outlined text-error text-xl flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                <div>
                  <p className="font-title-md text-xs text-error uppercase tracking-wider font-bold mb-1">Transmission Failed</p>
                  <p className="font-body-md text-xs text-on-error-container">{transmitError}</p>
                </div>
              </div>
            )}
          </form>

          {/* Social connections */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-surface-container-highest to-transparent my-6"></div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-bold">
              Alternative Channels
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/rahul-khanapuri"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-surface-container-highest flex items-center justify-center text-outline hover:text-secondary hover:border-secondary hover:shadow-[0_0_15px_rgba(255,219,60,0.5)] transition-all bg-surface-container-lowest/50 group"
                title="LinkedIn Signal"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-lg">work</span>
              </a>
              <a
                href="mailto:rahulkhanapuri25@gmail.com"
                className="w-11 h-11 rounded-full border border-surface-container-highest flex items-center justify-center text-outline hover:text-tertiary hover:border-tertiary hover:shadow-[0_0_15px_rgba(255,179,179,0.5)] transition-all bg-surface-container-lowest/50 group"
                title="Transponder Snail Mail"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-lg">alternate_email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic Log Printout Popup */}
      {showLogOutput && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md px-4">
          <div className="w-full max-w-xl bg-surface-dim/95 border-2 border-secondary rounded-2xl p-6 shadow-[0_0_50px_rgba(255,219,60,0.4)] relative font-mono text-sm">
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={handleCloseLog}
                className="text-secondary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <h3 className="font-display-xl text-xl text-secondary mb-4 uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary animate-pulse">check_circle</span>
              TRANSMISSION SUCCESS
            </h3>

            <div className="space-y-3 text-primary-fixed-dim bg-surface-container-lowest/60 p-4 rounded-lg border border-primary/20 max-h-[300px] overflow-y-auto">
              <div><span className="text-tertiary">SIGNAL_STATUS:</span> SECURE</div>
              <div><span className="text-tertiary">FREQUENCY:</span> {frequency.toFixed(1)} MHz</div>
              <div><span className="text-tertiary">SENDER_ALIAS:</span> "{name}"</div>
              {affiliation && <div><span className="text-tertiary">SENDER_CREW:</span> "{affiliation}"</div>}
              <div><span className="text-tertiary">RETURN_PORT:</span> {email}</div>
              <div className="border-t border-primary/20 my-3"></div>
              <div>
                <span className="text-tertiary">RAW_SIGNAL:</span>
                <p className="mt-1 text-on-surface-variant text-xs leading-relaxed whitespace-pre-wrap">
                  {message}
                </p>
              </div>
            </div>

            <p className="text-xs text-outline-variant mt-4 text-center">
              Transponder Snail connection terminated. Connection stored in digital archives.
            </p>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleCloseLog}
                className="px-6 py-2 bg-secondary text-on-secondary font-title-md text-xs font-bold uppercase rounded hover:brightness-110 transition-all manga-border"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
