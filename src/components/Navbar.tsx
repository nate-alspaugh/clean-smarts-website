

export const Navbar = () => {
  return (
    <nav 
      className="w-full text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm"
      style={{ backgroundColor: '#202238' }}
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
            <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
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
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
