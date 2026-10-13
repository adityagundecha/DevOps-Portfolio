export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: 'Platform as a product',
    body: 'I treat the internal platform like any other product — with users, a roadmap and clear outcomes — so engineering teams move faster on top of it instead of fighting it.',
  },
  {
    title: 'Mentoring as a multiplier',
    body: 'Having mentored close to 80 engineers, I lead by raising the people around me. Durable capability in the team beats any single heroic delivery.',
  },
  {
    title: 'Shift-left by default',
    body: 'Quality, security and observability belong early in the lifecycle, not bolted on at the end. I build the culture and automation that make the safe path the easy path.',
  },
  {
    title: 'Autonomy with guardrails',
    body: 'I set direction, standards and guardrails, then give teams the autonomy to own their work — aligning on outcomes rather than micromanaging the how.',
  },
];

export interface Impact {
  value: string;
  label: string;
}

export const impact: Impact[] = [
  { value: '~20', label: 'Engineers in the platform team I lead today' },
  { value: '70+', label: 'Engineers mentored across teams and clients' },
  { value: '$1.5M', label: 'Annual Azure savings from a cost programme I owned' },
  { value: 'Monthly → On-demand', label: 'Release cadence transformation I led' },
];
