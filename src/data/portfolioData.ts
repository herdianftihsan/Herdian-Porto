export type ProjectCategory = "all" | "ai-simulation" | "web-api";

export interface Project {
  id: "gridtwin" | "modulemind" | "facegram" | "ecommerce";
  cat: "ai-simulation" | "web-api";
  category: "AI & Simulation" | "Web & API Architecture";
  title: string;
  tag: string;
  sub: string;
  desc: string;
  stack: string[];
  live?: string;
  repo: string;
  arch: string;
  feat: string[];
}

export interface SkillItem {
  name: string;
  tip: string;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  desc: string;
  iconName: "frontend" | "backend" | "systems" | "database";
  skills: SkillItem[];
}

export interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  description: string;
  isHighlight?: boolean;
}

export const GITHUB_URL = "https://github.com/herdianftihsan";
export const LINKEDIN_URL = "";
export const EMAIL_ADDRESS = "herdianimmanuel98@gmail.com";
export const CV_PATH = "/Herdian_Immanuel_Todyas_CV.pdf";

export const PROJECTS: Project[] = [
  {
    id: "gridtwin",
    cat: "ai-simulation",
    category: "AI & Simulation",
    title: "GridTwin AI",
    tag: "INSEVENT 2026",
    sub: "Financial-Energy Decision Simulation & Monitoring Web App",
    desc: "Interactive canvas, real-time telemetry simulation, and automated decision insights for commercial properties.",
    stack: ["Next.js", "Node.js", "Supabase", "Gemini API"],
    repo: "https://github.com/herdianftihsan/Gridtwin",
    arch: "A Next.js front end renders an interactive canvas of a building’s energy nodes. A Node.js layer streams simulated telemetry into the UI, persists scenarios in Supabase, and sends summarized state to the Gemini API to produce plain-language decision insights.",
    feat: [
      "Interactive canvas for placing and inspecting energy nodes",
      "Real-time telemetry simulation with live charts",
      "Automated financial-energy decision insights",
      "Built for INSEVENT 2026",
    ],
  },
  {
    id: "modulemind",
    cat: "ai-simulation",
    category: "AI & Simulation",
    title: "ModuleMind",
    tag: "2026",
    sub: "AI-Powered Coding Trainer & Case Study Generator",
    desc: "Generates contextual programming case studies and automated code evaluation for vocational education.",
    stack: ["React.js", "Node.js", "Express", "Tailwind CSS", "Groq", "Gemini API"],
    live: "https://modulemind-sandy.vercel.app/",
    repo: "https://github.com/herdianftihsan/modulemind",
    arch: "A React client talks to an Express API that prompts Groq and Gemini to (1) generate case studies tailored to a module and (2) evaluate submitted code, returning line-level feedback. Deployed on Vercel.",
    feat: [
      "Contextual case-study generation per learning module",
      "Automated code evaluation with readable feedback",
      "Designed around vocational education needs",
      "Deployed on Vercel",
    ],
  },
  {
    id: "facegram",
    cat: "web-api",
    category: "Web & API Architecture",
    title: "Facegram RESTful API",
    tag: "Backend Architecture · 2026",
    sub: "Social Media Backend Service",
    desc: "A structured RESTful backend API engineered for a social media platform (Instagram-like), handling user authentication, post feeds, follow graphs, and media interactions with strict payload validation.",
    stack: ["PHP", "Laravel", "RESTful API", "MySQL", "Postman", "Git"],
    repo: "https://github.com/herdianftihsan/api-facegram",
    arch: "Designed and implemented a modular REST API architecture supporting token-based authentication, relational database modeling for user connections (followers/following), post/comment lifecycle management, and structured JSON response contracts. Demonstrates clean endpoint routing, middleware security, and reliable client-server data communication.",
    feat: [
      "Token-based user authentication & middleware security",
      "Relational database modeling for user connections (followers/following)",
      "Post and comment lifecycle management with strict payload validation",
      "Structured JSON response contracts & Postman API documentation",
    ],
  },
  {
    id: "ecommerce",
    cat: "web-api",
    category: "Web & API Architecture",
    title: "Full-Stack E-Commerce Platform",
    tag: "Full-Stack Web Application · 2026",
    sub: "Dynamic Catalog & Order Management",
    desc: "An end-to-end e-commerce web application featuring dynamic product catalogs, cart state management, order checkout workflows, and relational inventory management.",
    stack: ["PHP / Laravel", "JavaScript", "Tailwind CSS / Bootstrap", "MySQL", "Git"],
    repo: "https://github.com/herdianftihsan/E-commerce",
    arch: "Built a complete full-stack web platform handling product discovery, category filtering, shopping cart persistence, and structured order processing. Focused on responsive UI/UX components, clean MVC/modular code organization, and optimized SQL queries for fast catalog rendering.",
    feat: [
      "Dynamic product catalog with category search and filtering",
      "Session-persistent shopping cart and checkout order processing",
      "Relational inventory management and optimized SQL queries",
      "Responsive full-stack UI built with clean MVC architecture",
    ],
  },
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    id: "frontend",
    title: "Frontend & Monitoring UI",
    desc: "Responsive interfaces and dashboards for live data.",
    iconName: "frontend",
    skills: [
      { name: "React.js", tip: "Used in ModuleMind" },
      { name: "Next.js", tip: "Used in GridTwin AI" },
      { name: "Tailwind CSS", tip: "Used in ModuleMind" },
      { name: "Bootstrap", tip: "Earlier web projects" },
      { name: "Interactive Canvas", tip: "Used in GridTwin AI" },
      { name: "Responsive Dashboards", tip: "Monitoring UIs" },
    ],
  },
  {
    id: "backend",
    title: "Backend, Cloud & AI",
    desc: "APIs, hosting, and LLM integrations.",
    iconName: "backend",
    skills: [
      { name: "Node.js", tip: "Used in GridTwin AI & ModuleMind" },
      { name: "Express.js", tip: "Used in ModuleMind" },
      { name: "PHP", tip: "Web coursework" },
      { name: "Laravel", tip: "Web coursework" },
      { name: "Supabase", tip: "Used in GridTwin AI" },
      { name: "Google Cloud Run", tip: "Cloud deployment" },
      { name: "Vertex AI", tip: "AI platform" },
      { name: "Gemini API", tip: "Used in both AI projects" },
      { name: "Vercel", tip: "ModuleMind deployment" },
    ],
  },
  {
    id: "systems",
    title: "Systems & Low-Level",
    desc: "Close-to-the-metal fundamentals.",
    iconName: "systems",
    skills: [
      { name: "C", tip: "Core Systems Coursework" },
      { name: "C++ Basics", tip: "Foundational" },
      { name: "Java", tip: "OOP Coursework" },
      { name: "Python Basics", tip: "Data learning path" },
      { name: "Linux (Fedora)", tip: "Daily driver" },
      { name: "Git & GitHub", tip: "All projects" },
      { name: "Embedded / ROS 2 Readiness", tip: "Telemetry exploration" },
    ],
  },
  {
    id: "database",
    title: "Databases & Networking",
    desc: "Data storage and traffic analysis.",
    iconName: "database",
    skills: [
      { name: "PostgreSQL", tip: "Backs Supabase projects" },
      { name: "MySQL", tip: "Coursework" },
      { name: "Oracle SQL", tip: "Coursework" },
      { name: "Wireshark", tip: "Packet analysis" },
      { name: "Cisco Packet Tracer", tip: "Routing topologies" },
    ],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026",
    role: "Finalist / Developer",
    organization: "INSEVENT 2026",
    description: "Developed the GridTwin AI simulation platform.",
    isHighlight: true,
  },
  {
    year: "2026",
    role: "3rd place in MINICLASS 2026",
    organization: "Himpunan Mahasiswa Teknik Informatika - PENS",
    description: "Preparing for the web technology category.",
  },
  {
    year: "2025 – Present",
    role: "Informatics Engineering Student",
    organization: "Politeknik Elektronika Negeri Surabaya (PENS)",
    description: "Undergraduate studies in algorithms, systems programming, and networking.",
    isHighlight: true,
  },
    {
    year: "2024",
    role: "Finalist LKS at National Web technology level",
    organization: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, Pusat Prestasi Nasional,Balai Pengembangan Talenta Indonesia",
    description: "Client Side: Create a client-side game using vanilla javascript.Speedtest: Perform multiple tasks with specific requirements and rules in a fairly short period of time. Server Side: Create a RESTful API with Laravel and consume it on the frontend",
  },
  {
    year: "2024",
    role: "1st place in LKS at Kalimantan Province level for Web technology",
    organization: "PUSPERNAS · Pemerintah Provinsi Kalimantan Utara Dinas Pendidikan Dan kebudayaan",
    description: "Client Side: Create a client-side game using vanilla javascript. Server Side: Create a RESTful API with Laravel and consume it on the frontend",
  },
];
