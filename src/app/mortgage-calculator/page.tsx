'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/layout';
import { Input, Label } from '@/components/ui/form';
import { formatBDT } from '@/lib/utils';
import { PageHeader } from '@/components/page-header';

export default function MortgageCalculatorPage() {
  const [homeValue, setHomeValue] = useState(50000000);
  const [down, setDown] = useState(15000000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(20);

  const principal = homeValue - down;
  const r = rate / 12 / 100;
  const n = tenure * 12;
  const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = emi * n;
  const interest = total - principal;

  return (
    <>
      <PageHeader
        eyebrow="Tool"
        title="Mortgage Calculator"
        description="Calculate your monthly mortgage payments, total interest, and amortization."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Mortgage Calculator' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-primary-900/5 shadow-premium space-y-5">
              <h2 className="font-heading text-xl font-semibold">Property & Loan</h2>
              <div>
                <Label>Home Value</Label>
                <Input type="number" value={homeValue} onChange={(e) => setHomeValue(Number(e.target.value))} />
                <p className="text-xs text-primary-900/50 mt-1">{formatBDT(homeValue)}</p>
              </div>
              <div>
                <Label>Down Payment</Label>
                <Input type="number" value={down} onChange={(e) => setDown(Number(e.target.value))} />
                <p className="text-xs text-primary-900/50 mt-1">{((down / homeValue) * 100).toFixed(1)}% · {formatBDT(down)}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Interest Rate (%)</Label>
                  <Input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Tenure (Years)</Label>
                  <Input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-primary-950 text-white p-6 rounded-3xl">
                <p className="text-xs uppercase tracking-wider text-secondary-500">Monthly Payment</p>
                <p className="font-heading text-4xl font-bold mt-2">৳{Math.round(emi).toLocaleString()}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-primary-900/5">
                <p className="text-xs uppercase tracking-wider text-primary-900/50">Loan Amount</p>
                <p className="font-heading text-2xl font-bold mt-1">{formatBDT(principal)}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-primary-900/5">
                <p className="text-xs uppercase tracking-wider text-primary-900/50">Total Interest</p>
                <p className="font-heading text-2xl font-bold mt-1">{formatBDT(interest)}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
