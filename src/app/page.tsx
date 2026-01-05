'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHandHoldingHeart, FaPlayCircle, FaFlagCheckered, FaRocket, FaGlobeAmericas, FaQuoteLeft, FaQuestionCircle, FaArrowRight, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';
import { MdVerified, MdGppGood, MdSupportAgent, MdEmail, MdFavorite } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CauseCard } from '@/components/common/CauseCard';
import { Cause } from '@/types';
import { id as i18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

// Sample data with localized Indonesian content - Expanded to use all assets
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
  {
    id: '4',
    title: 'Pemberdayaan UMKM Lokal',
    description: 'Mendukung pertumbuhan ekonomi masyarakat melalui bantuan modal usaha kecil',
    image: '/assets/images/causes/causes_4.jpg',
    category: 'Ekonomi',
    targetAmount: 30000000,
    raisedAmount: 12000000,
    donors: 156,
    daysLeft: 30,
    progressPercentage: 40,
  },
  {
    id: '5',
    title: 'Akses Air Bersih Pedalaman',
    description: 'Pembangunan sumur bor dan sistem filtrasi air untuk warga pedalaman',
    image: '/assets/images/causes/causes_5.jpg',
    category: 'Kesehatan',
    targetAmount: 60000000,
    raisedAmount: 55000000,
    donors: 890,
    daysLeft: 5,
    progressPercentage: 91,
    featured: true,
  },
  {
    id: '6',
    title: 'Beasiswa Santri Berprestasi',
    description: 'Bantuan pendidikan tingkat lanjut untuk santri berbakat dari keluarga prasejahtera',
    image: '/assets/images/causes/causes_6.jpg',
    category: 'Pendidikan',
    targetAmount: 45000000,
    raisedAmount: 30000000,
    donors: 220,
    daysLeft: 20,
    progressPercentage: 66,
  },
  {
    id: '7',
    title: 'Rehabilitasi Terumbu Karang',
    description: 'Upaya pemulihan ekosistem laut dan edukasi nelayan tentang kelestarian alam',
    image: '/assets/images/causes/causes_7.jpg',
    category: 'Lingkungan',
    targetAmount: 85000000,
    raisedAmount: 15000000,
    donors: 85,
    daysLeft: 45,
    progressPercentage: 17,
  },
  {
    id: '8',
    title: 'Bantuan Pangan Lansia',
    description: 'Penyaluran sembako rutin untuk lansia sebatang kara di wilayah pelosok',
    image: '/assets/images/causes/causes_8.jpg',
    category: 'Kemanusiaan',
    targetAmount: 25000000,
    raisedAmount: 22000000,
    donors: 310,
    daysLeft: 8,
    progressPercentage: 88,
  },
  {
    id: '9',
    title: 'Pembangunan Perpustakaan Desa',
    description: 'Menyediakan ruang baca yang layak dan koleksi buku untuk meningkatkan literasi desa',
    image: '/assets/images/causes/causes_9.jpg',
    category: 'Pendidikan',
    targetAmount: 40000000,
    raisedAmount: 18000000,
    donors: 142,
    daysLeft: 12,
    progressPercentage: 45,
  },
  {
    id: '10',
    title: 'Operasi Mata Katarak Gratis',
    description: 'Inisiatif bantuan medis untuk lansia tidak mampu agar dapat kembali melihat dunia',
    image: '/assets/images/causes/causes_10.jpg',
    category: 'Kesehatan',
    targetAmount: 55000000,
    raisedAmount: 42000000,
    donors: 275,
    daysLeft: 14,
    progressPercentage: 76,
  },
  {
    id: '11',
    title: 'Pemberdayaan Ekonomi Difabel',
    description: 'Pelatihan keterampilan dan pemberian bantuan alat kerja bagi penyandang disabilitas',
    image: '/assets/images/causes/causes_11.jpg',
    category: 'Kemanusiaan',
    targetAmount: 35000000,
    raisedAmount: 28000000,
    donors: 198,
    daysLeft: 18,
    progressPercentage: 80,
  },
  {
    id: '12',
    title: 'Penghijauan Hutan Kota',
    description: 'Penanaman bibit pohon di area perkotaan untuk mengurangi polusi udara',
    image: '/assets/images/causes/causes_12.jpg',
    category: 'Lingkungan',
    targetAmount: 20000000,
    raisedAmount: 5000000,
    donors: 64,
    daysLeft: 60,
    progressPercentage: 25,
  },
];

export default function Home() {
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.style.width = `${progress}%`;

      // Scroll reveal logic
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-color-primary-teal/30 selection:text-color-primary-dark">
      <div id="scroll-progress"></div>
      <Header />

      {/* Hero Section - High Impact & Modern */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-24 pb-40 overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-color-primary-teal/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[0%] left-[-10%] w-[40%] h-[60%] bg-color-primary-dark/5 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 slide-in-left">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-color-primary-teal/10 border border-color-primary-teal/20 text-color-primary-teal text-[10px] font-black uppercase tracking-[0.25em] mb-12 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color-primary-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-color-primary-teal"></span>
                </span>
                Mavlana Funding • 2024
              </div>

              <h1 className="text-6xl md:text-8xl xl:text-[8.5rem] mb-12 leading-[0.8] font-black tracking-[-0.06em] text-color-primary-dark">
                {i18n.home.title}
                <span className="text-color-primary-teal italic opacity-20 block md:inline md:ml-6 font-display font-medium">#Dampak</span>
              </h1>

              <p className="text-xl md:text-2xl text-color-text-secondary mb-16 max-w-2xl leading-relaxed font-medium">
                {i18n.home.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <Link href="/causes" className="btn-primary group w-full sm:w-auto text-xl">
                  <span>{i18n.buttons.donateNow}</span>
                  <BiDonateHeart className="ml-3 w-7 h-7 group-hover:scale-125 transition-transform duration-700" />
                </Link>
                <Link href="/donate" className="btn-primary group px-16! py-7! text-xl flex items-center gap-4">
                  <span>{i18n.buttons.donateNow}</span>
                  <div className="relative w-8 h-8 group-hover:translate-x-2 transition-transform">
                    <Image src="/assets/images/arrow-green.png" alt="Arrow" fill className="object-contain invert brightness-0" />
                  </div>
                </Link>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-20 h-20 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-primary-teal group-hover:bg-primary-teal/5 transition-all duration-500 overflow-hidden relative">
                    <Image src="/assets/images/video_img.jpg" alt="Watch Video" fill className="object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                    <FaPlayCircle size={32} className="relative z-10 text-color-primary-dark group-hover:text-color-primary-teal transition-colors" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.4em] text-color-primary-dark group-hover:text-primary-teal transition-colors">Lihat Aksi Kami</span>
                </div>
              </div>

              {/* Welcome text asset integration */}
              <div className="mt-20 flex items-center gap-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <Image src="/assets/images/welcome-text-1.png" alt="Welcome" width={200} height={40} />
              </div>
            </div>

            {/* Interactive Image Composition */}
            <div className="lg:col-span-5 relative slide-in-right mt-24 lg:mt-0">
              <div className="relative group p-4">
                {/* Main Image */}
                <div className="relative z-10 w-full aspect-4/5 overflow-hidden rounded-4xl shadow-[-60px_80px_150px_-30px_rgba(0,0,0,0.2)] border-[20px] border-white active:scale-95 transition-transform duration-700 outline outline-1 outline-slate-100">
                  <Image
                    src="/assets/images/slide1.png"
                    alt="Hero Image"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[2.5s] ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-color-primary-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>

                {/* Secondary Image - slide2.png asset */}
                <div className="absolute -bottom-20 -left-20 w-80 h-[400px] z-20 rounded-4xl overflow-hidden border-12 border-white shadow-3xl hidden xl:block animate-slide-up-slow">
                  <Image src="/assets/images/slide2.png" alt="Secondary Hero" fill className="object-cover" />
                </div>

                {/* Third Image - slide3.png asset */}
                <div className="absolute top-20 -right-32 w-64 h-[300px] z-0 rounded-4xl overflow-hidden border-8 border-white shadow-2xl hidden 2xl:block opacity-50 hover:opacity-100 transition-opacity duration-1000 rotate-12">
                  <Image src="/assets/images/slide3.png" alt="Third Hero" fill className="object-cover" />
                </div>

                {/* Floating Stats Badge */}
                <div className="absolute -top-12 -right-12 z-20 glass-dark p-10 rounded-[3.5rem] shadow-2xl animate-bounce-slow hidden xl:block border-white/10 text-white">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-color-primary-teal rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-color-primary-teal/20 text-white">
                      <FaUsers className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-4xl font-black tracking-tighter leading-none mb-1">25k+</div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] leading-none">Donatur Aktif</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-color-success/10 blur-[80px] rounded-full -z-10 group-hover:animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="reveal relative -mt-32 z-20 pb-20">
        <div className="container relative">
          {/* Subtle Watermark BG */}
          <div className="absolute inset-0 -z-10 flex justify-around opacity-5 pointer-events-none">
            <Image src="/assets/images/logo-bg.png" alt="Watermark" width={400} height={400} className="object-contain animate-pulse" />
            <Image src="/assets/images/logo-bg.png" alt="Watermark" width={300} height={300} className="object-contain animate-spin-slow" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { icon: <MdFavorite size={36} />, label: i18n.home.stats.raised, value: "Rp 2.5M+", color: "bg-color-primary-teal" },
              { icon: <FaUsers size={36} />, label: i18n.home.stats.donors, value: "15.4K+", color: "bg-color-primary-dark" },
              { icon: <FaChartLine size={36} />, label: i18n.home.stats.causes, value: "50+", color: "bg-color-success" },
              { icon: <FaGlobe size={36} />, label: i18n.home.stats.countries, value: "12", color: "bg-color-info" },
            ].map((stat, idx) => (
              <div key={idx} className="card text-center group bg-white/80 backdrop-blur-xl border-slate-50/50">
                <div className={cn("mx-auto w-24 h-24 rounded-4xl flex items-center justify-center text-white mb-10 group-hover:rotate-15 transition-all duration-700 shadow-3xl", stat.color)}>
                  {stat.icon}
                </div>
                <p className="text-5xl font-black text-color-primary-dark tracking-tighter mb-3">{stat.value}</p>
                <p className="text-[10px] font-black text-color-text-secondary uppercase tracking-[0.3em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Causes Section */}
      <section id="popular-causes" className="reveal py-40 md:py-64 bg-white relative">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-20 mb-32 md:mb-48">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 mb-10 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-color-primary-teal animate-pulse"></div>
                <span className="text-[10px] font-black text-color-primary-dark uppercase tracking-[0.3em]">Program Sosial Mavlana</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-color-primary-dark tracking-[-0.05em] leading-[0.85]">
                {i18n.home.featuredCauses}
              </h2>
            </div>
            <p className="text-2xl text-color-text-secondary font-medium leading-relaxed max-w-sm lg:border-l-[6px] lg:border-primary-teal/20 lg:pl-12 opacity-80">
              {i18n.home.featuredDescription}
            </p>
          </div>

          {/* Decorative Watermark Asset - causes_4.png */}
          <div className="absolute top-40 right-10 w-64 h-64 opacity-5 pointer-events-none grayscale -z-10 rotate-12">
            <Image src="/assets/images/causes/causes_4.png" alt="Watermark" width={256} height={256} />
          </div>

          {/* Grid - Now using more items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28">
            {SAMPLE_CAUSES.slice(0, 5).map((cause, index) => (
              <div key={cause.id} style={{ animationDelay: `${index * 0.15}s` }} className="slide-up">
                <CauseCard cause={cause} />
              </div>
            ))}

            {/* Side Add Banner Integration */}
            <div className="lg:col-span-1 slide-up" style={{ animationDelay: '0.9s' }}>
              <div className="relative h-full min-h-[400px] rounded-4xl overflow-hidden shadow-2xl group">
                <Image
                  src="/assets/images/side_add_baner.jpg"
                  alt="Special Campaign"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-color-primary-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="badge mb-4">Pilihan Editor</span>
                  <h4 className="text-3xl font-black text-white mb-6 tracking-tight leading-none">Dukung Kampanye Pilihan Minggu Ini</h4>
                  <button className="w-full btn-primary py-4! text-sm!">Donasi Sekarang</button>
                </div>
              </div>
            </div>

            {SAMPLE_CAUSES.slice(6).map((cause, index) => (
              <div key={cause.id} style={{ animationDelay: `${(index + 6) * 0.15}s` }} className="slide-up">
                <CauseCard cause={cause} />
              </div>
            ))}
          </div>

          <div className="mt-40 text-center">
            <Link href="/causes" className="inline-flex items-center gap-10 group px-12 py-6 rounded-full border-2 border-slate-100 hover:border-primary-teal hover:bg-primary-teal/5 transition-all duration-700">
              <span className="text-sm font-black uppercase tracking-[0.6em] text-color-primary-dark group-hover:text-primary-teal transition-colors duration-500">{i18n.buttons.viewAll}</span>
              <FaArrowRight className="w-6 h-6 group-hover:translate-x-5 transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Using more assets */}
      <section className="reveal py-40 md:py-64 bg-slate-50 relative overflow-hidden">
        {/* Background Asset */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image
            src="/assets/images/about_bg.png"
            alt="About Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-4xl overflow-hidden shadow-3xl border-16 border-white ring-1 ring-slate-100">
                <Image
                  src="/assets/images/about_img.jpg"
                  alt="About Us"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-color-primary-teal rounded-full flex items-center justify-center text-white shadow-2xl z-20 animate-pulse">
                <span className="text-4xl font-black">12+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest absolute bottom-8">Tahun</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-slate-100 mb-10 shadow-sm">
                <span className="text-[10px] font-black text-color-primary-teal uppercase tracking-[0.3em]">Tentang Kami</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-color-primary-dark mb-12 tracking-tight">Dedikasi Untuk <span className="text-color-primary-teal">Kemanusiaan</span></h2>
              <p className="text-xl text-color-text-secondary leading-relaxed mb-12 font-medium">
                Mavlana Funding adalah platform donasi yang berkomitmen untuk menjembatani antara orang-orang baik dan mereka yang membutuhkan. Kami percaya bahwa setiap kontribusi, sekecil apa pun, memiliki kekuatan untuk mengubah hidup seseorang.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 group hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-color-primary-teal/10 transition-colors">
                    <MdVerified className="text-3xl text-color-primary-teal" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-color-primary-dark mb-1">100%</h4>
                    <p className="text-xs uppercase tracking-widest text-color-text-secondary font-bold">Transparansi</p>
                  </div>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 group hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-color-primary-teal/10 transition-colors">
                    <MdGppGood className="text-3xl text-color-success" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-color-primary-dark mb-1">Aman</h4>
                    <p className="text-xs uppercase tracking-widest text-color-text-secondary font-bold">Verifikasi Ketat</p>
                  </div>
                </div>
              </div>

              {/* Mission Points with arrow-green asset */}
              <div className="mt-16 space-y-6">
                {['Menyalurkan bantuan tepat sasaran', 'Membangun kemandirian masyarakat', 'Edukasi sosial berkelanjutan'].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="relative w-6 h-6 shrink-0 group-hover:translate-x-2 transition-transform">
                      <Image src="/assets/images/arrow-green.png" alt="Marker" fill className="object-contain" />
                    </div>
                    <span className="text-lg font-bold text-color-primary-dark/80 group-hover:text-color-primary-teal transition-colors">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donors Wall Section - Using all avatars and background asset */}
      <section className="reveal py-40 bg-white relative overflow-hidden">
        {/* Donor Background Asset */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/assets/images/avatar-background.png" alt="Donor BG" fill className="object-cover" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-color-primary-dark mb-6 tracking-tight">Pahlawan <span className="text-color-primary-teal">Kebaikan</span></h2>
            <p className="text-xl text-color-text-secondary font-medium">Terima kasih kepada ribuan orang yang telah bergabung bersama kami.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <div key={i} className="group relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl group-hover:shadow-color-primary-teal/20 group-hover:-translate-y-4 transition-all duration-500">
                  <Image
                    src={`/assets/images/avatar/avatar_${i}.jpg`}
                    alt={`Donor ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-color-success rounded-full flex items-center justify-center text-white text-[10px] font-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  ✓
                </div>
              </div>
            ))}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-color-primary-dark flex items-center justify-center text-white text-xl font-black shadow-xl hover:scale-110 transition-transform cursor-pointer">
              +15k
            </div>
          </div>
        </div>
      </section>

      {/* History / Journey Section - Using archive images */}
      <section className="reveal py-40 md:py-64 bg-color-primary-dark text-white relative overflow-hidden">
        {/* Background Map Asset */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/assets/images/map_green.png"
            alt="Impact Map"
            fill
            className="object-contain"
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 border border-white/20 mb-10 shadow-sm">
                <span className="text-[10px] font-black text-color-primary-teal uppercase tracking-[0.3em]">Perjalanan Kami</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tight leading-[0.85]">Langkah Kecil, <span className="text-color-primary-teal italic font-display font-medium">Perubahan</span> Besar</h2>
              <p className="text-2xl text-white/50 leading-relaxed mb-16 font-medium">
                Sejak 2012, kami telah bergerak menjangkau lebih dari 50 wilayah di Indonesia, menyalurkan bantuan dan harapan bagi mereka yang terpinggirkan.
              </p>
              <div className="space-y-12">
                {[
                  { year: "2012", label: "Awal Berdiri", desc: "Dimulai dari komunitas kecil peduli pendidikan.", icon: <FaFlagCheckered /> },
                  { year: "2018", label: "Digitalisasi", desc: "Meluncurkan platform crowdfunding pertama kami.", icon: <FaRocket /> },
                  { year: "2024", label: "Dampak Global", desc: "Telah membantu lebih dari 1 juta penerima manfaat.", icon: <FaGlobeAmericas /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-10 items-start group">
                    <div className="relative pt-2">
                      <span className="text-4xl font-black text-color-primary-teal opacity-30 group-hover:opacity-100 transition-opacity duration-500">{item.year}</span>
                      <div className="absolute top-2 -right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-[-10px] group-hover:translate-x-0 text-color-primary-teal text-xl">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2">{item.label}</h4>
                      <p className="text-white/40 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 relative">
              <div className="space-y-8 mt-12">
                <div className="rounded-4xl overflow-hidden shadow-2xl border-8 border-white/5 aspect-4/5 relative">
                  <Image src="/assets/images/archive-img-1.jpg" alt="Journey 1" fill className="object-cover" />
                </div>
                <div className="rounded-4xl overflow-hidden shadow-2xl border-8 border-white/5 aspect-square relative">
                  <Image src="/assets/images/news_feeds_1.jpg" alt="News 1" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-4xl overflow-hidden shadow-2xl border-8 border-white/5 aspect-square relative">
                  <Image src="/assets/images/archive-img-2.jpg" alt="Journey 2" fill className="object-cover" />
                </div>
                <div className="rounded-4xl overflow-hidden shadow-2xl border-8 border-white/5 aspect-4/5 relative">
                  <Image src="/assets/images/archive-img-3.jpg" alt="Journey 3" fill className="object-cover" />
                </div>
                <div className="rounded-4xl overflow-hidden shadow-2xl border-8 border-white/5 aspect-square relative">
                  <Image src="/assets/images/news_feeds_2.jpg" alt="News 2" fill className="object-cover" />
                </div>
              </div>

              {/* Floating Call to Action Icon asset */}
              <div className="absolute -top-12 -left-12 w-32 h-32 animate-bounce-slow hidden xl:block">
                <Image src="/assets/images/call-to-action-icon.png" alt="CTA Icon" width={128} height={128} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Volunteer Section - Using remaining visual assets */}
      <section className="reveal py-40 bg-slate-50 relative overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/3 text-left">
              <div className="w-32 h-32 mb-10 relative">
                <Image src="/assets/images/success_donation.png" alt="Success Icon" fill className="object-contain" />
              </div>
              <h2 className="text-5xl font-black text-color-primary-dark mb-8 tracking-tight">Kisah <br /><span className="text-color-primary-teal">Keberhasilan</span></h2>
              <p className="text-xl text-color-text-secondary font-medium leading-relaxed mb-12">
                Setiap donasi yang Anda berikan adalah benih harapan yang tumbuh menjadi kenyataan indah bagi mereka.
              </p>
              <button className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:bg-color-primary-teal group-hover:text-white transition-all">
                  <Image src="/assets/images/upload_icon.png" alt="Upload" width={24} height={24} className="group-hover:invert" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-color-primary-dark">Bagikan Cerita Anda</span>
              </button>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl aspect-square group">
                <Image src="/assets/images/volunteer.png" alt="Volunteer" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-color-primary-dark via-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-2xl font-black mb-2">Relawan Lapangan</p>
                  <p className="text-sm opacity-70 font-medium">Tim bergerak cepat menyalurkan bantuan</p>
                </div>
              </div>
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl aspect-square group">
                <Image src="/assets/images/causes/causes_4.png" alt="Story" fill className="object-contain bg-white p-12 transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-color-primary-dark/20 via-transparent"></div>
                <div className="absolute bottom-10 left-10 text-color-primary-dark">
                  <p className="text-2xl font-black mb-2">Pemberdayaan</p>
                  <p className="text-sm opacity-70 font-medium">Membangun kemandirian ekonomi masyarakat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Contact Section - Using remaining technical assets */}
      <section className="reveal py-40 md:py-64 relative bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="relative z-10 p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 shadow-2xl overflow-hidden">
                {/* Background Asset */}
                <Image src="/assets/images/contact_bg.png" alt="Contact BG" fill className="absolute inset-0 opacity-[0.03] object-cover" />

                <div className="relative z-20">
                  <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-xl mb-10">
                    <Image src="/assets/images/donation_error.png" alt="Error Icon" width={40} height={40} />
                  </div>
                  <h3 className="text-4xl font-black text-color-primary-dark mb-8 tracking-tight">Ada Kendala Saat Berdonasi?</h3>
                  <p className="text-xl text-color-text-secondary font-medium leading-relaxed mb-12">
                    Tim kami siap membantu Anda 24/7. Hubungi kami jika Anda mengalami kesulitan dalam transaksi atau memiliki pertanyaan seputar kampanye.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-color-primary-teal/10">
                        <MdEmail className="text-2xl text-color-primary-teal" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-color-text-secondary mb-1">Email Support</p>
                        <span className="text-lg font-black text-color-primary-dark">halo@mavlana.org</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-color-primary-teal/10 overflow-hidden relative">
                        <MdSupportAgent className="text-3xl text-color-primary-teal" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-color-text-secondary mb-1">Pusat Bantuan</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-black text-color-primary-dark">Lihat Panduan Donasi</span>
                          <FaQuestionCircle className="opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all text-color-primary-teal" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Map Asset */}
              <div className="absolute -bottom-24 -right-24 w-80 h-80 opacity-5 pointer-events-none">
                <Image src="/assets/images/map.png" alt="Map" fill className="object-contain" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 mb-10 shadow-sm">
                <span className="text-[10px] font-black text-color-primary-teal uppercase tracking-[0.3em]">Butuh Bantuan?</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-color-primary-dark mb-12 tracking-tight">Kami Siap <span className="text-color-primary-teal">Mendengar</span> Anda</h2>
              <div className="space-y-10">
                {[
                  { q: "Bagaimana cara mencairkan donasi?", a: "Proses pencairian donasi melalui verifikasi ketat untuk memastikan dana sampai ke pihak yang tepat." },
                  { q: "Apakah ada biaya administrasi?", a: "Kami mengenakan biaya minimal untuk pemeliharaan sistem agar platform tetap berjalan stabil." },
                  { q: "Bisakah saya berdonasi secara anonim?", a: "Tentu, Anda memiliki opsi untuk menyembunyikan nama Anda dari publik saat proses pembayaran." }
                ].map((item, idx) => (
                  <div key={idx} className="pb-8 border-b border-slate-100 group cursor-pointer">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-bold text-color-primary-dark group-hover:text-color-primary-teal transition-colors tracking-tight">{item.q}</h4>
                      <Image src="/assets/images/option_arrow.png" alt="Arrow" width={16} height={16} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </div>
                    <p className="text-color-text-secondary font-medium leading-relaxed opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern High-End CTA - Using CTA img asset */}
      <section className="py-48 md:py-72 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/images/call-to-action-img.jpg" alt="CTA Background" fill className="object-cover grayscale" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mx-auto w-32 h-32 mb-12 relative">
              <Image src="/assets/images/logo-bg.png" alt="Logo BG" fill className="object-contain animate-spin-slow opacity-20" />
              <Image src="/assets/images/logo.png" alt="Logo" fill className="object-contain p-6" />
            </div>
            <h2 className="text-6xl md:text-9xl font-black text-color-primary-dark mb-16 tracking-tighter leading-[0.85]">
              Wujudkan <span className="text-color-primary-teal italic font-display font-medium">Harapan</span> Mulai Hari Ini
            </h2>
            <p className="text-2xl md:text-3xl text-color-text-secondary mb-24 max-w-3xl mx-auto leading-relaxed font-medium">
              Satu keputusan kecil Anda hari ini bisa menjadi keajaiban besar bagi mereka yang sedang berjuang. Bergabunglah dengan 25k+ donatur lainnya.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <Link href="/donate" className="btn-primary px-20! py-8! text-2xl shadow-color-primary-teal/50">
                {i18n.buttons.donateNow}
              </Link>
              <Link href="/contact" className="text-color-primary-dark font-black uppercase tracking-[0.5em] text-sm hover:text-color-primary-teal transition-all duration-500 border-b-2 border-slate-200 pb-2 hover:border-color-primary-teal">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Newsletter Section */}
      <section className="reveal py-40 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        {/* Decorative Assets */}
        <div className="absolute bottom-0 right-0 w-64 h-64 grayscale opacity-10 -rotate-12 transform translate-x-32 translate-y-32">
          <Image src="/assets/images/charity_footer.png" alt="Footer Asset" width={256} height={256} />
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
          <Image src="/assets/images/map.png" alt="Map Asset" width={128} height={128} />
        </div>

        <div className="container max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-6 mb-8">
                <Image src="/assets/images/massage_icon.png" alt="Message Icon" width={64} height={64} />
                <h3 className="text-5xl font-black text-color-primary-dark tracking-tighter mb-0">{i18n.home.newsletter}</h3>
              </div>
              <p className="text-2xl text-color-text-secondary font-medium leading-relaxed">{i18n.home.newsletterDescription}</p>
            </div>
            <div className="w-full max-w-lg">
              <div className="relative group">
                <input
                  type="email"
                  placeholder={i18n.home.emailPlaceholder}
                  className="rounded-[2.5rem]! px-10 h-24 shadow-2xl pr-48 bg-white border-2 border-transparent focus:border-color-primary-teal transition-all text-xl"
                />
                <button className="absolute right-3 top-3 bottom-3 px-12 rounded-4xl bg-color-primary-dark text-white font-black uppercase text-xs tracking-widest hover:bg-color-primary-teal transition-all duration-500 shadow-xl">
                  {i18n.footer.subscribe}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
