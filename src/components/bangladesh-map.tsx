'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DIVISIONS } from '@/lib/site';
import { cn } from '@/lib/utils';

export function BangladeshMap() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative aspect-square max-w-xl mx-auto">
      <svg viewBox="0 0 320 360" className="w-full h-full" aria-label="Bangladesh Map">
        <defs>
          <linearGradient id="bgGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0B2545" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0B2545" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="activeGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B5932C" />
          </linearGradient>
        </defs>
        {/* Stylised Bangladesh outline */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          d="M 120 30 L 180 28 L 210 40 L 230 60 L 250 80 L 270 100 L 280 130 L 290 170 L 280 200 L 260 220 L 240 240 L 220 270 L 200 290 L 180 310 L 160 320 L 140 318 L 120 310 L 100 290 L 90 270 L 80 240 L 75 210 L 70 180 L 80 150 L 90 120 L 100 90 L 110 60 Z"
          fill="url(#bgGrad)"
          stroke="#0B2545"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Rivers */}
        <path d="M 130 80 Q 160 140 150 200 Q 140 260 170 310" stroke="#1D4ED8" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M 200 60 Q 220 130 240 200 Q 250 270 220 320" stroke="#1D4ED8" strokeWidth="1" fill="none" opacity="0.4" />
        {/* Division markers */}
        {[
          { name: 'Dhaka', x: 165, y: 175, count: 42 },
          { name: 'Chattogram', x: 220, y: 230, count: 18 },
          { name: 'Sylhet', x: 215, y: 110, count: 9 },
          { name: 'Khulna', x: 110, y: 260, count: 7 },
          { name: 'Rajshahi', x: 100, y: 165, count: 6 },
          { name: 'Barishal', x: 155, y: 260, count: 4 },
          { name: 'Rangpur', x: 110, y: 80, count: 3 },
          { name: 'Mymensingh', x: 180, y: 130, count: 5 },
        ].map((d) => (
          <g
            key={d.name}
            className="cursor-pointer"
            onMouseEnter={() => setActive(d.name)}
            onMouseLeave={() => setActive(null)}
          >
            <motion.circle
              animate={{ scale: active === d.name ? 1.5 : 1 }}
              cx={d.x}
              cy={d.y}
              r={active === d.name ? 7 : 5}
              fill={active === d.name ? 'url(#activeGrad)' : '#0B2545'}
              stroke="#D4AF37"
              strokeWidth={active === d.name ? 2 : 1}
            />
            <circle cx={d.x} cy={d.y} r={12} fill="transparent">
              <animate attributeName="r" from="5" to="20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
            <text
              x={d.x}
              y={d.y - 14}
              textAnchor="middle"
              className={cn(
                'text-[8px] font-semibold transition-all',
                active === d.name ? 'fill-secondary-700' : 'fill-primary-900'
              )}
            >
              {d.name}
            </text>
            {active === d.name && (
              <text x={d.x} y={d.y + 18} textAnchor="middle" className="text-[7px] fill-primary-900/60">
                {d.count} properties
              </text>
            )}
          </g>
        ))}
      </svg>
      <div className="absolute bottom-2 right-2 text-[10px] text-primary-900/40">Bangladesh</div>
    </div>
  );
}
