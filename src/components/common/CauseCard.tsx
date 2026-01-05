import Image from 'next/image';
import Link from 'next/link';
import { Cause } from '@/types';
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
    <Link href={`/causes/${cause.id}`}>
      <div className="card h-full flex flex-col hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-200 rounded-t-lg">
          <Image
            src={cause.image}
            alt={cause.title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
          
          {/* Badge */}
          {cause.featured && (
            <div className="absolute top-4 right-4">
              <span className="badge bg-linear-to-r from-[#18bfc3] to-[#3ac798] text-white border-none">
                ⭐ {i18n.causes.featured}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category */}
          <p className="text-[#18bfc3] text-xs font-bold uppercase mb-3 tracking-wider">
            {cause.category}
          </p>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#041D57] mb-3 line-clamp-2 hover:text-[#18bfc3] transition-colors">
            {cause.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-5 line-clamp-2 flex-1">
            {cause.description}
          </p>

          {/* Progress Section */}
          <div className="mb-6 space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-bold text-[#041D57]">
                {formatCurrency(cause.raisedAmount)}
              </span>
              <span className="text-xs text-gray-500 font-semibold">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            <p className="text-xs text-gray-500">
              Target: {formatCurrency(cause.targetAmount)}
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-sm mb-6 pb-6 border-b border-gray-100">
            <div className="text-center flex-1">
              <p className="text-lg font-bold text-[#18bfc3]">
                {cause.donors}
              </p>
              <p className="text-xs text-gray-500">
                {i18n.causes.donors}
              </p>
            </div>
            <div className="text-center flex-1 border-l border-r border-gray-100">
              <p className="text-lg font-bold text-[#3ac798]">
                {cause.daysLeft}
              </p>
              <p className="text-xs text-gray-500">
                {i18n.causes.daysLeft}
              </p>
            </div>
            <div className="text-center flex-1">
              <p className="text-lg font-bold text-[#041D57]">
                {Math.round(progressPercentage)}%
              </p>
              <p className="text-xs text-gray-500">
                Terkumpul
              </p>
            </div>
          </div>

          {/* Donate Button */}
          <button className="btn-primary w-full py-3 font-bold text-center">
            {i18n.buttons.donateNow}
          </button>
        </div>
      </div>
    </Link>
  );
}
