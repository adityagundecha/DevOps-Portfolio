export interface Role {
  company: string;
  title: string;
  period: string;
  summary?: string;
  achievements: string[];
}

export const experience: Role[] = [
  {
    company: 'New Look',
    title: 'Lead Senior DevOps Engineer',
    period: '2022 — Present',
    summary:
      'Leading software-delivery transformation across New Look’s e-commerce platforms.',
    achievements: [
      'Led the transformation of software delivery for the Fabric project, moving from monthly releases to on-demand delivery and meeting a critical business metric for rapid feature deployment and competitive advantage.',
      'Pioneered a shift-left approach for releases, embedding quality assurance earlier in the lifecycle — resulting in faster release cycles and fewer post-production defects.',
      'Championed DevOps culture across the Fabric project and the wider organisation, streamlining dev–ops collaboration and increasing deployment frequency and system reliability.',
      'Drove continuous-improvement initiatives, building automation pipelines that minimised manual intervention and significantly reduced deployment times and improved uptime.',
      'Mentored engineering teams in CI/CD and cloud-automation best practices, scaling DevOps capability and productivity across multiple departments.',
    ],
  },
  {
    company: 'Equal Experts',
    title: 'Senior DevOps Consultant',
    period: '2021 — 2022',
    summary:
      'Consulting on cloud infrastructure for high-profile clients including John Lewis, Waitrose and O2.',
    achievements: [
      'Led cross-functional teams managing cloud infrastructure for clients such as John Lewis, Waitrose and O2, ensuring seamless operations across Azure and AWS.',
      'Developed and implemented cloud-governance frameworks, guiding client teams to scalable, secure and cost-effective cloud solutions with lasting knowledge transfer.',
      'Oversaw the migration of critical services to Azure and AWS for O2, coordinating internal client teams and external partners.',
      'Facilitated leadership workshops, equipping team leads at John Lewis and Waitrose with advanced DevOps and cloud-native skills to accelerate their transformation journeys.',
      'Mentored junior engineers across client projects, fostering continuous learning and best practice in cloud management, security and automation.',
    ],
  },
  {
    company: 'Siemens PLM',
    title: 'Senior DevOps Engineer',
    period: '2018 — 2021',
    summary:
      'MindSphere — an industry leader in IIoT and Digital Twin — moving teams to cloud-native delivery.',
    achievements: [
      'Guided teams in moving from Application Service Environment to Azure Kubernetes Service (AKS).',
      'Established CI/CD pipelines from scratch for a multi-cloud environment.',
      'Orchestrated an observability stack using both Azure-native tooling and a Grafana–Prometheus stack.',
      'Delivered a cost-optimisation project that saved up to $1.5M per year on Azure infrastructure.',
      'Delivered 50+ services on Azure DevOps and worked with development teams to re-home around 80 microservices.',
    ],
  },
  {
    company: 'Siemens PLM',
    title: 'Software Engineer',
    period: '2013 — 2018',
    summary:
      'Part of the Cloud inception team responsible for delivering the MindSphere PaaS.',
    achievements: [
      'Automated software and infrastructure deployments for over 32 microservices across 4 lines of business.',
      'Migrated over 40 application instances from on-premise infrastructure to Azure public cloud.',
      'Reduced development overhead dramatically by removing over 50,000 lines of deprecated code from the baseline of a $1.2M project.',
      'Ensured availability of production and development systems, largely based on Azure VMs and AKS.',
    ],
  },
  {
    company: 'Siemens PLM',
    title: 'Java Developer',
    period: '2012 — 2013',
    summary:
      'Teamcenter — a modern PLM system connecting people and processes with a digital thread for innovation.',
    achievements: [
      'Created more than 50 technical design documents and implemented business logic for 20 features.',
      'Worked on an Android application (a Code Review application) that was selected for patent registration.',
    ],
  },
];
