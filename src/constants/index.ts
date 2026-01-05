// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Causes', href: '/causes' },
  { label: 'Contact', href: '/contact' },
];

// Site metadata
export const SITE_NAME = 'Charity Fund';
export const SITE_DESCRIPTION = 'Help us make a difference in the world';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://charityfund.com';

// API endpoints
export const API_ENDPOINTS = {
  CAUSES: '/api/causes',
  DONATIONS: '/api/donations',
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
};

// Donation amounts
export const QUICK_DONATE_AMOUNTS = [10, 25, 50, 100, 250, 500];

// Pagination
export const ITEMS_PER_PAGE = 12;
