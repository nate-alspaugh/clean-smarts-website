/* omitted */
import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Tabs } from '@base-ui/react';
import { Navbar } from './components/Navbar';
import { PricingCard } from './components/PricingCard';
import { FAQ } from './components/FAQ';
import {
  Clock,
  WarningCircle,
  ChatCenteredText,
  Calendar,
  Package,
  ClipboardText,
  Code,
  SprayBottle,
  VideoCamera,
  Layout,
  ListChecks,
  ChartPie
} from '@phosphor-icons/react';

function App() {
  const [isYearly, setIsYearly] = useState(false);
  const [foundationPayroll, setFoundationPayroll] = useState(false);
  const [expertPayroll, setExpertPayroll] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const yearlyRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Small timeout to ensure fonts and DOM are fully painted before measuring lengths
    const calculatePillPosition = () => {
      const activeRef = isYearly ? yearlyRef : monthlyRef;
      if (activeRef.current) {
        setPillStyle({
          left: activeRef.current.offsetLeft,
          width: activeRef.current.offsetWidth,
        });
      }
    };
    
    // Setup and resize listener
    calculatePillPosition();
    const timeoutId = setTimeout(calculatePillPosition, 50);
    window.addEventListener('resize', calculatePillPosition);
    
    return () => {
      window.removeEventListener('resize', calculatePillPosition);
      clearTimeout(timeoutId);
    };
  }, [isYearly]);
  const foundationFeatures = [
    { text: 'Time tracking', icon: <Clock size={16} weight="regular" /> },
    { text: 'Issue reporting', icon: <WarningCircle size={16} weight="regular" /> },
    { text: 'Messaging', icon: <ChatCenteredText size={16} weight="regular" /> },
    { text: 'Scheduling', icon: <Calendar size={16} weight="regular" /> },
    { text: 'Supply requests', icon: <Package size={16} weight="regular" /> },
    { text: 'Inspections', icon: <ClipboardText size={16} weight="regular" /> }
  ];

  const expertFeatures = [
    { text: <span className="text-xs text-slate-900">Everything included in <span className="font-semibold">Foundation</span> plus...</span>, hideCheck: true },
    { text: 'API usage', icon: <Code size={16} weight="regular" /> },
    { text: 'Equipment management', icon: <SprayBottle size={16} weight="regular" /> },
    { text: 'Video and picture task training', icon: <VideoCamera size={16} weight="regular" /> },
    { text: 'White-labeled customer portal', icon: <Layout size={16} weight="regular" /> },
    { text: 'Public surveys', icon: <ListChecks size={16} weight="regular" /> },
    { text: 'Revenue and cost reporting', icon: <ChartPie size={16} weight="regular" /> }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <div
        className="relative overflow-hidden flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8"
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
        <div className="relative text-center max-w-2xl mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl border-b border-transparent">
          Choose your plan
        </h1>
        <p className="mt-5 text-xl text-slate-500 leading-relaxed">
          Save up to <span className="font-semibold text-emerald-600">$540 per month</span> by eliminating redundant software costs.
        </p>

        {/* Global Toggle using Base UI Tabs */}
        <div className="mt-8 mb-4 inline-flex items-center p-1 bg-slate-200/60 rounded-full text-sm font-semibold text-slate-700">
          <Tabs.Root 
            value={isYearly ? "yearly" : "monthly"} 
            onValueChange={(val) => setIsYearly(val === "yearly")}
            className="flex items-center gap-2 relative"
          >
            {/* Sliding Pill Background */}
            <div 
              className="absolute shrink-0 bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 h-[36px]"
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />

            <Tabs.List className="flex outline-none relative z-10">
              <Tabs.Tab 
                ref={monthlyRef}
                value="monthly" 
                className={`px-6 py-2 rounded-full cursor-pointer outline-none transition-colors duration-300 ${!isYearly ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Monthly
              </Tabs.Tab>
              <Tabs.Tab 
                ref={yearlyRef}
                value="yearly" 
                className={`flex items-center gap-1 px-6 py-2 rounded-full cursor-pointer outline-none transition-colors duration-300 ${isYearly ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Yearly <span className="text-emerald-600 text-xs mt-0.5">Save 20%</span>
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch justify-center gap-8 max-w-4xl pt-10">
          <PricingCard
            title="Foundation"
            monthlyPrice="125"
            yearlyPrice="100"
            isYearly={isYearly}
            priceModifier="+$6 per additional user per month"
            description="Maximum 100 users."
            features={foundationFeatures}
            buttonText="Book a demo"
            payrollEnabled={foundationPayroll}
            onPayrollChange={setFoundationPayroll}
            payrollMonthlyAddOn={70}
            payrollYearlyAddOn={56}
          />

          <PricingCard
            title="Expert"
            monthlyPrice="200"
            yearlyPrice="160"
            isYearly={isYearly}
            priceModifier="+$8 per additional user per month"
            description={
              <span>
                More than 300 users? <a href="#" className="underline hover:text-slate-900 transition-colors">Contact us</a> for a quote.
              </span>
            }
            features={expertFeatures}
            badge="Best Value"
            primaryButton
            buttonText="Book a demo"
            payrollEnabled={expertPayroll}
            onPayrollChange={setExpertPayroll}
            payrollMonthlyAddOn={70}
            payrollYearlyAddOn={56}
          />
        </div>
      </div>

      <FAQ />
    </div>
  );
}

export default App;
