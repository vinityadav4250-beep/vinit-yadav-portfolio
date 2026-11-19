import type { IconType } from 'react-icons'
import {
  SiDotnet,
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiVite,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGitlab,
  SiGit,
  SiGithub,
  SiPostman,
  SiGithubcopilot,
} from 'react-icons/si'
import { TbBrandCSharp, TbBrandAzure, TbBrandVscode, TbApi, TbDatabase, TbBrandAws } from 'react-icons/tb'
import { DiVisualstudio } from 'react-icons/di'
import { VscAzureDevops } from 'react-icons/vsc'
import { HiOutlineCursorArrowRays } from 'react-icons/hi2'

/* ------------------------------------------------------------------ */
/*  Profile                                                            */
/* ------------------------------------------------------------------ */

export const SITE_URL = 'https://vinit-yadav-portfolio.vercel.app'

export const personalInfo = {
  name: 'Vinit Yadav',
  initials: 'VY',
  title: 'Full-Stack Software Engineer',
  tagline: '.NET Core · C# · React · Cloud · AI Integration',
  company: 'EBIXCASH',
  location: 'Noida, India',
  yearsOfExperience: 4,
  email: 'Vinityadav4250@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vinit-yadav-21ba641a5',
  linkedinLabel: 'linkedin.com/in/vinit-yadav-21ba641a5',
  github: 'https://github.com/vinityadav4250-beep',
  githubLabel: 'github.com/vinityadav4250-beep',
  resumeUrl: `${import.meta.env.BASE_URL}resume/Vinit_Yadav_Resume.pdf`,
  resumeFileName: 'Vinit_Yadav_FullStack_Resume.pdf',
}

export const hero = {
  heading: 'Building Scalable Digital Products with .NET & Modern Technologies.',
  /** words in the heading rendered with the gradient treatment */
  highlight: ['.NET', 'Modern', 'Technologies.'],
  subheading:
    "I'm Vinit Yadav, a Full-Stack Software Engineer with 4 years of experience building enterprise applications, scalable APIs, CRM platforms, and modern web experiences.",
  roles: [
    'Full-Stack Software Engineer',
    'ASP.NET Core API Engineer',
    'React & Redux Developer',
    'Integration Specialist',
    'Production Problem Solver',
  ],
  proof: ['4+ Years Experience', 'Production Systems', 'Full-Stack Development'],
}

export const about = {
  paragraphs: [
    "I'm a Full-Stack Software Engineer at EBIXCASH, where for the last four years I've been building the systems behind insurance and CRM platforms that handle thousands of transactions every day. Most of my work lives in C#, .NET Core and ASP.NET Core on the backend, with React and Redux on the front end.",
    "My journey started on the Vehicle Insurance platform, writing features for quotes, policy issuance and renewals. In 2024 I moved to the Life Insurance platform, and since 2025 I've been part of the CRM revamp — each step widening my scope into API design, third-party integrations and cross-team API contracts.",
    "I'm at my best when something is broken in production. I trace the request end to end, validate what external services actually returned, find the edge case nobody planned for, and fix it so it stays fixed. I care about clean layered architecture, honest database design and APIs other teams can rely on — and I use AI tools like GitHub Copilot and Cursor to move faster without lowering the bar.",
  ],
  focus: [
    { title: 'Backend engineering', text: 'REST APIs with ASP.NET Core, EF Core, LINQ and clean layered architecture.' },
    { title: 'Full-stack delivery', text: 'React + Redux modules wired to .NET APIs, shipped in Agile sprints.' },
    { title: 'Production debugging', text: 'Tracing request flows across services to find and fix root causes.' },
    { title: 'Third-party integrations', text: 'Insurer, payment and KYC APIs over REST and SOAP, in production.' },
    { title: 'Database optimization', text: 'Stored procedures, query tuning and server-side pagination on SQL Server & MySQL.' },
    { title: 'Scalable architecture', text: 'Repository pattern, dependency injection, SOLID and multi-tenant design.' },
    { title: 'AI-assisted development', text: 'Copilot, ChatGPT and Cursor for velocity — with careful review of AI output.' },
  ],
}

/* ------------------------------------------------------------------ */
/*  Impact — resume-backed numbers only                                */
/* ------------------------------------------------------------------ */

export interface Metric {
  value: number
  suffix: string
  label: string
  description: string
}

export const metrics: Metric[] = [
  { value: 4, suffix: '+', label: 'Years', description: 'Professional experience shipping production systems' },
  { value: 30, suffix: '%', label: 'Fewer errors', description: 'Reduction in data retrieval errors across insurance modules' },
  { value: 25, suffix: '%', label: 'Faster APIs', description: 'Improvement in API response times through database optimization' },
  { value: 40, suffix: '%', label: 'Less manual work', description: 'Reduction in manual processing in life insurance workflows' },
  { value: 20, suffix: '%', label: 'Higher velocity', description: 'Improvement in development velocity through AI-assisted practices' },
]

/* ------------------------------------------------------------------ */
/*  Tech stack                                                         */
/* ------------------------------------------------------------------ */

export interface Tech {
  name: string
  icon: IconType
  color: string
}

export interface TechGroup {
  title: string
  caption: string
  items: Tech[]
}

export const techStack: TechGroup[] = [
  {
    title: 'Backend',
    caption: 'APIs, services & data access',
    items: [
      { name: 'C#', icon: TbBrandCSharp, color: '#a179dc' },
      { name: '.NET Core', icon: SiDotnet, color: '#8b6cf0' },
      { name: 'ASP.NET Core', icon: SiDotnet, color: '#8b6cf0' },
      { name: 'Web API', icon: TbApi, color: '#7dd3fc' },
      { name: 'Entity Framework Core', icon: SiDotnet, color: '#8b6cf0' },
      { name: 'LINQ', icon: TbBrandCSharp, color: '#a179dc' },
      { name: 'ADO.NET', icon: TbDatabase, color: '#94a3b8' },
    ],
  },
  {
    title: 'Frontend',
    caption: 'Interfaces & state',
    items: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Redux', icon: SiRedux, color: '#a78bfa' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'HTML5', icon: SiHtml5, color: '#f06529' },
      { name: 'CSS3', icon: SiCss, color: '#2965f1' },
      { name: 'Vite', icon: SiVite, color: '#a78bfa' },
    ],
  },
  {
    title: 'Database',
    caption: 'Relational & document stores',
    items: [
      { name: 'SQL Server', icon: TbDatabase, color: '#e05c5c' },
      { name: 'MySQL', icon: SiMysql, color: '#4a9fd6' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#6b9bd8' },
      { name: 'MongoDB', icon: SiMongodb, color: '#4db33d' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    caption: 'Build, ship & run',
    items: [
      { name: 'Microsoft Azure', icon: TbBrandAzure, color: '#3b9ce8' },
      { name: 'Azure DevOps', icon: VscAzureDevops, color: '#3b9ce8' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'GitLab CI/CD', icon: SiGitlab, color: '#fc6d26' },
      { name: 'AWS (Basic)', icon: TbBrandAws, color: '#ff9900' },
    ],
  },
  {
    title: 'Tools',
    caption: 'Daily workflow',
    items: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#e5e7eb' },
      { name: 'GitLab', icon: SiGitlab, color: '#fc6d26' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Visual Studio', icon: DiVisualstudio, color: '#a179dc' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#3ea6f0' },
      { name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#e5e7eb' },
      { name: 'Cursor', icon: HiOutlineCursorArrowRays, color: '#e5e7eb' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export const experience = {
  company: 'EBIXCASH',
  role: 'Backend / Full-Stack Engineer (.NET Core)',
  period: 'September 2022 – Present',
  location: 'Noida, India',
  responsibilities: [
    'Developed production REST APIs using C#, ASP.NET Core and Entity Framework Core for enterprise insurance and CRM platforms.',
    'Built React and Redux front-end modules with reusable components, integrated with .NET APIs.',
    'Integrated third-party REST and SOAP APIs for real-time policy verification, data retrieval and claims.',
    'Implemented insurance provider, payment and KYC integrations across life and vehicle (4W/2W) modules.',
    'Optimized SQL queries, stored procedures and database operations on SQL Server and MySQL.',
    'Implemented OAuth 2.0, JWT authentication and role-based access control.',
    'Troubleshot complex production API, database and integration failures by tracing request flows.',
    'Worked with Azure DevOps, GitLab CI/CD and Docker for automated testing and deployments.',
    'Reviewed peer-written and AI-generated code; used AI-assisted tools to speed up delivery.',
  ],
  progression: [
    { year: '2022', title: 'Vehicle Insurance Platform', text: 'Feature development for 4W/2W quotes, issuance, renewals and endorsements.' },
    { year: '2024', title: 'Life Insurance Platform', text: 'Policy administration, claims and insurer API integrations.' },
    { year: '2025', title: 'CRM Revamp', text: 'API design, multi-tenant RBAC and cross-team API contracts.' },
  ],
}

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export interface Project {
  id: string
  index: string
  title: string
  kind: string
  period: string
  summary: string
  tech: string[]
  features: string[]
  architecture: string[]
  /** visual identity for the preview panel */
  accent: 'violet' | 'cyan' | 'blue' | 'emerald'
  /** illustrative stock photo (Unsplash) — file in public/projects */
  image: string
  imageAlt: string
  status?: 'In progress'
  note: string
}

export const projects: Project[] = [
  {
    id: 'crm-revamp',
    index: '01',
    title: 'CRM System Revamp',
    kind: 'Enterprise CRM · EBIXCASH',
    period: '2025 — Present',
    summary:
      'A ground-up revamp of an enterprise CRM: REST APIs for user management, leads, ticketing and customer lifecycle, secured with JWT-based role access and multi-tenant data isolation.',
    tech: ['.NET Core', 'ASP.NET Core', 'React', 'SQL Server', 'JWT'],
    features: [
      'User management',
      'Lead tracking',
      'Ticketing system',
      'Customer lifecycle management',
      'Multi-tenant architecture',
      'Role-based authentication',
      'Server-side pagination & filtering',
    ],
    architecture: [
      'ASP.NET Core + EF Core REST API layer',
      'JWT RBAC with per-tenant data isolation',
      'SQL Server stored procedures for heavy queries',
    ],
    accent: 'violet',
    image: 'projects/crm-revamp.webp',
    imageAlt: 'Laptop screen showing analytics charts and graphs',
    note: 'Confidential company project — no public repository or demo.',
  },
  {
    id: 'life-insurance',
    index: '02',
    title: 'Life Insurance Management System',
    kind: 'Insurance platform · EBIXCASH',
    period: '2024 — Present',
    summary:
      'Policy administration, claims and CRM platform. Integrated multiple insurer APIs for verification, premium calculation and claim status — reducing manual processing by 40%.',
    tech: ['.NET Core', 'ASP.NET MVC', 'SQL Server', 'REST APIs'],
    features: [
      'Policy administration',
      'Claims management',
      'Premium calculation',
      'Insurer API integrations',
      'Policy verification',
      'Automated workflows',
    ],
    architecture: [
      'Layered architecture with repository pattern',
      'Dependency injection for testable services',
      'Adapter layer per insurer API',
    ],
    accent: 'cyan',
    image: 'projects/life-insurance.webp',
    imageAlt: 'Family standing together in a field at sunset',
    note: 'Confidential company project — no public repository or demo.',
  },
  {
    id: 'vehicle-insurance',
    index: '03',
    title: 'Vehicle Insurance Management System',
    kind: '4W / 2W insurance · EBIXCASH',
    period: '2022 — Present',
    summary:
      'Backend services for quotes, issuance, renewals and endorsements, with optimized queries and caching for real-time premium calculation and policy document generation.',
    tech: ['C#', '.NET Core', 'React', 'MySQL', 'REST/SOAP APIs'],
    features: [
      'Vehicle insurance quotes',
      'Policy issuance',
      'Renewals & endorsements',
      'Payment integrations',
      'KYC integrations',
      'Third-party insurer integrations',
      'Policy document generation',
    ],
    architecture: [
      'REST + SOAP provider integration services',
      'Caching for real-time premium calculation',
      'Data sync & compliance with external providers',
    ],
    accent: 'blue',
    image: 'projects/vehicle-insurance.webp',
    imageAlt: 'Sports car driving on an open road at sunset',
    note: 'Confidential company project — no public repository or demo.',
  },
  {
    id: 'driveiq',
    index: '04',
    title: 'DriveIQ AI',
    kind: 'Independent product concept',
    period: 'In progress',
    summary:
      'An AI-powered Vehicle Finance, Insurance & Risk Intelligence Platform — a personal product concept exploring how AI can bring finance, insurance and risk signals for a vehicle into one place.',
    tech: ['.NET', 'React', 'AI Integration'],
    features: [
      'Vehicle finance insights',
      'Insurance intelligence',
      'Risk assessment signals',
      'AI-assisted recommendations',
    ],
    architecture: [
      'Concept stage — architecture being designed',
      'Builds on 4 years of insurance-domain experience',
    ],
    accent: 'emerald',
    image: 'projects/driveiq.webp',
    imageAlt: 'In-car touchscreen showing navigation and vehicle data',
    status: 'In progress',
    note: 'Independent concept in active development — not a released product.',
  },
]

/* ------------------------------------------------------------------ */
/*  Certifications                                                     */
/* ------------------------------------------------------------------ */

export interface Certification {
  title: string
  issuer: string
  platform: 'LinkedIn Learning' | 'Microsoft Learn'
  /** shown as the card badge */
  kind: 'Professional certificate' | 'Learning path' | 'Course badge'
  date: string
  isoDate: string
  duration?: string
  skills: string[]
  url: string
  credentialId?: string
}

export const certifications: Certification[] = [
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    platform: 'LinkedIn Learning',
    kind: 'Learning path',
    date: 'Sep 29, 2026',
    isoDate: '2026-09-29',
    duration: '4h 23m',
    skills: ['Microsoft Copilot', 'Generative AI', 'Responsible AI'],
    url: 'https://www.linkedin.com/learning/certificates/3b5e2a8022d47b2ba64739cccdf79fa6ddb5d66488068b03138cd1729ca7ff7b',
    credentialId: '3b5e2a80…a7ff7b',
  },
  {
    title: 'Microsoft Azure AI Essentials Professional Certificate',
    issuer: 'Microsoft & LinkedIn',
    platform: 'LinkedIn Learning',
    kind: 'Professional certificate',
    date: 'Sep 22, 2026',
    isoDate: '2026-09-22',
    duration: '3h 23m',
    skills: ['Machine Learning', 'Azure AI Studio', 'Generative AI'],
    url: 'https://lnkd.in/dGwZ-KCs',
    credentialId: 'd5cdf226…7a20c3',
  },
  {
    title: 'Introduction to Generative AI and Agents',
    issuer: 'Microsoft',
    platform: 'Microsoft Learn',
    kind: 'Course badge',
    date: 'Aug 3, 2026',
    isoDate: '2026-08-03',
    skills: ['Generative AI', 'AI Agents', 'Azure AI'],
    url: 'https://learn.microsoft.com/api/achievements/share/en-us/VinitYadav-4064/NQDQU82F?sharingId=3376AD0349DF726D',
  },
  {
    title: 'Describe the Core Architectural Components of Azure',
    issuer: 'Microsoft',
    platform: 'Microsoft Learn',
    kind: 'Course badge',
    date: 'Aug 3, 2026',
    isoDate: '2026-08-03',
    skills: ['Microsoft Azure', 'Cloud Architecture', 'Cloud Computing'],
    url: 'https://learn.microsoft.com/api/achievements/share/en-us/VinitYadav-4064/WMBM9D3N?sharingId=3376AD0349DF726D',
  },
]

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
