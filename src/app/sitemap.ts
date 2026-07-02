import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { PROPERTIES } from '@/lib/properties';
import { PROJECTS } from '@/lib/projects';
import { POSTS } from '@/lib/posts';
import { AGENTS } from '@/lib/agents';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPages = [
    '', '/about', '/properties', '/projects', '/services', '/investment',
    '/agents', '/blog', '/contact', '/gallery', '/video-gallery', '/testimonials',
    '/career', '/faq', '/pricing', '/downloads', '/emi-calculator',
    '/mortgage-calculator', '/loan-eligibility', '/property-management',
    '/book-visit', '/schedule-meeting', '/land', '/commercial', '/privacy', '/terms',
  ];
  return [
    ...staticPages.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...PROPERTIES.map((p) => ({ url: `${base}/properties/${p.slug}`, lastModified: new Date() })),
    ...PROJECTS.map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() })),
    ...POSTS.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.publishedAt) })),
    ...AGENTS.map((a) => ({ url: `${base}/agents/${a.slug}`, lastModified: new Date() })),
  ];
}
