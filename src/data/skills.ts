import { SkillCategory } from '../types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages & Core Theory',
    description: 'Programming languages, memory semantics, and core theoretical computer science principles.',
    skills: [
      { name: 'Python', level: 'Actively Using', context: 'Primary language for desktop software, automation, and backend APIs' },
      { name: 'Data Structures', level: 'Actively Using', context: 'Trees, graphs, heaps, hash tables, and custom memory structures' },
      { name: 'Algorithms', level: 'Actively Using', context: 'Graph traversal, dynamic programming, and complexity analysis' },
      { name: 'TypeScript', level: 'Familiar With', context: 'Type-safe client architectures and modern application engines' },
      { name: 'JavaScript', level: 'Familiar With', context: 'Async event loop, modern ESNext features, and runtime scripting' },
      { name: 'Rust', level: 'Exploring', context: 'Systems programming, memory safety without GC, and native modules' },
    ],
  },
  {
    title: 'Backend Systems & Architecture',
    description: 'High-performance asynchronous microservices, REST APIs, and database engineering.',
    skills: [
      { name: 'FastAPI', level: 'Actively Using', context: 'High-throughput async REST APIs, OpenAPI schemas, and endpoints' },
      { name: 'PostgreSQL', level: 'Actively Using', context: 'Relational database modeling, transactions, indexing, and SQL queries' },
      { name: 'REST APIs', level: 'Actively Using', context: 'API design, webhook ingestion, token auth, and service integration' },
      { name: 'Pydantic', level: 'Familiar With', context: 'Data validation, strict schema definitions, and model serializations' },
      { name: 'SQLAlchemy', level: 'Familiar With', context: 'Python SQL toolkit and Object Relational Mapping (ORM) workflows' },
      { name: 'Node.js', level: 'Exploring', context: 'Server-side JavaScript runtimes, npm ecosystem, and tooling' },
    ],
  },
  {
    title: 'Desktop Software & UI Engineering',
    description: 'Native desktop application GUIs, responsive frontends, and component architecture.',
    skills: [
      { name: 'PySide6', level: 'Actively Using', context: 'Enterprise desktop GUIs, Qt event loops, multithreading, and custom widgets' },
      { name: 'React', level: 'Exploring', context: 'Component hierarchies, reactive state management, and modern hooks' },
      { name: 'Tauri', level: 'Exploring', context: 'Lightweight desktop application framework with web frontends' },
      { name: 'HTML', level: 'Familiar With', context: 'Semantic markup, accessibility standards, and document structure' },
      { name: 'CSS', level: 'Familiar With', context: 'Modern responsive layouts, flexbox, grid, and CSS animations' },
      { name: 'Tailwind CSS', level: 'Exploring', context: 'Utility-first styling and rapid responsive UI composition' },
      { name: 'WordPress', level: 'Familiar With', context: 'CMS management, template customization, and e-commerce setups' },
    ],
  },
  {
    title: 'Data Science, Math & Machine Learning',
    description: 'Scientific computing, linear algebra, tensors, and neural network architectures.',
    skills: [
      { name: 'NumPy', level: 'Actively Using', context: 'Vectorized array computing, numerical operations, and matrix algebra' },
      { name: 'PyTorch', level: 'Familiar With', context: 'Tensors, deep learning architectures, and neural network training' },
      { name: 'Pandas', level: 'Familiar With', context: 'Data wrangling, tabular datasets, and structured analysis pipelines' },
      { name: 'SciPy', level: 'Familiar With', context: 'Scientific computing, scientific algorithms, and mathematical routines' },
      { name: 'R', level: 'Familiar With', context: 'Statistical computing, data analysis, and mathematical modeling' },
      { name: 'Advanced Math', level: 'Learning', context: 'Advanced probability and statistics, linear algebra, and numerical analysis' },
      { name: 'AI & ML', level: 'Learning', context: 'Machine learning fundamentals, intelligent systems, and agent models' },
      { name: 'Optimization', level: 'Learning', context: 'Mathematical optimization, combinatorial search, and heuristic solvers' },
    ],
  },
  {
    title: 'Web Scraping & Browser Automation',
    description: 'Stealth headless browsers, HTTP protocol ingestion, extension engineering, and automated extraction pipelines.',
    skills: [
      { name: 'nodriver', level: 'Actively Using', context: 'High-performance stealth browser automation without ChromeDriver' },
      { name: 'Requests', level: 'Actively Using', context: 'HTTP communication, payload handling, and network session management' },
      { name: 'Chrome Extension Development', level: 'Familiar With', context: 'Manifest V3 architecture, background service workers, content script DOM manipulation & scraping' },
      { name: 'Selenium', level: 'Familiar With', context: 'Browser automation, automated reporting, and form handling' },
      { name: 'BeautifulSoup', level: 'Familiar With', context: 'HTML/XML parsing, DOM tree navigation, and document scraping' },
    ],
  },
  {
    title: 'Cybersecurity, DevOps & Creative Tools',
    description: 'Packet diagnostics, container infrastructure, git workflows, and interface design.',
    skills: [
      { name: 'Cybersecurity', level: 'Learning', context: 'Network security, vulnerability analysis & ultimate focus: AI in Cybersecurity' },
      { name: 'Wireshark', level: 'Familiar With', context: 'Packet capture, protocol inspection, and network traffic diagnostics' },
      { name: 'Docker', level: 'Familiar With', context: 'Containerization, reproducible environments, and service isolation' },
      { name: 'Git & GitHub', level: 'Familiar With', context: 'Version control, collaborative workflows, and repository management' },
      { name: 'Photoshop', level: 'Actively Using', context: 'Digital image editing, asset retouching, and interface graphics... also drawing' },
    ],
  },
];
