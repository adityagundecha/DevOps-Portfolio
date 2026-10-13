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
      'Lead a platform team of ~20 engineers, owning delivery strategy and engineering culture across New Look’s e-commerce platforms.',
    achievements: [
      'Set the delivery strategy for the Fabric programme, moving the organisation from monthly releases to on-demand delivery — meeting a board-level business metric for rapid feature deployment and competitive advantage.',
      'Made shift-left, quality-first delivery the default, embedding QA earlier in the lifecycle and shifting the team’s operating model away from late-stage firefighting toward faster, lower-defect release cycles.',
      'Championed DevOps culture across the Fabric programme and the wider organisation, aligning development and operations around shared ownership and measurably increasing deployment frequency and reliability.',
      'Directed the automation roadmap that removed manual release toil, significantly reducing deployment times and improving uptime across e-commerce platforms.',
      'Grew the capability of the team and partner departments through mentoring and coaching in CI/CD and cloud automation, raising productivity and engineering standards across multiple departments.',
    ],
  },
  {
    company: 'Equal Experts',
    title: 'Senior DevOps Consultant',
    period: '2021 — 2022',
    summary:
      'Led cross-functional delivery and advised client leadership on cloud strategy for John Lewis, Waitrose and O2.',
    achievements: [
      'Led cross-functional teams delivering cloud infrastructure for John Lewis, Waitrose and O2, ensuring seamless operations across Azure and AWS.',
      'Authored cloud-governance frameworks that guided client teams toward scalable, secure and cost-effective cloud — with knowledge transfer that left the capability in-house.',
      'Owned the migration strategy for critical O2 services across Azure and AWS, coordinating internal client teams and external partners through delivery.',
      'Ran leadership workshops that equipped team leads at John Lewis and Waitrose with advanced DevOps and cloud-native practice, accelerating their transformation journeys.',
      'Mentored engineers across client engagements, building a culture of continuous learning in cloud management, security and automation.',
    ],
  },
  {
    company: 'Siemens PLM',
    title: 'Senior DevOps Engineer',
    period: '2018 — 2021',
    summary:
      'Led the platform modernisation of MindSphere — an industry-leading IIoT and Digital Twin platform — toward cloud-native delivery.',
    achievements: [
      'Led teams through the move from Application Service Environment to Azure Kubernetes Service (AKS), setting the target architecture and migration approach.',
      'Established multi-cloud CI/CD pipelines from scratch, giving teams a repeatable delivery path across environments.',
      'Directed the observability strategy, standing up a stack on Azure-native tooling plus Grafana and Prometheus to give teams a shared view of production health.',
      'Owned a cost-optimisation initiative that saved up to $1.5M per year on Azure infrastructure — turning platform ownership into measurable business value.',
      'Oversaw delivery of 50+ services on Azure DevOps and the re-homing of around 80 microservices onto a modern, observable platform.',
    ],
  },
  {
    company: 'Siemens PLM',
    title: 'Software Engineer',
    period: '2013 — 2018',
    summary:
      'Core member of the Cloud inception team that delivered the MindSphere PaaS from the ground up.',
    achievements: [
      'Helped stand up the MindSphere PaaS as part of the founding Cloud inception team, automating deployments for 32+ microservices across 4 lines of business.',
      'Drove the migration of 40+ application instances from on-premise infrastructure to Azure public cloud.',
      'Removed 50,000+ lines of deprecated code from a $1.2M project baseline, dramatically reducing development overhead and risk.',
      'Owned availability of production and development systems built largely on Azure VMs and AKS.',
    ],
  },
  {
    company: 'Siemens PLM',
    title: 'Java Developer',
    period: '2012 — 2013',
    summary:
      'Delivered features for Teamcenter — a PLM system connecting people and processes with a digital thread for innovation.',
    achievements: [
      'Authored 50+ technical design documents and implemented business logic for 20 features.',
      'Contributed to an Android application (a Code Review application) that was selected for patent registration.',
    ],
  },
];
