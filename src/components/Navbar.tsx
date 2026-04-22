

import { CaretDown, List } from '@phosphor-icons/react';

export const Navbar = () => {
  return (
    <nav className="w-full bg-white text-slate-900 border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-10">
        <a href="#" className="flex-shrink-0">
          <img
            src="https://cdn.prod.website-files.com/61790b76ca74ffddd06dfc38/672bb9cbe8f852e52e00ff62_Logo%20white.svg"
            alt="Clean Smarts Logo"
            className="h-6 w-auto"
            style={{ filter: 'brightness(0)' }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
            Features
            <CaretDown size={16} weight="regular" className="opacity-70" />
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Getting Started</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">FAQ</a>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#" className="text-slate-700 hover:text-emerald-600 transition-colors">Login</a>
        <a
          href="#"
          className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/20 active:bg-blue-800 px-5 py-2.5 rounded-md transition-all"
        >
          Book a Demo
        </a>
      </div>

        {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button className="text-slate-900 hover:text-emerald-600">
          <List size={24} weight="regular" />
        </button>
      </div>
    </nav>
  );
};
