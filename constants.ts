import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Khai Minh",
  title: "Supply Chain Analyst - Optimization Engineer - Process Engineer",
  tagline: "Building algorithms, mathematical models, analytics and data solutions in supply chain",
  bio: "I am a professional Analyst in supply chain, and operational optimization. Skilled in leveraging data-driven insights, predictive modeling, and optimization techniques to improve operational efficiency, reduce costs, and drive strategic decision-making. Experienced in using Python, SQL, and advanced analytics tools to solve complex business problems and deliver measurable impact. ",
  email: "trankhaiminh2706@gmail.com",
  github: "https://github.com/MinhBoba",
  linkedin: "https://www.linkedin.com/in/tr%E1%BA%A7n-kh%E1%BA%A3i-minh-109488291/",
  upwork: "https://www.upwork.com/freelancers/~01fad62ed85e7df9ac"
};

export const SKILLS: Skill[] = [
  {
    "category": "Data Engineering & Analytics",
    "items": ["Python", "SQL / T-SQL / PostgreSQL", "Pandas / NumPy", "Airflow", "dbt", "Snowflake"]
  },
  {
    "category": "AI & ML",
    "items": ["scikit-learn", "PyTorch", "TensorFlow", "Prophet", "XGBoost", "Gemini API"]
  },
  {
    "category": "Cloud & DevOps",
    "items": ["AWS", "Google Cloud", "Docker", "Kubernetes", "Redis", "GraphQL", "APIs"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Optimization Analyst",
    company: "Workforce Optimizer - AI enabled workforce",
    period: "7/2025 - Present",
    description: [
      "Led the migration of a legacy monolith to a micro-frontend architecture using React and Webpack.",
      "Improved site performance by 40% through code splitting and image optimization.",
      "Mentored 5 junior developers and established code quality standards."
    ]
  },
  {
    id: "2",
    role: "Optimization Engineer",
    company: "Nam Thuan Garment",
    period: "2/2025 - 7/2021",
    description: [
      "Developed custom e-commerce solutions for high-profile clients.",
      "Integrated payment gateways (Stripe, PayPal) and headless CMS platforms.",
      "Collaborated closely with designers to implement pixel-perfect UIs."
    ]
  }
];

export const INDUSTRIAL_PROJECTS: Project[] = [
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
export const PERSONAL_PROJECTS: Project[] = [
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
