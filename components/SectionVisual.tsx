import React from 'react';
import { VISUAL_RULES } from '../constants';

const SectionVisual: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 md:py-12">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 brand-font flex items-center gap-4">
          <span className="text-amber-700">03.</span> Dark Elegance
        </h2>
        <p className="text-neutral-500 max-w-xl text-lg">
          The physical manifestation of the A.A.O. mindset. Design as discipline. Beauty as precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* The Rules */}
        <div className="space-y-8">
            {VISUAL_RULES.map((item, idx) => (
                <div key={idx} className="group">
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-amber-900 font-bold text-sm">0{idx + 1}</span>
                        <h3 className="text-xl text-white font-bold uppercase tracking-wider">{item.title}</h3>
                    </div>
                    <div className="pl-8 border-l border-neutral-800 group-hover:border-amber-700 transition-colors duration-500">
                        <p className="text-xs text-amber-600 uppercase tracking-widest mb-1">{item.rule}</p>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* The Palette / Material Board */}
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[2/1] bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/800/400?grayscale')] opacity-10 mix-blend-overlay"></div>
                 <span className="text-neutral-500 text-xs uppercase tracking-widest z-10">Primary Surface</span>
                 <span className="text-white font-bold text-2xl uppercase tracking-widest z-10 brand-font">Matte Black</span>
                 <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-neutral-400">#050505 // Assertion</span>
                 </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-amber-900 to-amber-700 border border-amber-900/50 p-4 flex flex-col justify-between relative group">
                <span className="text-amber-200/50 text-xs uppercase tracking-widest">Accent</span>
                <span className="text-white font-bold text-xl uppercase tracking-widest brand-font">Bronze</span>
                 <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-amber-200">Legacy</span>
                 </div>
            </div>

            <div className="aspect-square bg-neutral-900 border border-neutral-800 p-4 flex flex-col justify-between relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent opacity-50"></div>
                 <span className="text-neutral-500 text-xs uppercase tracking-widest z-10">Texture</span>
                 <span className="text-neutral-300 font-bold text-xl uppercase tracking-widest z-10 brand-font">Stone</span>
            </div>
        </div>
      </div>
      
      {/* Typography Showcase */}
      <div className="mt-16 border-t border-neutral-900 pt-8">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div>
                 <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2">Typography: Monumental</p>
                 <h2 className="text-5xl md:text-6xl text-white font-bold brand-font uppercase">Presence</h2>
             </div>
             <div className="md:text-right">
                 <div className="text-amber-700 font-bold mb-1">LIGHTING THROUGH TYPOGRAPHY</div>
                 <div className="text-neutral-500 text-sm">BOLD = SPOTLIGHT // CAPS = DECLARATION</div>
             </div>
         </div>
      </div>
    </section>
  );
};

export default SectionVisual;