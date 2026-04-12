import React from 'react';
import { Check } from '@phosphor-icons/react';
// Basic Base UI import - assuming v1 structural components if needed.
// However, since it is headless, we can also just style a generic button if Base isn't strictly requested for primitive buttons,
// but the user said "use Base UI as our base set of components".
import { Button } from '@base-ui/react';

export type PricingFeature = {
  text: React.ReactNode;
  icon?: React.ReactNode;
  hideCheck?: boolean;
};

export interface PricingCardProps {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  isYearly: boolean;
  priceModifier: React.ReactNode;
  description: React.ReactNode;
  features: PricingFeature[];
  isDark?: boolean;
  buttonText?: string;
  buttonUrl?: string;
}

export function PricingCard({
  title,
  monthlyPrice,
  yearlyPrice,
  isYearly,
  priceModifier,
  description,
  features,
  isDark,
  buttonText = 'Get Started',
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col h-full w-full p-8 rounded-3xl overflow-hidden group
        ${isDark ? 'bg-slate-900 text-white border-transparent shadow-[0_20px_50px_rgba(15,23,42,0.3)] z-10'
                 : 'bg-white text-slate-900 border border-slate-200 shadow-xl shadow-slate-200/50'}`}
    >

      {/* Shimmer effect for dark/expert card - animates on hover, snaps back instantly on leave */}
      {isDark && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform ease-out duration-0 group-hover:duration-1000 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
        </div>
      )}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        </div>
      </div>

      <div className={`mb-6 pb-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
        <div className="flex items-end gap-2">
          <div className={`text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ${isYearly ? yearlyPrice : monthlyPrice}
          </div>
          <p className={`mb-2 text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>/ mo</p>
        </div>
        <p className={`mt-2 text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          for first 10 users (billed {isYearly ? 'annually' : 'monthly'})
        </p>
        <p className={`mt-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {priceModifier}
        </p>
        <div className={`mt-1 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{description}</div>
      </div>

      <ul className="mb-8 space-y-4 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            {!feature.hideCheck && (
              <Check size={20} weight="bold" className={`flex-shrink-0 mr-3 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
            )}
            {feature.icon && (
              <div className={`mr-2 mt-0.5 flex-shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {feature.icon}
              </div>
            )}
            <span className={`text-sm leading-tight ${isDark ? 'text-slate-300' : 'text-slate-600'} ${feature.hideCheck && !feature.icon ? 'italic' : ''}`}>{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm ${
          isDark
            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/20 active:bg-blue-800'
            : 'bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200'
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}
