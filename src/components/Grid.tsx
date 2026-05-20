import type { CSSProperties, ReactNode } from 'react';

type GridRowProps = {
  /** Adds the outer page padding (--grid-padding) on both sides. Set false for inner grids nested inside a GridCol. */
  padding?: boolean;
  className?: string;
  children: ReactNode;
};

export function GridRow({ padding = true, className = '', children }: GridRowProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(var(--grid-cols), 1fr)',
        columnGap: 'var(--grid-gap)',
        paddingInline: padding ? 'var(--grid-padding)' : undefined,
      }}
    >
      {children}
    </div>
  );
}

type GridColProps = {
  /** Desktop (12-col) column start, 1-based. Default 1. */
  start?: number;
  /** Desktop (12-col) span. Default 12. */
  span?: number;
  /** Mobile (6-col) column start. Default 1. */
  mobileStart?: number;
  /** Mobile (6-col) span. Default 6 (full-width). */
  mobileSpan?: number;
  className?: string;
  children: ReactNode;
};

export function GridCol({
  start = 1,
  span = 12,
  mobileStart = 1,
  mobileSpan = 6,
  className = '',
  children,
}: GridColProps) {
  return (
    <div
      className={`grid-col ${className}`.trim()}
      style={{
        '--gc-start-sm': mobileStart,
        '--gc-span-sm': mobileSpan,
        '--gc-start-md': start,
        '--gc-span-md': span,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}
