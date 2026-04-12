

import { CaretDown, List } from '@phosphor-icons/react';

export const Navbar = () => {
  return (
    <nav 
      className="w-full text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm"
      style={{ backgroundColor: '#202237' }}
    >
      <div className="flex items-center gap-10">
        <a href="#" className="flex-shrink-0">
          <img 
            src="https://cdn.prod.website-files.com/61790b76ca74ffddd06dfc38/672bb9cbe8f852e52e00ff62_Logo%20white.svg" 
            alt="Clean Smarts Logo" 
            className="h-6 w-auto"
          />
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            Features
            <CaretDown size={16} weight="regular" className="opacity-70" />
          </a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Getting Started</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#" className="hover:text-emerald-400 transition-colors">Login</a>
        <a 
          href="#" 
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-md transition-colors"
        >
          Book a Demo
        </a>
      </div>

        {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button className="text-white hover:text-emerald-400">
          <List size={24} weight="regular" />
        </button>
      </div>
    </nav>
  );
};
