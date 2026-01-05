'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function FailurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Failure Section */}
      <section className="flex-1 flex items-center justify-center py-24 bg-linear-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 max-w-md text-center">
          {/* Error Image */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/assets/images/donation_error.png"
              alt="Error"
              fill
              className="object-contain"
            />
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Payment Failed
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Unfortunately, your donation could not be processed.
          </p>
          <p className="text-gray-600 mb-8">
            This may be due to incorrect payment information, insufficient funds, or a temporary issue with the payment processor.
          </p>

          {/* Error Details */}
          <div className="bg-red-50 p-6 rounded-lg mb-8 text-left border border-red-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">What went wrong?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Check that your payment information is correct</li>
              <li>• Ensure your card has sufficient funds</li>
              <li>• Verify that your card is not expired</li>
              <li>• Try a different payment method</li>
              <li>• Contact your bank if the problem persists</li>
            </ul>
          </div>

          {/* Support Info */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
            <p className="text-gray-700 mb-4">
              Need help? Our support team is here to assist you.
            </p>
            <a
              href="mailto:support@charityfund.com"
              className="text-teal-600 hover:text-teal-700 font-semibold"
            >
              📧 Contact Support
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <Link
              href="/donate"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition"
            >
              Try Again
            </Link>
            <Link
              href="/causes"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition"
            >
              Browse Causes
            </Link>
            <Link
              href="/"
              className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition"
            >
              Back to Home
            </Link>
          </div>

          {/* FAQ */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4 font-semibold">
              Frequently Asked Questions
            </p>
            <div className="text-left space-y-4">
              <details className="cursor-pointer">
                <summary className="font-semibold text-gray-900 hover:text-teal-600">
                  Why was my donation declined?
                </summary>
                <p className="text-gray-600 mt-2">
                  Donations are typically declined due to incorrect card details, insufficient funds, expired cards, or payment processor issues. Contact your bank for more information.
                </p>
              </details>
              <details className="cursor-pointer">
                <summary className="font-semibold text-gray-900 hover:text-teal-600">
                  What payment methods do you accept?
                </summary>
                <p className="text-gray-600 mt-2">
                  We accept all major credit cards (Visa, Mastercard, American Express) and digital payment methods through our secure Stripe payment gateway.
                </p>
              </details>
              <details className="cursor-pointer">
                <summary className="font-semibold text-gray-900 hover:text-teal-600">
                  Is my information safe?
                </summary>
                <p className="text-gray-600 mt-2">
                  Yes! All transactions are secured with 256-bit SSL encryption. We never store your credit card information on our servers.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
