import React from 'react';
import { THREE_NOS } from '../constants';
import { ShieldAlert } from 'lucide-react';

const SectionDoctrine: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 md:py-12">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 brand-font flex items-center gap-4">
          <span className="text-amber-700">01.</span> The Core Doctrine
        </h2>
        <p className="text-neutral-500 max-w-xl text-lg">
          The "Authenticity Ain't Optional" (A.A.O.) framework creates an anti-fragile identity. 
          It weaponizes trauma through rhythm, not apology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {THREE_NOS.map((item, index) => (
          <div key={index} className="bg-neutral-900/40 border border-neutral-800 p-8 hover:border-amber-900/50 transition-all duration-500 group">
            <div className="mb-6 text-amber-700 group-hover:text-amber-500 transition-colors">
              <item.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{item.title}</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 border-l-4 border-amber-700 p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl text-white font-bold mb-4 uppercase brand-font">Linguistic Liminality</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Dichotomy 01</div>
              <div className="text-white font-serif italic text-lg border-b border-neutral-800 pb-2 mb-2">Street vs. Sacred</div>
              <p className="text-xs text-neutral-400">Asphalt & Psalms.</p>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Dichotomy 02</div>
              <div className="text-white font-serif italic text-lg border-b border-neutral-800 pb-2 mb-2">Vulnerability vs. Valor</div>
              <p className="text-xs text-neutral-400">Brokenness as strength.</p>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Dichotomy 03</div>
              <div className="text-white font-serif italic text-lg border-b border-neutral-800 pb-2 mb-2">Struggle vs. Scripture</div>
              <p className="text-xs text-neutral-400">Endurance as faith.</p>
            </div>
          </div>
        </div>
        <div className="absolute -right-12 -bottom-12 text-neutral-800/20 opacity-10">
          <ShieldAlert size={300} />
        </div>
      </div>
    </section>
  );
};

export default SectionDoctrine;