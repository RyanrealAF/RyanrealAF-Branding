import React from 'react';
import { PERSONAS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DATA = [
  { name: 'Static Text', value: 62 },
  { name: 'Rhythmic Cadence', value: 100 },
];

const SectionNarrative: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 md:py-12">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 brand-font flex items-center gap-4">
          <span className="text-amber-700">02.</span> Narrative Command
        </h2>
        <p className="text-neutral-500 max-w-xl text-lg">
          Cadence is the brand's sonic signature. Bypassing the rational mind to strike the limbic system directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Personas Column */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2">The Persona Action Flow</h3>
          {PERSONAS.map((persona, index) => (
            <div key={index} className={`bg-neutral-900/20 border-l-2 ${persona.color} p-6 hover:bg-neutral-900/40 transition-colors`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-bold uppercase tracking-wide">{persona.title}</h4>
                <span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-1 rounded uppercase tracking-wider">{persona.role}</span>
              </div>
              <p className="text-neutral-400 text-sm">{persona.desc}</p>
            </div>
          ))}
        </div>

        {/* Data Viz Column */}
        <div className="bg-neutral-900/30 p-8 rounded-sm border border-neutral-800 flex flex-col">
          <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">Engagement Velocity</h3>
          <p className="text-xs text-neutral-500 mb-8">Internal metrics: Rhythmic delivery effectiveness.</p>
          
          <div className="flex-grow min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={120} tick={{fill: '#737373', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: '#262626'}}
                  contentStyle={{ backgroundColor: '#000', borderColor: '#333', color: '#fff' }}
                />
                <Bar dataKey="value" barSize={32} radius={[0, 4, 4, 0]}>
                  {DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 1 ? '#b45309' : '#404040'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center">
            <span className="text-3xl font-bold text-white">+38%</span>
            <span className="text-neutral-500 text-sm ml-2">Performance Lift</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNarrative;