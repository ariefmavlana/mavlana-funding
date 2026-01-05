'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { id as i18n } from '@/lib/i18n';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-72 md:h-96 bg-[#041D57] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/contact_bg.png"
            alt="Contact Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/20"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {i18n.contact.title}
            </h1>
            <p className="text-lg md:text-xl text-teal-50">
              {i18n.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 slide-in-left">
              <div className="space-y-8">
                {/* Email */}
                <div className="card hover:shadow-custom-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-r from-[#18bfc3] to-[#14a8aa] flex items-center justify-center text-white text-xl shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#041D57] mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@mavlana.com" className="text-[#18bfc3] hover:text-[#3ac798] font-semibold">
                          info@mavlana.com
                        </a>
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Balas dalam 24 jam
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="card hover:shadow-custom-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-r from-[#3ac798] to-[#2eb386] flex items-center justify-center text-white text-xl shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#041D57] mb-2">Telepon</h3>
                      <p className="text-gray-600">
                        <a href="tel:+622187654321" className="text-[#18bfc3] hover:text-[#3ac798] font-semibold">
                          +62 (21) 8765-4321
                        </a>
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Senin - Jumat, 09:00 - 17:00 WIB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="card hover:shadow-custom-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-r from-[#041D57] to-[#18bfc3] flex items-center justify-center text-white text-xl shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#041D57] mb-2">Alamat</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Jl. Amal Mulia No. 123<br />
                        Jakarta Pusat, 12340<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="card">
                  <h3 className="text-lg font-bold text-[#041D57] mb-4">Ikuti Kami</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-[#18bfc3]/10 hover:bg-[#18bfc3] text-[#18bfc3] hover:text-white flex items-center justify-center transition-all duration-300 font-bold">
                      f
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-[#18bfc3]/10 hover:bg-[#18bfc3] text-[#18bfc3] hover:text-white flex items-center justify-center transition-all duration-300 font-bold">
                      𝕏
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-[#18bfc3]/10 hover:bg-[#18bfc3] text-[#18bfc3] hover:text-white flex items-center justify-center transition-all duration-300 font-bold">
                      📷
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 slide-in-right">
              <div className="card shadow-custom-lg">
                <h2 className="text-3xl font-bold text-[#041D57] mb-8">
                  {i18n.contact.form.submit}
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg text-green-700 font-semibold">
                    ✅ Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-red-700 font-semibold">
                    ❌ Oops! Terjadi kesalahan. Silakan coba lagi.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-[#041D57] mb-2">
                      {i18n.contact.form.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18bfc3] focus:border-transparent"
                      placeholder={i18n.contact.placeholders.name}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-[#041D57] mb-2">
                      {i18n.contact.form.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18bfc3] focus:border-transparent"
                      placeholder={i18n.contact.placeholders.email}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-bold text-[#041D57] mb-2">
                      {i18n.contact.form.subject} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18bfc3] focus:border-transparent"
                      placeholder={i18n.contact.placeholders.subject}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-[#041D57] mb-2">
                      {i18n.contact.form.message} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18bfc3] focus:border-transparent"
                      placeholder={i18n.contact.placeholders.message}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Mengirim...' : i18n.contact.form.submit}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    <span className="text-red-500 font-bold">*</span> Bidang yang wajib diisi
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#041D57] mb-4">
              Temukan Kami di Peta
            </h2>
            <p className="text-gray-600 text-lg">
              Kunjungi kantor kami atau hubungi kami melalui berbagai saluran komunikasi
            </p>
          </div>
          <div className="relative h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-custom-lg">
            <Image
              src="/assets/images/map.png"
              alt="Office Location Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <p className="text-white text-lg font-bold bg-black/50 px-6 py-3 rounded-lg">
                Integrasi peta akan segera tersedia
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
