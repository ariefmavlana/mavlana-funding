'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Target, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CauseCard } from '@/components/common/CauseCard';
import { Cause } from '@/types';
import { id as i18n } from '@/lib/i18n';

// Sample data
const SAMPLE_CAUSES: Cause[] = [
  {
    id: '1',
    title: 'Pendidikan Anak-Anak Desa Terpencil',
    description: 'Bantu kami menyediakan akses pendidikan berkualitas untuk anak-anak di desa terpencil',
    image: '/assets/images/causes/causes_1.jpg',
    category: 'Pendidikan',
    targetAmount: 50000000,
    raisedAmount: 32500000,
    donors: 342,
    daysLeft: 15,
    progressPercentage: 65,
    featured: true,
  },
  {
    id: '2',
    title: 'Pelestarian Alam dan Satwa Liar',
    description: 'Inisiatif konservasi lingkungan dan perlindungan satwa liar di Indonesia',
    image: '/assets/images/causes/causes_2.jpg',
    category: 'Lingkungan',
    targetAmount: 75000000,
    raisedAmount: 45000000,
    donors: 289,
    daysLeft: 25,
    progressPercentage: 60,
  },
  {
    id: '3',
    title: 'Bantuan Bencana Alam',
    description: 'Memberikan bantuan darurat untuk komunitas yang terkena bencana alam',
    image: '/assets/images/causes/causes_3.jpg',
    category: 'Bencana',
    targetAmount: 100000000,
    raisedAmount: 78500000,
    donors: 456,
    daysLeft: 10,
    progressPercentage: 78.5,
    featured: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Slider Section */}
      <section className="relative h-96 md:h-screen bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/slide1.png"
            alt="Hero Slide"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/20"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-3xl px-4 slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Berbagi Kebaikan, Ubah Dunia
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed">
              Bergabunglah dengan jutaan hati yang berkomitmen membantu sesama. Setiap donasi Anda membuat perbedaan nyata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-[#18bfc3] to-[#14a8aa] hover:shadow-lg group"
              >
                <Link href="#popular-causes" className="gap-2">
                  {i18n.buttons.viewAll}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#18bfc3] text-[#18bfc3] hover:bg-[#18bfc3] hover:text-white"
              >
                <Link href="/donate" className="gap-2">
                  <Heart size={18} fill="currentColor" />
                  {i18n.buttons.donateNow}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-r from-[#041D57] to-[#18bfc3] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Heart size={28} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                Rp 2.5M+
              </div>
              <p className="text-sm md:text-base opacity-90">
                {i18n.home.stats.raised}
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Users size={28} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                15K+
              </div>
              <p className="text-sm md:text-base opacity-90">
                {i18n.home.stats.donors}
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Target size={28} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                50+
              </div>
              <p className="text-sm md:text-base opacity-90">
                {i18n.home.stats.causes}
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Globe size={28} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                10
              </div>
              <p className="text-sm md:text-base opacity-90">
                {i18n.home.stats.countries}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Causes Section */}
      <section id="popular-causes" className="py-16 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="section-title mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {i18n.home.featuredCauses}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mt-6">
              {i18n.home.featuredDescription}
            </p>
          </div>

          {/* Causes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_CAUSES.map((cause, index) => (
              <div key={cause.id} style={{ animationDelay: `${index * 0.1}s` }} className="slide-up">
                <CauseCard cause={cause} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#18bfc3] text-[#18bfc3] hover:bg-[#18bfc3] hover:text-white gap-2"
            >
              <Link href="/causes" className="group">
                {i18n.buttons.viewAll}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-linear-to-r from-[#18bfc3] via-[#14a8aa] to-[#0f8c8f] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mulai Kampanye Anda Sendiri
            </h2>
            <p className="text-lg md:text-xl text-teal-50 mb-10 font-light leading-relaxed">
              Punya tujuan amal yang ingin didukung masyarakat? Buat kampanye Anda dan jangkau ribuan pendukung setia di seluruh Indonesia.
            </p>
            <a
              href="/causes"
              className="btn-primary inline-block bg-white text-[#041D57] hover:bg-gray-100"
            >
              Lihat Semua Kampanye
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {i18n.home.newsletter}
            </h2>
            <p className="text-lg text-gray-600">
              {i18n.home.newsletterDescription}
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={i18n.home.emailPlaceholder}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18bfc3] focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              {i18n.footer.subscribe}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
