'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Phone } from 'lucide-react';
import { FAQS } from '@/lib/faqs';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(FAQS.map((f) => f.category)))];
  const list = filter === 'All' ? FAQS : FAQS.filter((f) => f.category === filter);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
                <span className="h-px w-8 bg-secondary-500" /> FAQ
              </div>
              <h2 className="font-heading text-display-md mt-4 text-balance">
                Answers to the questions we hear most.
              </h2>
              <p className="mt-5 text-primary-900/70">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="w-full">
                    <MessageCircle className="h-4 w-4" /> Ask a Question
                  </Button>
                </Link>
                <a href="tel:+8801711000000">
                  <Button variant="outline" size="lg" className="w-full">
                    <Phone className="h-4 w-4" /> Call Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={cn(
                    'px-3 py-1.5 text-xs font-medium rounded-full transition-colors',
                    filter === c
                      ? 'bg-primary-900 text-white'
                      : 'bg-primary-900/5 text-primary-900/70 hover:bg-primary-900/10'
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              {list.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-2xl border border-primary-900/5 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setActive((a) => (a === i ? null : i))}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-primary-900/[0.02] transition-colors"
                  >
                    <span className="font-medium text-primary-900">{f.question}</span>
                    {active === i ? <Minus className="h-4 w-4 text-secondary-700 flex-shrink-0" /> : <Plus className="h-4 w-4 text-primary-900/40 flex-shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-primary-900/70 leading-relaxed">{f.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
