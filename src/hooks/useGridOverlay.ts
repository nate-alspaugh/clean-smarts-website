import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'grid-overlay';

const readStored = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(STORAGE_KEY) === 'true';
};

export function useGridOverlay() {
  const [visible, setVisible] = useState<boolean>(readStored);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(visible));
  }, [visible]);

  const toggle = useCallback(() => setVisible((v) => !v), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
      if (e.key !== 'l' && e.key !== 'L') return;

      e.preventDefault();
      toggle();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  return { visible, toggle };
}
