import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import SectionIntro from './components/SectionIntro';
import SectionDoctrine from './components/SectionDoctrine';
import SectionNarrative from './components/SectionNarrative';
import SectionVisual from './components/SectionVisual';
import { SectionType } from './constants';
import { Anchor } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.INTRO);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: SectionType) => {
    setActiveSection(sectionId);
    scrollToTop();
  };

  const renderSection = () => {
    switch (activeSection) {
      case SectionType.INTRO:
        return <SectionIntro onNavigate={handleNavigate} />;
      case SectionType.DOCTRINE:
        return <SectionDoctrine />;
      case SectionType.NARRATIVE:
        return <SectionNarrative />;
      case SectionType.VISUAL:
        return <SectionVisual />;
      case SectionType.SYNTHESIS:
        return (
          <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
            <Anchor size={64} className="text-amber-700 mb-8" />
            <h2 className="text-4xl md:text-6xl text-white font-bold mb-8 brand-font uppercase">Movement Architecture</h2>
            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
              We have annihilated the notion that authenticity must be softened to scale. 
              <br /><br />
              <span className="text-white border-b border-amber-700 pb-1">Resonance. Resistance. Rhythm.</span>
            </p>
            <button 
                onClick={() => handleNavigate(SectionType.INTRO)}
                className="text-xs text-neutral-600 uppercase tracking-widest hover:text-white transition-colors"
            >
                Return to Source
            </button>
          </section>
        );
      default:
        return <SectionIntro onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 md:pl-64 transition-all duration-700">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="w-full relative">
        {/* Ambient background noise/grain could go here */}
        <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-[0.03]" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}>
        </div>
        
        {renderSection()}

        <footer className="py-8 px-6 md:px-12 border-t border-neutral-900 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 uppercase tracking-widest">
            <span>RyanrealAF Deconstruction</span>
            <span className="mt-2 md:mt-0">© {new Date().getFullYear()} // A.A.O. Protocol</span>
        </footer>
      </main>
    </div>
  );
};

export default App;