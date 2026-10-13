export interface Project {
  name: string;
  org: string;
  period: string;
  problem: string;
  lead: string;
  outcome: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: 'Fabric On-Demand Delivery',
    org: 'New Look',
    period: '2022 — Present',
    problem:
      'E-commerce delivery was locked to a monthly release cadence, blocking rapid feature deployment and competitive advantage.',
    lead:
      'Set the delivery strategy and led the team through it — re-architecting the pipeline, making shift-left quality the default, and championing the DevOps culture change across the Fabric programme and wider organisation.',
    outcome:
      'Moved from monthly releases to on-demand delivery, hitting a board-level business metric while increasing deployment frequency, reducing defects and improving reliability.',
    stack: ['Azure', 'CI/CD', 'Shift-Left QA', 'Automation'],
  },
  {
    name: 'MindSphere AKS Migration & Cost Optimisation',
    org: 'Siemens PLM',
    period: '2018 — 2021',
    problem:
      'A large IIoT platform ran on the ageing Application Service Environment with rising Azure spend and limited observability.',
    lead:
      'Set the target architecture and led teams through the move to AKS, directed the build of multi-cloud CI/CD from scratch, and owned the observability and cost-optimisation strategy end to end.',
    outcome:
      'Saved up to $1.5M per year on Azure infrastructure and re-homed around 80 microservices onto a modern, observable platform.',
    stack: ['Azure', 'AKS', 'Kubernetes', 'Grafana', 'Prometheus', 'CI/CD'],
  },
  {
    name: 'MindSphere PaaS Cloud Inception',
    org: 'Siemens PLM',
    period: '2013 — 2018',
    problem:
      'A new industrial IoT PaaS had to be delivered from the ground up, with a sprawling on-premise estate to modernise.',
    lead:
      'As a core member of the founding Cloud inception team, drove the automation and migration approach across lines of business and led the push to retire legacy infrastructure and dead code.',
    outcome:
      'Automated 32+ microservices across 4 lines of business, migrated 40+ application instances to Azure, and removed 50,000+ lines of deprecated code from a $1.2M project baseline.',
    stack: ['Azure', 'AKS', 'Microservices', 'Infrastructure Automation'],
  },
  {
    name: 'Multi-Client Cloud Governance',
    org: 'Equal Experts',
    period: '2021 — 2022',
    problem:
      'High-profile retail and telecom clients needed secure, scalable and cost-effective cloud operations across Azure and AWS.',
    lead:
      'Led cross-functional teams, authored the cloud-governance frameworks, owned the O2 migration strategy, and ran leadership workshops to build lasting in-house capability.',
    outcome:
      'Delivered seamless multi-cloud operations for John Lewis, Waitrose and O2, accelerating their transformation journeys with durable knowledge transfer.',
    stack: ['Azure', 'AWS', 'Cloud Governance', 'Migration'],
  },
];
