import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionType } from '../constants';

interface SectionIntroProps {
  onNavigate: (id: any) => void;
}

const SectionIntro: React.FC<SectionIntroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 md:pt-0">
      <div className="max-w-4xl animate-fade-in-up">
        <div className="inline-block mb-6 px-3 py-1 border border-amber-900/30 bg-amber-900/10 rounded-full">
          <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">Declassified Dossier</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white brand-font">
          Authenticity <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700">Ain't</span> <br />
          <span className="text-amber-700">Optional</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12 border-l-2 border-neutral-800 pl-6">
          In an economy of sanitized tropes, we deconstruct the architecture of resonance. 
          A strategic rejection of polish in favor of a poetry forged in pain. 
          This is the blueprint for an anti-fragile identity.
        </p>

        <button 
          onClick={() => onNavigate(SectionType.DOCTRINE)}
          className="group flex items-center gap-4 text-white uppercase tracking-widest text-sm font-bold border-b border-amber-700 pb-2 hover:text-amber-500 hover:border-amber-500 transition-all"
        >
          Initialize Deconstruction
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-amber-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-neutral-800/20 rounded-full blur-[80px]"></div>
      </div>
    </section>
  );
};

export default SectionIntro;