// src/types.ts

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  agencyName: string;
  caregiverCount: string;
  message?: string;
}

export interface FormValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  agencyName?: string;
  caregiverCount?: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FeatureCard {
  id: string;
  role: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  iconName: 'ShieldCheck' | 'Smartphone' | 'HeartHandshake' | 'Calendar' | 'Clock' | 'Receipt';
  highlightMetric: string;
}

export interface ValuePoint {
  title: string;
  description: string;
}
