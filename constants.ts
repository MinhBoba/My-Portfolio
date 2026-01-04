import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Alex Dev",
  title: "Senior Full Stack Engineer",
  tagline: "Building scalable web applications with React, TypeScript, and AI.",
  bio: "I am a passionate software engineer with over 8 years of experience building high-performance web applications. I specialize in the React ecosystem and have recently been integrating LLMs like Gemini into production workflows. I am available for full-time roles and Upwork contracts.",
  email: "alex.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  upwork: "https://upwork.com"
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "D3.js"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"]
  },
  {
    category: "AI & Cloud",
    items: ["Gemini API", "Google Cloud", "AWS", "Docker", "Kubernetes"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: [
      "Led the migration of a legacy monolith to a micro-frontend architecture using React and Webpack.",
      "Improved site performance by 40% through code splitting and image optimization.",
      "Mentored 5 junior developers and established code quality standards."
    ]
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Creative Digital Agency",
    period: "2018 - 2021",
    description: [
      "Developed custom e-commerce solutions for high-profile clients.",
      "Integrated payment gateways (Stripe, PayPal) and headless CMS platforms.",
      "Collaborated closely with designers to implement pixel-perfect UIs."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "AI Analytics Dashboard",
    description: "A real-time dashboard visualizing complex datasets using D3.js, with natural language queries powered by Gemini.",
    techStack: ["React", "D3.js", "Gemini API", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    repoUrl: "#",
    demoUrl: "#"
  },
  {
    id: "p2",
    title: "E-Commerce SaaS Platform",
    description: "A multi-tenant e-commerce solution supporting 10k+ concurrent users.",
    techStack: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    repoUrl: "#",
    demoUrl: "#"
  },
  {
    id: "p3",
    title: "TaskMaster Pro",
    description: "Productivity application with offline support and real-time collaboration.",
    techStack: ["React", "Firebase", "PWA", "Redux"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    repoUrl: "#",
    demoUrl: "#"
  }
];