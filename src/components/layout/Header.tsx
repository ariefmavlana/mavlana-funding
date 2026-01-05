'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { id as i18n } from '@/lib/i18n';

const NAV_LINKS = [
  { href: '/', label: i18n.nav.home },
  { href: '/about', label: i18n.nav.about },
  { href: '/causes', label: i18n.nav.causes },
  { href: '/contact', label: i18n.nav.contact },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-divider shadow-sm transition-all duration-500">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-24">
          {/* Logo - Premium Style */}
          <Link href="/" className="shrink-0 group flex items-center gap-4">
            <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:bg-color-primary-teal transition-all duration-700 shadow-xl group-hover:rotate-10 group-hover:scale-110 overflow-hidden border border-slate-100">
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-black text-3xl tracking-[-0.08em] text-color-primary-dark group-hover:text-color-primary-teal transition-colors leading-none">
                MAVLANA
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-color-primary-teal mt-1">
                Funding
              </span>
            </div>
          </Link>

          {/* Navigation Links - Desktop High-End */}
          <div className="hidden md:flex gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 rounded-2xl text-color-primary-dark/70 hover:text-color-primary-teal transition-all font-black text-sm uppercase tracking-widest relative group"
              >
                {link.label}
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-color-primary-teal scale-0 group-hover:scale-100 transition-transform duration-500"></span>
              </Link>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-6">
            <button className="hidden lg:flex items-center justify-center w-12 h-12 rounded-2xl hover:bg-slate-50 transition-colors group">
              <Image src="/assets/images/search-icon.png" alt="Search" width={24} height={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>

            <Link href="/donate" className="btn-primary group hidden sm:flex">
              <FaHeart size={18} className="fill-white group-hover:scale-125 transition-transform duration-500 mr-2" />
              <span>{i18n.buttons.donateNow}</span>
            </Link>

            {/* Mobile Menu Button - Stylish */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all border border-slate-200"
            >
              {isMenuOpen ? <HiX size={28} className="text-color-primary-dark" /> : <HiMenu size={28} className="text-color-primary-dark" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Immersive */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-24 bottom-0 bg-white/95 backdrop-blur-2xl z-40 p-8 border-t border-slate-100 animate-slide-up">
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-4xl font-black text-color-primary-dark hover:text-color-primary-teal transition-all tracking-tighter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-slate-100 w-full my-4"></div>
              <Link
                href="/donate"
                className="btn-primary py-8! text-2xl!"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHeart size={24} className="fill-white mr-4" />
                {i18n.buttons.donateNow}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
