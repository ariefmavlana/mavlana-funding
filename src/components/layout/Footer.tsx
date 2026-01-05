'use client';

import Link from 'next/link';
import Image from 'next/image';
import { id as i18n } from '@/lib/i18n';
import { FaFacebookF, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-color-primary-dark to-[#000814] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Asset */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none translate-x-24 -translate-y-24">
        <Image src="/assets/images/charity_footer.png" alt="Charity Decorative" fill className="object-contain" />
      </div>

      <div className="container relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl overflow-hidden border border-white/10 group-hover:rotate-6 transition-transform">
                <Image
                  src="/assets/images/footer_logo.png"
                  alt="Footer Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="font-black text-2xl tracking-tight text-white">Mavlana</span>
            </Link>
            <p className="text-teal-50/70 text-sm leading-relaxed">
              Menciptakan dampak nyata melalui kepedulian dan kemurah-hatian untuk masa depan yang lebih baik.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 hover:bg-color-primary-teal flex items-center justify-center transition-all duration-300 group border border-white/5">
                <FaFacebookF className="text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 hover:bg-color-primary-teal flex items-center justify-center transition-all duration-300 group border border-white/5">
                <FaTwitter className="text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 hover:bg-color-primary-teal flex items-center justify-center transition-all duration-300 group border border-white/5">
                <FaInstagram className="text-white/40 group-hover:text-white transition-colors" />
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
                className="btn-primary h-14 w-full flex items-center justify-center gap-3 font-black uppercase text-xs tracking-widest"
              >
                <span>{i18n.footer.subscribe}</span>
                <FaPaperPlane className="text-xs" />
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
