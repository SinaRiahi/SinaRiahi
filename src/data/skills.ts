import { SkillCategory } from '../types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Core Languages',
    description: 'Languages used for desktop applications, systems programming, and high-performance workflows.',
    skills: [
      { name: 'Python', level: 'Actively Using', context: 'Desktop apps (PySide6), automation, data pipelines, FastAPI' },
      { name: 'TypeScript', level: 'Actively Using', context: 'Type-safe frontend development, Tauri plugins, web engines' },
      { name: 'Rust', level: 'Familiar With', context: 'Tauri v2 desktop core, memory safety, system hooks' },
      { name: 'SQL', level: 'Actively Using', context: 'PostgreSQL, relational data modeling, query optimization' },
      { name: 'R', level: 'Familiar With', context: 'Statistical computing, data analysis, scientific visualization' },
      { name: 'JavaScript', level: 'Actively Using', context: 'ESNext, asynchronous event loops, DOM engines' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Specialized desktop, scientific, and web application frameworks.',
    skills: [
      { name: 'PySide6 (Qt)', level: 'Actively Using', context: 'Enterprise desktop GUIs, multithreading, custom widgets' },
      { name: 'FastAPI', level: 'Actively Using', context: 'Asynchronous REST APIs, Pydantic validation, OpenAPI' },
      { name: 'Pandas & NumPy', level: 'Actively Using', context: 'Data wrangling, Excel dataset processing, numerical array math' },
      { name: 'SciPy', level: 'Familiar With', context: 'Scientific computing, optimization, statistical algorithms' },
      { name: 'React 19', level: 'Actively Using', context: 'Modern hooks, UI components, desktop webviews (Tauri)' },
      { name: 'Tauri v2', level: 'Familiar With', context: 'Lightweight cross-platform Windows desktop architectures' },
      { name: 'Pydantic', level: 'Actively Using', context: 'Strict data validation, schema enforcement, setting models' },
    ],
  },
  {
    title: 'Automation & Web Scraping',
    description: 'Automating repetitive business operations, marketplace synchronization, and dataset extraction.',
    skills: [
      { name: 'Selenium', level: 'Actively Using', context: 'Browser automation, automated report generation, form filling' },
      { name: 'nodriver', level: 'Actively Using', context: 'High-performance stealth browser automation without chromedriver' },
      { name: 'BeautifulSoup & Requests', level: 'Actively Using', context: 'HTTP scraping, HTML/XML parsing, payload extraction' },
      { name: 'REST APIs', level: 'Actively Using', context: 'Marketplace endpoints, webhook ingestion, token management' },
      { name: 'PostgreSQL', level: 'Actively Using', context: 'Relational data persistence, indexed tables, transaction safety' },
    ],
  },
  {
    title: 'Engineering Tools & Ecosystem',
    description: 'Essential environment configuration, network diagnostics, and visual design assets.',
    skills: [
      { name: 'Docker', level: 'Actively Using', context: 'Containerized services, reproducible environments' },
      { name: 'Git & GitHub', level: 'Actively Using', context: 'Version control, collaborative workflows, CI/CD pipelines' },
      { name: 'Wireshark', level: 'Familiar With', context: 'Network packet analysis, protocol inspection, endpoint debugging' },
      { name: 'Web Audio API & Canvas', level: 'Familiar With', context: 'In-browser audio manipulation and pixel-accurate graphics' },
      { name: 'Photoshop & Illustrator', level: 'Familiar With', context: 'Product photography retouching, visual UI assets, marketing' },
      { name: 'WordPress', level: 'Familiar With', context: 'CMS management, e-commerce catalog integrations' },
    ],
  },
];
