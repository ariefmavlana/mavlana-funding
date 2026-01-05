'use client';

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { id as i18n } from '@/lib/i18n';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 bg-[#041D57] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/about_bg.png"
            alt="About Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/20"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {i18n.about.title}
            </h1>
            <p className="text-lg md:text-xl text-teal-50">
              {i18n.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-screen rounded-2xl overflow-hidden shadow-custom-lg slide-in-left">
              <Image
                src="/assets/images/about_img.jpg"
                alt="About Us"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="slide-in-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#041D57] mb-6">
                Siapa Kami?
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-[#18bfc3] to-[#3ac798] mb-8"></div>

              <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                Kami adalah tim yang bersemangat untuk menjadikan dunia tempat yang lebih baik melalui inisiatif fundraising dan amal yang transparan. Sejak didirikan, kami telah membantu ribuan orang mencapai tujuan mereka dan menciptakan dampak positif di komunitas mereka.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Platform kami menyatukan donatur dan para penggalang dana, menciptakan komunitas yang bersatu dalam keinginan untuk membantu sesama. Baik Anda menggalang dana untuk tujuan yang Anda percayai atau ingin mendukung misi-misi penting, kami siap membantu.
              </p>

              <a
                href="/causes"
                className="btn-primary inline-block"
              >
                {i18n.buttons.viewAll}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#041D57]">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 mt-6">
              Fondasi dari setiap keputusan dan tindakan yang kami ambil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="card hover:shadow-custom-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-linear-to-r from-[#18bfc3] to-[#14a8aa] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-[#041D57] mb-4">
                {i18n.about.mission}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Memberdayakan individu dan organisasi untuk menciptakan perubahan bermakna melalui fundraising yang transparan, aman, dan mudah diakses.
              </p>
            </div>

            {/* Vision */}
            <div className="card hover:shadow-custom-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-linear-to-r from-[#3ac798] to-[#2eb386] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-[#041D57] mb-4">
                {i18n.about.vision}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dunia di mana kepedulian tidak mengenal batas, dan setiap mimpi, seberapa besarpun, memiliki potensi untuk terwujud melalui dukungan kolektif.
              </p>
            </div>

            {/* Values */}
            <div className="card hover:shadow-custom-lg transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-linear-to-r from-[#041D57] to-[#18bfc3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-[#041D57] mb-4">
                Kepercayaan & Integritas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kami percaya pada transparansi, integritas, dan komunitas. Berkomitmen untuk menciptakan dampak positif dan mendukung tujuan yang penting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-28 bg-linear-to-r from-[#18bfc3] via-[#14a8aa] to-[#3ac798] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="slide-up">
              <div className="text-4xl md:text-5xl font-bold mb-3">50K+</div>
              <p className="text-lg opacity-90">Donatur Aktif</p>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-3">10K+</div>
              <p className="text-lg opacity-90">Kampanye</p>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-3">Rp 2.5M+</div>
              <p className="text-lg opacity-90">Dana Terkumpul</p>
            </div>
            <div className="slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-3">10</div>
              <p className="text-lg opacity-90">Negara</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#041D57]">
              Tim Kami
            </h2>
            <p className="text-lg text-gray-600 mt-6">
              Bertemu dengan tim yang bersemangat di balik misi kami
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="card hover:shadow-custom-lg transition-all duration-300 overflow-hidden text-center">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={`/assets/images/avatar/avatar_${index}.jpg`}
                    alt={`Tim Member ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#041D57] mb-2">
                    Anggota Tim {index}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Posisi & Peran
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-[#18bfc3] hover:text-[#3ac798] font-semibold text-sm transition">
                      LinkedIn
                    </a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-[#18bfc3] hover:text-[#3ac798] font-semibold text-sm transition">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-28 bg-linear-to-r from-[#041D57] to-[#0f2d4d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Bergabunglah Dengan Gerakan Kami
          </h2>
          <p className="text-lg text-teal-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            Baik Anda ingin mendonasikan, memulai kampanye, atau menjadi relawan, ada banyak cara untuk terlibat dan membuat perbedaan nyata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="btn-primary inline-block"
            >
              {i18n.buttons.donateNow}
            </a>
            <a
              href="/contact"
              className="btn-secondary inline-block"
            >
              {i18n.nav.contact}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
