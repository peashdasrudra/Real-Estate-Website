import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { Download, FileText, Image as ImageIcon, Video } from 'lucide-react';
import { PROPERTIES } from '@/lib/properties';
import { PROJECTS } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Downloads — Brochures, Plans, Reports',
  description: 'Download brochures, floor plans, project reports, and our annual investment outlook.',
};

const downloads = [
  { name: 'Golden Heights — Company Brochure', type: 'PDF', size: '8.4 MB', cat: 'Company' },
  { name: '2026 Investment Outlook', type: 'PDF', size: '12.2 MB', cat: 'Report' },
  { name: 'NRB Investment Guide', type: 'PDF', size: '4.8 MB', cat: 'Guide' },
  { name: 'Sustainability & ESG Report 2025', type: 'PDF', size: '6.1 MB', cat: 'Report' },
  { name: 'Skyline Tower — Sales Brochure', type: 'PDF', size: '5.2 MB', cat: 'Property' },
  { name: 'The Obsidian — Sales Brochure', type: 'PDF', size: '4.9 MB', cat: 'Property' },
  { name: 'Purbachal Master Plan', type: 'PDF', size: '15.4 MB', cat: 'Project' },
  { name: 'Golden Heights Brand Kit', type: 'ZIP', size: '24.1 MB', cat: 'Brand' },
];

const categories = ['All', 'Company', 'Report', 'Guide', 'Property', 'Project', 'Brand'];

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Brochures, reports, and resources."
        description="Download sales brochures, master plans, investment reports, and our annual outlook."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Downloads' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button key={c} className="px-4 py-1.5 text-xs font-medium rounded-full bg-primary-900/5 hover:bg-primary-900 hover:text-white transition-colors">
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {downloads.map((d, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-primary-900/5 hover:border-secondary-500/30 hover:shadow-premium transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary-900/5 flex items-center justify-center group-hover:bg-secondary-500 transition-colors">
                  <FileText className="h-5 w-5 text-primary-900 group-hover:text-primary-950" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{d.name}</p>
                  <p className="text-xs text-primary-900/50 mt-0.5">{d.cat} · {d.type} · {d.size}</p>
                </div>
                <Download className="h-4 w-4 text-primary-900/40 group-hover:text-secondary-700 transition-colors" />
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
