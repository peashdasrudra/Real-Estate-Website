'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/layout';
import { Input, Label } from '@/components/ui/form';
import { calculateEMI, calculateLoanEligibility, formatBDT } from '@/lib/utils';
import { PageHeader } from '@/components/page-header';

export default function LoanEligibilityPage() {
  const [income, setIncome] = useState(150000);
  const [existing, setExisting] = useState(0);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(20);

  const eligible = calculateLoanEligibility(income, existing, rate, tenure);
  const emi = calculateEMI(eligible, rate, tenure);

  return (
    <>
      <PageHeader
        eyebrow="Tool"
        title="Loan Eligibility Calculator"
        description="Find out how much you can borrow based on your income and existing obligations."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Loan Eligibility' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-primary-900/5 shadow-premium">
              <h2 className="font-heading text-xl font-semibold mb-6">Your Details</h2>
              <div className="space-y-5">
                <div>
                  <Label>Monthly Income (BDT)</Label>
                  <Input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Existing EMIs (BDT/month)</Label>
                  <Input type="number" value={existing} onChange={(e) => setExisting(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Interest Rate (% p.a.)</Label>
                  <Input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Tenure (Years)</Label>
                  <Input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
                </div>
              </div>
            </div>
            <div className="bg-gradient-luxury text-white p-8 rounded-3xl shadow-premium-lg">
              <p className="text-xs uppercase tracking-wider text-secondary-500 font-semibold">You are eligible for</p>
              <p className="font-heading text-4xl md:text-5xl font-bold mt-2">{formatBDT(eligible)}</p>
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 flex justify-between">
                  <span className="text-sm text-white/70">Monthly EMI</span>
                  <span className="font-semibold">৳{Math.round(emi).toLocaleString()}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 flex justify-between">
                  <span className="text-sm text-white/70">Total Payment</span>
                  <span className="font-semibold">{formatBDT(emi * tenure * 12)}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 flex justify-between">
                  <span className="text-sm text-white/70">Total Interest</span>
                  <span className="font-semibold">{formatBDT(emi * tenure * 12 - eligible)}</span>
                </div>
              </div>
              <p className="mt-6 text-xs text-white/50">
                * Assumes 50% FOIR (Fixed Obligations to Income Ratio). Final eligibility is subject to bank verification.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
