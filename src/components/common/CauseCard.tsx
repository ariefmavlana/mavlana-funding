'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Cause } from '@/types';
import { FaHandHoldingHeart, FaUsers, FaBullseye, FaClock } from 'react-icons/fa';
import { formatCurrency, calculateProgressPercentage } from '@/lib/utils';
import { id as i18n } from '@/lib/i18n';

interface CauseCardProps {
  cause: Cause;
}

export function CauseCard({ cause }: CauseCardProps) {
  const progressPercentage = calculateProgressPercentage(
    cause.raisedAmount,
    cause.targetAmount
  );

  return (
    <Link href={`/causes/${cause.id}`} className="group block h-full">
      <div className="card h-full flex flex-col p-0 overflow-hidden border border-slate-100 bg-white hover:shadow-3xl hover:border-primary-teal/20 transition-all duration-1000">
        {/* Image Container - Luxury Styling */}
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={cause.image}
            alt={cause.title}
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-color-primary-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000"></div>

          {/* Category Badge - Minimalist */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="px-5 py-2.5 rounded-full bg-white text-color-primary-dark text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl border border-slate-100 flex items-center gap-2">
              <div className="relative w-3.5 h-3.5">
                <Image src="/assets/images/success_donation.png" alt="Verified" fill className="object-contain" />
              </div>
              {cause.category}
            </span>
          </div>

          {/* Featured Badge - High Contrast */}
          {cause.featured && (
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-full bg-color-primary-teal text-white flex items-center justify-center shadow-xl shadow-color-primary-teal/30 group-hover:rotate-360 transition-transform duration-1000">
                <FaHandHoldingHeart size={22} className="fill-white" />
              </div>
            </div>
          )}
        </div>

        {/* Content - Spacious & Refined */}
        <div className="p-10 flex flex-col flex-1">
          {/* Title - Bold Display */}
          <h3 className="text-2xl font-black text-color-primary-dark mb-6 leading-[1.1] group-hover:text-color-primary-teal transition-colors duration-500 line-clamp-2">
            {cause.title}
          </h3>

          {/* Description - Elegant Typography */}
          <p className="text-color-text-secondary text-base mb-8 line-clamp-3 flex-1 font-medium leading-relaxed italic opacity-70">
            "{cause.description}"
          </p>

          {/* Progress Section - Data Intensive */}
          <div className="mb-8 p-6 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 group-hover:bg-primary-teal/5 group-hover:border-primary-teal/10 transition-colors duration-700">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] font-black text-color-text-secondary uppercase tracking-[0.25em] mb-1 leading-none">Donasi Terkumpul</p>
                <p className="text-2xl font-black text-color-primary-teal tracking-tighter">
                  {formatCurrency(cause.raisedAmount)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-color-primary-dark leading-none tracking-tighter">
                  {Math.round(progressPercentage)}<span className="text-xs font-black text-color-primary-teal ml-0.5">%</span>
                </p>
              </div>
            </div>

            <div className="w-full h-3 bg-slate-200/50 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-linear-to-r from-color-primary-teal to-[#14a8aa] rounded-full transition-all duration-[1.5s] ease-out shadow-lg"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className="flex justify-between mt-5 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <FaBullseye className="text-color-text-secondary text-[10px]" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-color-text-secondary uppercase tracking-widest leading-none mb-1">Target</span>
                  <span className="text-xs font-bold text-color-primary-dark">{formatCurrency(cause.targetAmount)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-right">
                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-black text-color-text-secondary uppercase tracking-widest leading-none mb-1">Sisa Waktu</span>
                  <span className="text-xs font-bold text-color-primary-teal">{cause.daysLeft} Hari Lagi</span>
                </div>
                <FaClock className="text-color-primary-teal text-[10px]" />
              </div>
            </div>
          </div>

          {/* Social Proof area */}
          <div className="flex items-center justify-between pt-8 border-t border-slate-50 mt-auto">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full ring-4 ring-white border border-slate-100 overflow-hidden bg-slate-50 relative group-hover:-translate-y-1 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                  <Image
                    src={`/assets/images/avatar/avatar_${i}.jpg`}
                    alt="Donor"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
              <div className="h-10 w-10 rounded-full ring-4 ring-white bg-color-primary-dark flex items-center justify-center text-[10px] font-black text-white shadow-xl">
                +12
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <p className="text-[9px] font-black text-color-text-secondary uppercase tracking-[0.25em] leading-none">Pendukung</p>
                <FaUsers className="text-color-primary-teal text-[10px]" />
              </div>
              <p className="text-sm font-black text-color-primary-dark tracking-tight">{cause.donors} Orang</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
