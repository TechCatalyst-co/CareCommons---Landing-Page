// src/components/Footer.tsx
import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#173A32] text-white border-t border-[#173A32] pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand & Logo */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <a 
              href="#" 
              className="flex items-center gap-2.5 group"
              aria-label="CareCommons Home"
            >
              <img 
                src="/logo.svg" 
                alt="CareCommons Logo" 
                className="h-8 w-8 shrink-0 object-contain"
              />
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Care<span className="text-[#EE9D33]">Commons</span>
              </span>
            </a>
            <div className="sm:border-l sm:border-white/20 sm:pl-3">
              <p className="text-xs text-white/70 font-medium">
                Home Care Agency Management Software
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Shield className="w-3.5 h-3.5 text-[#EE9D33]" />
              <span>Secured Environment</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Lock className="w-3.5 h-3.5 text-[#EE9D33]" />
              <span>256-Bit SSL Encrypted</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs text-white/70">
            <a 
              href="https://carecommons.app/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer underline hover:no-underline"
            >
              Privacy Policy
            </a>
            <a 
              href="https://carecommons.app/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer underline hover:no-underline"
            >
              Terms of Service
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} CareCommons, Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <a 
              href="https://techcatalyst.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline hover:no-underline"
            >
              Tech Catalyst
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
