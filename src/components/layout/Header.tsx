'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 group flex items-center gap-2">
            <div className="w-12 h-12 bg-linear-to-br from-[#18bfc3] to-[#041D57] rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
              M
            </div>
            <span className="hidden sm:inline font-bold text-lg text-[#041D57] group-hover:text-[#18bfc3] transition-colors">
              Mavlana
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#041D57] hover:text-[#18bfc3] transition-colors font-semibold text-sm relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#18bfc3] to-[#3ac798] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden sm:flex bg-linear-to-r from-[#18bfc3] to-[#14a8aa] hover:shadow-lg gap-2"
            >
              <Link href="/donate">
                <Heart size={18} fill="currentColor" />
                {i18n.buttons.donateNow}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#041D57] hover:bg-gray-50 px-4 py-2 rounded-lg transition-all font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-linear-to-r from-[#18bfc3] to-[#14a8aa] hover:shadow-lg gap-2 mt-2"
              >
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                  <Heart size={18} fill="currentColor" />
                  {i18n.buttons.donateNow}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
