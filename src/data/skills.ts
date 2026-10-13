export const competencies: string[] = [
  'Agile Transformation',
  'Shift-Left & Quality-First Mindset',
  'Process Automation & Optimisation',
  'Cloud Architecture & Infrastructure',
  'Microservices & Scalable System Design',
  'Technical Leadership & Mentoring',
  'Product & Lifecycle Management',
  'Business-Driven Technology Solutions',
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Cloud',
    items: ['Azure', 'AWS', 'Multi-Cloud'],
  },
  {
    label: 'Containers & Orchestration',
    items: ['Docker', 'Kubernetes', 'Azure Kubernetes Service (AKS)'],
  },
  {
    label: 'CI/CD & Automation',
    items: ['Azure DevOps', 'CI/CD Pipelines', 'Infrastructure Automation'],
  },
  {
    label: 'Observability',
    items: ['Grafana', 'Prometheus', 'Azure Monitor'],
  },
  {
    label: 'Practices',
    items: ['DevOps Culture', 'Shift-Left', 'Security-First', 'SRE'],
  },
];
