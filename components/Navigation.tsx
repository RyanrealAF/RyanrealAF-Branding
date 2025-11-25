import React from 'react';
import { NavItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: any) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-t border-neutral-800 md:w-64 md:h-screen md:top-0 md:border-t-0 md:border-r md:flex md:flex-col md:justify-between">
      <div className="hidden md:flex flex-col p-8">
        <h1 className="text-2xl font-bold tracking-tighter text-white mb-2 brand-font">Ryan<span className="text-amber-700">real</span>AF</h1>
        <p className="text-xs text-neutral-500 uppercase tracking-widest">Architecture of Resonance</p>
      </div>

      <div className="flex md:flex-col overflow-x-auto md:overflow-visible px-4 md:px-6 py-2 md:py-0 gap-2 md:gap-4 no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 whitespace-nowrap text-sm font-medium tracking-wide
                ${isActive 
                  ? 'bg-neutral-900 text-amber-500 border-l-2 border-amber-600' 
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/50 border-l-2 border-transparent'
                }`}
            >
              <item.icon size={18} className={isActive ? "text-amber-500" : "opacity-70"} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="hidden md:block p-8">
        <div className="text-[10px] text-neutral-700 uppercase tracking-widest">
          System Status: Online
          <br />
          Version: 2.5.0
        </div>
      </div>
    </nav>
  );
};

export default Navigation;