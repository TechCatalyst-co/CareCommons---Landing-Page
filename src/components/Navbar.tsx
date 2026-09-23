// src/components/Navbar.tsx
import React from 'react';
import { CreditCard, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
    } else {
      const formElement = document.getElementById('trial-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Focus first input
        const firstInput = formElement.querySelector('input') as HTMLInputElement | null;
        if (firstInput) {
          setTimeout(() => firstInput.focus(), 400);
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#EBF2EE]/90 backdrop-blur-md border-b border-[#173A32]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Logo & Text */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group transition-transform active:scale-95"
          aria-label="CareCommons Home"
        >
          <img 
            src="/logo.svg" 
            alt="CareCommons Logo" 
            className="h-9 w-9 shrink-0 object-contain" 
          />
          <span className="font-display text-2xl font-bold tracking-tight text-[#173A32]">
            Care<span className="text-[#EE9D33]">Commons</span>
          </span>
        </a>

        {/* Right: Trust Chip + Action CTA */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Trust Chip */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#173A32]/10 text-xs font-semibold text-[#173A32] shadow-xs">
            <CreditCard className="w-3.5 h-3.5 text-[#EE9D33]" aria-hidden="true" />
            <span>Zero Credit Card Required</span>
          </div>

          {/* Primary CTA Button */}
          <a
            href="#trial-form"
            onClick={handleScrollToForm}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#173A32] text-white text-sm font-semibold tracking-wide hover:bg-[#1f4a40] active:scale-95 transition-all shadow-sm group whitespace-nowrap cursor-pointer"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4 text-[#EE9D33] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
