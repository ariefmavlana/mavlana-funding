'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function DonatePage() {
  const [selectedCause, setSelectedCause] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    donorName: '',
    donorEmail: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const quickAmounts = [10, 25, 50, 100, 250, 500];

  const sampleCauses = [
    { id: '1', title: 'Hunger is stalking the globe', image: '/assets/images/causes/causes_1.jpg' },
    { id: '2', title: "Let's free the nature", image: '/assets/images/causes/causes_2.jpg' },
    { id: '3', title: 'Emergency relief mission', image: '/assets/images/causes/causes_3.jpg' },
    { id: '4', title: 'Education for all', image: '/assets/images/causes/causes_4.jpg' },
  ];

  const finalAmount = customAmount || donationAmount || 0;

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(finalAmount as string),
          donorName: formData.donorName,
          donorEmail: formData.donorEmail,
          message: formData.message,
          causeId: selectedCause,
        }),
      });

      if (!response.ok) throw new Error('Failed to process donation');

      // In production, redirect to payment gateway (Stripe)
      // For now, show success message
      alert('Thank you for your donation! Payment processing will be integrated soon.');

      // Reset form
      setFormData({ donorName: '', donorEmail: '', message: '' });
      setDonationAmount('');
      setCustomAmount('');
      setSelectedCause('');
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 bg-linear-to-r from-teal-600 to-teal-700 text-white overflow-hidden">
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Make a Difference Today
            </h1>
            <p className="text-lg text-teal-100">
              Your donation helps us support those in need and create lasting change in communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <form onSubmit={handleDonate} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form Fields */}
              <div className="lg:col-span-2">
                {/* Step 1: Select Cause */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Step 1: Choose a Cause
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sampleCauses.map((cause) => (
                      <label
                        key={cause.id}
                        className={`cursor-pointer p-4 border-2 rounded-lg transition ${
                          selectedCause === cause.id
                            ? 'border-teal-600 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="cause"
                          value={cause.id}
                          checked={selectedCause === cause.id}
                          onChange={(e) => setSelectedCause(e.target.value)}
                          className="mr-3"
                        />
                        <span className="font-semibold text-gray-900">{cause.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 2: Donation Amount */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Step 2: Select Amount
                  </h2>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setDonationAmount(amount.toString());
                          setCustomAmount('');
                        }}
                        className={`py-4 px-4 rounded-lg font-bold transition ${
                          donationAmount === amount.toString()
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Or enter a custom amount:
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-bold">
                        $
                      </span>
                      <input
                        type="number"
                        min="1"
                        step="0.01"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount('');
                        }}
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3: Donor Information */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Step 3: Your Information
                  </h2>
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.donorName}
                        onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.donorEmail}
                        onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Message (Optional) */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        placeholder="Add a message of support..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Donation Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-gray-50 p-8 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Donation Summary</h3>

                  {/* Cause Summary */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    {selectedCause ? (
                      <>
                        <p className="text-sm text-gray-600 mb-2">Selected Cause:</p>
                        <p className="font-semibold text-gray-900">
                          {sampleCauses.find((c) => c.id === selectedCause)?.title}
                        </p>
                      </>
                    ) : (
                      <p className="text-gray-500 italic">Please select a cause</p>
                    )}
                  </div>

                  {/* Amount Summary */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Donation Amount:</p>
                    {finalAmount ? (
                      <p className="text-3xl font-bold text-teal-600">${parseFloat(finalAmount as string).toFixed(2)}</p>
                    ) : (
                      <p className="text-gray-500 italic">Please select amount</p>
                    )}
                  </div>

                  {/* Donor Summary */}
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 mb-2">Donor Name:</p>
                    <p className="font-semibold text-gray-900">
                      {formData.donorName || 'Anonymous'}
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!selectedCause || !finalAmount || !formData.donorName || !formData.donorEmail || isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition"
                  >
                    {isSubmitting ? 'Processing...' : `Donate $${finalAmount}`}
                  </button>

                  {/* Security Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-600 text-center">
                      🔒 Your donation is secure and encrypted. Your information will never be shared.
                    </p>
                  </div>

                  {/* Info Box */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <strong>💡 Tip:</strong> Make your donation monthly to have a continuous impact!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-teal-600 mb-2">$10</p>
              <p className="text-gray-600">Feeds a family for one day</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-teal-600 mb-2">$50</p>
              <p className="text-gray-600">Provides education supplies for a child</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-teal-600 mb-2">$250</p>
              <p className="text-gray-600">Supports healthcare for a family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Other Ways to Help
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/causes"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition"
            >
              Browse All Causes
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
