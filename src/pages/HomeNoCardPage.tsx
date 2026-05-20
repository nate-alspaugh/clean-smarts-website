import { Navbar } from '../components/Navbar';
import { GridRow, GridCol } from '../components/Grid';
import { Star } from '@phosphor-icons/react';
import { defaultGlass } from '../components/GlassControls';

export const HomeNoCardPage = () => {
  const glass = defaultGlass;
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <div
        className="relative overflow-hidden py-28 lg:py-32"
        style={{
          backgroundColor: '#DDE9FF',
          backgroundImage: 'linear-gradient(to bottom, #fff 0%, #fff 20%, #EEF8FF 60%, #DDE9FF 100%)',
          backgroundSize: '100% 85vh',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 23, 42, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 23, 42, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: '140px 140px',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 70% at 50% 50%, black 35%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 70% 70% at 50% 50%, black 35%, transparent 100%)',
          }}
        />
        <GridRow className="relative">
          <GridCol start={2} span={4}>
            <h1 className="text-5xl md:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.05]">
              Software to save cleaning teams time and money
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed">
              Automate time tracking, simplify scheduling, and improve client communication. An all-in-one tool for your commercial cleaning company or janitorial staff.
            </p>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/20 active:bg-blue-800 px-6 py-3 rounded-md transition-all font-medium"
              >
                Book a demo
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} weight="fill" />
                ))}
              </div>
              <span className="text-xs text-slate-900">
                4.8 rating on the Apple App Store (1,200+ reviews)
              </span>
            </div>
          </GridCol>

          <GridCol start={8} span={3}>
            <div
              className="relative aspect-square overflow-hidden"
              style={{
                borderRadius: `${glass.borderRadius}px`,
                background: `linear-gradient(${glass.gradientAngle}deg, rgba(255,255,255,${glass.fillOpacity1}) 0%, rgba(255,255,255,${glass.fillOpacity2}) 50%, rgba(255,255,255,${glass.fillOpacity3}) 100%)`,
                backdropFilter: `blur(${glass.blur}px) saturate(${glass.saturate}%)`,
                WebkitBackdropFilter: `blur(${glass.blur}px) saturate(${glass.saturate}%)`,
                border: `1px solid rgba(255,255,255,${glass.borderOpacity})`,
                boxShadow: `0 8px ${glass.shadow1Blur}px rgba(31, 58, 112, ${glass.shadow1Opacity}), 0 2px ${glass.shadow2Blur}px rgba(31, 58, 112, ${glass.shadow2Opacity}), inset 0 1px 0 rgba(255,255,255,${glass.insetTopOpacity}), inset 0 -1px 0 rgba(255,255,255,${glass.insetBottomOpacity})`,
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 30% 0%, rgba(255,255,255,${glass.sheenOpacity}), transparent 60%)`,
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-1/4 -right-1/4 w-2/3 h-2/3 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255,255,255,${glass.orbTROpacity}), transparent 70%)`,
                  filter: `blur(${glass.orbTRBlur}px)`,
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255,255,255,${glass.orbBLOpacity}), transparent 70%)`,
                  filter: `blur(${glass.orbBLBlur}px)`,
                }}
              />
            </div>
          </GridCol>
        </GridRow>
      </div>
    </div>
  );
};
