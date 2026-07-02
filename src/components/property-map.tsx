'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import type { Property } from '@/lib/properties';
import { formatBDT } from '@/lib/utils';
import Link from 'next/link';

// Fix Leaflet default icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const goldIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="width:32px;height:32px;background:#D4AF37;border:3px solid #0B2545;border-radius:50%;box-shadow:0 4px 12px rgba(11,37,69,0.3);display:flex;align-items:center;justify-content:center;color:#0B2545;font-weight:bold;font-size:14px;">$</div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

export function PropertyMap({ properties }: { properties: Property[] }) {
  useEffect(() => {
    // Force resize after mount
    setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
  }, []);

  const center: [number, number] = [23.81, 90.41];

  return (
    <div className="rounded-3xl overflow-hidden border border-primary-900/5 shadow-premium" style={{ height: 600 }}>
      <MapContainer center={center} zoom={11} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {properties.map((p) => (
          <Marker key={p.id} position={[p.latitude, p.longitude]} icon={goldIcon}>
            <Popup>
              <div style={{ width: 220, fontFamily: 'Inter, sans-serif' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.images[0]} alt={p.title} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 8 }} />
                <h3 style={{ margin: '8px 0 4px', fontSize: 14, fontWeight: 600, color: '#0B2545' }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 12, color: '#666' }}>{p.area_name}, {p.city}</p>
                <p style={{ margin: '6px 0', fontSize: 14, fontWeight: 700, color: '#0B2545' }}>{formatBDT(p.price)}</p>
                <Link href={`/properties/${p.slug}`} style={{ display: 'inline-block', padding: '6px 12px', background: '#0B2545', color: '#fff', borderRadius: 6, fontSize: 12, textDecoration: 'none' }}>
                  View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
