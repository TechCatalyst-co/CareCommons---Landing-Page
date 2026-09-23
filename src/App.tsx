// src/App.tsx
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToForm = () => {
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
    <div className="min-h-screen flex flex-col bg-[#EBF2EE] text-[#121816] selection:bg-[#EE9D33]/30">
      {/* 1. Header / Minimal Nav */}
      <Navbar onCtaClick={handleScrollToForm} />

      {/* 2. Hero & Lead Capture Section */}
      <main className="flex-1">
        <HeroSection />

        {/* 3. Compact Feature Highlights Section */}
        <FeaturesSection />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
