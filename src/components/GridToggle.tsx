import { GridFour } from '@phosphor-icons/react';

interface GridToggleProps {
  visible: boolean;
  onToggle: () => void;
}

export function GridToggle({ visible, onToggle }: GridToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={visible ? 'Hide grid overlay' : 'Show grid overlay'}
      aria-pressed={visible}
      title="Toggle grid overlay (Ctrl+L)"
      className={`fixed bottom-4 right-4 z-[70] flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium shadow-lg ring-1 transition-colors ${
        visible
          ? 'bg-slate-900 text-white ring-slate-900 hover:bg-slate-800'
          : 'bg-white text-slate-700 ring-slate-300 hover:bg-slate-50'
      }`}
    >
      <GridFour size={18} weight="bold" />
      <span>Grid</span>
      <kbd
        className={`ml-1 hidden rounded px-1.5 py-0.5 text-[10px] font-semibold sm:inline-block ${
          visible ? 'bg-white/15 text-white/80' : 'bg-slate-100 text-slate-500'
        }`}
      >
        Ctrl+L
      </kbd>
    </button>
  );
}
