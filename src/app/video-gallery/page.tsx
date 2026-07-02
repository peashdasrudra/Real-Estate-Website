import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export const metadata: Metadata = {
  title: 'Video Gallery',
  description: 'Walkthroughs, drone footage, and project stories from our collection.',
};

const videos = [
  { title: 'Golden Skyline Tower — 4K Drone Walkthrough', duration: '3:24', thumb: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200' },
  { title: 'The Obsidian Penthouse — Interior Tour', duration: '5:12', thumb: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200' },
  { title: 'Emerald Court — Construction Update', duration: '2:48', thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200' },
  { title: 'Purbachal — A 25-Year Vision', duration: '7:30', thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200' },
  { title: 'Inside Our Design Studio', duration: '4:15', thumb: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200' },
  { title: 'The Crescent — Commercial Showcase', duration: '3:55', thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200' },
];

export default function VideoGalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Video Gallery"
        title="Press play."
        description="Drone footage, project walkthroughs, and stories from the people who build them."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Video Gallery' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <StaggerItem key={i}>
                <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={v.thumb} alt={v.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/0 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center group-hover:bg-secondary-500 group-hover:text-primary-950 transition-all group-hover:scale-110">
                      <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="font-heading font-semibold line-clamp-1">{v.title}</p>
                    <p className="text-xs opacity-70 mt-1">{v.duration}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
