import React from 'react';
import { Bank, Check } from '@phosphor-icons/react';
import { Button, Switch } from '@base-ui/react';
import { RollingNumber } from './RollingNumber';

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
  badge?: string;
  primaryButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  payrollEnabled?: boolean;
  onPayrollChange?: (val: boolean) => void;
  payrollMonthlyAddOn?: number;
  payrollYearlyAddOn?: number;
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
  badge,
  primaryButton,
  buttonText = 'Get Started',
  payrollEnabled = false,
  onPayrollChange,
  payrollMonthlyAddOn = 0,
  payrollYearlyAddOn = 0,
}: PricingCardProps) {
  const basePrice = Number(isYearly ? yearlyPrice : monthlyPrice);
  const currentAddOn = isYearly ? payrollYearlyAddOn : payrollMonthlyAddOn;
  const displayedPrice = basePrice + (payrollEnabled ? currentAddOn : 0);
  return (
    <div className="relative h-full w-full">
      {badge && (
        <div className="absolute left-0 right-0 -top-9 h-20 bg-blue-600 rounded-3xl z-0 shadow-lg shadow-blue-600/30 flex items-start justify-center pt-2.5 pointer-events-none">
          <span className="text-white text-xs font-bold tracking-[0.15em] uppercase">
            {badge}
          </span>
        </div>
      )}
      <div
        className={`relative z-10 flex flex-col h-full w-full p-8 rounded-3xl overflow-hidden group
          ${isDark ? 'bg-slate-900 text-white border-transparent shadow-[0_20px_50px_rgba(15,23,42,0.3)]'
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
          <div className={`text-5xl font-extrabold tracking-tight tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <RollingNumber value={displayedPrice} />
          </div>
          <p className={`mb-2 text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>/ mo</p>
          {payrollEnabled && currentAddOn > 0 && (
            <p className={`mb-2 ml-4 text-xs font-medium ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
              + payroll ${currentAddOn}/mo
            </p>
          )}
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

      {onPayrollChange && (
        <div
          className={`mb-5 pt-5 flex items-center justify-between gap-4 border-t ${
            isDark ? 'border-slate-800' : 'border-slate-100'
          }`}
        >
          <div className="flex items-start gap-2.5 min-w-0">
            <div className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <Bank size={20} weight="regular" />
            </div>
            <div className="min-w-0">
              <p className={`text-sm font-semibold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Add payroll integration
              </p>
              <p className={`mt-0.5 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                +${currentAddOn}/mo
              </p>
            </div>
          </div>
          <Switch.Root
            checked={payrollEnabled}
            onCheckedChange={(val) => onPayrollChange(val)}
            aria-label="Add payroll integration"
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full p-0 outline-none transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              isDark ? 'focus-visible:ring-offset-slate-900' : 'focus-visible:ring-offset-white'
            } data-[checked]:bg-blue-600 ${
              isDark ? 'data-[unchecked]:bg-slate-700' : 'data-[unchecked]:bg-slate-200'
            }`}
          >
            <Switch.Thumb className="block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out data-[checked]:translate-x-[22px] data-[unchecked]:translate-x-0.5" />
          </Switch.Root>
        </div>
      )}

      <Button
        className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm ${
          isDark || primaryButton
            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/20 active:bg-blue-800'
            : 'bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200'
        }`}
      >
        {buttonText}
      </Button>
      </div>
    </div>
  );
}
