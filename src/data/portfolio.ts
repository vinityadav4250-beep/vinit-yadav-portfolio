import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaDatabase, FaServer, FaCloud } from 'react-icons/fa'
import { TbBrandAzure, TbBrandCSharp } from 'react-icons/tb'
import { IconType } from 'react-icons'

export const personalInfo = {
  name: 'Vinit Yadav',
  title: 'Full Stack .NET Developer',
  experience: '4 Years of Professional Experience in Software Development',
  company: 'EbixCash',
  location: 'Noida, Uttar Pradesh, India',
  headline: 'Building Scalable Enterprise Applications with .NET & React',
  subheadline:
    'Full Stack Developer specializing in ASP.NET Core, React.js, SQL Server, and Modern Web Technologies.',
  about: `I am a Full Stack .NET Developer specializing in ASP.NET Core, C#, SQL Server, React.js, REST APIs, and enterprise application development. I have experience working on insurance domain applications, CKYC integrations, third-party API integrations, authentication systems, policy issuance systems, and scalable backend services.

I enjoy solving complex business problems, building scalable applications, optimizing performance, and learning modern cloud technologies.`,
  email: 'Vinityadav4250@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vinit-yadav-21ba641a5',
  github: 'https://github.com/vinityadav',
  resumeUrl: '/resume/Vinit_Yadav_Resume.pdf',
}

export interface Skill {
  name: string
  icon: IconType
  color: string
}

export interface SkillCategory {
  title: string
  icon: IconType
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: SiReact,
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'ASP.NET Core', icon: SiDotnet, color: '#512BD4' },
      { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
      { name: '.NET Core', icon: SiDotnet, color: '#512BD4' },
      { name: 'REST APIs', icon: FaServer, color: '#6366F1' },
      { name: 'Entity Framework Core', icon: SiDotnet, color: '#512BD4' },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    skills: [
      { name: 'SQL Server', icon: FaDatabase, color: '#CC2927' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    skills: [
      { name: 'Azure', icon: TbBrandAzure, color: '#0078D4' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'CI/CD', icon: FaCloud, color: '#22D3EE' },
    ],
  },
]

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  responsibilities: string[]
}

export const experiences: Experience[] = [
  {
    company: 'EbixCash',
    role: '.NET Developer',
    period: 'Present',
    location: 'Noida, Uttar Pradesh, India',
    responsibilities: [
      'Developed enterprise insurance applications',
      'Integrated third-party APIs',
      'Implemented CKYC solutions',
      'Designed scalable backend services',
      'Optimized SQL queries and APIs',
      'Worked on authentication and authorization',
    ],
  },
]

export interface Project {
  id: number
  title: string
  description: string
  features: string[]
  technologies: string[]
  githubUrl: string
  liveUrl: string
  gradient: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Insurance Management System',
    description:
      'A comprehensive enterprise insurance management platform for policy lifecycle management, claims processing, and customer onboarding.',
    features: [
      'Policy lifecycle management',
      'Claims processing workflow',
      'Customer onboarding portal',
      'Real-time reporting dashboard',
      'Multi-tenant architecture',
    ],
    technologies: ['ASP.NET Core', 'SQL Server', 'React'],
    githubUrl: 'https://github.com/vinityadav',
    liveUrl: '#',
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'CKYC Integration Platform',
    description:
      'Central KYC integration platform enabling seamless customer verification across multiple insurance providers and financial institutions.',
    features: [
      'CKYC API integration',
      'Automated KYC verification',
      'Document validation pipeline',
      'Compliance reporting',
      'Error handling & retry logic',
    ],
    technologies: ['ASP.NET Core', 'REST APIs'],
    githubUrl: 'https://github.com/vinityadav',
    liveUrl: '#',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 3,
    title: 'Authentication & Authorization System',
    description:
      'Enterprise-grade authentication system with JWT tokens, role-based access control, and secure API gateway integration.',
    features: [
      'JWT-based authentication',
      'Role-based access control',
      'OAuth 2.0 integration',
      'Session management',
      'Security audit logging',
    ],
    technologies: ['JWT', 'ASP.NET Core'],
    githubUrl: 'https://github.com/vinityadav',
    liveUrl: '#',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 4,
    title: 'Vehicle Insurance Quote Engine',
    description:
      'High-performance quote generation engine for vehicle insurance with real-time premium calculation and third-party data integration.',
    features: [
      'Real-time premium calculation',
      'Vehicle data integration',
      'Quote comparison engine',
      'PDF quote generation',
      'Caching for performance',
    ],
    technologies: ['.NET Core', 'SQL Server'],
    githubUrl: 'https://github.com/vinityadav',
    liveUrl: '#',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
]

export interface Certification {
  title: string
  issuer: string
  year: string
  status: 'completed' | 'planned'
  description: string
}

export const certifications: Certification[] = [
  {
    title: 'AI Workshop Certificate',
    issuer: 'Professional Development',
    year: '2024',
    status: 'completed',
    description: 'Completed intensive AI/ML workshop covering modern AI applications in software development.',
  },
  {
    title: 'Microsoft Certifications',
    issuer: 'Microsoft',
    year: '2025',
    status: 'planned',
    description: 'Pursuing Azure Developer Associate and .NET certifications to validate cloud expertise.',
  },
  {
    title: 'Cloud Certifications',
    issuer: 'Cloud Providers',
    year: '2025',
    status: 'planned',
    description: 'Planning AWS and Azure cloud architecture certifications for enterprise cloud solutions.',
  },
]

export interface Achievement {
  value: string
  label: string
  description: string
}

export const achievements: Achievement[] = [
  {
    value: '500+',
    label: 'LinkedIn Connections',
    description: 'Strong professional network in tech industry',
  },
  {
    value: '10+',
    label: 'Enterprise Integrations',
    description: 'Third-party APIs and CKYC solutions delivered',
  },
  {
    value: '4+',
    label: 'Years in Production',
    description: 'Enterprise application development experience',
  },
]

export const typingRoles = [
  'Full Stack .NET Developer',
  'ASP.NET Core Specialist',
  'React.js Developer',
  'Enterprise Solutions Architect',
  'API Integration Expert',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const githubStats = {
  username: 'vinityadav',
  languages: [
    { name: 'C#', percentage: 45, color: '#239120' },
    { name: 'TypeScript', percentage: 25, color: '#3178C6' },
    { name: 'JavaScript', percentage: 15, color: '#F7DF1E' },
    { name: 'SQL', percentage: 10, color: '#CC2927' },
    { name: 'Other', percentage: 5, color: '#6366F1' },
  ],
}
