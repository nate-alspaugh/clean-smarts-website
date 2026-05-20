interface GridOverlayProps {
  visible: boolean;
}

const COLUMN_STYLE = {
  backgroundColor: 'rgba(255, 0, 100, 0.08)',
  borderLeft: '1px solid rgba(255, 0, 100, 0.25)',
  borderRight: '1px solid rgba(255, 0, 100, 0.25)',
} as const;

export function GridOverlay({ visible }: GridOverlayProps) {
  if (!visible) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-[60]">
      <div
        className="grid h-full"
        style={{
          gridTemplateColumns: 'repeat(var(--grid-cols), 1fr)',
          columnGap: 'var(--grid-gap)',
          paddingLeft: 'var(--grid-padding)',
          paddingRight: 'var(--grid-padding)',
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`relative h-full ${i >= 6 ? 'hidden md:block' : ''}`}
            style={COLUMN_STYLE}
          >
            <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded-sm bg-pink-500/15 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-pink-700/80">
              {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
