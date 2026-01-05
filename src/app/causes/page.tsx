'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CauseCard } from '@/components/common/CauseCard';
import { Cause } from '@/types';
import { id as i18n } from '@/lib/i18n';

// Sample causes data
const SAMPLE_CAUSES: Cause[] = Array.from({ length: 12 }, (_, i) => ({
  id: (i + 1).toString(),
  title: [
    'Pendidikan Anak-Anak Desa Terpencil',
    'Pelestarian Alam dan Satwa Liar',
    'Bantuan Bencana Alam',
    'Air Bersih untuk Desa',
    'Program Kesehatan Masyarakat',
    'Pendidikan Anak Berbakat Kurang Mampu',
    'Penanganan Disabilitas',
    'Konservasi Lingkungan Hutan',
    'Kesejahteraan Anak-Anak Panti Asuhan',
    'Pembangunan Rumah Layak Huni',
    'Ketahanan Pangan Masyarakat',
    'Pengembangan Komunitas Lokal',
  ][i],
  description: `Bantu kami membuat perbedaan dalam tujuan mulia ini. Kontribusi Anda dapat mengubah hidup dan menciptakan dampak jangka panjang pada komunitas.`,
  image: `/assets/images/causes/causes_${(i % 12) + 1}.jpg`,
  category: [
    'Pendidikan',
    'Lingkungan',
    'Bencana',
    'Air',
    'Kesehatan',
    'Pendidikan',
    'Disabilitas',
    'Alam',
    'Anak',
    'Perumahan',
    'Pangan',
    'Pengembangan',
  ][i],
  targetAmount: 50000000 + i * 10000000,
  raisedAmount: Math.floor((50000000 + i * 10000000) * (0.5 + Math.random() * 0.4)),
  donors: Math.floor(100 + Math.random() * 400),
  daysLeft: Math.floor(5 + Math.random() * 25),
  progressPercentage: Math.floor(30 + Math.random() * 50),
  featured: i < 3,
}));

const CATEGORIES = [
  'Semua',
  'Pendidikan',
  'Kesehatan',
  'Pangan',
  'Lingkungan',
  'Bencana',
  'Anak',
];

export default function CausesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCauses = SAMPLE_CAUSES.filter((cause) => {
    const matchesCategory = selectedCategory === 'Semua' || cause.category === selectedCategory;
    const matchesSearch =
      cause.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cause.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-72 md:h-96 bg-[#041D57] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/contact_bg.png"
            alt="Causes Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/20"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {i18n.causes.title}
            </h1>
            <p className="text-lg md:text-xl text-teal-50">
              {i18n.causes.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-10 md:py-14 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-10">
            <input
              type="text"
              placeholder={i18n.causes.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18bfc3] focus:border-transparent bg-white"
            />
          </div>

          {/* Category Filter */}
          <div>
            <p className="text-sm font-bold text-[#041D57] mb-4 uppercase tracking-wider">
              {i18n.causes.filter}:
            </p>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-linear-to-r from-[#18bfc3] to-[#14a8aa] text-white shadow-custom-md'
                      : 'bg-white text-[#041D57] border-2 border-gray-300 hover:border-[#18bfc3] hover:text-[#18bfc3]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Causes Grid Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          {filteredCauses.length > 0 ? (
            <>
              <div className="mb-12">
                <p className="text-gray-600 font-semibold text-lg">
                  Menampilkan <span className="text-[#18bfc3] font-bold">{filteredCauses.length}</span> dari <span className="text-[#041D57] font-bold">{SAMPLE_CAUSES.length}</span> kampanye
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCauses.map((cause, index) => (
                  <div key={cause.id} style={{ animationDelay: `${index * 0.05}s` }} className="slide-up">
                    <CauseCard cause={cause} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="mb-6 text-6xl">🔍</div>
              <p className="text-gray-600 text-lg mb-8">
                {i18n.causes.noResults}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSearchTerm('');
                }}
                className="btn-primary"
              >
                Hapus Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-28 bg-linear-to-r from-[#18bfc3] via-[#14a8aa] to-[#3ac798] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Punya Kampanye Amal Sendiri?
          </h2>
          <p className="text-lg md:text-xl text-teal-50 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Mulai kampanye penggalangan dana Anda sendiri dan jangkau ribuan pendukung yang siap membantu membuat perbedaan nyata.
          </p>
          <a
            href="/causes"
            className="btn-primary bg-white text-[#041D57] hover:bg-gray-100"
          >
            Buat Kampanye
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
