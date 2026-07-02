'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('gh_exit_shown')) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem('gh_exit_shown', '1');
        document.removeEventListener('mouseout', onLeave);
      }
    };
    document.addEventListener('mouseout', onLeave);
    return () => document.removeEventListener('mouseout', onLeave);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-primary-950/70 backdrop-blur-md"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-premium-lg"
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/80 hover:bg-primary-900/5 flex items-center justify-center z-10"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid md:grid-cols-5">
              <div
                className="md:col-span-2 bg-cover bg-center min-h-[200px]"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800)' }}
              />
              <div className="md:col-span-3 p-8">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
                  <Sparkles className="h-3.5 w-3.5" /> For the discerning buyer
                </div>
                <h3 className="font-heading text-2xl mt-2 text-balance">
                  Receive our 2026 Investment Report
                </h3>
                <p className="mt-3 text-sm text-primary-900/70">
                  32 pages of off-market opportunities, projected yields, and our proprietary index of luxury real estate in Dhaka.
                </p>
                {submitted ? (
                  <div className="mt-5 p-4 rounded-xl bg-emerald-50 text-emerald-900 text-sm">
                    Thank you. Your report will arrive in your inbox shortly.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-5 flex gap-2"
                  >
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-11 rounded-lg border border-primary-900/15 px-4 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="h-11 px-5 rounded-lg bg-primary-900 text-white text-sm font-medium hover:bg-primary-800 inline-flex items-center gap-1.5"
                    >
                      Send <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </form>
                )}
                <p className="mt-3 text-xs text-primary-900/40">
                  No spam, ever. Unsubscribe anytime.
                </p>
                <Link
                  href="/properties"
                  onClick={() => setShow(false)}
                  className="mt-4 inline-flex items-center text-sm text-primary-900 underline underline-offset-4"
                >
                  or browse properties
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
