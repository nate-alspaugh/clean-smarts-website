import { useState } from 'react';

export type GlassValues = {
  gradientAngle: number;
  fillOpacity1: number;
  fillOpacity2: number;
  fillOpacity3: number;
  blur: number;
  saturate: number;
  borderOpacity: number;
  borderRadius: number;
  shadow1Blur: number;
  shadow1Opacity: number;
  shadow2Blur: number;
  shadow2Opacity: number;
  insetTopOpacity: number;
  insetBottomOpacity: number;
  sheenOpacity: number;
  orbTROpacity: number;
  orbTRBlur: number;
  orbBLOpacity: number;
  orbBLBlur: number;
};

export const defaultGlass: GlassValues = {
  gradientAngle: 135,
  fillOpacity1: 0.4,
  fillOpacity2: 0.15,
  fillOpacity3: 0.28,
  blur: 20,
  saturate: 180,
  borderOpacity: 0.6,
  borderRadius: 16,
  shadow1Blur: 32,
  shadow1Opacity: 0.12,
  shadow2Blur: 8,
  shadow2Opacity: 0.06,
  insetTopOpacity: 0.9,
  insetBottomOpacity: 0.3,
  sheenOpacity: 0.5,
  orbTROpacity: 0.7,
  orbTRBlur: 20,
  orbBLOpacity: 0.55,
  orbBLBlur: 20,
};

type Props = {
  values: GlassValues;
  onChange: (v: GlassValues) => void;
};

type SliderRow = {
  key: keyof GlassValues;
  label: string;
  min: number;
  max: number;
  step: number;
};

const sections: { title: string; rows: SliderRow[] }[] = [
  {
    title: 'Fill gradient',
    rows: [
      { key: 'gradientAngle', label: 'Angle (deg)', min: 0, max: 360, step: 1 },
      { key: 'fillOpacity1', label: 'Stop 1 opacity', min: 0, max: 1, step: 0.01 },
      { key: 'fillOpacity2', label: 'Stop 2 opacity', min: 0, max: 1, step: 0.01 },
      { key: 'fillOpacity3', label: 'Stop 3 opacity', min: 0, max: 1, step: 0.01 },
    ],
  },
  {
    title: 'Backdrop filter',
    rows: [
      { key: 'blur', label: 'Blur (px)', min: 0, max: 60, step: 1 },
      { key: 'saturate', label: 'Saturate (%)', min: 0, max: 300, step: 5 },
    ],
  },
  {
    title: 'Border & radius',
    rows: [
      { key: 'borderOpacity', label: 'Border opacity', min: 0, max: 1, step: 0.01 },
      { key: 'borderRadius', label: 'Radius (px)', min: 0, max: 80, step: 1 },
    ],
  },
  {
    title: 'Outer shadow',
    rows: [
      { key: 'shadow1Blur', label: 'Layer 1 blur', min: 0, max: 80, step: 1 },
      { key: 'shadow1Opacity', label: 'Layer 1 opacity', min: 0, max: 0.6, step: 0.01 },
      { key: 'shadow2Blur', label: 'Layer 2 blur', min: 0, max: 40, step: 1 },
      { key: 'shadow2Opacity', label: 'Layer 2 opacity', min: 0, max: 0.4, step: 0.01 },
    ],
  },
  {
    title: 'Inner highlights',
    rows: [
      { key: 'insetTopOpacity', label: 'Top edge', min: 0, max: 1, step: 0.01 },
      { key: 'insetBottomOpacity', label: 'Bottom edge', min: 0, max: 1, step: 0.01 },
      { key: 'sheenOpacity', label: 'Top sheen', min: 0, max: 1, step: 0.01 },
    ],
  },
  {
    title: 'Orbs',
    rows: [
      { key: 'orbTROpacity', label: 'Top-right opacity', min: 0, max: 1, step: 0.01 },
      { key: 'orbTRBlur', label: 'Top-right blur', min: 0, max: 60, step: 1 },
      { key: 'orbBLOpacity', label: 'Bottom-left opacity', min: 0, max: 1, step: 0.01 },
      { key: 'orbBLBlur', label: 'Bottom-left blur', min: 0, max: 60, step: 1 },
    ],
  },
];

function buildLockInPrompt(v: GlassValues): string {
  const background = `linear-gradient(${v.gradientAngle}deg, rgba(255,255,255,${v.fillOpacity1}) 0%, rgba(255,255,255,${v.fillOpacity2}) 50%, rgba(255,255,255,${v.fillOpacity3}) 100%)`;
  const backdrop = `blur(${v.blur}px) saturate(${v.saturate}%)`;
  const boxShadow = `0 8px ${v.shadow1Blur}px rgba(31, 58, 112, ${v.shadow1Opacity}), 0 2px ${v.shadow2Blur}px rgba(31, 58, 112, ${v.shadow2Opacity}), inset 0 1px 0 rgba(255,255,255,${v.insetTopOpacity}), inset 0 -1px 0 rgba(255,255,255,${v.insetBottomOpacity})`;
  const sheen = `radial-gradient(ellipse 80% 60% at 30% 0%, rgba(255,255,255,${v.sheenOpacity}), transparent 60%)`;
  const orbTR = `radial-gradient(circle, rgba(255,255,255,${v.orbTROpacity}), transparent 70%)`;
  const orbBL = `radial-gradient(circle, rgba(255,255,255,${v.orbBLOpacity}), transparent 70%)`;

  return `Lock in the glassmorphic container in src/pages/HomePage.tsx (the GridCol with start={8} span={3}). Replace the live, state-driven styles with these exact hard-coded values, then remove the GlassControls import, the useState/setGlass hook, and the <GlassControls /> render. Delete src/components/GlassControls.tsx if no other file imports it.

Container styles:
  border-radius: ${v.borderRadius}px
  background: ${background}
  backdrop-filter: ${backdrop}
  -webkit-backdrop-filter: ${backdrop}
  border: 1px solid rgba(255,255,255,${v.borderOpacity})
  box-shadow: ${boxShadow}

Overlay layers (all pointer-events-none, absolutely positioned):
  Top sheen (inset 0): background: ${sheen}
  Top-right orb (-top-1/4 -right-1/4 w-2/3 h-2/3 rounded-full):
    background: ${orbTR}
    filter: blur(${v.orbTRBlur}px)
  Bottom-left orb (-bottom-1/4 -left-1/4 w-2/3 h-2/3 rounded-full):
    background: ${orbBL}
    filter: blur(${v.orbBLBlur}px)`;
}

export function GlassControls({ values, onChange }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (key: keyof GlassValues, v: number) =>
    onChange({ ...values, [key]: v });

  const resetOne = (key: keyof GlassValues) =>
    onChange({ ...values, [key]: defaultGlass[key] });

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(buildLockInPrompt(values));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed right-4 top-20 z-50 w-72 rounded-xl bg-white/95 backdrop-blur-md shadow-xl ring-1 ring-slate-200 text-xs text-slate-700"
      style={{ maxHeight: 'calc(100vh - 6rem)' }}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
        <span className="font-semibold text-slate-900">Glass controls</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={copyPrompt}
            className="px-2 py-0.5 rounded bg-blue-600 text-white hover:bg-blue-700"
            title="Copy a lock-in prompt with current values"
          >
            {copied ? 'copied' : 'copy prompt'}
          </button>
          <button
            type="button"
            onClick={() => onChange(defaultGlass)}
            className="px-2 py-0.5 rounded hover:bg-slate-100 text-slate-500"
            title="Reset all values"
          >
            reset all
          </button>
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            className="px-2 py-0.5 rounded hover:bg-slate-100 text-slate-500"
          >
            {collapsed ? '+' : '−'}
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="overflow-y-auto px-3 py-2 space-y-3" style={{ maxHeight: 'calc(100vh - 10rem)' }}>
          {sections.map((section) => (
            <div key={section.title}>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                {section.title}
              </div>
              <div className="space-y-1.5">
                {section.rows.map((row) => {
                  const isDirty = values[row.key] !== defaultGlass[row.key];
                  return (
                    <label key={row.key} className="block">
                      <div className="flex items-center justify-between gap-2">
                        <span>{row.label}</span>
                        <div className="flex items-center gap-1">
                          <span className="font-mono text-slate-500">
                            {values[row.key]}
                          </span>
                          <button
                            type="button"
                            onClick={() => resetOne(row.key)}
                            disabled={!isDirty}
                            className={`w-4 h-4 leading-none rounded text-[10px] ${
                              isDirty
                                ? 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                                : 'text-slate-300 cursor-default'
                            }`}
                            title={`Reset to ${defaultGlass[row.key]}`}
                          >
                            ↺
                          </button>
                        </div>
                      </div>
                      <input
                        type="range"
                        min={row.min}
                        max={row.max}
                        step={row.step}
                        value={values[row.key]}
                        onChange={(e) => update(row.key, parseFloat(e.target.value))}
                        className="w-full accent-blue-600"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
