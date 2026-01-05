'use client';

import Link from 'next/link';
import Image from 'next/image';
import { id as i18n } from '@/lib/i18n';

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#041D57] to-[#000814] text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-r from-[#18bfc3] to-[#3ac798] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <span className="font-bold text-xl">Mavlana</span>
            </div>
            <p className="text-teal-50/70 text-sm leading-relaxed">
              Menciptakan dampak nyata melalui kepedulian dan kemurah-hatian untuk masa depan yang lebih baik.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#18bfc3] flex items-center justify-center transition-all duration-300">
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#18bfc3] flex items-center justify-center transition-all duration-300">
                t
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#18bfc3] flex items-center justify-center transition-all duration-300">
                i
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-teal-50/70 hover:text-[#18bfc3] transition-colors text-sm font-medium">
                  {i18n.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-teal-50/70 hover:text-[#18bfc3] transition-colors text-sm font-medium">
                  {i18n.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/causes" className="text-teal-50/70 hover:text-[#18bfc3] transition-colors text-sm font-medium">
                  {i18n.nav.causes}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-teal-50/70 hover:text-[#18bfc3] transition-colors text-sm font-medium">
                  {i18n.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Lainnya</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-teal-50/70 hover:text-[#18bfc3] transition-colors text-sm font-medium">
                  {i18n.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-50/70 hover:text-[#18bfc3] transition-colors text-sm font-medium">
                  {i18n.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-teal-50/70 hover:text-[#18bfc3] transition-colors text-sm font-medium">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-50/70 hover:text-[#18bfc3] transition-colors text-sm font-medium">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">{i18n.footer.newsletter}</h3>
            <p className="text-teal-50/70 text-sm mb-4">
              Dapatkan update terbaru tentang kampanye dan cerita inspiratif langsung ke inbox Anda.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={i18n.footer.emailPlaceholder}
                className="px-4 py-2.5 bg-white/10 rounded-lg text-white text-sm placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#18bfc3] focus:bg-white/20 transition-all"
                required
              />
              <button
                type="submit"
                className="btn-primary py-2.5 px-4 font-semibold"
              >
                {i18n.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-teal-50/70 text-sm text-center md:text-left">
              {i18n.footer.copyright}
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-teal-50/70 hover:text-[#18bfc3] text-sm transition-colors">
                Bahasa
              </Link>
              <Link href="#" className="text-teal-50/70 hover:text-[#18bfc3] text-sm transition-colors">
                Pengaturan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
