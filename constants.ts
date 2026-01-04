import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Khai Minh",
  role: "Supply Chain Analyst", 
  title: "Optimization Engineer - Process Engineer",
  tagline: "Building algorithms, mathematical models, analytics and data solutions in supply chain",
  bio: "I am a professional Analyst in supply chain, and operational optimization. Skilled in leveraging data-driven insights, predictive modeling, and optimization techniques to improve operational efficiency, reduce costs, and drive strategic decision-making. Experienced in using Python, SQL, and advanced analytics tools to solve complex business problems and deliver measurable impact.",
  email: "trankhaiminh2706@gmail.com",
  github: "https://github.com/MinhBoba",
  linkedin: "https://www.linkedin.com/in/tr%E1%BA%A7n-kh%E1%BA%A3i-minh-109488291/",
  upwork: "https://www.upwork.com/freelancers/~01fad62ed85e7df9ac",
  profilePic: "/avatar.jpg", 
  social: {
    upwork: "https://www.upwork.com/freelancers/~01fad62ed85e7df9ac"
  }
};

export const SKILLS: Skill[] = [
  {
    category: "Data Engineering & Analytics",
    items: ["Python", "SQL / T-SQL / PostgreSQL", "Pandas / NumPy", "Airflow", "dbt", "Snowflake"]
  },
  {
    category: "AI & ML",
    items: ["scikit-learn", "PyTorch", "TensorFlow", "Prophet", "XGBoost", "Gemini API"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Redis", "GraphQL", "APIs"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Optimization Analyst",
    company: "Workforce Optimizer - AI enabled workforce",
    period: "7/2025 - Present", 
    description: [
      "Optimized workforce allocation algorithms using Python and Linear Programming.",
      "Developed data pipelines to process real-time operational data.",
      "Collaborated with cross-functional teams to implement AI-driven solutions."
    ]
  },
  {
    id: "2",
    role: "Optimization Engineer",
    company: "Nam Thuan Garment",
    period: "2/2021 - 7/2025", 
    description: [
      "Implemented process improvements reducing production cycle time by 15%.",
      "Analyzed supply chain data to identify bottlenecks and cost-saving opportunities.",
      "Managed inventory optimization models using SQL and Excel."
    ]
  }
];

export const INDUSTRIAL_PROJECTS: Project[] = [
  {
    id: "ind1",
    title: "Supply Chain Network Design",
    description: "Designed an optimal distribution network for a retail client, reducing logistics costs by 12%.",
    techStack: ["Python", "Gurobi", "Tableau"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    repoUrl: "#",
    demoUrl: "#"
  },
  {
    id: "ind2",
    title: "Demand Forecasting System",
    description: "Built a machine learning model to predict seasonal demand with 90% accuracy.",
    techStack: ["Python", "XGBoost", "SQL"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    repoUrl: "#",
    demoUrl: "#"
  }
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Route Optimization Tool",
    description: "A web app solving the Vehicle Routing Problem (VRP) using Google OR-Tools.",
    techStack: ["Python", "Flask", "React", "Google Maps API"],
    imageUrl: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    repoUrl: "https://github.com/MinhBoba",
    demoUrl: "#"
  },
  {
    id: "p2",
    title: "Inventory Management Bot",
    description: "Automated bot for tracking stock levels and sending reorder alerts.",
    techStack: ["Python", "Telegram API", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    repoUrl: "https://github.com/MinhBoba",
    demoUrl: "#"
  }
];

export const HERO_IMAGES = [
  "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
