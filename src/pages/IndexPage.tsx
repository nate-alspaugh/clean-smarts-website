import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

const pages = [
  { name: 'Home', path: '/home' },
  { name: 'Home (No Card)', path: '/home-no-card' },
  { name: 'Pricing', path: '/pricing' },
];

export const IndexPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/40 p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-white tracking-tight mb-1">Pages</h1>
        <p className="text-sm text-slate-400 mb-6">In-progress pages for this project.</p>

        <ul className="flex flex-col gap-2">
          {pages.map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                className="group flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60 hover:text-white transition-colors"
              >
                <span className="font-medium">{page.name}</span>
                <ArrowRight size={16} weight="regular" className="text-slate-500 group-hover:text-slate-200 transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
