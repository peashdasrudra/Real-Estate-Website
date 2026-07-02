'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, MessageSquare } from 'lucide-react';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  const wa = `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I would like to know more about your properties.')}`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2.5 mb-1"
              >
                <Link
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-3"
                >
                  <span className="hidden group-hover:inline-block bg-primary-900 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-premium">
                    Call us now
                  </span>
                  <span className="h-12 w-12 rounded-full bg-accent-500 text-white flex items-center justify-center shadow-premium-lg hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5" />
                  </span>
                </Link>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                >
                  <span className="hidden group-hover:inline-block bg-primary-900 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-premium">
                    Chat on WhatsApp
                  </span>
                  <span className="h-12 w-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-premium-lg hover:scale-110 transition-transform">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="group flex items-center gap-3"
                >
                  <span className="hidden group-hover:inline-block bg-primary-900 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-premium">
                    Book Site Visit
                  </span>
                  <span className="h-12 w-12 rounded-full bg-secondary-500 text-primary-950 flex items-center justify-center shadow-gold hover:scale-110 transition-transform">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative h-14 w-14 rounded-full bg-primary-900 text-white flex items-center justify-center shadow-premium-lg hover:scale-105 transition-transform"
            aria-label="Quick contact"
          >
            {!open && (
              <span className="absolute inset-0 rounded-full bg-secondary-500/40 animate-pulse-gold" />
            )}
            {open ? <X className="h-5 w-5 relative" /> : <MessageCircle className="h-5 w-5 relative" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
