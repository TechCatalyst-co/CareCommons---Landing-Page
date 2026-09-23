// src/components/HeroSection.tsx
import React from 'react';
import { 
  Check, 
  Zap, 
  ShieldCheck, 
  Users, 
  Sparkles,
  CalendarDays,
  Smartphone,
  CreditCard
} from 'lucide-react';
import { LeadForm } from './LeadForm';
import { ValuePoint } from '../types';
import heroBgImage from '../assets/images/hero_home_care_bg_1790190278298.jpg';

const valuePoints: (ValuePoint & { icon: React.ReactNode })[] = [
  {
    title: 'Unified Scheduling',
    description: 'Build recurring shifts, match caregivers, and fill open gaps instantly.',
    icon: <CalendarDays className="w-5 h-5 text-[#173A32]" />
  },
  {
    title: 'Real-Time Visit Verification',
    description: 'Caregivers clock in, track tasks, and record notes from any mobile device.',
    icon: <Smartphone className="w-5 h-5 text-[#173A32]" />
  },
  {
    title: 'Integrated Family & Billing Loop',
    description: 'Seamlessly feed completed visits into client invoices, payroll, and family updates.',
    icon: <CreditCard className="w-5 h-5 text-[#173A32]" />
  }
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Background Image with Balanced Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img 
          src={heroBgImage} 
          alt="Compassionate home care interaction" 
          className="w-full h-full object-cover object-center -scale-x-100"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark tint for rich color tone */}
        <div className="absolute inset-0 bg-[#173A32]/45" />
        {/* Soft directional gradient for crisp text legibility while keeping the flipped subjects clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EBF2EE]/95 via-[#EBF2EE]/75 to-[#EBF2EE]/45" />
        {/* Soft bottom edge blend */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#EBF2EE] to-transparent" />
      </div>

      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#EE9D33]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#173A32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Claims */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#173A32]/15 text-[#173A32] text-xs font-bold tracking-wider uppercase shadow-xs w-fit">
              <span className="text-[#EE9D33]">✨</span>
              <span>FOR HOME CARE AGENCIES</span>
            </div>

            {/* Bold Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#173A32] tracking-tight leading-[1.12] text-balance">
              A Calmer Way to Run Your Home Care Agency.
            </h1>

            {/* Concise Subheadline */}
            <p className="text-base sm:text-lg text-[#5C6E67] font-normal leading-relaxed max-w-2xl">
              Replace scheduling chaos, manual visit notes, and fragmented billing with one simple, connected platform.
            </p>

            {/* 3 Checkmark Value Points */}
            <div className="space-y-4 pt-2">
              {valuePoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/85 backdrop-blur-xs border border-[#173A32]/10 shadow-xs hover:bg-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#173A32]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#173A32]">
                    <Check className="w-4 h-4 stroke-[3] text-[#173A32]" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-[#121816]">
                      {point.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5C6E67] mt-0.5 leading-snug">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Trust Bar */}
            <div className="pt-4 border-t border-[#173A32]/12">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-semibold text-[#173A32]">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#EE9D33]" />
                  <span>Setup in Minutes</span>
                </div>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#EE9D33]" />
                  <span>Privacy & Data Protection</span>
                </div>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#EE9D33]" />
                  <span>Dedicated Agency Support</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Floating Form */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
};
