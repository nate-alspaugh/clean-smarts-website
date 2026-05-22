import { ArrowRight, List } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      className="w-full bg-white text-slate-900 rounded-2xl border border-slate-200/80 py-3 pl-5 pr-3 flex items-center justify-between shadow-sm"
    >
      <Link to="/" className="flex-shrink-0">
        <img
          src="https://cdn.prod.website-files.com/61790b76ca74ffddd06dfc38/672bb9cbe8f852e52e00ff62_Logo%20white.svg"
          alt="Clean Smarts Logo"
          className="h-6 w-auto"
          style={{ filter: 'brightness(0)' }}
        />
      </Link>

      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-900">
        <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
        <Link to="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
        <a href="#" className="hover:text-blue-600 transition-colors">Getting Started</a>
        <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
      </div>

      <div className="hidden md:flex items-center gap-2 text-sm font-medium">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-slate-900 hover:text-blue-600 transition-colors px-3 py-2"
        >
          Login
          <ArrowRight size={16} weight="bold" />
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 px-5 py-2.5 rounded-md transition-all font-medium"
        >
          Book a demo
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button className="text-slate-900 hover:text-blue-600" aria-label="Open menu">
          <List size={24} weight="regular" />
        </button>
      </div>
    </nav>
  );
};
