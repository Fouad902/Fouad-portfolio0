/* ============================================================
   PROJECTS DATA
   ضيف مشاريع جديدة هنا بسهولة — كل مشروع هيظهر تلقائيًا
   في الصفحة الرئيسية + صفحة تفاصيل كاملة
   ============================================================ */

const PROJECTS = [
  {
    slug: 'inboxex-crm',
    title: 'Inboxex CRM',
    badge: 'Production',
    badgeClass: 'badge-prod',
    subtitle: 'A real-world CRM platform serving clients in Egypt and international markets',
    desc: 'Contributing to backend and frontend of a live CRM used by active clients, working with NestJS, TypeScript, MongoDB, Redis, and Docker.',
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'Redis', 'Docker', 'Angular'],
    links: {
      live: null,
      github: null,
    },
    // Case study
    overview: 'Inboxex is a production CRM platform used by clients across Egypt and international markets. As part of the development team, I contribute to both backend and frontend features — from API design and authentication flows to debugging production issues and shipping reliable features.',
    problem: 'CRM platforms handle sensitive customer data, complex authentication flows, and need to remain responsive under load. The challenge was building and maintaining APIs that could scale while ensuring security, session consistency, and smooth user experience across a distributed team.',
    solution: [
      'Developed and troubleshot backend APIs using NestJS, TypeScript, and MongoDB',
      'Implemented and refined authentication flows, session management, and RBAC',
      'Used Docker and Redis as part of the team\'s development and runtime environment',
      'Reproduced and fixed production issues by tracing root causes through Postman and browser workflows',
      'Contributed to the Angular frontend including user-facing authentication features',
      'Collaborated with the team to validate fixes and prevent regressions',
    ],
    results: [
      { num: '100%', label: 'Production-ready features shipped' },
      { num: '5+',    label: 'Team members collaborated with' },
      { num: '2',     label: 'Markets served (Egypt + international)' },
    ],
    stack: {
      Backend: ['NestJS', 'TypeScript', 'Node.js'],
      Database: ['MongoDB', 'Redis'],
      DevOps: ['Docker', 'Git/GitHub'],
      Frontend: ['Angular'],
    },
    lessons: 'Working on a live production CRM taught me how to think beyond code — about reliability, edge cases, and how small backend decisions ripple through the entire product. Debugging real production issues is a completely different skill from building new features.',
  },
  {
    slug: 'loafoflife',
    title: 'LoafOfLife',
    badge: 'Graduation',
    badgeClass: 'badge-personal',
    subtitle: 'Connecting individuals, restaurants, and charities to reduce food waste',
    desc: 'A graduation project platform with real-time donation tracking, RBAC, and AI-powered image validation at 96% accuracy.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Figma'],
    links: {
      live: null,
      github: 'https://github.com/fouadkadrii',
    },
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
      { num: '96%', label: 'Accuracy in AI donation image validation' },
      { num: '3',   label: 'User roles (individuals, restaurants, charities)' },
      { num: '100%', label: 'End-to-end donation pipeline' },
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
    subtitle: 'A full HR system with optimized SQL queries and structured architecture',
    desc: 'Managing employees, departments, and attendance records — reduced report generation time by 40%.',
    tech: ['NestJS', 'TypeORM', 'SQL Server', 'TypeScript'],
    links: { github: 'https://github.com/fouadkadrii' },
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
      { num: '3+',  label: 'Core modules (employees, departments, attendance)' },
      { num: '100%', label: 'Type-safe backend' },
    ],
    stack: {
      Backend: ['NestJS', 'TypeScript'],
      ORM: ['TypeORM'],
      Database: ['SQL Server'],
    },
    lessons: 'SQL optimization is more than just adding indexes — it\'s about understanding query plans, entity relationships, and how the ORM translates your code into database operations.',
  },
  {
    slug: 'blog-app',
    title: 'Blog App',
    badge: 'Personal',
    badgeClass: 'badge-personal',
    subtitle: 'A blogging platform with full authentication and scalable backend',
    desc: 'Users can create, update, and comment on posts with full authentication and authorization built with TypeScript for strong typing.',
    tech: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    links: { github: 'https://github.com/fouadkadrii' },
    overview: 'A blogging platform where users can create, update, comment on posts, with a full authentication and authorization system built on top of a TypeScript + Express + MongoDB stack.',
    problem: 'Building a blog platform requires careful handling of authentication, ownership, and permissions. The challenge was designing a system where users could only modify their own content while keeping the API clean and scalable.',
    solution: [
      'Built a blogging platform with full CRUD for posts and comments',
      'Implemented authentication and authorization from scratch',
      'Used TypeScript throughout for strong typing and scalable architecture',
      'Structured the backend for easy extension (roles, moderation, etc.)',
    ],
    results: [
      { num: '100%', label: 'Type-safe backend' },
      { num: '3',    label: 'Core entities (users, posts, comments)' },
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
    badge: 'Freelance',
    badgeClass: 'badge-freelance',
    subtitle: 'AI-powered visual storytelling series delivered end-to-end',
    desc: 'Produced 150+ images and 30+ videos across 5+ AI platforms with 95% visual consistency.',
    tech: ['Generative AI', 'Prompt Engineering', 'Figma', 'Canva'],
    links: {},
    overview: 'A freelance visual storytelling project where I produced a large-scale AI-generated image and video series, managing the full pipeline from concept to final delivery.',
    problem: 'Generating consistent visual content across multiple AI platforms is hard — each tool has its own quirks, and maintaining a unified visual style at scale requires disciplined prompt engineering and asset management.',
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
      { num: '25%',  label: 'Reduction in iteration time' },
    ],
    stack: {
      AI: ['Freepik AI', 'Nano Banana Pro', 'Banana 2', 'Flow', 'Higgs'],
      Design: ['Figma', 'Canva'],
      Tools: ['Google Drive'],
    },
    lessons: 'Prompt engineering is a real skill — it\'s about building a system, not just writing a prompt. Consistency at scale comes from documentation, comparison, and iteration.',
  },
  {
    slug: 'hospital-system',
    title: 'Hospital System',
    badge: 'Personal',
    badgeClass: 'badge-personal',
    subtitle: 'A hospital database system managing patients, doctors, medicines, and payments',
    desc: 'A structured SQL backend integrated with Node.js APIs for reliable and efficient data handling.',
    tech: ['Node.js', 'Express', 'MySQL'],
    links: { github: 'https://github.com/fouadkadrii' },
    overview: 'A hospital management system designed around a relational database schema, handling patients, doctors, medicines, and payments with Node.js APIs.',
    problem: 'Hospital data is highly relational — a single patient interacts with doctors, prescriptions, payments, and appointments. Designing a schema that captures these relationships cleanly is critical.',
    solution: [
      'Designed a full relational schema for patients, doctors, medicines, and payments',
      'Deployed a structured SQL backend integrated with Node.js APIs',
      'Ensured reliable and efficient data handling with clean foreign key relationships',
    ],
    results: [
      { num: '4+',  label: 'Core relational entities' },
      { num: '100%', label: 'Relational integrity enforced' },
      { num: '1',   label: 'Fully integrated API layer' },
    ],
    stack: {
      Backend: ['Node.js', 'Express'],
      Database: ['MySQL'],
    },
    lessons: 'Good schema design prevents 90% of future bugs. Time invested in modeling relationships upfront pays off when the application grows.',
  },
];

/* ============================================================
   RENDER: Home page project cards
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <a href="project.html?p=${p.slug}" class="project-card tilt reveal-card" data-reveal style="--delay:${i * 0.08}s">
      <div class="project-header">
        <h3 class="project-title">${p.title}</h3>
        <span class="project-badge ${p.badgeClass}">${p.badge}</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>
      <div class="project-cta">
        <span>View case study</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </a>
  `).join('');
}

/* ============================================================
   RENDER: Case study page
   ============================================================ */
function renderCaseStudy(slug) {
  const main = document.getElementById('caseStudy');
  if (!main) return;

  const p = PROJECTS.find(x => x.slug === slug);
  if (!p) {
    main.innerHTML = `
      <div class="container" style="padding-top: 160px; text-align: center;">
        <h1 class="section-title">Project not found</h1>
        <p class="section-desc" style="margin: 20px auto;">The project you're looking for doesn't exist.</p>
        <a href="index.html#projects" class="btn btn-primary">← Back to Projects</a>
      </div>
    `;
    return;
  }

  document.title = `${p.title} — Fouad KADRII`;

  main.innerHTML = `
    <header class="case-hero">
      <div class="container">
        <a href="index.html#projects" class="back-link mono">← All Projects</a>
        <div class="case-badge ${p.badgeClass}">${p.badge}</div>
        <h1 class="case-title">${p.title}</h1>
        <p class="case-subtitle">${p.subtitle}</p>
        <div class="case-tech">
          ${p.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
        ${p.links && (p.links.live || p.links.github) ? `
          <div class="case-links">
            ${p.links.live ? `<a href="${p.links.live}" target="_blank" rel="noopener" class="btn btn-primary magnetic"><span>Live Site</span></a>` : ''}
            ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener" class="btn btn-ghost magnetic"><span>GitHub</span></a>` : ''}
          </div>
        ` : ''}
      </div>
    </header>

    <section class="case-section">
      <div class="container case-container">
        <div class="case-block" data-reveal>
          <span class="section-label mono">// Overview</span>
          <p class="case-text">${p.overview}</p>
        </div>

        <div class="case-block" data-reveal>
          <span class="section-label mono">// The Problem</span>
          <p class="case-text">${p.problem}</p>
        </div>

        <div class="case-block" data-reveal>
          <span class="section-label mono">// The Solution</span>
          <ul class="case-list">
            ${p.solution.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="case-block" data-reveal>
          <span class="section-label mono">// Results</span>
          <div class="results-grid">
            ${p.results.map(r => `
              <div class="result-card tilt">
                <div class="result-num">${r.num}</div>
                <div class="result-label">${r.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="case-block" data-reveal>
          <span class="section-label mono">// Tech Stack</span>
          <div class="stack-grid">
            ${Object.entries(p.stack).map(([cat, items]) => `
              <div class="stack-cat">
                <h4>${cat}</h4>
                <div class="skill-tags">
                  ${items.map(i => `<span class="skill-tag">${i}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="case-block case-lessons" data-reveal>
          <span class="section-label mono">// Lessons Learned</span>
          <p class="case-text">${p.lessons}</p>
        </div>

        <div class="case-nav" data-reveal>
          <a href="index.html#projects" class="btn btn-ghost magnetic"><span>← Back to all projects</span></a>
          <a href="index.html#contact" class="btn btn-primary magnetic"><span>Work with me →</span></a>
        </div>
      </div>
    </section>
  `;

  // Re-init observers after render
  if (window.initReveals) window.initReveals();
  if (window.initTilt) window.initTilt();
}

/* Auto-init on home */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});