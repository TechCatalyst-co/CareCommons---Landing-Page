// src/components/LeadForm.tsx
import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Users, 
  Lock, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck2
} from 'lucide-react';
import { LeadFormData, FormValidationErrors, FormStatus } from '../types';

interface LeadFormProps {
  onSuccessSubmit?: (data: LeadFormData) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccessSubmit }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    agencyName: '',
    caregiverCount: '6-15',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submittedData, setSubmittedData] = useState<LeadFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormValidationErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your agency work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid business email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your direct phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.agencyName.trim()) {
      newErrors.agencyName = 'Please enter your agency or company name';
    }

    if (!formData.caregiverCount) {
      newErrors.caregiverCount = 'Please select your caregiver team size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simulate instant secure processing
    setTimeout(() => {
      setStatus('success');
      setSubmittedData({ ...formData });
      if (onSuccessSubmit) {
        onSuccessSubmit(formData);
      }
    }, 700);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      agencyName: '',
      caregiverCount: '6-15',
    });
    setErrors({});
  };

  if (status === 'success' && submittedData) {
    return (
      <div 
        id="trial-form"
        className="w-full bg-white shadow-2xl rounded-3xl p-6 sm:p-8 border border-emerald-100 text-center relative overflow-hidden transition-all duration-300"
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#173A32] via-[#EE9D33] to-[#173A32]" />
        
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-inner">
          <CheckCircle2 className="w-9 h-9 text-emerald-600" />
        </div>

        <h3 className="font-display text-2xl font-bold text-[#173A32] mb-1">
          You're All Set, {submittedData.fullName.split(' ')[0]}!
        </h3>
        <p className="text-sm text-[#5C6E67] mb-6">
          Your 30-Day Free Access pass has been provisioned for <strong className="text-[#121816] font-semibold">{submittedData.agencyName}</strong>.
        </p>

        {/* Confirmation Details Card */}
        <div className="bg-[#EBF2EE]/60 rounded-2xl p-4 text-left mb-6 border border-[#173A32]/10 space-y-2.5">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-[#173A32]/10">
            <span className="text-[#5C6E67]">Account Setup</span>
            <span className="font-semibold text-emerald-700 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Instant Activation
            </span>
          </div>
          <div className="text-xs text-[#121816] flex justify-between">
            <span className="text-[#5C6E67]">Confirmation sent to:</span>
            <span className="font-semibold truncate max-w-[180px]">{submittedData.email}</span>
          </div>
          <div className="text-xs text-[#121816] flex justify-between">
            <span className="text-[#5C6E67]">Caregiver tier:</span>
            <span className="font-semibold">{submittedData.caregiverCount} Active Caregivers</span>
          </div>
          <div className="text-xs text-[#121816] flex justify-between">
            <span className="text-[#5C6E67]">VIP Agency Onboarding:</span>
            <span className="font-semibold text-[#173A32]">Included (1-on-1 Dedicated Specialist)</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-left flex items-start gap-2.5">
            <CalendarCheck2 className="w-5 h-5 text-[#EE9D33] shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong>Check your inbox:</strong> A temporary magic link and scheduling coordinator calendar invitation are on their way.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-full py-3 px-4 text-xs font-semibold text-[#5C6E67] hover:text-[#173A32] underline hover:no-underline transition-colors"
          >
            Register another agency or change details
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="trial-form" 
      className="w-full bg-white shadow-2xl rounded-3xl p-6 sm:p-8 border border-gray-100 relative transition-all duration-300"
    >
      {/* Top Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EE9D33] rounded-t-3xl" />

      {/* Form Header */}
      <div className="mb-5">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#173A32] tracking-tight">
          Start Your <span className="text-[#e59d3f]">Free Agency Trial</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#5C6E67] mt-1 font-medium">
          Takes less than 60 seconds. No credit card needed.
        </p>
      </div>

      {/* Value Banner Box */}
      <div className="bg-[#EBF2EE] border border-[#173A32]/10 rounded-2xl px-3.5 py-2.5 mb-5 flex items-center gap-2.5">
        <span className="text-base" role="img" aria-label="Celebration">🎉</span>
        <p className="text-xs font-bold text-[#173A32] leading-tight">
          30-Day Full Access Pass Included
        </p>
      </div>

      {/* Actual Form */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-[#173A32] uppercase tracking-wider mb-1.5">
            Full Name <span className="text-[#EE9D33]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/70 rounded-xl border ${
                errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-[#EE9D33] focus:ring-[#EE9D33]/20'
              } text-[#121816] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:bg-white transition-all`}
              aria-required="true"
              aria-invalid={!!errors.fullName}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
          )}
        </div>

        {/* Agency Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-[#173A32] uppercase tracking-wider mb-1.5">
            Agency Email <span className="text-[#EE9D33]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@pacificcaregivers.com"
              className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/70 rounded-xl border ${
                errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-[#EE9D33] focus:ring-[#EE9D33]/20'
              } text-[#121816] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:bg-white transition-all`}
              aria-required="true"
              aria-invalid={!!errors.email}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-[#173A32] uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-[#EE9D33]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 382-9012"
              className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/70 rounded-xl border ${
                errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-[#EE9D33] focus:ring-[#EE9D33]/20'
              } text-[#121816] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:bg-white transition-all`}
              aria-required="true"
              aria-invalid={!!errors.phone}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
          )}
        </div>

        {/* Agency Name & Caregivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="agencyName" className="block text-xs font-bold text-[#173A32] uppercase tracking-wider mb-1.5">
              Agency Name <span className="text-[#EE9D33]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Building2 className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="agencyName"
                name="agencyName"
                value={formData.agencyName}
                onChange={handleChange}
                placeholder="Pacific Home Care"
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50/70 rounded-xl border ${
                  errors.agencyName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-[#EE9D33] focus:ring-[#EE9D33]/20'
                } text-[#121816] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:bg-white transition-all`}
                aria-required="true"
                aria-invalid={!!errors.agencyName}
              />
            </div>
            {errors.agencyName && (
              <p className="mt-1 text-xs text-red-600 font-medium">{errors.agencyName}</p>
            )}
          </div>

          <div>
            <label htmlFor="caregiverCount" className="block text-xs font-bold text-[#173A32] uppercase tracking-wider mb-1.5">
              Caregivers <span className="text-[#EE9D33]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Users className="w-4 h-4" />
              </div>
              <select
                id="caregiverCount"
                name="caregiverCount"
                value={formData.caregiverCount}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-2.5 text-sm bg-slate-50/70 rounded-xl border border-slate-200 text-[#121816] focus:outline-none focus:border-[#EE9D33] focus:ring-4 focus:ring-[#EE9D33]/20 focus:bg-white appearance-none transition-all cursor-pointer font-medium"
              >
                <option value="1-5">1 – 5 Caregivers</option>
                <option value="6-15">6 – 15 Caregivers</option>
                <option value="16-50">16 – 50 Caregivers</option>
                <option value="50+">50+ Caregivers</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 px-6 rounded-2xl bg-[#EE9D33] hover:bg-[#e49326] active:scale-[0.99] text-slate-950 font-extrabold text-base tracking-wide shadow-lg shadow-[#EE9D33]/25 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-75 disabled:cursor-not-allowed group"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Your Agency Workspace...
              </span>
            ) : (
              <>
                <span>CLAIM YOUR FREE TRIAL</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Micro-copy & Trust Guarantee */}
        <div className="pt-1 text-center space-y-1">
          <p className="text-xs font-medium text-[#5C6E67] flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#173A32]" />
            <span>100% Secure. Cancel anytime. No credit card required.</span>
          </p>
        </div>
      </form>
    </div>
  );
};
