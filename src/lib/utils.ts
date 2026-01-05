export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number, currency = 'IDR'): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateProgressPercentage(
  raisedAmount: number,
  targetAmount: number
): number {
  if (targetAmount === 0) return 0;
  return Math.min((raisedAmount / targetAmount) * 100, 100);
}

export function getDaysLeft(endDate: Date): number {
  const today = new Date();
  const timeDiff = endDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return Math.max(daysLeft, 0);
}
