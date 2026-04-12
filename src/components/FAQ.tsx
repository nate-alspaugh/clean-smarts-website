import { Accordion } from '@base-ui/react';
import { CaretDown } from '@phosphor-icons/react';

const faqs = [
  { question: "Do you offer a free trial?", answer: "Yes, you can use your own, fully-featured account for free for 14 days." },
  { question: "Will I be locked into a contract?", answer: "Nope! You pay month to month. No long term contracts. Earning your business every month means we stay focused on keeping you happy!" },
  { question: "What's the definition of a user?", answer: "A user is anyone with a login, whether administrator, manager, inspector, cleaner or contractor, with the exception of customers. Customer seats are FREE." },
  { question: "What if I add a user halfway through the month?", answer: "We prorate your bill every time you add or remove a user." },
  { question: "Do you offer discounts?", answer: "Yes, we offer a 20% discount if you prepay for a year." },
  { question: "Do you charge an additional amount for each feature?", answer: "Nope! All features listed within your pricing tier are available to each user." },
  { question: "Can I cancel at any time?", answer: "Yes, you can cancel at any time. Just give us one business day to process your request and to ask for your feedback." },
  { question: "Is it going to take a long time to put all of my account and employee information into Clean Smarts?", answer: "No. We offer a spreadsheet template to upload nearly everything you need: accounts, users, schedules, supplies, checklists, etc. We will send you this file at your request and will review and upload it for you for free if you have fewer than 100 accounts." },
  { question: "How will I learn your system?", answer: "You'll get a free live web training with your management team. You will have access to videos, PDF guides, articles in our knowledge base. You can reach our support team by email or phone during U.S. business hours." },
  { question: "I really like a report or feature in my current app, and you don't have it. Will you build it for me?", answer: "Your feedback and input is the primary driver shaping our product. Nearly everything we've built was done upon request." },
  { question: "Is your platform available in languages other than English and in countries other than the United States?", answer: "Yes! We are very proud to have clients in Canada, Central America, South America, Western and Eastern Europe and Oceania. The interface of both the web app and mobile app can be completely translated into over 20 languages." },
  { question: "How much does Clean Smarts Payroll cost?", answer: "Payroll is an add-on feature for Clean Smarts. Payroll starts at $60 per month and $6 per employee or contractor. If you decide to transfer from your old payroll system mid-year, there's a one-time, $200 fee." },
  { question: "How do I transfer my payroll from my previous provider?", answer: "In our onboarding process, we can connect to your old payroll system and transfer the necessary historical payroll information." },
  { question: "Am I a good candidate for Clean Smarts Payroll?", answer: "We currently offer payroll for US-based companies, large or small." },
  { question: "How do you secure employee personal and pay information?", answer: "All data is encrypted, and we follow industry standard security practices to keep it safe. Access to payroll configuration and pay information is tightly controlled with specific user modules." },
  { question: "Do you offer employee benefits?", answer: "Yes, we have partnered with NEXT Insurance for workplace insurance, SimplyInsured for health insurance, and Guideline for retirement plans. You can enroll in benefits after you complete your payroll onboarding process." }
];

export function FAQ() {
  return (
    <div className="w-full max-w-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Frequently asked questions</h2>
      </div>
      <Accordion.Root className="space-y-4">
        {faqs.map((faq, i) => (
          <Accordion.Item key={i} className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-sm">
            <Accordion.Header className="flex">
              <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 text-left text-lg font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset group hover:text-emerald-700">
                {faq.question}
                <CaretDown size={20} weight="regular" className="text-slate-500 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-data-[panel-open]:rotate-180 group-data-[panel-open]:text-emerald-600 motion-reduce:transition-none" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="overflow-hidden h-[var(--accordion-panel-height)] opacity-100 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] data-[ending-style]:h-0 data-[ending-style]:opacity-0 data-[starting-style]:h-0 data-[starting-style]:opacity-0 motion-reduce:transition-none">
              <div className="px-6 pb-5 pt-0 text-base flex leading-relaxed text-slate-600">
                {faq.answer}
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
