/* omitted */
import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Tabs } from '@base-ui/react';
import { Navbar } from './components/Navbar';
import { PricingCard } from './components/PricingCard';
import { 
  Clock, 
  AlertCircle, 
  MessageSquare, 
  Calendar, 
  Package, 
  ClipboardCheck,
  Landmark,
  Code,  Wrench, 
  Video, 
  Layout, 
  ClipboardList, 
  PieChart 
} from 'lucide-react';

function App() {
  const [isYearly, setIsYearly] = useState(false);
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
    { text: 'Time tracking', icon: <Clock className="w-4 h-4" /> },
    { text: 'Issue reporting', icon: <AlertCircle className="w-4 h-4" /> },
    { text: 'Messaging', icon: <MessageSquare className="w-4 h-4" /> },
    { text: 'Scheduling', icon: <Calendar className="w-4 h-4" /> },
    { text: 'Supply requests', icon: <Package className="w-4 h-4" /> },
    { text: 'Inspections', icon: <ClipboardCheck className="w-4 h-4" /> }
  ];

  const expertFeatures = [
    { text: <span className="text-xs">Everything included in <span className="font-semibold">Foundation</span> plus...</span>, hideCheck: true },
    { text: 'Advanced payroll integrations', icon: <Landmark className="w-4 h-4" /> },
    { text: 'API usage', icon: <Code className="w-4 h-4" /> },
    { text: 'Equipment management', icon: <Wrench className="w-4 h-4" /> },
    { text: 'Video and picture task training', icon: <Video className="w-4 h-4" /> },
    { text: 'White-labeled customer portal', icon: <Layout className="w-4 h-4" /> },
    { text: 'Public surveys', icon: <ClipboardList className="w-4 h-4" /> },
    { text: 'Revenue and cost reporting', icon: <PieChart className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl border-b border-transparent">
          Pricing
        </h1>
        <p className="mt-5 text-xl text-slate-500 leading-relaxed">
          Save up to <span className="font-semibold text-emerald-600">$540 per month</span> by eliminating redundant software costs.
        </p>

        {/* Global Toggle using Base UI Tabs */}
        <div className="mt-8 mb-4 inline-flex items-center p-1 bg-slate-200/60 rounded-full shadow-inner text-sm font-semibold text-slate-700">
          <Tabs.Root 
            value={isYearly ? "yearly" : "monthly"} 
            onValueChange={(val) => setIsYearly(val === "yearly")}
            className="flex items-center gap-2 relative"
          >
            {/* Sliding Pill Background */}
            <div 
              className="absolute shrink-0 bg-white shadow-md rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 h-[36px]"
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

      <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-7xl pt-4">
        <PricingCard
          title="Foundation"
          monthlyPrice="125"
          yearlyPrice="100"
          isYearly={isYearly}
          priceModifier="+$6 per additional user per month"
          description="Maximum 100 users."
          features={foundationFeatures}
          buttonText="Book a demo"
        />
        
        <PricingCard
          title="Expert"
          monthlyPrice="200"
          yearlyPrice="160"
          isYearly={isYearly}
          priceModifier="+$8 per additional user per month"
          description={
            <span>
              More than 300 users? <a href="#" className="underline hover:text-white transition-colors">Contact us</a> for a quote.
            </span>
          }
          features={expertFeatures}
          isDark
          buttonText="Book a demo"
        />
      </div>
      </div>
    </div>
  );
}

export default App;
