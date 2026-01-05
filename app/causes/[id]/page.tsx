'use client';

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const CAUSE_DETAIL = {
  id: '1',
  title: 'Hunger is stalking the globe',
  description:
    'Hundreds of thousands of children experiencing or witnessing assault and other gender-based violence.',
  fullDescription: `
    This campaign aims to provide food and essential resources to families in need around the world.
    
    We believe that no one should go hungry. In many parts of the world, millions of people face food 
    insecurity daily. Through this initiative, we're working to:
    
    • Provide nutritious meals to underprivileged children
    • Support local food banks and distribution centers
    • Create sustainable agriculture programs
    • Build long-term solutions for food security
    
    Your donation directly impacts these efforts and helps us make a real difference in the lives of 
    those who need it most.
  `,
  image: '/assets/images/causes/causes_1.jpg',
  category: 'Food Security',
  targetAmount: 50000,
  raisedAmount: 32500,
  donors: 342,
  daysLeft: 15,
  progressPercentage: 65,
  featured: true,
  updates: [
    {
      id: 1,
      title: 'Milestone Reached!',
      description: 'We have successfully reached $20,000 in donations. Thank you all!',
      date: '2024-01-02',
    },
    {
      id: 2,
      title: 'Campaign Launch',
      description: 'Our food security campaign is officially live!',
      date: '2024-01-01',
    },
  ],
  donationAmounts: [10, 25, 50, 100, 250, 500],
};

export default function CauseDetailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={CAUSE_DETAIL.image}
            alt={CAUSE_DETAIL.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <span className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {CAUSE_DETAIL.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {CAUSE_DETAIL.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Campaign</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {CAUSE_DETAIL.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {CAUSE_DETAIL.fullDescription}
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Updates</h2>
                <div className="space-y-6">
                  {CAUSE_DETAIL.updates.map((update) => (
                    <div key={update.id} className="border-l-4 border-teal-500 pl-6 py-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                        <span className="text-sm text-gray-500">{update.date}</span>
                      </div>
                      <p className="text-gray-600">{update.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Donation Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-50 rounded-lg p-8 shadow-lg">
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Goal: $50,000</span>
                    <span className="text-sm font-bold text-teal-600">
                      {CAUSE_DETAIL.progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 transition-all duration-300"
                      style={{ width: `${CAUSE_DETAIL.progressPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold text-gray-900">${CAUSE_DETAIL.raisedAmount.toLocaleString()}</span> raised
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{CAUSE_DETAIL.donors}</p>
                    <p className="text-xs text-gray-600">Donors</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{CAUSE_DETAIL.daysLeft}</p>
                    <p className="text-xs text-gray-600">Days Left</p>
                  </div>
                </div>

                {/* Quick Donation Buttons */}
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-gray-700">Quick Donation:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {CAUSE_DETAIL.donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        className="bg-white border border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold py-2 px-3 rounded text-sm transition"
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Donate Button */}
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition mb-3">
                  Donate Now
                </button>

                {/* Share Button */}
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 rounded-lg transition">
                  Share Campaign
                </button>

                {/* Security Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-600 text-center">
                    🔒 Your donation is secure and encrypted. We never store your card details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Donors */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Recent Donors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(65 + (i % 26))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Anonymous Donor</p>
                    <p className="text-sm text-gray-600">Just now</p>
                  </div>
                </div>
                <p className="text-teal-600 font-bold">
                  ${Math.floor(Math.random() * 500) + 10} donated
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make Your Donation Today
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Every dollar counts. Your support helps us make a real difference in people's lives.
          </p>
          <button className="inline-block bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition">
            Donate Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
