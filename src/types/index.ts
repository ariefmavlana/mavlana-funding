// Cause/Campaign Types
export interface Cause {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  targetAmount: number;
  raisedAmount: number;
  donors: number;
  daysLeft: number;
  progressPercentage: number;
  featured?: boolean;
}

// Donation Types
export interface Donation {
  id: string;
  causeId: string;
  amount: number;
  donorName: string;
  donorEmail: string;
  message?: string;
  date: Date;
  status: 'pending' | 'completed' | 'failed';
}

// Contact Form Types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Newsletter Subscription
export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
}
