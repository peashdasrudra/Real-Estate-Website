import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBDT(amount: number): string {
  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return `৳${crores.toFixed(crores < 10 ? 2 : 1)} Cr`;
  }
  if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `৳${lakhs.toFixed(lakhs < 10 ? 2 : 1)} Lac`;
  }
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calculateEMI(principal: number, rateAnnual: number, tenureYears: number): number {
  const r = rateAnnual / 12 / 100;
  const n = tenureYears * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export function calculateLoanEligibility(
  monthlyIncome: number,
  existingEmi: number,
  rateAnnual: number,
  tenureYears: number
): number {
  const foir = 0.5;
  const eligibleEmi = monthlyIncome * foir - existingEmi;
  if (eligibleEmi <= 0) return 0;
  const r = rateAnnual / 12 / 100;
  const n = tenureYears * 12;
  if (r === 0) return eligibleEmi * n;
  return (eligibleEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
}

export function readingTime(text: string): number {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}
