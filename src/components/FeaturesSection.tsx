// src/components/FeaturesSection.tsx
import React from 'react';
import { 
  Users, 
  Smartphone, 
  HeartHandshake, 
  CheckCircle2, 
  Clock, 
  Calendar,
  FileCheck2,
  Shield,
  MessageSquareHeart
} from 'lucide-react';
import { FeatureCard } from '../types';

const features: FeatureCard[] = [
  {
    id: 'admins',
    role: 'For Admins & Coordinators',
    title: 'Complete Scheduling Oversight',
    tagline: 'Without spreadsheet shuffle',
    description: 'Assign visits by caregiver skills, geographic location, and client preferences in seconds. Fill call-outs instantly with smart auto-match alerts.',
    bullets: [
      'Visual drag-and-drop shift calendar',
      'Overtime & conflict prevention warnings',
      'One-click payroll & invoice generation'
    ],
    iconName: 'Calendar',
    highlightMetric: 'Save 12+ hours/week on admin'
  },
  {
    id: 'caregivers',
    role: 'For Caregivers',
    title: 'Care Plans in Their Pocket',
    tagline: 'Daily schedules, tasks & EVV',
    description: 'Caregivers access turn-by-turn directions, client emergency contacts, custom ADL checklists, and mobile EVV clock-ins without paperwork.',
    bullets: [
      'Mobile-ready EVV clock in/out',
      'Customized task checklist & client context',
      'Seamless visit note logging'
    ],
    iconName: 'Smartphone',
    highlightMetric: '99.4% EVV compliance rate'
  },
  {
    id: 'families',
    role: 'For Families',
    title: 'Real-Time Peace of Mind',
    tagline: 'Transparent visit updates',
    description: 'Provide families with an intuitive private portal to review caregiver arrival times, completed daily routines, and notes without calling your office.',
    bullets: [
      'Live visit verification & appointment reminders',
      'Daily care summaries',
      'Secure family-to-agency messaging'
    ],
    iconName: 'HeartHandshake',
    highlightMetric: 'Zero anxious check-in phone calls'
  }
];

// Card 1 Mockup: Admins & Coordinators Calendar Grid
const AdminPreviewMockup: React.FC = () => (
  <div className="w-full max-w-[270px] relative">
    {/* Light calendar background with day columns */}
    <div className="grid grid-cols-3 gap-1.5 mb-1.5 px-0.5 opacity-80">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center bg-white/70 rounded py-0.5 border border-slate-200/60">
        Mon 23
      </div>
      <div className="text-[10px] font-bold text-[#173A32] uppercase tracking-wider text-center bg-emerald-100/90 rounded py-0.5 border border-emerald-300/80">
        Tue 24
      </div>
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center bg-white/70 rounded py-0.5 border border-slate-200/60">
        Wed 25
      </div>
    </div>

    {/* Dark Green Shift Card */}
    <div className="bg-[#173A32] text-white rounded-xl p-2.5 shadow-md border border-emerald-800/40 relative z-10 transition-transform duration-200 group-hover:scale-[1.02]">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
            ER
          </div>
          <span className="text-xs font-bold truncate text-emerald-50">Elena Rostova, RN</span>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full shrink-0 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Covered
        </span>
      </div>

      <div className="flex items-center justify-between text-[10px] text-emerald-200/90 pt-1 border-t border-emerald-800/60">
        <div className="flex items-center gap-1 font-medium">
          <Clock className="w-3 h-3 text-[#EE9D33]" />
          <span>9:00 AM - 1:00 PM</span>
        </div>
        <span className="text-emerald-300/70 text-[9px] font-medium truncate max-w-[90px]">Eleanor V.</span>
      </div>
    </div>
  </div>
);

// Card 2 Mockup: Caregivers Mobile EVV & Tasks Screen
const CaregiverPreviewMockup: React.FC = () => (
  <div className="w-full max-w-[270px] bg-white rounded-2xl p-3 shadow-md border border-slate-200/80 relative transition-transform duration-200 group-hover:scale-[1.02]">
    {/* Live Clock-in Timestamp & Badge */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-[#173A32]" />
        <span className="font-mono font-extrabold text-xs text-[#173A32] tracking-tight">09:02 AM</span>
      </div>
      <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        Clocked In
      </span>
    </div>

    {/* Two Completed Task Checkmarks */}
    <div className="space-y-1.5 pt-1.5 border-t border-slate-100">
      <div className="flex items-center gap-1.5 bg-slate-50/80 px-2 py-1 rounded-lg border border-slate-100">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span className="text-[10px] font-medium text-slate-700 truncate">Morning vitals checked (120/78)</span>
      </div>
      <div className="flex items-center gap-1.5 bg-slate-50/80 px-2 py-1 rounded-lg border border-slate-100">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span className="text-[10px] font-medium text-slate-700 truncate">Breakfast & medication assistance</span>
      </div>
    </div>
  </div>
);

// Card 3 Mockup: Families Real-Time Visit Summary Feed
const FamilyPreviewMockup: React.FC = () => (
  <div className="w-full max-w-[270px] bg-white rounded-2xl p-3 shadow-md border border-slate-200/80 relative transition-transform duration-200 group-hover:scale-[1.02]">
    {/* Timestamp & Status Badge */}
    <div className="flex items-center justify-between mb-2">
      <span className="text-[10px] font-bold text-slate-500">
        10:08 AM · Visit Summary
      </span>
      <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        Visit Completed
      </span>
    </div>

    {/* Reassuring Update Line */}
    <div className="bg-emerald-50/70 border border-emerald-100/80 rounded-xl p-2 text-[10px] text-slate-700 leading-tight mb-1.5">
      <p className="font-medium text-slate-800">
        &ldquo;Mom enjoyed her morning tea and garden walk. All routines completed comfortably.&rdquo;
      </p>
    </div>

    <div className="flex items-center justify-between text-[9px] text-slate-400 pt-0.5">
      <span>Caregiver: Maria R.</span>
      <span className="text-emerald-700 font-semibold">Verified Log ✓</span>
    </div>
  </div>
);

export const FeaturesSection: React.FC = () => {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById('trial-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = formElement.querySelector('input') as HTMLInputElement | null;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 400);
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#173A32]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#EE9D33] uppercase">
            Designed for Every Stakeholder
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#173A32] tracking-tight mt-2 text-balance">
            Everything Your Home Care Agency Needs to Thrive
          </h2>
          <p className="text-base text-[#5C6E67] mt-3 max-w-xl mx-auto">
            From the office coordinator to the caregiver in the home and the family waiting for news.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {features.map((feature) => (
            <a
              key={feature.id}
              href="#trial-form"
              onClick={handleScrollToForm}
              className="bg-[#EBF2EE]/40 hover:bg-[#EBF2EE]/80 rounded-3xl p-6 sm:p-7 border border-[#173A32]/10 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:border-[#173A32]/30 hover:-translate-y-0.5 group cursor-pointer text-left block"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#173A32] text-white text-[11px] font-bold tracking-wider uppercase">
                    {feature.role}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#173A32]/10 flex items-center justify-center text-[#173A32] group-hover:bg-[#EE9D33] group-hover:text-slate-900 transition-colors shadow-xs">
                    {feature.iconName === 'Calendar' && <Calendar className="w-5 h-5" />}
                    {feature.iconName === 'Smartphone' && <Smartphone className="w-5 h-5" />}
                    {feature.iconName === 'HeartHandshake' && <HeartHandshake className="w-5 h-5" />}
                  </div>
                </div>

                {/* Preview Image Mockup (Under pills, above H3) */}
                <div className="w-full h-36 bg-white/70 rounded-2xl border border-[#173A32]/10 overflow-hidden relative flex items-center justify-center p-3 mb-5 shadow-xs">
                  {feature.id === 'admins' && <AdminPreviewMockup />}
                  {feature.id === 'caregivers' && <CaregiverPreviewMockup />}
                  {feature.id === 'families' && <FamilyPreviewMockup />}
                </div>

                {/* Card Title */}
                <h3 className="font-display text-xl font-bold text-[#121816] tracking-tight mb-2.5 group-hover:text-[#173A32]">
                  {feature.title}
                </h3>

                {/* Main description */}
                <p className="text-sm text-[#5C6E67] leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Key Bullet points */}
                <ul className="space-y-2.5 mb-6 text-xs text-[#121816]">
                  {feature.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Metric Pill */}
              <div className="pt-4 border-t border-[#173A32]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#173A32] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EE9D33]" />
                  {feature.highlightMetric}
                </span>
                <span className="text-xs font-bold text-[#173A32] group-hover:text-[#EE9D33] flex items-center gap-1 transition-colors">
                  Get Started →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Agency Quick Callout Strip */}
        <div className="mt-12 bg-gradient-to-r from-[#173A32] to-[#1e483e] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Migrating from spreadsheets or your previous platform?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/80">
              Our white-glove migration team will import your clients, caregivers, and authorizations for free in 24 hours.
            </p>
          </div>
          <a
            href="#trial-form"
            className="px-6 py-3 rounded-xl bg-[#EE9D33] text-slate-950 font-bold text-xs sm:text-sm hover:bg-[#f3a844] active:scale-95 transition-all whitespace-nowrap shadow-md cursor-pointer"
          >
            Start 30-Day Free Trial
          </a>
        </div>

      </div>
    </section>
  );
};
