const cardStyle: React.CSSProperties = {
  borderRadius: 16,
  background: '#ffffff',
  boxShadow:
    '0 1px 2px rgba(15, 23, 42, 0.04), 0 6px 24px rgba(15, 23, 42, 0.06)',
};

const featherMask =
  'linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)';

// Negative top/bottom inset pulls the masonry through the hero section's
// vertical padding (py-20 / lg:py-28) so cards bleed past the section edges
// rather than stopping inside the padded grid row.
// Mobile responsive treatment is intentionally deferred until card contents are defined.
export const HeroMasonry = () => {
  return (
    <div
      className="absolute inset-x-0 -top-20 -bottom-20 lg:-top-28 lg:-bottom-28 overflow-hidden"
      style={{
        WebkitMaskImage: featherMask,
        maskImage: featherMask,
      }}
    >
      <div
        className="grid grid-cols-2 h-full"
        style={{ columnGap: 'var(--grid-gap)' }}
      >
        <div
          className="flex flex-col gap-6"
          style={{ transform: 'translateY(-110px)' }}
        >
          <div style={{ ...cardStyle, height: 240 }} />
          <div style={{ ...cardStyle, height: 480 }} />
          <div style={{ ...cardStyle, height: 320 }} />
        </div>
        <div
          className="flex flex-col gap-6"
          style={{ transform: 'translateY(-70px)' }}
        >
          <div style={{ ...cardStyle, height: 280 }} />
          <div style={{ ...cardStyle, height: 400 }} />
          <div style={{ ...cardStyle, height: 320 }} />
        </div>
      </div>
    </div>
  );
};
