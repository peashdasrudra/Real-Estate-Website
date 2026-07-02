'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Linkedin, Star, Languages, Briefcase, Mail, Award } from 'lucide-react';
import type { Agent } from '@/lib/agents';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SITE } from '@/lib/site';

export function AgentCard({ agent }: { agent: Agent }) {
  const wa = `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent('Hi, I am interested in your services.')}`;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-3xl overflow-hidden bg-white border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-all"
    >
      <Link href={`/agents/${agent.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-primary-900/5">
          <Image
            src={agent.photo}
            alt={agent.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/0 to-transparent" />
          <div className="absolute top-3 right-3">
            <Badge variant="gold" size="sm" className="bg-secondary-500/95 text-primary-950">
              <Award className="h-3 w-3" />
              {agent.closedDeals}+ deals
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-heading text-xl font-semibold leading-tight">{agent.name}</h3>
            <p className="text-xs opacity-80 mt-1">{agent.role}</p>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-primary-900/70">
            <Briefcase className="h-3.5 w-3.5" />
            {agent.experience} years
          </div>
          <div className="flex items-center gap-1.5 text-primary-900/70">
            <Languages className="h-3.5 w-3.5" />
            {agent.languages.slice(0, 2).join(', ')}
          </div>
        </div>
        <div className="mt-4 flex gap-1.5">
          {agent.specialty.slice(0, 2).map((s) => (
            <span key={s} className="text-[10px] px-2 py-1 bg-primary-900/5 text-primary-900/70 rounded-md">{s}</span>
          ))}
        </div>
        <div className="mt-5 flex gap-2">
          <a href={`tel:${agent.phone.replace(/\s/g, '')}`} className="flex-1">
            <Button variant="primary" size="sm" className="w-full">
              <Phone className="h-3.5 w-3.5" /> Call
            </Button>
          </a>
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="icon-sm" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </a>
          <a href={`mailto:${agent.email}`}>
            <Button variant="outline" size="icon-sm" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
