'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Success Section */}
      <section className="flex-1 flex items-center justify-center py-24 bg-linear-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-md text-center">
          {/* Success Image */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/assets/images/success_donation.png"
              alt="Success"
              fill
              className="object-contain"
            />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Your donation has been received successfully.
          </p>
          <p className="text-gray-600 mb-8">
            We appreciate your generosity and will use your contribution to make a real difference in people's lives.
          </p>

          {/* Receipt Info */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Donation Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Receipt Number:</span>
                <span className="font-semibold text-gray-900">#DN2024001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-gray-900">$50.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold text-gray-900">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-green-600">✓ Completed</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <p className="text-gray-700">
              A receipt and thank you letter have been sent to your email. If you don't see it in the next few minutes, please check your spam folder.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <Link
              href="/causes"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
            >
              View More Causes
            </Link>
            <Link
              href="/"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition"
            >
              Back to Home
            </Link>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4">
              Share your support on social media
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Share on Facebook
              </button>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
                Share on Twitter
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
