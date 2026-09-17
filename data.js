/* ============================================================
   DATA — كل بيانات الموقع (Projects + Posts)
   ============================================================ */

const PROJECTS = [
  {
    slug: 'inboxex-crm',
    title: 'Inboxex CRM',
    badge: 'Production',
    badgeClass: 'badge-prod',
    category: 'backend',
    subtitle: 'A real-world CRM platform serving clients in Egypt and international markets',
    desc: 'Contributing to backend and frontend of a live CRM used by active clients, working with NestJS, TypeScript, MongoDB, Redis, and Docker.',
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'Redis', 'Docker', 'Angular'],
    links: { live: 'https://dev.inboxak.app/', github: null },
    featured: true,
    overview: 'Inboxex is a production CRM platform used by clients across Egypt and international markets. As part of the development team, I contribute to both backend and frontend features — from API design and authentication flows to debugging production issues and shipping reliable features.',
    problem: 'CRM platforms handle sensitive customer data, complex authentication flows, and need to remain responsive under load. The challenge was building and maintaining APIs that could scale while ensuring security, session consistency, and smooth user experience across a distributed team.',
    solution: [
      'Developed and troubleshot backend APIs using NestJS, TypeScript, and MongoDB',
      'Implemented and refined authentication flows, session management, and RBAC',
      "Used Docker and Redis as part of the team's development and runtime environment",
      'Reproduced and fixed production issues by tracing root causes through Postman and browser workflows',
      'Contributed to the Angular frontend including user-facing authentication features',
      'Collaborated with the team to validate fixes and prevent regressions',
    ],
    results: [
      { num: '100%', label: 'Production-ready features shipped' },
      { num: '5+',   label: 'Team members collaborated with' },
      { num: '2',    label: 'Markets served' },
    ],
    stack: {
      Backend: ['NestJS', 'TypeScript', 'Node.js'],
      Database: ['MongoDB', 'Redis'],
      DevOps: ['Docker', 'Git/GitHub'],
      Frontend: ['Angular'],
    },
    lessons: 'Working on a live production CRM taught me how to think beyond code — about reliability, edge cases, and how small backend decisions ripple through the entire product.',
  },
  {
    slug: 'loafoflife',
    title: 'LoafOfLife',
    badge: 'Graduation',
    badgeClass: 'badge-personal',
    category: 'backend',
    subtitle: 'Connecting individuals, restaurants, and charities to reduce food waste',
    desc: 'A graduation project platform with real-time donation tracking, RBAC, and AI-powered image validation at 96% accuracy.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Figma'],
    links: { live: null, github: 'https://github.com/Fouad902/LoafOfLife' },
    featured: true,
    overview: 'LoafOfLife is a backend system that connects individuals and restaurants with charitable organizations to reduce food waste. The platform handles donations end-to-end: from listing surplus food to verifying it and tracking its delivery to charities.',
    problem: 'Millions of tons of edible food are wasted daily while charities struggle to source supplies. There was no unified platform connecting food surplus with verified charities, and verifying donation authenticity manually was slow and unreliable.',
    solution: [
      'Architected the backend connecting individuals, restaurants, and charitable organizations',
      'Implemented secure authentication, RBAC, and efficient data management using Node.js, Express, and MongoDB',
      'Prepared datasets for AI validation of donation images, achieving 96% accuracy',
      'Contributed to UI/UX design on Figma, improving usability and interface consistency',
      'Built real-time donation tracking and streamlined organizational workflows',
    ],
    results: [
      { num: '96%', label: 'AI image validation accuracy' },
      { num: '3',   label: 'User roles supported' },
      { num: '100%', label: 'End-to-end pipeline' },
    ],
    stack: {
      Backend: ['Node.js', 'Express', 'MongoDB'],
      Auth: ['JWT', 'RBAC'],
      AI: ['Image Validation Dataset'],
      Design: ['Figma'],
    },
    lessons: 'This project taught me how backend architecture directly impacts social impact. Designing role-based flows for three different user types forced me to think carefully about data ownership, permissions, and trust.',
  },
  {
    slug: 'hr-system',
    title: 'HR Management System',
    badge: 'Personal',
    badgeClass: 'badge-personal',
    category: 'backend',
    subtitle: 'A full HR system with optimized SQL queries and structured architecture',
    desc: 'Managing employees, departments, and attendance records — reduced report generation time by 40%.',
    tech: ['NestJS', 'TypeORM', 'SQL Server', 'TypeScript'],
    links: { github: 'https://github.com/Fouad902/HR-System' },
    featured: true,
    overview: 'A complete Human Resources management system built with NestJS and TypeORM on SQL Server. The system handles employees, departments, attendance, and reporting with a focus on query performance.',
    problem: 'HR systems often suffer from slow reports and poorly structured data relationships. The goal was to build a system that could scale with growing employee data without degrading report performance.',
    solution: [
      'Engineered a full HR management system handling employees, departments, and attendance',
      'Optimized SQL queries, reducing report generation time by 40%',
      'Designed scalable entity relationships with TypeORM',
      'Implemented clean architecture with proper separation of concerns',
    ],
    results: [
      { num: '40%', label: 'Faster report generation' },
      { num: '3+',  label: 'Core modules built' },
      { num: '100%', label: 'Type-safe backend' },
    ],
    stack: {
      Backend: ['NestJS', 'TypeScript'],
      ORM: ['TypeORM'],
      Database: ['SQL Server'],
    },
    lessons: "SQL optimization is more than just adding indexes — it's about understanding query plans, entity relationships, and how the ORM translates your code into database operations.",
  },
  {
    slug: 'blog-app',
    title: 'Blog App',
    badge: 'Personal',
    badgeClass: 'badge-personal',
    category: 'backend',
    subtitle: 'A blogging platform with full authentication and scalable backend',
    desc: 'Users can create, update, and comment on posts with full authentication and authorization built with TypeScript.',
    tech: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    links: { github: 'https://github.com/Fouad902/Blog-app' },
    featured: false,
    overview: 'A blogging platform where users can create, update, comment on posts, with a full authentication and authorization system built on top of a TypeScript + Express + MongoDB stack.',
    problem: 'Building a blog platform requires careful handling of authentication, ownership, and permissions. The challenge was designing a system where users could only modify their own content while keeping the API clean and scalable.',
    solution: [
      'Built a blogging platform with full CRUD for posts and comments',
      'Implemented authentication and authorization from scratch',
      'Used TypeScript throughout for strong typing and scalable architecture',
      'Structured the backend for easy extension',
    ],
    results: [
      { num: '100%', label: 'Type-safe backend' },
      { num: '3',    label: 'Core entities' },
      { num: '0',    label: 'Security shortcuts' },
    ],
    stack: {
      Backend: ['Node.js', 'Express', 'TypeScript'],
      Database: ['MongoDB'],
      Auth: ['JWT'],
    },
    lessons: 'Authentication is where most beginners cut corners. Doing it properly — with hashing, JWT rotation, and clear ownership rules — is what separates a toy project from a real one.',
  },
  {
    slug: 'prophets-series',
    title: 'Prophets Series',
    badge: 'AI / Freelance',
    badgeClass: 'badge-ai',
    category: 'ai',
    subtitle: 'AI-powered visual storytelling series delivered end-to-end',
    desc: 'Produced 150+ images and 30+ videos across 5+ AI platforms with 95% visual consistency.',
    tech: ['Generative AI', 'Prompt Engineering', 'Figma', 'Canva'],
    links: {},
    featured: true,
    overview: 'A freelance visual storytelling project where I produced a large-scale AI-generated image and video series, managing the full pipeline from concept to final delivery.',
    problem: "Generating consistent visual content across multiple AI platforms is hard — each tool has its own quirks, and maintaining a unified visual style at scale requires disciplined prompt engineering and asset management.",
    solution: [
      'Applied advanced prompt engineering across 5+ AI platforms',
      'Generated 150+ images and 30+ videos with 95% visual consistency',
      'Designed 10+ storyboards and organized 150+ visual assets using Figma and Canva',
      'Collaborated with a 5-member team to plan, review, and refine content',
      'Managed 200+ dataset files via Google Drive, improving collaboration efficiency by 40%',
    ],
    results: [
      { num: '150+', label: 'Images delivered' },
      { num: '30+',  label: 'Videos delivered' },
      { num: '95%',  label: 'Visual consistency' },
    ],
    stack: {
      AI: ['Freepik AI', 'Nano Banana Pro', 'Banana 2', 'Flow', 'Higgs'],
      Design: ['Figma', 'Canva'],
      Tools: ['Google Drive'],
    },
    lessons: "Prompt engineering is a real skill — it's about building a system, not just writing a prompt. Consistency at scale comes from documentation, comparison, and iteration.",
  },
  {
    slug: 'hospital-system',
    title: 'Hospital System',
    badge: 'Personal',
    badgeClass: 'badge-personal',
    category: 'backend',
    subtitle: 'A hospital database system managing patients, doctors, medicines, and payments',
    desc: 'A structured SQL backend integrated with Node.js APIs for reliable and efficient data handling.',
    tech: ['Node.js', 'Express', 'MySQL'],
    links: { github: 'https://github.com/Fouad902/HospitalDB' },
    featured: false,
    overview: 'A hospital management system designed around a relational database schema, handling patients, doctors, medicines, and payments with Node.js APIs.',
    problem: 'Hospital data is highly relational — a single patient interacts with doctors, prescriptions, payments, and appointments. Designing a schema that captures these relationships cleanly is critical.',
    solution: [
      'Designed a full relational schema for patients, doctors, medicines, and payments',
      'Deployed a structured SQL backend integrated with Node.js APIs',
      'Ensured reliable and efficient data handling with clean foreign key relationships',
    ],
    results: [
      { num: '4+',  label: 'Core relational entities' },
      { num: '100%', label: 'Relational integrity' },
      { num: '1',   label: 'Integrated API layer' },
    ],
    stack: {
      Backend: ['Node.js', 'Express'],
      Database: ['MySQL'],
    },
    lessons: 'Good schema design prevents 90% of future bugs. Time invested in modeling relationships upfront pays off when the application grows.',
  },
  {
    slug: 'tameen-manager',
    title: 'TameenManager',
    badge: 'Personal',
    badgeClass: 'badge-personal',
    category: 'backend',
    subtitle: 'An insurance management system handling agents, customers, and policies',
    desc: 'Automated insurance workflows with Java + JDBC + MySQL, increasing process efficiency by 30%.',
    tech: ['Java', 'JDBC', 'MySQL'],
    links: { github: 'https://github.com/Fouad902/TameenManager' },
    featured: false,
    overview: 'An insurance management system built in Java with JDBC and MySQL, handling agents, customers, and policy records with automated workflows.',
    problem: 'Insurance processes involve complex relationships between agents, customers, and policies. Manual handling causes delays and data inconsistencies.',
    solution: [
      'Engineered an insurance management system with Java and JDBC',
      'Designed a normalized MySQL schema for agents, customers, and policies',
      'Automated workflows and optimized data organization',
    ],
    results: [
      { num: '30%', label: 'Process efficiency boost' },
      { num: '3',   label: 'Core entities' },
      { num: '100%', label: 'Workflow automation' },
    ],
    stack: {
      Language: ['Java'],
      Database: ['MySQL', 'JDBC'],
    },
    lessons: 'Building with plain JDBC taught me what ORMs abstract away — and why understanding SQL at a low level makes you a better backend developer.',
  },
  {
    slug: 'natours',
    title: 'Natours Travel App',
    badge: 'Personal',
    badgeClass: 'badge-personal',
    category: 'backend',
    subtitle: 'A responsive travel booking platform with tours, pricing, and reviews',
    desc: 'A travel booking platform enabling users to browse detailed tour information and make secure bookings.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    links: { github: 'https://github.com/Fouad902/Natours' },
    featured: false,
    overview: 'A travel booking platform where users can browse tours, view detailed information, read reviews, and make secure bookings.',
    problem: 'Travel booking platforms need to balance rich content presentation with fast, secure transactions. The challenge was building a responsive experience without sacrificing backend performance.',
    solution: [
      'Developed a responsive travel booking platform',
      'Displayed tours, pricing, and reviews',
      'Enabled secure bookings with clean data handling',
    ],
    results: [
      { num: '3+',  label: 'Core features' },
      { num: '100%', label: 'Responsive UI' },
      { num: '1',   label: 'Booking flow' },
    ],
    stack: {
      Backend: ['Node.js', 'Express', 'MongoDB'],
      Frontend: ['HTML', 'CSS', 'JavaScript'],
    },
    lessons: "Content-heavy applications need careful pagination and query design. It's not just about showing data — it's about showing the right data at the right time.",
  },
];

const POSTS = [
  {
    slug: 'nestjs-best-practices',
    title: 'NestJS Best Practices for Scalable APIs',
    date: '2026-03-15',
    readTime: '8 min read',
    excerpt: 'A practical guide to structuring NestJS applications for scale — modules, providers, DTOs, and when to split into microservices.',
    tags: ['NestJS', 'Architecture', 'Node.js'],
  },
  {
    slug: 'mongo-vs-sql',
    title: 'MongoDB vs SQL: Choosing the Right Tool',
    date: '2026-02-28',
    readTime: '6 min read',
    excerpt: "Not all data is equal. Here's how I decide between MongoDB and a relational database for real-world backend projects.",
    tags: ['MongoDB', 'SQL', 'Databases'],
  },
  {
    slug: 'debug-production',
    title: 'Debugging Production Issues as a Junior',
    date: '2026-02-10',
    readTime: '7 min read',
    excerpt: 'Production bugs hit different. A workflow for tracing root causes without breaking things further.',
    tags: ['Debugging', 'Production', 'Career'],
  },
  {
    slug: 'jwt-auth-guide',
    title: 'JWT Authentication Done Right',
    date: '2026-01-22',
    readTime: '9 min read',
    excerpt: "Most JWT tutorials skip the hard parts. Here's how to build authentication that doesn't leak tokens or break sessions.",
    tags: ['JWT', 'Security', 'Auth'],
  },
];

/* ============================================================
   HELPERS
   ============================================================ */
function getProject(slug) {
  return PROJECTS.find(p => p.slug === slug);
}

function getPost(slug) {
  return POSTS.find(p => p.slug === slug);
}

function getFeaturedProjects() {
  return PROJECTS.filter(p => p.featured);
}

function getProjectsByCategory(cat) {
  if (cat === 'all') return PROJECTS;
  return PROJECTS.filter(p => p.category === cat);
}
