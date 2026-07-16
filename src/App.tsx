import { useState, useEffect } from 'react';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Bounties } from './sections/Bounties';
import { Islands } from './sections/Islands';
import { Contact } from './sections/Contact';
import luffy from "./assets/luffy.png";
import zoro from "./assets/zoro.png";
import shanks from "./assets/shanks.png";
import roger from "./assets/roger.png";
import hiriluk from "./assets/hiriluk.png";

interface Quote {
  text: string;
  author: string;
  role: string;
  avatar: string;
  color: string;
}

const quotesList: Quote[] = [
  {
    text: "I don't want to conquer anything. I just think the guy with the most freedom on this whole ocean is the Pirate King!",
    author: "Monkey D. Luffy",
    role: "Captain of the Straw Hat Pirates",
    avatar: luffy,
    color: "border-[#FFDB3C] text-[#FFDB3C] shadow-[0_0_20px_rgba(255,219,60,0.4)]"
  },
  {
    text: "If you don't take risks, you can't create a future!",
    author: "Monkey D. Luffy",
    role: "Captain of the Straw Hat Pirates",
    avatar: luffy,
    color: "border-[#FFDB3C] text-[#FFDB3C] shadow-[0_0_20px_rgba(255,219,60,0.4)]"
  },
  {
    text: "When do you think people die? When they are shot by a heart-seeking bullet? No. They die when they are forgotten!",
    author: "Dr. Hiriluk",
    role: "Quack Doctor of Drum Island",
    avatar: hiriluk,
    color: "border-[#FF7373] text-[#FF7373] shadow-[0_0_20px_rgba(255,115,115,0.4)]"
  },
  {
    text: "Inherited Will, The Destiny of Age, and The Dreams of People... As long as people continue to pursue the meaning of Freedom, these things will never cease to be!",
    author: "Gol D. Roger",
    role: "The Pirate King",
    avatar: roger,
    color: "border-[#79A0E3] text-[#79A0E3] shadow-[0_0_20px_rgba(121,160,227,0.4)]"
  },
  {
    text: "When I decided to follow my dream, I had already discarded my life.",
    author: "Roronoa Zoro",
    role: "Swordsman of the Straw Hat Pirates",
    avatar: zoro,
    color: "border-[#79A0E3] text-[#79A0E3] shadow-[0_0_20px_rgba(121,160,227,0.4)]"
  },
  {
    text: "By experiencing both victory and defeat, running away and shedding tears, a man will grow up.",
    author: "Red-Haired Shanks",
    role: "Captain of the Red Hair Pirates",
    avatar: shanks,
    color: "border-[#FF7373] text-[#FF7373] shadow-[0_0_20px_rgba(255,115,115,0.4)]"
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [compassAngle, setCompassAngle] = useState(0);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  // Scroll detection to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'journey', 'bounties', 'islands', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Rotate compass on scroll
      setCompassAngle(window.scrollY / 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCompassClick = () => {
    // Spin rapidly on click
    setCompassAngle(prev => prev + 360);
    // Choose random quote to open modal
    const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
    setSelectedQuote(randomQuote);
  };

  return (
    <div className="bg-[#001A33] text-on-surface font-body-md min-h-screen flex flex-col selection:bg-secondary-container selection:text-on-secondary-container bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-dim via-[#001A33] to-background">
      {/* Ambient Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* TopAppBar (Desktop Navigation) */}
      <header className="hidden md:flex fixed top-0 w-full z-50 justify-between items-center px-margin-desktop h-20 bg-surface-dim/80 backdrop-blur-xl border-b-4 border-surface-container-highest shadow-[0_0_20px_rgba(255,219,60,0.2)]">
        <div
          onClick={() => scrollToSection('home')}
          className="flex flex-col cursor-pointer scale-95 active:scale-90 transition-transform group select-none"
        >
          <span className="font-headline-lg text-2xl font-black text-secondary tracking-tighter uppercase group-hover:brightness-110 leading-none">
            LOGBOOK
          </span>
          <span className="font-mono text-[9px] text-primary tracking-widest uppercase font-bold mt-1 leading-none">
            Rahul Khanapuri
          </span>
        </div>

        <nav className="flex gap-8">
          <button
            onClick={() => scrollToSection('journey')}
            className={`font-title-md text-base transition-all duration-300 px-3 py-1 scale-95 active:scale-90 flex flex-col items-center border-b-2 ${activeSection === 'journey'
              ? 'text-secondary border-secondary'
              : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
          >
            Crew (About)
          </button>
          <button
            onClick={() => scrollToSection('bounties')}
            className={`font-title-md text-base transition-all duration-300 px-3 py-1 scale-95 active:scale-90 flex flex-col items-center border-b-2 ${activeSection === 'bounties'
              ? 'text-secondary border-secondary'
              : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
          >
            Bounties (Skills)
          </button>
          <button
            onClick={() => scrollToSection('islands')}
            className={`font-title-md text-base transition-all duration-300 px-3 py-1 scale-95 active:scale-90 flex flex-col items-center border-b-2 ${activeSection === 'islands'
              ? 'text-secondary border-secondary'
              : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
          >
            Islands (Projects)
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-title-md text-sm font-bold rounded-lg manga-border hover:brightness-110 active:scale-95 transition-all"
          >
            RECRUIT
          </button>
          <button
            onClick={handleCompassClick}
            className="text-primary hover:bg-surface-bright/20 hover:text-primary transition-all duration-300 p-2 rounded-full flex items-center justify-center border border-primary/20 shadow-inner"
            title="Log Pose Compass"
          >
            <span
              className="material-symbols-outlined transition-transform duration-300"
              style={{
                fontVariationSettings: "'FILL' 1",
                transform: `rotate(${compassAngle}deg)`
              }}
            >
              explore
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Top Header trigger */}
      <div className="md:hidden fixed top-0 w-full z-30 h-16 bg-surface-dim/80 backdrop-blur-xl border-b-4 border-surface-container-highest flex items-center px-4 justify-between">
        <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="font-headline-lg text-lg font-black text-secondary tracking-tighter uppercase leading-none">LOGBOOK</span>
          <span className="font-mono text-[8px] text-primary tracking-widest uppercase font-bold mt-0.5 leading-none">Rahul Khanapuri</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="text-primary p-2 flex items-center justify-center"
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* SideNavBar (Mobile Sidebar) */}
      <nav
        className={`md:hidden fixed left-0 top-0 h-full w-72 z-40 flex flex-col bg-surface-container-lowest/95 backdrop-blur-2xl border-r-4 border-surface-container-highest shadow-[10px_0_30px_rgba(255,47,76,0.2)] transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-6 border-b-4 border-surface-container-highest">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-secondary/50 shadow-inner bg-surface">
            <img
              alt="Rahul Khanapuri Mobile Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdMocE_uq77Hdn8QwkfBpxkf3ZaQQE983oM7e_OmteQVwZLbbbF6HQ_yw8bk94c8BB4gsgBTgKCOS5SKggiW1AOaSRDr-ei7pwNVvnaB142y3CGWdJPkEb1BzoQg-9YpJb84gBnm4zGpflx-BxjOfg0JcTYagdiAAC31VSEzguaxdCErPE7H8wNiwcpJE6tDtSx5JpFDqx0BkRa5GEqnrEmQnhkDfn96slKMwlbezJU2qDuIZ1tUL_-Y-ClgXSKlPjKr3BYciCrfJ"
            />
          </div>
          <h1 className="font-headline-lg-mobile text-xl font-black text-tertiary">GRAND LINE</h1>
          <p className="font-title-md text-xs text-on-surface-variant mt-1">Rahul Khanapuri Portfolio</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          <button
            onClick={() => scrollToSection('journey')}
            className={`flex items-center gap-4 p-4 text-left rounded-xl transition-all ${activeSection === 'journey'
              ? 'bg-tertiary-container/40 text-tertiary border border-tertiary/20'
              : 'text-on-surface-variant hover:bg-surface-variant'
              }`}
          >
            <span className="material-symbols-outlined">groups</span>
            <span className="font-title-md text-sm font-bold">Crew (About)</span>
          </button>

          <button
            onClick={() => scrollToSection('bounties')}
            className={`flex items-center gap-4 p-4 text-left rounded-xl transition-all ${activeSection === 'bounties'
              ? 'bg-tertiary-container/40 text-tertiary border border-tertiary/20'
              : 'text-on-surface-variant hover:bg-surface-variant'
              }`}
          >
            <span className="material-symbols-outlined">military_tech</span>
            <span className="font-title-md text-sm font-bold">Bounties (Skills)</span>
          </button>

          <button
            onClick={() => scrollToSection('islands')}
            className={`flex items-center gap-4 p-4 text-left rounded-xl transition-all ${activeSection === 'islands'
              ? 'bg-tertiary-container/40 text-tertiary border border-tertiary/20'
              : 'text-on-surface-variant hover:bg-surface-variant'
              }`}
          >
            <span className="material-symbols-outlined">map</span>
            <span className="font-title-md text-sm font-bold">Islands (Projects)</span>
          </button>
        </div>

        <div className="p-6 border-t-4 border-surface-container-highest">
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full py-4 bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-title-md text-sm font-bold rounded-lg manga-border hover:brightness-110 active:scale-95 transition-all uppercase tracking-wider"
          >
            RECRUIT
          </button>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
        ></div>
      )}

      {/* Main Sections */}
      <main className="flex-1 w-full relative">
        <Hero
          onRecruitClick={() => scrollToSection('contact')}
          onJourneyClick={() => scrollToSection('journey')}
        />
        <Journey />
        <Bounties />
        <Islands />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t-4 border-surface-container-highest w-full py-6 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">
        <div className="font-title-md text-sm text-secondary font-bold tracking-wider text-center md:text-left">
          {`© ${new Date().getFullYear()} AGE OF PIRATES | CODED IN THE NEW WORLD`}
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a
            href="https://github.com/rahulkhanapuri"
            target="_blank"
            rel="noreferrer"
            className="font-body-md text-xs text-on-surface-variant hover:text-secondary transition-all hover:scale-105"
          >
            GitHub Outpost
          </a>
          <a
            href="https://linkedin.com/in/rahul-khanapuri"
            target="_blank"
            rel="noreferrer"
            className="font-body-md text-xs text-on-surface-variant hover:text-secondary transition-all hover:scale-105"
          >
            LinkedIn Port
          </a>
          <a
            href="mailto:rahulkhanapuri25@gmail.com"
            className="font-body-md text-xs text-on-surface-variant hover:text-secondary transition-all hover:scale-105"
          >
            Email Cove
          </a>
          <span className="font-body-md text-xs text-on-surface-variant">
            Bangalore, India
          </span>
        </div>
      </footer>

      {/* Wisdom Quote Modal */}
      {selectedQuote && (
        <WisdomModal quote={selectedQuote} onClose={() => setSelectedQuote(null)} />
      )}
    </div>
  );
}

/* ─── Wisdom Quote Modal Component ───────────────────────────── */
interface WisdomModalProps {
  quote: Quote;
  onClose: () => void;
}

const WisdomModal: React.FC<WisdomModalProps> = ({ quote, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur-md px-4">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className={`w-full max-w-lg bg-surface-dim/95 border-2 rounded-2xl p-6 relative font-mono text-sm z-10 transition-all ${quote.color}`}>
        {/* Close Button */}
        <div className="absolute top-0 right-0 p-4">
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Wisdom Label */}
        <h3 className="font-mono text-xs text-[#b8070f] font-bold mb-5 tracking-widest uppercase flex items-center gap-1.5 border-b border-surface-container-highest pb-3">
          <span className="material-symbols-outlined text-[#ffdb3c] animate-pulse">explore</span>
          Compass Wisdom Transmitted
        </h3>

        {/* Quote Content */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          {/* Character Avatar */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffdb3c] shadow-md flex-shrink-0 bg-surface">
            <img
              alt={quote.author}
              className="w-full h-full object-cover"
              src={quote.avatar}
            />
          </div>

          {/* Text block */}
          <div className="flex-grow text-center sm:text-left">
            <h4 className="font-mono text-sm text-[#ffdb3c] font-black uppercase tracking-wide">
              {quote.author}
            </h4>
            <span className="font-mono text-[9px] text-outline-variant uppercase tracking-widest block mb-3 leading-none">
              {quote.role}
            </span>

            <p className="font-mono text-xs text-on-surface-variant leading-relaxed italic border-l-2 border-[#b8070f] pl-3 py-1 bg-surface-lowest/30 rounded-r text-left">
              "{quote.text}"
            </p>
          </div>
        </div>

        {/* Telemetry log footer */}
        <div className="border-t border-surface-container-highest mt-6 pt-3 flex justify-between items-center text-[8px] text-outline-variant font-mono tracking-wider">
          <span>CODENAME: WILL_OF_D</span>
          <span>STATUS: SYNCED</span>
        </div>

        {/* Dismiss Button */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-title-md text-[10px] font-bold uppercase rounded-lg border border-secondary/40 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,219,60,0.25)]"
          >
            Acknowledge Wisdom
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
