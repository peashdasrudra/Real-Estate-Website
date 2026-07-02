import { cn } from '@/lib/utils';
import {
  Compass, ShieldCheck, Gem, ConciergeBell, Home, Tag, Building2, TrendingUp, Palette, Scale, Hammer, Key,
} from 'lucide-react';

const MAP = {
  compass: Compass,
  'shield-check': ShieldCheck,
  gem: Gem,
  'concierge-bell': ConciergeBell,
  home: Home,
  tag: Tag,
  'building-2': Building2,
  'trending-up': TrendingUp,
  palette: Palette,
  scale: Scale,
  hammer: Hammer,
  key: Key,
} as const;

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = (MAP as any)[name] || Compass;
  return <C className={cn(className)} strokeWidth={1.5} />;
}
