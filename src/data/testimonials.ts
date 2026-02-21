export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Accountium cut our month-end close from 5 days to half a day. The AI categorization is uncanny — it gets it right almost every time.',
    author: 'Sarah Chen',
    role: 'CFO',
    company: 'Meridian Labs',
  },
  {
    quote:
      'I used to dread tax season. Now I just click "Generate Tax Package" and send it to my accountant. It literally changed my relationship with money.',
    author: 'Marcus Obi',
    role: 'Founder',
    company: 'Obi Creative Studio',
  },
  {
    quote:
      'We manage 12 entities across 3 countries. Accountium is the first tool that actually handles that complexity without feeling like enterprise bloatware.',
    author: 'Priya Nair',
    role: 'Head of Finance',
    company: 'Nexvera Group',
  },
];
