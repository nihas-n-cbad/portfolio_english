/**
 * Every piece of copy on the site lives here.
 * Swap these values to make the portfolio your own — no component edits needed.
 */

export const site = {
  monogram: 'AV',
  name: 'Your Name',
  role: 'Computer Science Engineer',
  availability: 'Open to full-time roles',
  eyebrow: 'Computer science, applied',
  headline: ['Computer', 'Science', 'Engineer'],
  intro:
    'I build fast, reliable software — from database schema and API design through to the last pixel of the interface.',
  heroBadge: { label: 'Available for', value: 'Full-time', detail: 'Roles' },
  email: 'nihas.n2026@vitstudent.ac.in',
  emailAlt: 'nihasraihan8@gmail.com',
  phone: '+91 9400503008',
  location: 'Vellore, Tamil Nadu, India',
  resumeUrl: '/resume.pdf',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  labels: {
    featuredWork: 'Featured Work',
    exploreAll: 'Explore all projects',
    capabilities: 'Core Capabilities',
    tools: 'Tools & Technologies',
    certifications: 'Certifications & Education',
    process: 'My Engineering Process',
  },
  stats: [
    { value: '4+', label: 'Years coding', icon: 'sparkle' },
    { value: '40+', label: 'Projects shipped', icon: 'users' },
    { value: '18+', label: 'Open-source PRs', icon: 'trophy' },
    { value: '12', label: 'Technologies used', icon: 'globe' },
  ],
  projects: [
    {
      title: 'Finance\nDashboard',
      category: 'Full-Stack Engineering',
      type: 'React · Node · Postgres',
      visual: 'finance',
      year: '2025',
      summary:
        'A personal finance workspace built end to end: a typed React front end, an Express API, and a Postgres schema with monthly rollups so seven-figure ledgers still load in under 200 ms.',
      tags: ['React', 'TypeScript', 'PostgreSQL'],
    },
    {
      title: 'Nexora\nPlatform',
      category: 'Front-End Engineering',
      type: 'Next.js · Design System',
      visual: 'brand',
      year: '2024',
      summary:
        'A marketing platform for a developer-tools startup: forty shared components, static generation with sub-second loads, and an MDX docs pipeline the team publishes from without touching code.',
      tags: ['Next.js', 'Design system', 'MDX'],
    },
    {
      title: 'Wellness\nCompanion',
      category: 'Mobile Engineering',
      type: 'React Native · Health',
      visual: 'wellness',
      year: '2024',
      summary:
        'A cross-platform activity app with background step tracking, offline-first sync against a GraphQL API, and charts that hold 60 fps on mid-range Android hardware.',
      tags: ['React Native', 'GraphQL', 'Offline sync'],
    },
  ],
  capabilities: [
    {
      title: 'Full-Stack Development',
      description:
        'Building end-to-end features across React interfaces and Node services.',
      icon: 'layers',
    },
    {
      title: 'Backend & APIs',
      description:
        'Designing REST and GraphQL services with validation, auth, and clear contracts.',
      icon: 'server',
    },
    {
      title: 'Databases',
      description:
        'Modelling relational schemas and writing queries that stay fast as data grows.',
      icon: 'database',
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Shipping with containers, CI/CD pipelines, and infrastructure as code.',
      icon: 'cloud',
    },
    {
      title: 'Testing & Reliability',
      description:
        'Unit, integration and end-to-end suites that keep releases uneventful.',
      icon: 'shield',
    },
    {
      title: 'Performance',
      description:
        'Profiling bundles, renders and queries to cut load time and running cost.',
      icon: 'gauge',
    },
  ],
  tools: [
    { name: 'React', mark: 'react' },
    { name: 'TypeScript', mark: 'ts' },
    { name: 'Next.js', mark: 'next' },
    { name: 'Node.js', mark: 'node' },
    { name: 'Python', mark: 'python' },
    { name: 'PostgreSQL', mark: 'postgres' },
    { name: 'Docker', mark: 'docker' },
    { name: 'AWS', mark: 'aws' },
    { name: 'Git', mark: 'git' },
  ],
  certifications: [
    {
      title: 'AWS Certified Solutions Architect — Associate',
      issuer: 'Amazon Web Services',
      mark: 'aws',
    },
    {
      title: 'BTech Computer Science',
      issuer: 'VIT Vellore',
      mark: 'school',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Discover',
      description: 'Clarifying requirements, users and the problem before writing code.',
      icon: 'search',
    },
    {
      step: '02',
      title: 'Architect',
      description: 'Choosing data models, boundaries and trade-offs that scale.',
      icon: 'layers',
    },
    {
      step: '03',
      title: 'Build',
      description: 'Writing typed, reviewed code in small, tested increments.',
      icon: 'code',
    },
    {
      step: '04',
      title: 'Test',
      description: 'Covering the paths that matter, from unit tests to end-to-end flows.',
      icon: 'shield',
    },
    {
      step: '05',
      title: 'Ship',
      description: 'Deploying with CI/CD, monitoring and a rollback path ready.',
      icon: 'rocket',
    },
  ],
  cta: {
    eyebrow: 'Have something in mind?',
    lines: ["Let's build", 'something', 'remarkable'],
    availability:
      "I'm open to full-time roles and selected freelance builds — happy to talk about either.",
    button: "Let's work together",
  },
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LeetCode', href: 'https://leetcode.com', icon: 'code' },
    { label: 'X', href: 'https://x.com', icon: 'x' },
  ],
  footerNote: 'All Rights Reserved.',
} as const

export type SiteContent = typeof site
