/**
 * Every piece of copy on the site lives here.
 * Swap these values to make the portfolio your own — no component edits needed.
 */

export const site = {
  monogram: 'NN',
  name: 'Nihas N',
  role: 'Computer Science Engineer',
  eyebrow: 'Computer science, applied',
  headline: ['Computer', 'Science', 'Engineer'],
  intro:
    'I build fast, reliable software — from database schema and API design through to the last pixel of the interface.',
  nameCard: {
    greeting: "Hi, I'm",
    name: 'Nihas.N',
    detail: 'VIT CS student',
    note: 'B.Tech Computer Science · Vellore Institute of Technology',
    availability: 'Open to full-time roles & internships',
  },
  email: 'nihas.n2026@vitstudent.ac.in',
  emailAlt: 'nihasraihan8@gmail.com',
  phone: '+91 9400503008',
  location: 'Vellore, Tamil Nadu, India',
  resumeUrl: '/resume.pdf',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Hobbies', href: '#hobbies' },
    { label: 'Contact', href: '#contact' },
  ],
  labels: {
    featuredWork: 'Featured Work',
    exploreAll: 'Explore all projects',
    capabilities: 'Core Capabilities',
    tools: 'Tools & Technologies',
    certifications: 'Certifications & Education',
    process: 'My Engineering Process',
    hobbies: 'Hobbies & Achievements',
    hobbiesOnly: 'Hobbies',
    achievementsOnly: 'Achievements',
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
      title: 'Library\nManagement\nSystem',
      category: 'Full-Stack Engineering',
      type: 'Node · Postgres · Search',
      visual: 'library',
      year: '2024',
      summary:
        'A circulation system for a college library: catalogue search across twelve thousand titles, member records with loan history, and due-date reminders that cut overdue returns by a third in the first term.',
      tags: ['React', 'Express', 'PostgreSQL'],
    },
    {
      title: 'Calorie\nTracker',
      category: 'Mobile Engineering',
      type: 'React Native · Nutrition',
      visual: 'calorie',
      year: '2024',
      summary:
        'A cross-platform nutrition app with a barcode-scanning food log, macro targets that adapt to weekly activity, and an offline-first store that reconciles against a GraphQL API the moment you are back online.',
      tags: ['React Native', 'GraphQL', 'Offline sync'],
    },
    {
      title: 'AI Medi-Waste\n& AMR Disposal',
      category: 'Applied Machine Learning',
      type: 'Computer Vision · Healthcare',
      visual: 'waste',
      year: '2025',
      summary:
        'A medical-waste system that classifies each bag by colour-coded stream from a phone camera, then layers antimicrobial-resistance risk on top so disposal routes are chosen before waste leaves the ward.',
      tags: ['PyTorch', 'CNNs', 'AMR risk'],
    },
    {
      title: 'Expense\nTracker',
      category: 'Full-Stack Engineering',
      type: 'React · Node · Charts',
      visual: 'expense',
      year: '2025',
      summary:
        'A personal spending tracker with category budgets, monthly rollups and charts that stay readable on a phone — importable statements in, clear weekly answers out.',
      tags: ['React', 'Express', 'PostgreSQL'],
    },
    {
      title: 'UPI Risk\nGuidance',
      category: 'Fintech Engineering',
      type: 'Python · Rules · Risk',
      visual: 'upi',
      year: '2024',
      summary:
        'A risk-guiding layer for UPI payments: it scores each payee against velocity, device and fraud signals, then explains the risk in plain language before the user confirms a transfer.',
      tags: ['Python', 'FastAPI', 'Risk scoring'],
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
  hobbies: [
    {
      name: 'Chess',
      note: 'Board tactics and endgame studies',
      detail: 'Inter-school champion',
      accent: 'amber',
      preview: 'chess',
    },
    {
      name: 'Music',
      note: 'Playlists for deep-focus coding',
      detail: 'Lo-fi & film scores',
      accent: 'violet',
      preview: 'music',
    },
    {
      name: 'Cricket',
      note: 'Weekend matches with friends',
      detail: 'Right-hand batter',
      accent: 'sage',
      preview: 'cricket',
    },
    {
      name: 'Football',
      note: 'Five-a-side and match analysis',
      detail: 'Midfield',
      accent: 'sky',
      preview: 'football',
    },
    {
      name: 'Gym',
      note: 'Strength training, four days a week',
      detail: 'Consistency over intensity',
      accent: 'rose',
      preview: 'gym',
    },
  ],
  achievements: [
    { label: 'Class XII percentage', value: '90%' },
    { label: 'Class X percentage', value: '94.2%' },
    { label: 'National Science Olympiad', value: 'Qualifier' },
    { label: 'Inter-school chess champion', value: 'Winner' },
    { label: 'Inter-school shot put', value: 'Winner' },
    { label: 'School proficiency holder, 9th', value: 'Honours' },
  ],
  processIntro:
    'I started coding in the 9th standard, and my interest in building things — and discovering how software really works — has only grown since. I regularly solve problems on LeetCode and try to take on leadership roles in the projects I am involved in. I am looking for a developer role where I can build, discover, contribute and grow.',
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
