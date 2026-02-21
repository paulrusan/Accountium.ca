export interface Feature {
  icon: string;
  title: string;
  description: string;
  tag?: string;
}

export const features: Feature[] = [
  {
    icon: '✦',
    title: 'AI Bookkeeping',
    description:
      'Automatically categorize transactions, reconcile accounts, and close the books — with AI that learns your business over time.',
    tag: 'AI',
  },
  {
    icon: '◈',
    title: 'Real-Time Dashboard',
    description:
      'Get a live view of cash flow, revenue, expenses, and runway. No waiting for month-end — know your numbers today.',
  },
  {
    icon: '⬡',
    title: 'Smart Invoicing',
    description:
      'Create, send, and track invoices in seconds. AI predicts payment likelihood and sends gentle reminders automatically.',
    tag: 'AI',
  },
  {
    icon: '⊞',
    title: 'Tax Ready, Always',
    description:
      'Accountium keeps your books audit-ready year-round and generates tax packages with a single click at filing time.',
  },
  {
    icon: '⟳',
    title: 'Bank Sync & Matching',
    description:
      'Connect all your bank accounts and credit cards. Transactions sync instantly and are matched to bills and invoices.',
  },
  {
    icon: '◎',
    title: 'Expense Intelligence',
    description:
      'Snap a receipt and let AI extract the details. Policies are enforced automatically, and reimbursements are processed fast.',
    tag: 'AI',
  },
  {
    icon: '⬒',
    title: 'Multi-Entity Support',
    description:
      'Manage multiple companies or subsidiaries from one workspace. Consolidated reporting across entities in a click.',
  },
  {
    icon: '⊙',
    title: 'Audit Trail',
    description:
      'Every entry, change, and approval is logged with a full history. Your accountant and auditors will love you.',
  },
  {
    icon: '⟁',
    title: 'Integrations',
    description:
      'Connects with Stripe, Shopify, Payroll providers, CRMs, and 200+ apps via native integrations and Zapier.',
  },
];

export const highlightedFeatures: Feature[] = features.slice(0, 3);
