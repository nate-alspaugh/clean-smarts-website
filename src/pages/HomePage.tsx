import { Navbar } from '../components/Navbar';
import { GridRow, GridCol } from '../components/Grid';
import { Star } from '@phosphor-icons/react';
import { LogoMarquee } from '../components/LogoMarquee';
import { FeatureRow } from '../components/FeatureRow';
import heroFrame from '../assets/hero-frame.png';
import timeTrackingImage from '../assets/features/time-tracking.png';
import issueTrackingImage from '../assets/features/issue-tracking.png';
import supplyManagementImage from '../assets/features/supply-management.png';
import schedulingImage from '../assets/features/scheduling.png';
import inspectionsImage from '../assets/features/inspections.png';
import messagingImage from '../assets/features/messaging.png';

const features = [
  {
    category: 'Time tracking',
    description:
      'Accurately track employee hours and eliminate payroll errors with multiple clock-in options and location-based check ins.',
    image: timeTrackingImage,
  },
  {
    category: 'Issue Tracking',
    description:
      'Build trust with customers by logging and tracking issues with photos & videos, reducing phone calls and emails with automated notifications.',
    image: issueTrackingImage,
  },
  {
    category: 'Supply Management',
    description:
      'Keep cleaning teams equipped & reduce supply costs by tracking inventory, streamlining reorders, and sharing usage reports with customers.',
    image: supplyManagementImage,
  },
  {
    category: 'Scheduling',
    description:
      'Quickly reschedule jobs and fill in for sick employees with our drag-and-drop scheduling and real-time team notifications.',
    image: schedulingImage,
  },
  {
    category: 'Inspections',
    description:
      'Ensure quality and improve customer relationships by scheduling inspections, assigning weighted scoring, and easily logging & resolving issues.',
    image: inspectionsImage,
  },
  {
    category: 'Messaging',
    description:
      'Keep in touch without sharing personal numbers. Provide status updates, answer questions, and collect feedback through group or direct messaging.',
    image: messagingImage,
  },
];

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <main className="pb-48">
        <div
          className="relative pt-16"
          style={{ paddingInline: 'calc(var(--grid-padding) / 2)' }}
        >
          <header
            className="sticky top-5 z-50"
            style={{ paddingInline: 'calc(var(--grid-padding) / 2)' }}
          >
            <Navbar />
          </header>

          <section
            className="relative overflow-hidden rounded-2xl -mt-[98px] pt-40 lg:pt-44"
            style={{
              backgroundColor: '#ffffff',
              backgroundImage:
                'linear-gradient(to bottom, #F7F9FC 0%, #EEF8FF 43.77%, #E4ECFC 100%)',
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

              <GridRow padding={false} className="relative">
                <GridCol start={3} span={8} mobileStart={1} mobileSpan={6}>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-0.5 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} weight="fill" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-900">
                        4.8 rating on the Apple App Store (1,200+ reviews)
                      </span>
                    </div>

                    <h1 className="mt-6 text-5xl md:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.05]">
                      Software to save
                      <br className="hidden md:inline" />{' '}
                      <span className="text-blue-600">cleaning teams</span> time &amp; money
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-500 leading-relaxed">
                      Automate time tracking, simplify scheduling, and improve client
                      communication. An all-in-one tool for your commercial cleaning company or
                      janitorial staff.
                    </p>

                    <div className="mt-10">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/20 active:bg-blue-800 px-6 py-3 rounded-md transition-all font-medium"
                      >
                        Book a demo
                      </a>
                    </div>
                  </div>
                </GridCol>
              </GridRow>

            <GridRow padding={false} className="relative mt-16 lg:mt-20">
              <GridCol start={2} span={10} mobileStart={1} mobileSpan={6}>
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: '1312 / 547', marginBottom: '-2%' }}
                >
                  <img
                    src={heroFrame}
                    alt="Clean Smarts dashboard and mobile app preview"
                    className="block w-full h-auto"
                  />
                </div>
              </GridCol>
            </GridRow>
          </section>
        </div>

        <GridRow className="mt-24">
          <GridCol start={1} span={12}>
            <p className="text-center text-lg md:text-xl font-semibold text-slate-900">
              Used by teams cleaning for the world's most demanding brands
            </p>
          </GridCol>
        </GridRow>

        <div className="mt-10">
          <LogoMarquee />
        </div>

        <div className="mt-32 flex flex-col gap-32">
          {features.map((feature, i) => (
            <FeatureRow
              key={feature.category}
              category={feature.category}
              description={feature.description}
              image={feature.image}
              imageAlt={`${feature.category} feature illustration`}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
