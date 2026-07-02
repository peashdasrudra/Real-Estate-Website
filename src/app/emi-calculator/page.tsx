'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/layout';
import { Input, Label } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { calculateEMI, formatBDT } from '@/lib/utils';
import { PageHeader } from '@/components/page-header';

export default function EMICalculatorPage() {
  const [amount, setAmount] = useState(30000000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(20);

  const emi = calculateEMI(amount, rate, tenure);
  const total = emi * tenure * 12;
  const interest = total - amount;
  const data = [
    { name: 'Principal', value: amount, fill: '#0B2545' },
    { name: 'Interest', value: interest, fill: '#D4AF37' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Tool"
        title="EMI Calculator"
        description="Plan your monthly payments with our precise EMI calculator."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'EMI Calculator' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl border border-primary-900/5 shadow-premium">
              <h2 className="font-heading text-xl font-semibold mb-6">Loan Details</h2>
              <div className="space-y-5">
                <div>
                  <Label>Loan Amount</Label>
                  <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                  <input type="range" min={1000000} max={200000000} step={500000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full mt-2 accent-secondary-500" />
                  <p className="text-xs text-primary-900/50 mt-1">{formatBDT(amount)}</p>
                </div>
                <div>
                  <Label>Interest Rate (% p.a.)</Label>
                  <Input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                  <input type="range" min={5} max={20} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full mt-2 accent-secondary-500" />
                </div>
                <div>
                  <Label>Tenure (Years)</Label>
                  <Input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
                  <input type="range" min={1} max={30} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full mt-2 accent-secondary-500" />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-luxury text-white p-8 rounded-3xl shadow-premium-lg">
                <p className="text-xs uppercase tracking-wider text-secondary-500 font-semibold">Monthly EMI</p>
                <p className="font-heading text-5xl md:text-6xl font-bold mt-2">৳{Math.round(emi).toLocaleString()}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5">
                    <p className="text-xs text-white/60">Total Amount</p>
                    <p className="font-heading text-2xl font-bold mt-1">{formatBDT(total)}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5">
                    <p className="text-xs text-white/60">Total Interest</p>
                    <p className="font-heading text-2xl font-bold mt-1">{formatBDT(interest)}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-white p-6 rounded-3xl border border-primary-900/5 shadow-premium h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                      {data.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    </Pie>
                    <Tooltip formatter={(v: number) => formatBDT(v)} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-6 text-sm">
                  <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-primary-900" /> Principal</span>
                  <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-secondary-500" /> Interest</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
