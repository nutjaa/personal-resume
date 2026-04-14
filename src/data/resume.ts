export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: { category: string; items: string[] }[];
  projects: Project[];
  awards?: Award[];
  languages?: { lang: string; level: string }[];
}

const resume: ResumeData = {
  name: "Nut Chanyong",
  title: "Teach Lead · Software Engineer",
  contact: {
    email: "nutjaa@msn.com",
    phone: "+66 089-188-3204",
    location: "Bangkok, Thailand",
    linkedin: "https://www.linkedin.com/in/nut-chanyong-57592019/",
    github: "https://github.com/nutjaa",
    website: "https://nutchanyong.com",
  },
  summary:
    "Software engineer with 17+ years of experience delivering full-stack web and mobile applications across a wide range of industries. " +
    "I thrive at the intersection of clean architecture, great user experience, and high performance. " +
    "Currently deeply passionate about AI product development workflow — from ideation and model integration to end-to-end delivery — " +
    "and focused on building intelligent products that create real user value.",
  experience: [
    {
      role: "Teach Lead",
      company: "PaloIT (LMWN)",
      period: "Jan 2026 – Mar 2026",
      location: "Bangkok, Thailand",
      bullets: [
        "Partnered with GitHub to lead a mission-critical POC for GitLab-to-GitHub migration for enterprise customers.",
        "Defined ROI framework and implemented an ROI dashboard to quantify migration value for stakeholders.",
        "Guided customers through pilot repository migrations including full CI/CD pipeline migration and validation.",
        "Acted as a GitHub representative, providing technical advisory and support throughout the customer engagement.",
      ],
    },
    {
      role: "Teach Lead",
      company: "PaloIT (Capitalland)",
      period: "Sep 2025 – Dec 2025",
      location: "Bangkok, Thailand",
      bullets: [
        "Built a full-stack AI-powered resume screening platform to significantly reduce manual HR operation time.",
        "Implemented AI classification and scoring pipeline to match candidates against job descriptions with high accuracy.",
        "Integrated with Workday to streamline candidate data flow between systems.",
        "Stack: React, FastAPI, Azure Cosmos DB, Azure AI Foundry.",
        "First project to fully adopt the AI Product Development Lifecycle (AI PDLC) methodology.",
      ],
    },
    {
      role: "Teach Lead",
      company: "PaloIT (BANK)",
      period: "Feb 2025 – July 2025",
      location: "Bangkok, Thailand",
      bullets: [
        "Helped a leading bank integrate existing services to comply with new government requirements.",
        "Integrated merchant EDC terminals, Standard Payment API, and Mobile Payment channels.",
        "Redesigned mobile application architecture to support Mini App model, enabling third-party embedded experiences.",
        "Stack: Spring Boot, Vue.js, Angular, Flutter.",
      ],
    },
    {
      role: "Teach Lead",
      company: "PaloIT (BANK)",
      period: "May 2024 – Feb 2025",
      location: "Bangkok, Thailand",
      bullets: [
        "Led modernization of a legacy merchant payment platform by migrating native mobile apps to Flutter.",
        "Consolidated two separate merchant applications into a single unified Flutter application, reducing maintenance overhead and improving UX consistency.",
        "Defined the new Flutter architecture, module structure, and shared component library adopted across both product lines.",
        "Coordinated across backend, design, and QA teams to ensure a smooth cutover with zero disruption to live merchants.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "PaloIT (DFS)",
      period: "Feb 2023 – April 2024",
      location: "Bangkok, Thailand",
      bullets: [
        "Implemented a travel agency management platform with highly complex, multi-tier commission rule configurations.",
        "Built a real-time commission calculation engine that streams purchase data to compute and display agent commissions instantly.",
        "Stack: Symfony, NestJS, React, Strapi.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "PaloIT (BANK)",
      period: "Oct 2021 – Oct 2023",
      location: "Bangkok, Thailand",
      bullets: [
        "Modernized a legacy e-Wallet application reaching end-of-support (EOS) by re-platforming it to Flutter.",
        "Led reverse engineering with the team to document and fully understand existing business workflows.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Mindnovate",
      period: "Oct 2019 – Oct 2021",
      location: "Bangkok, Thailand",
      bullets: [
        "Co-implemented starfishlabz.com — an EdTech lab platform for interactive learning content.",
        "Led frontend and mobile development for starfishclass.com — a classroom management and e-learning platform.",
        "Led mobile development for doctorfriend.io — a telemedicine app connecting patients with doctors.",
        "Led full-stack and DevOps delivery of a therapist rehabilitation management platform, covering scheduling, session tracking, and progress reporting.",
      ],
    },
    {
      role: "Teach Lead",
      company: "Monoloop",
      period: "May 2015 – May 2019",
      location: "Bangkok, Thailand",
      bullets: [
        "Led end-to-end development of monoloop.com — a high-traffic web platform serving a large user base.",
        "Provided technical mentorship and support to an international distributed team across Pakistan and Vietnam.",
        "Architected and implemented scalability solutions to handle high-traffic load, ensuring uptime and performance under peak demand.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "WebIs",
      period: "May 2013 – May 2015",
      location: "Bangkok, Thailand",
      bullets: [
        "Built and maintained Slenky — a social content discovery and curation platform.",
        "Contributed to GreatLittlePlace — a location-based review and recommendation web application.",
        "Developed TeacherMedia — an online platform for educators to share and distribute teaching resources.",
        "Worked across the full stack on all three products, handling frontend, backend",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Monoloop",
      period: "May 2009 – May 2013",
      location: "Bangkok, Thailand",
      bullets: [
        "Designed and built full-stack web applications for Monoloop — a website personalization platform that allowed marketers to configure and deliver tailored page content to individual visitors based on defined rules and visitor attributes.",
        "Introduced Git-based workflows and code review practices that improved team velocity and reduced regression bugs.",
        "Took ownership of production infrastructure — server provisioning, deployment pipelines, and on-call incident response.",
        "Grew from mid-level into a senior role by leading feature delivery end-to-end and onboarding new engineers onto the team.",
      ],
    },
    {
      role: "Software Engineer",
      company: "JTS Jusmine Telecom System",
      period: "May 2006 – May 2008",
      location: "Bangkok, Thailand",
      bullets: [
        "Worked as an in-house engineer within the IT department of a telecom company focused on payphone systems.",
        "Developed and maintained internal management applications for payphone operations using Delphi.",
        "Supported day-to-day IT operations including system monitoring, bug fixing, and internal tooling for the operations team.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Sc. Computer Engineering",
      institution: "Kasetsart University",
      period: "2002 – 2006",
      detail: "GPA 3.21 — Computer Egineering Department",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Java", "TypeScript", "Python", "PHP", "Flutter", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Flutter"],
    },
    {
      category: "Backend",
      items: ["NestJs", "FastAPI", "Spring Boot", "Symfony", "Elysia"],
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Azure Cosmos DB"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "GitHub Actions", "AWS", "Azure", "Linux"],
    },
    {
      category: "Methodology",
      items: ["Agile / Scrum", "AI PDLC", "Team Lead (2–5 devs)"],
    },
  ],
  projects: [
  ],
  awards: [
    {
      title: "Outstanding Consultant of the Year",
      issuer: "PaloIT",
      year: "2025",
      description: "Recognised for exceptional client impact, technical leadership, and delivery excellence across multiple enterprise engagements.",
    },
  ],
  languages: [
    { lang: "English", level: "Intermediate" },
    { lang: "Thai", level: "Native" },
  ],
};

export default resume;
