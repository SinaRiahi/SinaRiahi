import { Project, SkillCategory, JourneyMilestone } from '../types';

export type Language = 'en' | 'fr' | 'fa';

export interface TranslationsBundle {
  navbar: {
    projects: string;
    about: string;
    skills: string;
    journey: string;
    contact: string;
    resume: string;
    downloadResume: string;
    commands: string;
    skillsAndStack: string;
    journeyAndBackground: string;
  };
  hero: {
    availableStatus: string;
    name: string;
    role: string;
    bio: string;
    coreFocusLabel: string;
    focusItems: string[];
    exploreProjects: string;
    githubProfile: string;
    resumePdf: string;
    terminalMode: string;
  };
  about: {
    kicker: string;
    title: string;
    intro: string;
    academicFoundation: string;
    degree: string;
    universityAndYear: string;
    gpaBadge: string;
    linguisticProficiencies: string;
    languages: { name: string; level: string }[];
    acm: string;
    philosophyTitle: string;
    philosophyQuote: string;
    locationLabel: string;
    locationValue: string;
    capabilitiesTitle: string;
    capabilityCards: {
      title: string;
      desc: string;
      detail: string;
    }[];
    trackRecordPrefix: string;
    trackRecordText: string;
    viewTimeline: string;
  };
  projects: {
    kicker: string;
    title: string;
    description: string;
    categories: {
      All: string;
      'Systems & Backend': string;
      'Automation & Tools': string;
      'Product & Web': string;
    };
    featuredBuild: string;
    moreCount: string;
    readMore: string;
    modal: {
      caseStudy: string;
      stack: string;
      liveDemo: string;
      execSummary: string;
      problemSpace: string;
      engineeredSolution: string;
      techArchitecture: string;
      implementedCapabilities: string;
      yadbanShowcaseTitle: string;
      yadbanScreens: { title: string; desc: string }[];
      challengesAndLessons: string;
      challengeLabel: string;
      takeawayLabel: string;
      nextInShowcase: string;
      nextProject: string;
    };
    items: Project[];
  };
  skills: {
    kicker: string;
    title: string;
    descriptionPart1: string;
    descriptionHighlight: string;
    levels: {
      All: string;
      'Actively Using': string;
      'Familiar With': string;
      Learning: string;
      Exploring: string;
    };
    categoryLabel: string;
    synapticKicker: string;
    neuralNetworkTitle: string;
    categories: SkillCategory[];
  };
  experience: {
    kicker: string;
    title: string;
    description: string;
    focusLabel: string;
    milestones: JourneyMilestone[];
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    directInfoTitle: string;
    emailLabel: string;
    phoneLabel: string;
    callBtn: string;
    locationLabel: string;
    locationValue: string;
    currentlyPrefix: string;
    cvTitle: string;
    pdfDoc: string;
    resumeHeading: string;
    resumeDesc: string;
    downloadResumeBtn: string;
    githubProfile: string;
    linkedinProfile: string;
    instagramProfile: string;
    formTitle: string;
    formSubtitle: string;
    yourName: string;
    namePlaceholder: string;
    yourEmail: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    formSentMsg: string;
  };
  footer: {
    roleLine: string;
    engineeredLine: string;
    github: string;
    linkedin: string;
    instagram: string;
    resume: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationsBundle> = {
  en: {
    navbar: {
      projects: 'Projects',
      about: 'About',
      skills: 'Skills',
      journey: 'Journey',
      contact: 'Contact',
      resume: 'Resume',
      downloadResume: 'Download Resume',
      commands: 'Commands ⌘K',
      skillsAndStack: 'Skills & Stack',
      journeyAndBackground: 'Journey & Background',
    },
    hero: {
      availableStatus: 'Available for part-time and freelance duties',
      name: 'Sina Riahi',
      role: 'Python & Systems Developer · Computer Science',
      bio: 'Specializing in desktop applications, business automation, data processing, web scraping, and workflow optimization. Experienced building production tools that automate repetitive operations, integrate with REST APIs, and process complex datasets.',
      coreFocusLabel: 'Core Focus:',
      focusItems: ['AI and ML', 'Cybersecurity', 'Automation', 'Web Scraping', 'General Tools'],
      exploreProjects: 'Explore Projects',
      githubProfile: 'GitHub Profile',
      resumePdf: 'Resume (PDF)',
      terminalMode: 'Terminal Mode',
    },
    about: {
      kicker: '01. Background & Professional Profile',
      title: 'Engineering tools that eliminate operational friction',
      intro: 'Python and systems developer specializing in desktop applications, business automation, data processing, web scraping, and workflow optimization. Experienced building production tools that automate repetitive operations, integrate with REST APIs, process Excel datasets, and generate business reports.',
      academicFoundation: 'Academic Foundation',
      degree: 'Bachelor of Computer Science',
      universityAndYear: 'Kharazmi University · Graduated 2026',
      gpaBadge: 'Cumulative Academic Average: 17.22 / 20',
      linguisticProficiencies: 'Linguistic Proficiencies:',
      languages: [
        { name: 'English', level: 'C2, Full Fluency' },
        { name: 'Persian', level: 'Native' },
        { name: 'French', level: 'A2, Fundamental Knowledge' },
      ],
      acm: 'Student Member, Association for Computing Machinery (ACM), 2024 – 2025',
      philosophyTitle: 'Core Engineering Philosophy',
      philosophyQuote: 'I build production tools that automate repetitive operations and solve real workflow friction. Small improvements made consistently compound into meaningful progress.',
      locationLabel: 'Location:',
      locationValue: 'Tehran, Iran',
      capabilitiesTitle: 'Production Capabilities & Focus Areas',
      capabilityCards: [
        {
          title: 'Business & Workflow Automation',
          desc: 'Engineered 14 production automation applications at Naria Gallery, automating repetitive manual operations, Excel reconciliation, and doubling average sales.',
          detail: 'Python · PySide6 · Pandas · REST APIs',
        },
        {
          title: 'Desktop Engineering & Systems',
          desc: 'Architecting high-performance modular desktop applications: Task Master (PySide6/Qt) and MyPal (Rust Tauri v2 + React 19 sandboxed plugin ecosystem).',
          detail: 'Rust · Tauri v2 · Qt · Multithreading',
        },
        {
          title: 'Web Scraping & Competitive Intelligence',
          desc: 'Building stealth web scraping engines (nodriver, Selenium, BeautifulSoup), real-time pricing alerts, and smart reorder recommendation algorithms.',
          detail: 'nodriver · BeautifulSoup · PostgreSQL · Docker',
        },
        {
          title: 'Client-Side Web & P2P Media Tools',
          desc: 'Developing in-browser privacy-preserving utilities (MD Studio, Audio Forge, QR Forge, WebRTC P2P file & clipboard bridge) with zero server dependencies.',
          detail: 'TypeScript · Web Audio API · WebRTC · Canvas',
        },
      ],
      trackRecordPrefix: 'Proven Track Record:',
      trackRecordText: 'Sales Department Manager at Naria Gallery & Sales Supervisor at Digikala (Peaksale).',
      viewTimeline: 'View Full Timeline',
    },
    projects: {
      kicker: '02. Engineered Projects & Systems',
      title: 'Evidence of software built & tested',
      description: 'Explore concrete implementations spanning modular desktop utilities, business automation, linguistic edge processors, and data scraping systems.',
      categories: {
        All: 'All',
        'Systems & Backend': 'Systems & Backend',
        'Automation & Tools': 'Automation & Tools',
        'Product & Web': 'Product & Web',
      },
      featuredBuild: 'Featured Build',
      moreCount: 'more',
      readMore: 'Read more',
      modal: {
        caseStudy: 'Case Study',
        stack: 'Stack:',
        liveDemo: 'Live Demo',
        execSummary: '01. Executive Summary',
        problemSpace: 'The Problem Space',
        engineeredSolution: 'The Engineered Solution',
        techArchitecture: '02. Technical Architecture & Invariants',
        implementedCapabilities: '03. Implemented Capabilities',
        yadbanShowcaseTitle: 'Yadban App Interface & Screen Showcase',
        yadbanScreens: [
          {
            title: '1. Jalebi Calendar & Appointments',
            desc: 'Built with Jalebi Calendar for scheduling appointments, tracking tasks, daily busy heatmaps, and quick event registration.',
          },
          {
            title: '2. Multi-Calendar Date Converter',
            desc: 'Effortlessly convert dates between Shamsi (Solar), Gregorian (Miladi), and Islamic Lunar (Qamari) with one-touch copy.',
          },
          {
            title: '3. Holidays & Occasions',
            desc: 'Comprehensive Persian calendar integration displaying all official holidays, national occasions, and historical event logs.',
          },
          {
            title: '4. Weekly Schedule & Task Tracker',
            desc: 'Organize weekly routines, study sessions, and recurring tasks in a visual timetable with status checking.',
          },
          {
            title: '5. Custom Schedule & View Builder',
            desc: 'Create custom fields, choose input types, apply color palettes, set custom labels, and configure priority stars for tailored workflows.',
          },
        ],
        challengesAndLessons: '04. Critical Challenges & Lessons Learned',
        challengeLabel: 'Challenge: ',
        takeawayLabel: 'Takeaway: ',
        nextInShowcase: 'Next in Showcase:',
        nextProject: 'Next Project',
      },
      items: [
        {
          id: 'mypal',
          title: 'MyPal',
          subtitle: 'Modular Desktop Utility & P2P Ecosystem',
          category: 'Systems & Backend',
          year: '2026 - present',
          status: 'In Active Development',
          featured: true,
          technologies: ['Rust', 'Tauri v2', 'TypeScript', 'React 19', 'Tailwind CSS', 'WebRTC'],
          summary: 'A lightweight, modular Windows desktop utility architected with Rust (Tauri v2) and React 19, featuring sandboxed runtime plugin injection, zero-config P2P file/clipboard sharing, and deep OS-level Windows hooks.',
          problem: 'Desktop power users are burdened by bloated multi-gigabyte utilities that run heavy background daemons and compromise privacy through unnecessary cloud roundtrips for local device sharing.',
          solution: 'Designed an ultra-lean core executable in Rust that delegates non-essential functionality to hot-swappable external modules, coupled with a WebRTC/WebSocket data channel bridge for instant LAN/QR file and clipboard sync.',
          keyFeatures: [
            'Sandboxed Plugin Loader: Dynamic runtime script evaluation with dependency injection and IndexedDB caching (manifest.json + bundled code).',
            'Zero-Config Mobile-to-PC Bridge: Instant file transfer and clipboard sync via WebRTC data channels and QR pairing, completely bypassing cloud servers.',
            'Deep Windows OS Integration: Global keyboard hook accelerators, system tray lifecycle handling, wake-word activation, multi-monitor bounds detection, and audited IPC bridge.',
            'Automated Distribution Pipeline: PowerShell, Batch, and Inno Setup automation producing standalone mypal.exe, modular zip packs, and enterprise installers with firewall rules.',
          ],
          architectureDetails: [
            'Tauri v2 IPC boundary enforcing strict capability-based permissions between the webview and Rust native threads.',
            'Decoupled diagnostic supervisor querying native Windows performance counters with minimal CPU impact.',
            'Cryptographically verified plugin signatures preventing unauthorized code execution in the sandboxed runtime.',
            'Local-first peer discovery using mDNS and WebRTC STUN/TURN fallbacks strictly on local network subnets.',
          ],
          challenges: [
            'Maintaining responsive UI rendering while streaming gigabyte-sized files across the local WebRTC data channel buffer.',
            'Handling multi-monitor DPI scaling discrepancies and borderless window snaps across Windows 10 and 11.',
          ],
          lessonsLearned: [
            'Rust + Tauri provides an order of magnitude memory advantage over Electron for background system utilities.',
            'Designing a plugin system around strict JSON manifests and isolated sandboxes makes long-term modularity effortless.',
          ],
        },
        {
          id: 'utilities-suite',
          title: 'Utilities Suite',
          subtitle: 'Web Productivity, Media Engineering & In-Browser IDE',
          category: 'Product & Web',
          year: '2026',
          status: 'Completed',
          featured: true,
          technologies: ['TypeScript', 'Node.js', 'Web Audio API', 'HTML5 Canvas', 'KaTeX', 'Mermaid.js'],
          summary: 'An all-in-one suite of high-performance, client-side web tools for advanced document authoring, media transformation, and secure peer-to-peer file transfer with zero required backend dependencies.',
          problem: 'Online media tools and markdown converters frequently send sensitive user documents and audio files to third-party servers, posing serious privacy hazards and bandwidth delays.',
          solution: 'Engineered an entirely browser-native toolset running 100% client-side computation, featuring MD Studio, Audio Forge, Image Forge, QR Forge, and room-based P2P transfer.',
          keyFeatures: [
            'MD Studio: Advanced split-screen Markdown IDE with live syntax highlighting, LaTeX/KaTeX typesetting, Mermaid flowcharts, and PDF/HTML export.',
            'Audio Forge: In-browser audio editor leveraging the Web Audio API for waveform trimming, gain normalization, and zero-latency audio filters.',
            'Image & QR Forge: Real-time raster/vector image transformation, QR code encoding/styling, and PDF-to-Markdown text extraction.',
            'Room-Based P2P Transfer: Ephemeral browser-to-browser large file sharing with end-to-end encryption.',
          ],
          architectureDetails: [
            'Web Workers offloading CPU-intensive audio DSP and image resampling from the primary UI thread.',
            'AST-based markdown parse pipeline with extensible syntax plug-ins for diagrams and math equations.',
            'Adaptive gesture-switching mobile engine providing tablet and smartphone parity with desktop editors.',
          ],
          challenges: [
            'Synchronizing split-screen scroll anchors across variable-height rendered formulas and diagrams.',
            'Managing memory pressure when processing large high-resolution images entirely in WebAssembly/Canvas memory.',
          ],
          lessonsLearned: [
            'Modern web browser APIs (Web Audio, Canvas, Web Workers) enable desktop-grade utility performance with zero cloud operational costs.',
            'Zero-backend architectures provide unmatched user privacy and infinite horizontal scalability.',
          ],
        },
        {
          id: 'task-master',
          title: 'Task Master',
          subtitle: 'E-Commerce Automation & Sales Operations Platform',
          category: 'Automation & Tools',
          year: '2024 – 2026',
          status: 'Completed',
          featured: true,
          technologies: ['Python', 'PySide6 (Qt)', 'FastAPI', 'Pandas', 'PostgreSQL', 'Excel Pipelines'],
          summary: 'A modular desktop platform engineered for e-commerce sellers to automate inventory management, promotional repricing, sales reporting, and high-volume order dispatch.',
          problem: 'Marketplace sellers on platforms like Digikala lose hours daily manually updating stock across listings, calculating margins, and generating disconnected spreadsheets.',
          solution: 'Built a 6-module PySide6 desktop suite integrating multithreaded background workers, REST API synchronization, and automated Excel data pipelines that doubled operational efficiency.',
          keyFeatures: [
            '6 Integrated Modules: Dedicated workflows for inventory sync, margin protection, batch dispatch, sales analytics, and automated report generation.',
            'Multithreaded Background Workers: Qt QThread architecture guaranteeing 60 FPS UI responsiveness during heavy network and data crunching.',
            'Automated Excel Data Pipelines: Ingestion, transformation, and reconciliation of complex marketplace sales datasets via Pandas.',
            'Enterprise Qt Desktop Interface: Polished PySide6 GUI with dark/light themes, custom data tables, and hotkey navigation.',
          ],
          architectureDetails: [
            'Model-View-Controller (MVC) separation isolating UI forms from backend data models and REST client connectors.',
            'Transactional staging queue preventing inventory desync when marketplace endpoints hit rate-limits.',
            'Automated audit logging recording all margin modifications, order states, and system events.',
          ],
          challenges: [
            'Handling sudden rate-limiting spikes from vendor APIs without dropping pending inventory adjustments.',
            'Preventing UI thread lockup when parsing Excel sheets containing tens of thousands of stock-keeping units (SKUs).',
          ],
          lessonsLearned: [
            'Building robust desktop automation requires rigorous error isolation and explicit status telemetry for non-technical operators.',
            'Multithreaded worker pools with Qt signals/slots provide unmatched stability for high-volume data operations.',
          ],
        },
        {
          id: 'yadban',
          title: 'Yadban',
          subtitle: 'Smart Persian Calendar & Appointment Scheduling Android App (Live on Myket)',
          category: 'Product & Web',
          year: '2026',
          status: 'Completed',
          featured: false,
          technologies: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Room Database', 'Jalebi Calendar', 'Material 3'],
          summary: 'Yadban is an advanced Persian Android scheduling and calendar application featuring the Jalebi Calendar (Jalali, Miladi, Qamari), appointment management, task tracking, date conversion, and custom schedule and view creation.',
          problem: 'Traditional calendar and scheduling apps lack deep integration with Persian/Jalali dates, custom fields, and flexible appointment/task workflows needed by power users and students.',
          solution: 'Engineered a polished Android application featuring the robust Jalebi Calendar engine, smart daily heatmaps, multi-calendar date conversion, weekly schedule grid, and fully customizable task fields.',
          keyFeatures: [
            'Jalebi Calendar & Events: Comprehensive Jalali/Persian calendar integration with holidays, national occasions, and event tracking.',
            'Appointment & Task Scheduling: Quick scheduling system for meetings, tasks, and timed activities with duration tracking.',
            'Multi-Calendar Date Conversion: Seamless conversion between Shamsi, Gregorian, and Islamic Lunar calendars with one-touch copy.',
            'Custom Schedule & View Builder: Fully customizable input types, color palettes, custom field names, and priority star ratings.',
            'Live on Myket: Officially published and available for Android users on the Myket app store.',
          ],
          architectureDetails: [
            'Clean MVVM architecture using Jetpack Compose and Material 3 design principles for a fluid 60 FPS mobile UI.',
            'Room relational database storing recurring schedules, calendar events, and custom task configurations.',
            'Efficient Jalebi calendar computation engine handling cross-calendar epoch conversions instantly.',
          ],
          challenges: [
            'Accurately aligning complex Persian leap-year calculations and multi-calendar holiday mappings across various epochs.',
            'Optimizing Compose layout renders for high-density calendar grid views with active event heatmaps.',
          ],
          lessonsLearned: [
            'Deep localization and native calendar support are paramount for regional productivity tools.',
            'Jetpack Compose state management simplifies complex grid rendering and dynamic form builders.',
          ],
          liveUrl: 'https://myket.ir',
        },
        {
          id: 'finglish-bot',
          title: 'Finglish Bot',
          subtitle: 'Linguistic Transliteration Telegram Bot via Cloudflare Workers & Python',
          category: 'Automation & Tools',
          year: '2025',
          status: 'Completed',
          featured: false,
          technologies: ['Python', 'Telegram Bot API', 'Cloudflare Workers', 'Wrangler', 'Serverless'],
          summary: 'A fast, lightweight Telegram bot that transforms informal Finglish (Persian written with Latin alphabet characters) into correct Persian script with contextual orthographic rules.',
          problem: 'Informal bilingual communication frequently utilizes Latin letters for Persian expressions, resulting in reading strain and unindexed searchability.',
          solution: 'Created an intelligent mapping engine that analyzes phonetic character clusters, resolves common diacritic ambiguities, and operates at minimal latency via edge-deployed serverless webhooks.',
          keyFeatures: [
            'Rule-Based Phonetic Mapping: Converts multi-character digraphs (e.g., "kh", "sh", "ch", "zh") and contextual vowel placements.',
            'Inline Bot Query Support: Users can transliterate text in any Telegram chat window without leaving the conversation.',
            'Serverless Edge Gateway: Webhook ingestion with rapid response times and zero cold-start downtime.',
            'Zero Data Retention: Respects user privacy by processing transliterations purely in-flight without storage.',
          ],
          architectureDetails: [
            'Dual-tier pipeline: Python prototyping environment for linguistic rules combined with Cloudflare Worker deployment.',
            'Optimized regular expression tokenization and prefix/suffix morphological lookups.',
            'Stateless request handling fulfilling Telegram webhook SLA under 150ms.',
          ],
          challenges: [
            'Handling colloquial slang and idiosyncratic spelling variations across different user age groups.',
            'Navigating right-to-left (RTL) text direction switches when punctuation or mixed English words appear in input.',
          ],
          lessonsLearned: [
            'Edge compute is ideal for high-throughput, micro-payload text transformations.',
            'Rule-based text systems remain substantially faster and more predictable than large models for deterministic transliteration tasks.',
          ],
        },
        {
          id: 'scraping-automation-suite',
          title: 'Web Scraping & Competitive Intelligence Suite',
          subtitle: 'Stealth Browser Automation & Reorder Recommendation System',
          category: 'Automation & Tools',
          year: '2024 – 2025',
          status: 'Completed',
          featured: false,
          technologies: ['Python', 'nodriver', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Docker'],
          summary: 'High-speed scraping engines and competitive intelligence dashboards designed to track market fluctuations, monitor catalog pricing, and power an automated smart reorder recommendation system.',
          problem: 'Marketplace merchants face constantly shifting competitor pricing and inventory stockouts that erode sales without 24/7 monitoring.',
          solution: 'Engineered stealth web scrapers utilizing nodriver and undetected browser techniques, feeding historical pricing into an automated recommendation engine that flags optimal reorder times.',
          keyFeatures: [
            'Stealth Browser Automation: Anti-bot bypass with nodriver and Selenium for reliable daily execution.',
            'Smart Reorder Recommendation: Heuristic algorithms calculating sell-through velocity and lead times.',
            'Product Image Processing Pipeline: Automated image resizing, watermarking, and catalog packaging.',
            'Competitive Intelligence Dashboard: Real-time price disparity alerts and historical trend reports.',
          ],
          architectureDetails: [
            'Distributed worker architecture scheduled via cron and Docker container queues.',
            'Resilient database persistence storing structured market pricing in PostgreSQL.',
            'Telegram notification bot alerting operations managers to critical pricing events.',
          ],
          challenges: [
            'Bypassing shifting bot detection mechanisms without triggering IP bans.',
            'Normalizing unstructured seller data across divergent e-commerce listing formats.',
          ],
          lessonsLearned: [
            'nodriver provides vastly superior performance and lower resource footprint compared to traditional ChromeDriver setups.',
            'Data pipelines must implement defensive schemas to absorb upstream HTML restructuring gracefully.',
          ],
        },
      ],
    },
    skills: {
      kicker: '04. Technical Capabilities & Proficiencies',
      title: 'Skills, Technologies & Systems',
      descriptionPart1: 'A comprehensive breakdown of the programming languages, backend frameworks, automation engines, and system architecture tools I work with daily — driven toward my ultimate goal of ',
      descriptionHighlight: 'AI in Cybersecurity',
      levels: {
        All: 'All',
        'Actively Using': 'Actively Using',
        'Familiar With': 'Familiar With',
        Learning: 'Learning',
        Exploring: 'Exploring',
      },
      categoryLabel: 'Category:',
      synapticKicker: 'Synaptic Skill Architecture',
      neuralNetworkTitle: '3D Neural Brain Network',
      categories: [
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
      ],
    },
    experience: {
      kicker: '05. Trajectory & Learning Milestones',
      title: 'From biological systems to algorithmic engineering',
      description: 'A chronological timeline documenting self-directed projects, academic milestones, and the transition into computer science.',
      focusLabel: 'Focus:',
      milestones: [
        {
          period: 'May 2025 – June 2026',
          title: 'Sales Department Manager',
          organizationOrContext: 'Naria Gallery',
          description: 'Reduced repetitive tasks, improving operational accuracy and efficiency and doubling average sales. Engineered 14 custom automation applications that eliminated manual bottlenecks. Managed product photography, editing for online listings, built sales analysis tools, and generated executive management reports.',
          tags: ['14 Automation Apps', 'Workflow Optimization', 'Sales Analysis', 'Management Reports', 'Python'],
          type: 'project',
        },
        {
          period: 'August 2024 – May 2025',
          title: 'Sales Supervisor',
          organizationOrContext: 'Digikala (Peaksale) Division',
          description: 'Managed high-volume seller accounts on Digikala, optimizing product catalog listings and executing data-driven sales analysis to guide critical business decisions. Assisted in content creation and product photography for marketing, and managed promotional campaigns for increased marketplace engagement.',
          tags: ['Digikala Marketplace', 'Sales Analysis', 'Listing Optimization', 'E-Commerce', 'Promotions'],
          type: 'project',
        },
        {
          period: '2022 – 2026',
          title: 'Bachelor of Computer Science',
          organizationOrContext: 'Kharazmi University',
          description: 'Graduated in 2026 with a high cumulative academic average of 17.22 / 20. Comprehensive foundation in algorithms, data structures, advanced probability and statistics, linear algebra, numerical analysis, software design, and systems programming.',
          tags: ['Average: 17.22/20', 'Probability & Stats', 'Linear Algebra', 'Numerical Analysis', 'Algorithms'],
          type: 'education',
        },
        {
          period: '2024 – 2025',
          title: 'Student Member',
          organizationOrContext: 'Association for Computing Machinery (ACM)',
          description: 'Engaged with the global computer science community, participating in specialized technical workshops, programming events, and collaborative algorithmic problem-solving sessions.',
          tags: ['ACM', 'Workshops', 'Programming Events', 'CS Community'],
          type: 'exploration',
        },
      ],
    },
    contact: {
      kicker: '06. Connect & Inquiries',
      title: 'Initiate a conversation',
      description: 'Interested in collaboration, internship opportunities, software discussions, or reviewing project source code? Feel free to reach out directly.',
      directInfoTitle: 'Direct Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone & Telegram',
      callBtn: 'Call',
      locationLabel: 'Location:',
      locationValue: 'Tehran, Iran',
      currentlyPrefix: "I'm currently",
      cvTitle: 'Engineering Curriculum Vitae',
      pdfDoc: 'PDF Document',
      resumeHeading: 'Sina Riahi · Resume',
      resumeDesc: 'Download a printable PDF summary of technical coursework, projects, and systems proficiencies.',
      downloadResumeBtn: 'Download Resume (PDF)',
      githubProfile: 'GitHub Profile',
      linkedinProfile: 'LinkedIn Profile',
      instagramProfile: 'Instagram (@sina___riahi)',
      formTitle: 'Send a Direct Message',
      formSubtitle: 'Dispatches directly to your default mail application pre-filled with the message details.',
      yourName: 'Your Name',
      namePlaceholder: 'e.g. S... R.....',
      yourEmail: 'Your Email',
      emailPlaceholder: 'e.g. ...@example.com',
      messageLabel: 'Message / Inquiry',
      messagePlaceholder: 'Describe your project, role, or discussion topic...',
      sendBtn: 'Send Message via Mail Client',
      formSentMsg: '✓ Opening mail client with message pre-filled!',
    },
    footer: {
      roleLine: 'Sina Riahi · Computer Science Developer',
      engineeredLine: 'Engineered with React, TypeScript, Vite & Tailwind CSS. Built for performance and accessibility.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      resume: 'Resume',
    },
  },

  fr: {
    navbar: {
      projects: 'Projets',
      about: 'À propos',
      skills: 'Compétences',
      journey: 'Parcours',
      contact: 'Contact',
      resume: 'CV',
      downloadResume: 'Télécharger le CV',
      commands: 'Commandes ⌘K',
      skillsAndStack: 'Compétences & Stack',
      journeyAndBackground: 'Parcours & Formation',
    },
    hero: {
      availableStatus: 'Disponible pour des missions à temps partiel et freelance',
      name: 'Sina Riahi',
      role: 'Développeur Python & Systèmes · Informatique',
      bio: "Spécialisé dans les applications de bureau, l'automatisation des processus métiers, le traitement de données, le web scraping et l'optimisation des flux de travail. Expérimenté dans la création d'outils de production qui automatisent les opérations répétitives et s'intègrent aux API REST.",
      coreFocusLabel: 'Domaines clés :',
      focusItems: ['IA et ML', 'Cybersécurité', 'Automatisation', 'Web Scraping', 'Outils Système'],
      exploreProjects: 'Explorer les Projets',
      githubProfile: 'Profil GitHub',
      resumePdf: 'CV (PDF)',
      terminalMode: 'Mode Terminal',
    },
    about: {
      kicker: '01. Parcours & Profil Professionnel',
      title: 'Concevoir des outils qui éliminent les frictions opérationnelles',
      intro: "Développeur Python et systèmes spécialisé dans les logiciels de bureau, l'automatisation d'entreprise, l'analyse de données, le web scraping et l'optimisation des flux de travail. Conception d'outils de production automatisant les tâches répétitives, connectés aux API REST et générant des rapports analytiques.",
      academicFoundation: 'Formation Académique',
      degree: 'Licence en Informatique (B.Sc.)',
      universityAndYear: 'Université Kharazmi · Diplômé en 2026',
      gpaBadge: 'Moyenne Générale Cumulée : 17.22 / 20',
      linguisticProficiencies: 'Compétences Linguistiques :',
      languages: [
        { name: 'Anglais', level: 'C2, Maîtrise Complète' },
        { name: 'Persan', level: 'Langue Maternelle' },
        { name: 'Français', level: 'A2, Connaissances Fondamentales' },
      ],
      acm: "Membre Étudiant, Association for Computing Machinery (ACM), 2024 – 2025",
      philosophyTitle: "Philosophie d'Ingénierie",
      philosophyQuote: "Je conçois des outils de production qui automatisent les opérations répétitives et résolvent les vraies frictions. De petites améliorations constantes produisent des progrès majeurs.",
      locationLabel: 'Localisation :',
      locationValue: 'Téhéran, Iran',
      capabilitiesTitle: 'Capacités de Production & Domaines Clés',
      capabilityCards: [
        {
          title: 'Automatisation des Flux Métiers',
          desc: "Conception de 14 applications d'automatisation en production chez Naria Gallery, éliminant les tâches manuelles, réconciliant les fichiers Excel et doublant les ventes moyennes.",
          detail: 'Python · PySide6 · Pandas · REST APIs',
        },
        {
          title: 'Ingénierie Desktop & Systèmes',
          desc: "Architecture d'applications de bureau modulaires haute performance : Task Master (PySide6/Qt) et MyPal (écosystème de plugins isolés sous Rust Tauri v2 + React 19).",
          detail: 'Rust · Tauri v2 · Qt · Multithreading',
        },
        {
          title: 'Web Scraping & Veille Concurrentielle',
          desc: "Développement de moteurs de scraping furtifs (nodriver, Selenium, BeautifulSoup), alertes tarifaires en temps réel et algorithmes intelligents de réapprovisionnement.",
          detail: 'nodriver · BeautifulSoup · PostgreSQL · Docker',
        },
        {
          title: 'Outils Web Client & Médias P2P',
          desc: "Création d'utilitaires web respectueux de la vie privée (MD Studio, Audio Forge, QR Forge, partage P2P WebRTC) sans aucune dépendance serveur.",
          detail: 'TypeScript · Web Audio API · WebRTC · Canvas',
        },
      ],
      trackRecordPrefix: 'Expérience Prouvée :',
      trackRecordText: 'Responsable du Département des Ventes chez Naria Gallery & Superviseur des Ventes chez Digikala (Peaksale).',
      viewTimeline: 'Voir tout le parcours',
    },
    projects: {
      kicker: '02. Projets & Systèmes Conçus',
      title: 'Preuves logicielles conçues et testées',
      description: "Découvrez des réalisations concrètes couvrant les utilitaires de bureau modulaires, l'automatisation métier, le traitement linguistique et l'extraction de données.",
      categories: {
        All: 'Tous',
        'Systems & Backend': 'Systèmes & Backend',
        'Automation & Tools': 'Automatisation & Outils',
        'Product & Web': 'Produit & Web',
      },
      featuredBuild: 'Projet Phare',
      moreCount: 'de plus',
      readMore: 'Lire la suite',
      modal: {
        caseStudy: 'Étude de Cas',
        stack: 'Technologies :',
        liveDemo: 'Démo Live',
        execSummary: '01. Résumé Exécutif',
        problemSpace: 'Problématique',
        engineeredSolution: 'Solution Technique',
        techArchitecture: '02. Architecture Technique & Invariants',
        implementedCapabilities: '03. Fonctionnalités Implémentées',
        yadbanShowcaseTitle: "Interface & Aperçu de l'Application Yadban",
        yadbanScreens: [
          {
            title: '1. Calendrier Jalebi & Rendez-vous',
            desc: "Conçu avec le calendrier Jalebi pour planifier des rendez-vous, suivre les tâches, visualiser les cartes thermiques d'activité et enregistrer des événements.",
          },
          {
            title: '2. Convertisseur Multi-Calendriers',
            desc: 'Convertissez facilement les dates entre les calendriers solaire (Shamsi), grégorien et lunaire avec copie instantanée.',
          },
          {
            title: '3. Jours Fériés & Événements',
            desc: 'Intégration complète du calendrier persan affichant tous les jours fériés officiels et événements nationaux.',
          },
          {
            title: '4. Planning Hebdomadaire & Suivi',
            desc: "Organisez vos routines hebdomadaires, sessions d'étude et tâches récurrentes dans un emploi du temps visuel.",
          },
          {
            title: '5. Constructeur de Vues Personnalisées',
            desc: "Créez des champs sur mesure, choisissez des palettes de couleurs et configurez des niveaux de priorité adaptés à votre flux.",
          },
        ],
        challengesAndLessons: '04. Défis Techniques & Enseignements',
        challengeLabel: 'Défi : ',
        takeawayLabel: 'Leçon retenue : ',
        nextInShowcase: 'Projet suivant :',
        nextProject: 'Projet Suivant',
      },
      items: [
        {
          id: 'mypal',
          title: 'MyPal',
          subtitle: 'Utilitaire de Bureau Modulaire & Écosystème P2P',
          category: 'Systems & Backend',
          year: '2026 - présent',
          status: 'En Développement Actif',
          featured: true,
          technologies: ['Rust', 'Tauri v2', 'TypeScript', 'React 19', 'Tailwind CSS', 'WebRTC'],
          summary: 'Un utilitaire de bureau Windows léger et modulaire conçu avec Rust (Tauri v2) et React 19, doté de plugins isolés, de partage P2P sans configuration et de hooks système Windows.',
          problem: 'Les utilisateurs avancés subissent des utilitaires lourds de plusieurs gigaoctets qui exécutent des démons coûteux et compromettent la confidentialité via le cloud.',
          solution: "Conception d'un noyau exécutable ultra-léger en Rust déléguant les fonctions aux modules externes interchangeables, couplé à un pont WebRTC pour la synchronisation LAN/QR instantanée.",
          keyFeatures: [
            "Chargeur de plugins isolé : Évaluation dynamique des scripts avec injection de dépendances et cache IndexedDB.",
            'Pont Mobile-PC sans configuration : Transfert instantané de fichiers et presse-papiers via WebRTC et QR code sans serveur cloud.',
            'Intégration profonde Windows : Raccourcis clavier globaux, gestion de la barre système, détection multi-écrans et pont IPC audité.',
            "Pipeline de distribution automatisé : Scripts PowerShell et Inno Setup générant des exécutables autonomes et installateurs d'entreprise.",
          ],
          architectureDetails: [
            'Frontière IPC Tauri v2 appliquant des permissions strictes entre la vue web et les threads natifs Rust.',
            'Superviseur de diagnostic découplé interrogeant les compteurs de performance Windows avec un impact CPU minimal.',
            "Signatures de plugins vérifiées cryptographiquement empêchant l'exécution de code non autorisé.",
            'Découverte locale des pairs via mDNS et WebRTC strictement sur le sous-réseau local.',
          ],
          challenges: [
            "Maintenir une interface fluide tout en transférant des fichiers de plusieurs gigaoctets via le tampon WebRTC.",
            "Gérer les écarts de mise à l'échelle DPI multi-moniteurs sous Windows 10 et 11.",
          ],
          lessonsLearned: [
            'Rust + Tauri offre un avantage mémoire considérable par rapport à Electron pour les utilitaires système.',
            'Concevoir un système de plugins autour de manifestes JSON stricts facilite la modularité à long terme.',
          ],
        },
        {
          id: 'utilities-suite',
          title: 'Utilities Suite',
          subtitle: 'Productivité Web, Ingénierie Média & IDE Navigateur',
          category: 'Product & Web',
          year: '2026',
          status: 'Terminé',
          featured: true,
          technologies: ['TypeScript', 'Node.js', 'Web Audio API', 'HTML5 Canvas', 'KaTeX', 'Mermaid.js'],
          summary: 'Une suite complète d’outils web haute performance côté client pour la rédaction avancée, le traitement média et le transfert de fichiers P2P sécurisé sans serveur backend.',
          problem: 'Les outils médias en ligne envoient souvent des documents sensibles vers des serveurs tiers, posant des risques de confidentialité et des délais réseau.',
          solution: 'Ingénierie d’une suite 100 % native dans le navigateur comprenant MD Studio, Audio Forge, Image Forge, QR Forge et le partage P2P par salon.',
          keyFeatures: [
            'MD Studio : IDE Markdown en écran partagé avec coloration syntaxique, formules LaTeX/KaTeX, diagrammes Mermaid et export PDF/HTML.',
            'Audio Forge : Éditeur audio dans le navigateur utilisant Web Audio API pour le découpage d’ondes et la normalisation.',
            'Image & QR Forge : Transformation d’images en temps réel, génération de QR codes stylisés et extraction PDF vers Markdown.',
            'Transfert P2P par salon : Partage éphémère de fichiers volumineux entre navigateurs avec chiffrement de bout en bout.',
          ],
          architectureDetails: [
            'Web Workers déchargeant le traitement audio DSP et le redimensionnement d’images du thread principal.',
            'Pipeline d’analyse Markdown basé sur AST avec extensions pour diagrammes et équations mathématiques.',
            'Moteur mobile adaptatif offrant une parité complète entre ordinateur, tablette et smartphone.',
          ],
          challenges: [
            'Synchroniser le défilement en écran partagé avec des formules et diagrammes de hauteur variable.',
            'Gérer la pression mémoire lors du traitement d’images haute résolution dans Canvas/WebAssembly.',
          ],
          lessonsLearned: [
            'Les API modernes du navigateur (Web Audio, Canvas, Web Workers) permettent des performances comparables au bureau sans coût cloud.',
            'Les architectures sans backend offrent une confidentialité totale et une évolutivité infinie.',
          ],
        },
        {
          id: 'task-master',
          title: 'Task Master',
          subtitle: 'Plateforme d’Automatisation E-Commerce & Opérations de Vente',
          category: 'Automation & Tools',
          year: '2024 – 2026',
          status: 'Terminé',
          featured: true,
          technologies: ['Python', 'PySide6 (Qt)', 'FastAPI', 'Pandas', 'PostgreSQL', 'Excel Pipelines'],
          summary: 'Une plateforme de bureau modulaire conçue pour les vendeurs e-commerce afin d’automatiser la gestion des stocks, la tarification promotionnelle, les rapports de vente et l’expédition.',
          problem: 'Les vendeurs sur des places de marché comme Digikala perdent des heures chaque jour à mettre à jour manuellement les stocks et compiler des feuilles Excel.',
          solution: 'Création d’une suite PySide6 à 6 modules intégrant des workers multithreads, la synchronisation API REST et des pipelines Pandas ayant doublé l’efficacité opérationnelle.',
          keyFeatures: [
            '6 Modules Intégrés : Flux dédiés pour la synchronisation des stocks, la protection des marges, l’expédition par lots et l’analyse des ventes.',
            'Workers Multithreads : Architecture Qt QThread garantissant une interface à 60 FPS pendant les calculs lourds.',
            'Pipelines Excel Automatisés : Ingestion, transformation et réconciliation de données complexes via Pandas.',
            'Interface Qt Entreprise : GUI PySide6 soignée avec thèmes sombre/clair, tableaux personnalisés et navigation clavier.',
          ],
          architectureDetails: [
            'Séparation Modèle-Vue-Contrôleur (MVC) isolant les formulaires UI des modèles de données et connecteurs REST.',
            'File d’attente transactionnelle évitant la désynchronisation des stocks lors des limites de débit API.',
            'Journalisation d’audit automatisée enregistrant toutes les modifications de marges et états de commandes.',
          ],
          challenges: [
            'Gérer les pics de limitation de débit (rate-limiting) des API vendeurs sans perdre les mises à jour de stock.',
            'Éviter le blocage du thread UI lors de l’analyse de fichiers Excel contenant des dizaines de milliers de références.',
          ],
          lessonsLearned: [
            'L’automatisation de bureau robuste nécessite une isolation stricte des erreurs et des indicateurs d’état clairs.',
            'Les pools de workers multithreads avec signaux/slots Qt offrent une stabilité remarquable à grande échelle.',
          ],
        },
        {
          id: 'yadban',
          title: 'Yadban',
          subtitle: 'Application Android de Calendrier Persan Intelligent & Planification (Publiée sur Myket)',
          category: 'Product & Web',
          year: '2026',
          status: 'Terminé',
          featured: false,
          technologies: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Room Database', 'Jalebi Calendar', 'Material 3'],
          summary: 'Yadban est une application Android avancée de calendrier et de planification intégrant le calendrier Jalebi (Jalali, Grégorien, Lunaire), la gestion de rendez-vous et la conversion de dates.',
          problem: 'Les applications de calendrier classiques manquent d’intégration native avec les dates persanes/Jalali et de champs personnalisables pour les étudiants et professionnels.',
          solution: 'Développement d’une application Android fluide basée sur le moteur Jalebi Calendar, avec cartes thermiques quotidiennes, emploi du temps hebdomadaire et vues sur mesure.',
          keyFeatures: [
            'Calendrier Jalebi & Événements : Intégration complète du calendrier persan avec jours fériés et suivi d’événements.',
            'Planification de Rendez-vous & Tâches : Système rapide pour réunions et activités chronométrées.',
            'Conversion Multi-Calendriers : Conversion instantanée entre calendriers solaire, grégorien et lunaire.',
            'Constructeur de Vues Personnalisées : Champs personnalisés, palettes de couleurs et notation par étoiles de priorité.',
            'Disponible sur Myket : Publiée officiellement pour les utilisateurs Android sur la boutique Myket.',
          ],
          architectureDetails: [
            'Architecture MVVM propre utilisant Jetpack Compose et Material 3 pour une interface mobile à 60 FPS.',
            'Base de données relationnelle Room stockant les horaires récurrents et configurations de tâches.',
            'Moteur de calcul Jalebi ultra-rapide gérant instantanément les conversions inter-calendriers.',
          ],
          challenges: [
            'Aligner avec précision les calculs d’années bissextiles persanes et les jours fériés multi-calendriers.',
            'Optimiser le rendu Compose pour les grilles de calendrier denses avec cartes thermiques actives.',
          ],
          lessonsLearned: [
            'La localisation profonde et le support natif des calendriers locaux sont essentiels pour les outils de productivité.',
            'La gestion d’état Jetpack Compose simplifie le rendu de grilles complexes et de formulaires dynamiques.',
          ],
          liveUrl: 'https://myket.ir',
        },
        {
          id: 'finglish-bot',
          title: 'Finglish Bot',
          subtitle: 'Bot Telegram de Translittération Linguistique via Cloudflare Workers & Python',
          category: 'Automation & Tools',
          year: '2025',
          status: 'Terminé',
          featured: false,
          technologies: ['Python', 'Telegram Bot API', 'Cloudflare Workers', 'Wrangler', 'Serverless'],
          summary: 'Un bot Telegram rapide et léger qui transforme le Finglish (persan écrit en caractères latins) en écriture persane correcte grâce à des règles orthographiques contextuelles.',
          problem: 'La communication bilingue informelle utilise souvent l’alphabet latin pour le persan, ce qui complique la lecture et la recherche textuelle.',
          solution: 'Création d’un moteur de correspondance phonétique analysant les groupes de caractères et déployé en serverless sur le réseau Edge.',
          keyFeatures: [
            'Correspondance Phonétique par Règles : Convertit les digrammes ("kh", "sh", "ch", "zh") et le placement contextuel des voyelles.',
            'Support des Requêtes Inline : Translittération directe dans n’importe quelle discussion Telegram.',
            'Passerelle Serverless Edge : Réponse ultra-rapide via webhooks sans temps de démarrage à froid.',
            'Aucune Conservation de Données : Respecte la vie privée en traitant le texte uniquement à la volée.',
          ],
          architectureDetails: [
            'Pipeline à deux niveaux : prototypage linguistique en Python combiné au déploiement Cloudflare Workers.',
            'Tokenisation par expressions régulières optimisées et analyse morphologique des préfixes/suffixes.',
            'Traitement sans état répondant aux webhooks Telegram en moins de 150 ms.',
          ],
          challenges: [
            'Gérer l’argot familier et les variations orthographiques propres à chaque utilisateur.',
            'Gérer les changements de direction de texte (RTL/LTR) lors du mélange de mots anglais et de ponctuation.',
          ],
          lessonsLearned: [
            'Le calcul Edge est idéal pour les transformations textuelles à faible latence et haut débit.',
            'Les systèmes à base de règles restent nettement plus rapides et prévisibles pour la translittération déterministe.',
          ],
        },
        {
          id: 'scraping-automation-suite',
          title: 'Suite de Web Scraping & Veille Concurrentielle',
          subtitle: 'Automatisation de Navigateur Furtif & Système de Recommandation de Réapprovisionnement',
          category: 'Automation & Tools',
          year: '2024 – 2025',
          status: 'Terminé',
          featured: false,
          technologies: ['Python', 'nodriver', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Docker'],
          summary: 'Moteurs de scraping haute vitesse et tableaux de bord de veille concurrentielle conçus pour suivre les prix du marché et recommander automatiquement les réapprovisionnements.',
          problem: 'Les marchands font face à des variations constantes des prix concurrents et à des ruptures de stock qui réduisent les ventes sans surveillance 24/7.',
          solution: 'Développement de scrapers furtifs utilisant nodriver, alimentant un moteur de recommandation qui signale les moments optimaux de commande.',
          keyFeatures: [
            'Automatisation Furtive : Contournement anti-bot avec nodriver et Selenium pour une exécution quotidienne fiable.',
            'Recommandation Intelligente : Algorithmes heuristiques calculant la vitesse d’écoulement et les délais.',
            'Pipeline de Traitement d’Images : Redimensionnement automatique, filigrane et préparation de catalogues.',
            'Tableau de Bord Concurrentiel : Alertes d’écarts de prix en temps réel et rapports de tendances.',
          ],
          architectureDetails: [
            'Architecture de workers distribués planifiés via cron et conteneurs Docker.',
            'Persistance résiliente des données tarifaires structurées sous PostgreSQL.',
            'Bot de notification Telegram alertant les gestionnaires lors d’événements tarifaires critiques.',
          ],
          challenges: [
            'Contourner les mécanismes de détection de bots évolutifs sans déclencher de blocages IP.',
            'Normaliser des données vendeurs non structurées provenant de formats de catalogues variés.',
          ],
          lessonsLearned: [
            'nodriver offre des performances nettement supérieures et une empreinte mémoire réduite par rapport à ChromeDriver.',
            'Les pipelines de données doivent utiliser des schémas défensifs pour absorber les changements HTML en amont.',
          ],
        },
      ],
    },
    skills: {
      kicker: '04. Compétences Techniques & Maîtrise',
      title: 'Compétences, Technologies & Systèmes',
      descriptionPart1: 'Un aperçu complet des langages de programmation, frameworks backend, moteurs d’automatisation et outils d’architecture que j’utilise au quotidien — orientés vers mon objectif ultime : ',
      descriptionHighlight: 'l’IA en Cybersécurité',
      levels: {
        All: 'Tous',
        'Actively Using': 'Usage Quotidien',
        'Familiar With': 'Maîtrisé',
        Learning: 'En Apprentissage',
        Exploring: 'En Exploration',
      },
      categoryLabel: 'Catégorie :',
      synapticKicker: 'Architecture Synaptique des Compétences',
      neuralNetworkTitle: 'Réseau Neuronal Cérébral 3D',
      categories: [
        {
          title: 'Langages & Théorie Fondamentale',
          description: 'Langages de programmation, gestion de la mémoire et principes fondamentaux de l’informatique théorique.',
          skills: [
            { name: 'Python', level: 'Actively Using', context: 'Langage principal pour logiciels de bureau, automatisation et API backend' },
            { name: 'Data Structures', level: 'Actively Using', context: 'Arbres, graphes, tas, tables de hachage et structures mémoire sur mesure' },
            { name: 'Algorithms', level: 'Actively Using', context: 'Parcours de graphes, programmation dynamique et analyse de complexité' },
            { name: 'TypeScript', level: 'Familiar With', context: 'Architectures clientes typées et moteurs d’applications modernes' },
            { name: 'JavaScript', level: 'Familiar With', context: 'Boucle d’événements asynchrone, fonctionnalités ESNext et scripts' },
            { name: 'Rust', level: 'Exploring', context: 'Programmation système, sécurité mémoire sans GC et modules natifs' },
          ],
        },
        {
          title: 'Systèmes Backend & Architecture',
          description: 'Microservices asynchrones haute performance, API REST et ingénierie des bases de données.',
          skills: [
            { name: 'FastAPI', level: 'Actively Using', context: 'API REST asynchrones à haut débit, schémas OpenAPI et endpoints' },
            { name: 'PostgreSQL', level: 'Actively Using', context: 'Modélisation relationnelle, transactions, indexation et requêtes SQL' },
            { name: 'REST APIs', level: 'Actively Using', context: 'Conception d’API, webhooks, authentification par jeton et intégration' },
            { name: 'Pydantic', level: 'Familiar With', context: 'Validation de données, schémas stricts et sérialisation de modèles' },
            { name: 'SQLAlchemy', level: 'Familiar With', context: 'Boîte à outils SQL Python et flux de travail ORM' },
            { name: 'Node.js', level: 'Exploring', context: 'Environnement JavaScript côté serveur, écosystème npm et outillage' },
          ],
        },
        {
          title: 'Logiciels de Bureau & Ingénierie UI',
          description: 'Interfaces graphiques natives de bureau, frontends réactifs et architecture de composants.',
          skills: [
            { name: 'PySide6', level: 'Actively Using', context: 'GUI de bureau d’entreprise, boucles Qt, multithreading et widgets sur mesure' },
            { name: 'React', level: 'Exploring', context: 'Hiérarchies de composants, gestion d’état réactive et hooks modernes' },
            { name: 'Tauri', level: 'Exploring', context: 'Framework léger d’applications de bureau avec interfaces web' },
            { name: 'HTML', level: 'Familiar With', context: 'Balisage sémantique, normes d’accessibilité et structure documentaire' },
            { name: 'CSS', level: 'Familiar With', context: 'Mises en page responsives, flexbox, grid et animations CSS' },
            { name: 'Tailwind CSS', level: 'Exploring', context: 'Stylisation utilitaire et composition rapide d’interfaces responsives' },
            { name: 'WordPress', level: 'Familiar With', context: 'Gestion de CMS, personnalisation de thèmes et configurations e-commerce' },
          ],
        },
        {
          title: 'Science des Données, Maths & Machine Learning',
          description: 'Calcul scientifique, algèbre linéaire, tenseurs et architectures de réseaux de neurones.',
          skills: [
            { name: 'NumPy', level: 'Actively Using', context: 'Calcul vectoriel sur tableaux, opérations numériques et algèbre matricielle' },
            { name: 'PyTorch', level: 'Familiar With', context: 'Tenseurs, architectures d’apprentissage profond et entraînement neuronal' },
            { name: 'Pandas', level: 'Familiar With', context: 'Manipulation de données tabulaires et pipelines d’analyse structurée' },
            { name: 'SciPy', level: 'Familiar With', context: 'Calcul scientifique, algorithmes numériques et routines mathématiques' },
            { name: 'R', level: 'Familiar With', context: 'Calcul statistique, analyse de données et modélisation mathématique' },
            { name: 'Advanced Math', level: 'Learning', context: 'Probabilités et statistiques avancées, algèbre linéaire et analyse numérique' },
            { name: 'AI & ML', level: 'Learning', context: 'Fondamentaux du machine learning, systèmes intelligents et agents' },
            { name: 'Optimization', level: 'Learning', context: 'Optimisation mathématique, recherche combinatoire et solveurs heuristiques' },
          ],
        },
        {
          title: 'Web Scraping & Automatisation de Navigateur',
          description: 'Navigateurs sans tête furtifs, protocoles HTTP, extensions Chrome et pipelines d’extraction.',
          skills: [
            { name: 'nodriver', level: 'Actively Using', context: 'Automatisation de navigateur furtive haute performance sans ChromeDriver' },
            { name: 'Requests', level: 'Actively Using', context: 'Communication HTTP, gestion des charges utiles et sessions réseau' },
            { name: 'Chrome Extension Development', level: 'Familiar With', context: 'Architecture Manifest V3, service workers et manipulation du DOM' },
            { name: 'Selenium', level: 'Familiar With', context: 'Automatisation de navigateur, rapports automatisés et formulaires' },
            { name: 'BeautifulSoup', level: 'Familiar With', context: 'Analyse HTML/XML, navigation dans l’arbre DOM et extraction' },
          ],
        },
        {
          title: 'Cybersécurité, DevOps & Outils Créatifs',
          description: 'Diagnostic de paquets, conteneurisation, flux Git et conception graphique.',
          skills: [
            { name: 'Cybersecurity', level: 'Learning', context: 'Sécurité réseau, analyse de vulnérabilités & objectif ultime : IA en Cybersécurité' },
            { name: 'Wireshark', level: 'Familiar With', context: 'Capture de paquets, inspection de protocoles et diagnostic réseau' },
            { name: 'Docker', level: 'Familiar With', context: 'Conteneurisation, environnements reproductibles et isolation de services' },
            { name: 'Git & GitHub', level: 'Familiar With', context: 'Contrôle de version, flux collaboratifs et gestion de dépôts' },
            { name: 'Photoshop', level: 'Actively Using', context: 'Édition d’images numériques, retouche d’actifs, graphisme UI et dessin' },
          ],
        },
      ],
    },
    experience: {
      kicker: '05. Trajectoire & Jalons de Parcours',
      title: 'Des systèmes biologiques à l’ingénierie algorithmique',
      description: 'Une chronologie documentant mes projets autonomes, mes réalisations académiques et ma transition vers l’informatique.',
      focusLabel: 'Axes :',
      milestones: [
        {
          period: 'Mai 2025 – Juin 2026',
          title: 'Responsable du Département des Ventes',
          organizationOrContext: 'Naria Gallery',
          description: 'Réduction des tâches répétitives, amélioration de la précision opérationnelle et doublement des ventes moyennes. Conception de 14 applications d’automatisation sur mesure éliminant les goulots d’étranglement manuels, outils d’analyse des ventes et rapports de direction.',
          tags: ['14 Apps d’Automatisation', 'Optimisation des Flux', 'Analyse des Ventes', 'Rapports Exécutifs', 'Python'],
          type: 'project',
        },
        {
          period: 'Août 2024 – Mai 2025',
          title: 'Superviseur des Ventes',
          organizationOrContext: 'Division Digikala (Peaksale)',
          description: 'Gestion de comptes vendeurs à fort volume sur Digikala, optimisation des catalogues produits et analyses de ventes basées sur les données pour guider les décisions commerciales et campagnes promotionnelles.',
          tags: ['Marketplace Digikala', 'Analyse des Ventes', 'Optimisation Catalogue', 'E-Commerce', 'Promotions'],
          type: 'project',
        },
        {
          period: '2022 – 2026',
          title: 'Licence en Informatique (B.Sc.)',
          organizationOrContext: 'Université Kharazmi',
          description: 'Diplômé en 2026 avec une excellente moyenne cumulative de 17.22 / 20. Formation approfondie en algorithmes, structures de données, probabilités et statistiques avancées, algèbre linéaire, analyse numérique et conception logicielle.',
          tags: ['Moyenne : 17.22/20', 'Probabilités & Stats', 'Algèbre Linéaire', 'Analyse Numérique', 'Algorithmes'],
          type: 'education',
        },
        {
          period: '2024 – 2025',
          title: 'Membre Étudiant',
          organizationOrContext: 'Association for Computing Machinery (ACM)',
          description: 'Engagement au sein de la communauté informatique mondiale, participation à des ateliers techniques spécialisés, événements de programmation et sessions collaboratives d’algorithmique.',
          tags: ['ACM', 'Ateliers Techniques', 'Événements Code', 'Communauté CS'],
          type: 'exploration',
        },
      ],
    },
    contact: {
      kicker: '06. Contact & Collaborations',
      title: 'Engager une conversation',
      description: 'Intéressé par une collaboration, une opportunité professionnelle, une discussion technique ou une revue de code ? N’hésitez pas à me contacter directement.',
      directInfoTitle: 'Coordonnées Directes',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone & Telegram',
      callBtn: 'Appeler',
      locationLabel: 'Localisation :',
      locationValue: 'Téhéran, Iran',
      currentlyPrefix: 'Actuellement :',
      cvTitle: 'Curriculum Vitae d’Ingénierie',
      pdfDoc: 'Document PDF',
      resumeHeading: 'Sina Riahi · CV',
      resumeDesc: 'Téléchargez une synthèse PDF imprimable de mes projets techniques, parcours académique et compétences systèmes.',
      downloadResumeBtn: 'Télécharger le CV (PDF)',
      githubProfile: 'Profil GitHub',
      linkedinProfile: 'Profil LinkedIn',
      instagramProfile: 'Instagram (@sina___riahi)',
      formTitle: 'Envoyer un Message Direct',
      formSubtitle: 'Ouvre directement votre application de messagerie par défaut avec les détails pré-remplis.',
      yourName: 'Votre Nom',
      namePlaceholder: 'ex. Jean Dupont',
      yourEmail: 'Votre E-mail',
      emailPlaceholder: 'ex. jean@exemple.com',
      messageLabel: 'Message / Demande',
      messagePlaceholder: 'Décrivez votre projet, poste ou sujet de discussion...',
      sendBtn: 'Envoyer via le Client Mail',
      formSentMsg: '✓ Ouverture de votre client mail avec le message pré-rempli !',
    },
    footer: {
      roleLine: 'Sina Riahi · Développeur en Informatique',
      engineeredLine: 'Conçu avec React, TypeScript, Vite & Tailwind CSS. Optimisé pour la performance et l’accessibilité.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      resume: 'CV',
    },
  },

  fa: {
    navbar: {
      projects: 'پروژه‌ها',
      about: 'درباره من',
      skills: 'مهارت‌ها',
      journey: 'مسیر حرفه‌ای',
      contact: 'تماس با من',
      resume: 'رزومه',
      downloadResume: 'دانلود رزومه',
      commands: 'دستورات ⌘K',
      skillsAndStack: 'مهارت‌ها و تکنولوژی‌ها',
      journeyAndBackground: 'مسیر حرفه‌ای و تحصیلات',
    },
    hero: {
      availableStatus: 'آماده همکاری در پروژه‌های پاره‌وقت و فریلنسری',
      name: 'سینا ریاحی',
      role: 'توسعه‌دهنده پایتون و سیستم‌ها · علوم کامپیوتر',
      bio: 'متخصص در توسعه نرم‌افزارهای دسکتاپ، اتوماسیون کسب‌وکار، پردازش داده، وب‌اسکرپینگ و بهینه‌سازی فرآیندها. با تجربه در ساخت ابزارهای عملیاتی که کارهای تکراری را خودکار کرده، به REST APIها متصل می‌شوند و مجموعه‌داده‌های پیچیده را پردازش می‌کنند.',
      coreFocusLabel: 'تمرکز اصلی:',
      focusItems: ['هوش مصنوعی و یادگیری ماشین', 'امنیت سایبری', 'اتوماسیون', 'وب‌اسکرپینگ', 'ابزارهای کاربردی'],
      exploreProjects: 'مشاهده پروژه‌ها',
      githubProfile: 'پروفایل گیت‌هاب',
      resumePdf: 'رزومه (PDF)',
      terminalMode: 'حالت ترمینال',
    },
    about: {
      kicker: '۰۱. پیشینه و پروفایل حرفه‌ای',
      title: 'مهندسی ابزارهایی که اصطکاک عملیاتی را از بین می‌برند',
      intro: 'توسعه‌دهنده پایتون و سیستم‌ها با تخصص در برنامه‌های دسکتاپ، اتوماسیون تجاری، پردازش داده، وب‌اسکرپینگ و بهینه‌سازی گردش‌کار. دارای تجربه عملی در ساخت ابزارهای تولیدی برای خودکارسازی عملیات تکراری، یکپارچه‌سازی با REST APIها، پردازش داده‌های اکسل و تولید گزارش‌های مدیریتی.',
      academicFoundation: 'پیشینه تحصیلی',
      degree: 'کارشناسی علوم کامپیوتر',
      universityAndYear: 'دانشگاه خوارزمی · فارغ‌التحصیل ۱۴۰۵ (2026)',
      gpaBadge: 'معدل کل کارشناسی: ۱۷.۲۲ از ۲۰',
      linguisticProficiencies: 'مهارت‌های زبانی:',
      languages: [
        { name: 'انگلیسی', level: 'C2، تسلط کامل' },
        { name: 'فارسی', level: 'زبان مادری' },
        { name: 'فرانسوی', level: 'A2، آشنایی مقدماتی' },
      ],
      acm: 'عضو دانشجویی انجمن ماشین‌های حسابگر (ACM)، ۲۰۲۴ – ۲۰۲۵',
      philosophyTitle: 'فلسفه مهندسی من',
      philosophyQuote: 'من ابزارهایی می‌سازم که عملیات تکراری را خودکار می‌کنند و موانع واقعی کار را برطرف می‌سازند. بهبودهای کوچک اما مستمر، در طول زمان به پیشرفت‌های بزرگ تبدیل می‌شوند.',
      locationLabel: 'موقعیت:',
      locationValue: 'تهران، ایران',
      capabilitiesTitle: 'توانمندی‌های عملیاتی و حوزه‌های تمرکز',
      capabilityCards: [
        {
          title: 'اتوماسیون کسب‌وکار و گردش‌کار',
          desc: 'طراحی و ساخت ۱۴ نرم‌افزار اتوماسیون عملیاتی در گالری ناریا، حذف فرآیندهای دستی تکراری، مغایرت‌گیری خودکار اکسل و دو برابر کردن میانگین فروش.',
          detail: 'Python · PySide6 · Pandas · REST APIs',
        },
        {
          title: 'مهندسی نرم‌افزارهای دسکتاپ و سیستم',
          desc: 'معماری برنامه‌های دسکتاپ ماژولار و سریع: Task Master (با PySide6/Qt) و MyPal (اکوسیستم افزونه‌های ایزوله با Rust Tauri v2 و React 19).',
          detail: 'Rust · Tauri v2 · Qt · Multithreading',
        },
        {
          title: 'وب‌اسکرپینگ و هوش رقابتی',
          desc: 'توسعه موتورهای اسکرپینگ پیشرفته و ضدتشخیص (nodriver، Selenium، BeautifulSoup)، هشدارهای لحظه‌ای قیمت و الگوریتم‌های هوشمند پیشنهاد شارژ موجودی.',
          detail: 'nodriver · BeautifulSoup · PostgreSQL · Docker',
        },
        {
          title: 'ابزارهای وب سمت کاربر و رسانه P2P',
          desc: 'توسعه ابزارهای تحت مرورگر با حفظ کامل حریم خصوصی (MD Studio، Audio Forge، QR Forge و انتقال فایل WebRTC P2P) بدون نیاز به سرور.',
          detail: 'TypeScript · Web Audio API · WebRTC · Canvas',
        },
      ],
      trackRecordPrefix: 'سابقه اجرایی اثبات‌شده:',
      trackRecordText: 'مدیر بخش فروش در گالری ناریا و سرپرست فروش در بخش دیجی‌کالا (Peaksale).',
      viewTimeline: 'مشاهده کامل مسیر حرفه‌ای',
    },
    projects: {
      kicker: '۰۲. پروژه‌ها و سیستم‌های مهندسی‌شده',
      title: 'نمونه‌کارهای نرم‌افزاری ساخته‌شده و آزمایش‌شده',
      description: 'مجموعه‌ای از پیاده‌سازی‌های عملی شامل ابزارهای دسکتاپ ماژولار، اتوماسیون فروشگاهی، پردازشگرهای زبانی و سیستم‌های استخراج داده.',
      categories: {
        All: 'همه',
        'Systems & Backend': 'سیستم‌ها و بک‌اند',
        'Automation & Tools': 'اتوماسیون و ابزارها',
        'Product & Web': 'محصول و وب',
      },
      featuredBuild: 'پروژه شاخص',
      moreCount: 'مورد دیگر',
      readMore: 'جزئیات بیشتر',
      modal: {
        caseStudy: 'مطالعه موردی',
        stack: 'تکنولوژی‌ها:',
        liveDemo: 'مشاهده زنده',
        execSummary: '۰۱. خلاصه مدیریتی',
        problemSpace: 'مسئله و چالش موجود',
        engineeredSolution: 'راه‌حل مهندسی‌شده',
        techArchitecture: '۰۲. معماری فنی و اصول سیستم',
        implementedCapabilities: '۰۳. قابلیت‌های پیاده‌سازی‌شده',
        yadbanShowcaseTitle: 'نمایش رابط کاربری و بخش‌های اپلیکیشن یادبان',
        yadbanScreens: [
          {
            title: '۱. تقویم جلبی و مدیریت قرارها',
            desc: 'ساخته‌شده با تقویم جلبی برای زمان‌بندی قرارها، پیگیری کارها، نقشه حرارتی شلوغی روزانه و ثبت سریع رویدادها.',
          },
          {
            title: '۲. مبدل تاریخ چندتقویمی',
            desc: 'تبدیل آسان و فوری تاریخ بین تقویم‌های شمسی، میلادی و قمری همراه با قابلیت کپی تک‌لمسی.',
          },
          {
            title: '۳. تعطیلات و مناسبت‌ها',
            desc: 'یکپارچه‌سازی کامل تقویم فارسی با نمایش تمامی تعطیلات رسمی، مناسبت‌های ملی و رویدادهای تاریخی.',
          },
          {
            title: '۴. برنامه هفتگی و پیگیری وظایف',
            desc: 'سازماندهی روتین‌های هفتگی، جلسات مطالعه و کارهای تکرارشونده در یک جدول زمانی بصری.',
          },
          {
            title: '۵. سازنده برنامه و نمای سفارشی',
            desc: 'ایجاد فیلدهای دلخواه، انتخاب نوع ورودی، پالت‌های رنگی و ستاره‌های اولویت برای گردش‌کارهای شخصی‌سازی‌شده.',
          },
        ],
        challengesAndLessons: '۰۴. چالش‌های کلیدی و دستاوردها',
        challengeLabel: 'چالش: ',
        takeawayLabel: 'دستاورد: ',
        nextInShowcase: 'پروژه بعدی:',
        nextProject: 'پروژه بعدی',
      },
      items: [
        {
          id: 'mypal',
          title: 'MyPal',
          subtitle: 'ابزار دسکتاپ ماژولار و اکوسیستم اشتراک‌گذاری P2P',
          category: 'Systems & Backend',
          year: '۲۰۲۶ - اکنون',
          status: 'در حال توسعه فعال',
          featured: true,
          technologies: ['Rust', 'Tauri v2', 'TypeScript', 'React 19', 'Tailwind CSS', 'WebRTC'],
          summary: 'یک ابزار دسکتاپ سبک و ماژولار برای ویندوز که با Rust (Tauri v2) و React 19 معماری شده و دارای قابلیت تزریق افزونه در محیط ایزوله، اشتراک فایل و کلیپ‌بورد P2P بدون تنظیمات و قلاب‌های سطح سیستم‌عامل است.',
          problem: 'کاربران حرفه‌ای دسکتاپ اغلب مجبور به استفاده از نرم‌افزارهای حجیم چندگیگابایتی هستند که منابع سیستم را مصرف کرده و برای اشتراک‌گذاری ساده فایل در شبکه محلی، حریم خصوصی را با سرورهای ابری به خطر می‌اندازند.',
          solution: 'طراحی یک هسته اجرایی فوق‌سبک با زبان Rust که قابلیت‌های جانبی را به ماژول‌های خارجی قابل‌تعویض واگذار می‌کند، همراه با پل ارتباطی WebRTC برای همگام‌سازی آنی فایل و کلیپ‌بورد از طریق شبکه محلی و QR.',
          keyFeatures: [
            'بارگذار افزونه ایزوله: ارزیابی پویا اسکریپت‌ها در زمان اجرا با تزریق وابستگی و ذخیره‌سازی در IndexedDB.',
            'پل ارتباطی موبایل به کامپیوتر بدون تنظیمات: انتقال آنی فایل و کلیپ‌بورد از طریق کانال‌های داده WebRTC و جفت‌سازی با کد QR بدون نیاز به سرور ابری.',
            'یکپارچگی عمیق با ویندوز: میانبرهای سراسری صفحه‌کلید، مدیریت سینی سیستم (System Tray)، تشخیص چند مانیتور و پل ارتباطی امن IPC.',
            'خط لوله توزیع خودکار: اسکریپت‌های PowerShell و Inno Setup برای تولید فایل اجرایی مستقل و بسته‌های نصبی سازمانی.',
          ],
          architectureDetails: [
            'مرز ارتباطی Tauri v2 IPC با اعمال مجوزهای دقیق دسترسی بین وب‌ویو و تردهای بومی Rust.',
            'ناظر تشخیصی مستقل برای خواندن شمارنده‌های عملکرد ویندوز با کمترین مصرف پردازنده.',
            'بررسی امضای دیجیتال افزونه‌ها جهت جلوگیری از اجرای کدهای غیرمجاز در محیط سندباکس.',
            'کشف همتاهای شبکه محلی با استفاده از mDNS و WebRTC بدون خروج ترافیک از زیرشبکه داخلی.',
          ],
          challenges: [
            'حفظ واکنش‌گرایی روان رابط کاربری هنگام استریم فایل‌های چندگیگابایتی در بافر WebRTC.',
            'مدیریت تفاوت‌های مقیاس‌بندی DPI در مانیتورهای متعدد در ویندوز ۱۰ و ۱۱.',
          ],
          lessonsLearned: [
            'ترکیب Rust و Tauri مصرف حافظه را نسبت به Electron به شکل چشمگیری کاهش می‌دهد.',
            'طراحی سیستم پلاگین بر پایه مانیفست‌های JSON دقیق، توسعه ماژولار بلندمدت را بسیار ساده می‌کند.',
          ],
        },
        {
          id: 'utilities-suite',
          title: 'Utilities Suite',
          subtitle: 'مجموعه ابزارهای بهره‌وری وب، مهندسی رسانه و محیط توسعه تحت مرورگر',
          category: 'Product & Web',
          year: '۲۰۲۶',
          status: 'تکمیل‌شده',
          featured: true,
          technologies: ['TypeScript', 'Node.js', 'Web Audio API', 'HTML5 Canvas', 'KaTeX', 'Mermaid.js'],
          summary: 'مجموعه‌ای یکپارچه از ابزارهای وب پرسرعت و سمت کاربر برای نگارش پیشرفته اسناد، پردازش فایل‌های صوتی و تصویری و انتقال امن فایل به‌صورت نظیربه‌نظیر (P2P) بدون نیاز به سرور بک‌اند.',
          problem: 'ابزارهای آنلاین تبدیل رسانه و مارک‌داون اغلب اسناد و فایل‌های حساس کاربران را به سرورهای شخص ثالث ارسال می‌کنند که ریسک امنیتی و تاخیر شبکه به همراه دارد.',
          solution: 'مهندسی مجموعه‌ای کاملاً بومی در مرورگر با پردازش ۱۰۰٪ سمت کلاینت شامل MD Studio، Audio Forge، Image Forge، QR Forge و انتقال فایل P2P.',
          keyFeatures: [
            'MD Studio: محیط ویرایشگر دوطرفه مارک‌داون با برجسته‌سازی سینتکس، فرمول‌نویسی LaTeX/KaTeX، نمودارهای Mermaid و خروجی PDF/HTML.',
            'Audio Forge: ویرایشگر صوتی تحت مرورگر با بهره‌گیری از Web Audio API برای برش موج صوتی، نرمال‌سازی صدا و فیلترهای بدون تاخیر.',
            'Image & QR Forge: تغییر اندازه و فرمت تصاویر در لحظه، ساخت کدهای QR سفارشی و استخراج متن از PDF به مارک‌داون.',
            'انتقال فایل P2P مبتنی بر اتاق: اشتراک‌گذاری مستقیم فایل‌های حجیم بین مرورگرها با رمزنگاری سرتاسری.',
          ],
          architectureDetails: [
            'استفاده از Web Workers برای انتقال پردازش‌های سنگین صوتی و تصویری به خارج از ترد اصلی رابط کاربری.',
            'خط لوله تحلیل مارک‌داون مبتنی بر درخت سینتکس (AST) با پشتیبانی از پلاگین‌های نمودار و ریاضیات.',
            'موتور واکنش‌گرای موبایل برای ارائه تجربه کاربری یکسان در دسکتاپ، تبلت و گوشی‌های هوشمند.',
          ],
          challenges: [
            'همگام‌سازی اسکرول دوطرفه بین کد مارک‌داون و پیش‌نمایش حاوی فرمول‌ها و نمودارهای با ارتفاع متغیر.',
            'مدیریت مصرف حافظه هنگام پردازش تصاویر با وضوح بالا در حافظه Canvas و WebAssembly.',
          ],
          lessonsLearned: [
            'APIهای مدرن مرورگر (Web Audio، Canvas، Web Workers) عملکردی در سطح نرم‌افزارهای دسکتاپ بدون هزینه سرور فراهم می‌کنند.',
            'معماری‌های بدون سرور (Zero-backend) بالاترین سطح حریم خصوصی و مقیاس‌پذیری را به ارمغان می‌آورند.',
          ],
        },
        {
          id: 'task-master',
          title: 'Task Master',
          subtitle: 'پلتفرم اتوماسیون تجارت الکترونیک و مدیریت عملیات فروش',
          category: 'Automation & Tools',
          year: '۲۰۲۴ – ۲۰۲۶',
          status: 'تکمیل‌شده',
          featured: true,
          technologies: ['Python', 'PySide6 (Qt)', 'FastAPI', 'Pandas', 'PostgreSQL', 'Excel Pipelines'],
          summary: 'یک پلتفرم دسکتاپ ماژولار برای فروشندگان آنلاین جهت خودکارسازی مدیریت موجودی، قیمت‌گذاری رقابتی، گزارش‌گیری فروش و پردازش سفارش‌های پرتعداد.',
          problem: 'فروشندگان در مارکت‌پلیس‌هایی مانند دیجی‌کالا روزانه ساعت‌ها زمان صرف به‌روزرسانی دستی موجودی، محاسبه حاشیه سود و ساخت فایل‌های اکسل پراکنده می‌کنند.',
          solution: 'ساخت یک مجموعه نرم‌افزاری دسکتاپ ۶ ماژوله با PySide6، پردازش چندتردی، همگام‌سازی REST API و خطوط لوله خودکار اکسل که بهره‌وری عملیاتی را دو برابر کرد.',
          keyFeatures: [
            '۶ ماژول یکپارچه: گردش‌کارهای تخصصی برای همگام‌سازی موجودی، محافظت از حاشیه سود، ارسال گروهی و تحلیل فروش.',
            'پردازشگران پس‌زمینه چندتردی: معماری QThread در Qt برای تضمین نرخ ۶۰ فریم بر ثانیه در رابط کاربری هنگام پردازش‌های سنگین.',
            'خط لوله خودکار داده‌های اکسل: دریافت، پالایش و مغایرت‌گیری داده‌های پیچیده فروش با استفاده از Pandas.',
            'رابط کاربری دسکتاپ سازمانی: محیط گرافیکی PySide6 با تم تیره و روشن، جداول سفارشی و میانبرهای صفحه‌کلید.',
          ],
          architectureDetails: [
            'جداسازی معماری MVC برای تفکیک فرم‌های رابط کاربری از مدل‌های داده و کلاینت‌های REST.',
            'صف تراکنش مرحله‌ای برای جلوگیری از ناهماهنگی موجودی هنگام برخورد به محدودیت نرخ درخواست (Rate-limit).',
            'ثبت خودکار گزارش‌های حسابرسی برای تمامی تغییرات قیمت، وضعیت سفارش‌ها و رویدادهای سیستم.',
          ],
          challenges: [
            'مدیریت محدودیت‌های ناگهانی نرخ درخواست API بدون از دست رفتن تغییرات موجودی در صف انتظار.',
            'جلوگیری از قفل شدن رابط کاربری هنگام تحلیل فایل‌های اکسل حاوی ده‌ها هزار کالای مختلف (SKU).',
          ],
          lessonsLearned: [
            'ساخت اتوماسیون دسکتاپ پایدار نیازمند جداسازی دقیق خطاها و نمایش وضعیت شفاف برای کاربران غیرفنی است.',
            'استفاده از تردهای کاری چندگانه با سیگنال‌ها و اسلات‌های Qt پایداری فوق‌العاده‌ای در پردازش کلان‌داده ایجاد می‌کند.',
          ],
        },
        {
          id: 'yadban',
          title: 'یادبان (Yadban)',
          subtitle: 'اپلیکیشن اندروید تقویم هوشمند فارسی و مدیریت قرارها (منتشرشده در مایکت)',
          category: 'Product & Web',
          year: '۲۰۲۶',
          status: 'تکمیل‌شده',
          featured: false,
          technologies: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Room Database', 'Jalebi Calendar', 'Material 3'],
          summary: 'یادبان یک اپلیکیشن پیشرفته تقویم و برنامه‌ریزی اندروید است که شامل تقویم جلبی (شمسی، میلادی، قمری)، مدیریت قرارها، پیگیری وظایف، تبدیل تاریخ و ساخت برنامه و نمای سفارشی می‌باشد.',
          problem: 'اپلیکیشن‌های تقویم معمولی فاقد پشتیبانی عمیق از تاریخ شمسی، فیلدهای سفارشی و گردش‌کارهای منعطف مورد نیاز دانشجویان و کاربران حرفه‌ای هستند.',
          solution: 'طراحی و توسعه یک اپلیکیشن اندروید روان با موتور تقویم جلبی، نقشه حرارتی شلوغی روزانه، مبدل تاریخ چندگانه، جدول برنامه هفتگی و فیلدهای کاملاً سفارشی.',
          keyFeatures: [
            'تقویم جلبی و مناسبت‌ها: یکپارچه‌سازی کامل تقویم شمسی همراه با تعطیلات رسمی و ثبت رویدادها.',
            'زمان‌بندی قرارها و وظایف: سیستم سریع برای ثبت جلسات، کارها و فعالیت‌های زمان‌دار.',
            'تبدیل تاریخ چندتقویمی: تبدیل بی‌درنگ بین تاریخ‌های شمسی، میلادی و قمری با قابلیت کپی سریع.',
            'سازنده برنامه و نمای سفارشی: امکان تعریف فیلدهای دلخواه، انتخاب رنگ‌بندی و ستاره‌های اولویت.',
            'منتشرشده در مایکت: در دسترس رسمی کاربران اندروید در فروشگاه اپلیکیشن مایکت.',
          ],
          architectureDetails: [
            'معماری تمیز MVVM با استفاده از Jetpack Compose و طراحی Material 3 برای تجربه کاربری ۶۰ فریم بر ثانیه.',
            'پایگاه داده رابطه‌ای Room برای ذخیره‌سازی برنامه‌های تکرارشونده، رویدادها و ساختارهای سفارشی.',
            'موتور محاسباتی بهینه جلبی برای تبدیل آنی تاریخ‌ها در تقویم‌های مختلف.',
          ],
          challenges: [
            'هماهنگ‌سازی دقیق محاسبات سال‌های کبیسه شمسی و نگاشت تعطیلات در تقویم‌های سه‌گانه.',
            'بهینه‌سازی رندرینگ Jetpack Compose برای نماهای متراکم تقویم به همراه نقشه حرارتی رویدادها.',
          ],
          lessonsLearned: [
            'بومی‌سازی عمیق و پشتیبانی بومی از تقویم محلی، کلید موفقیت ابزارهای بهره‌وری منطقه‌ای است.',
            'مدیریت وضعیت در Jetpack Compose پیاده‌سازی جداول پیچیده و فرم‌سازهای پویا را بسیار تسهیل می‌کند.',
          ],
          liveUrl: 'https://myket.ir',
        },
        {
          id: 'finglish-bot',
          title: 'ربات فینگلیش (Finglish Bot)',
          subtitle: 'ربات تلگرام برگردان هوشمند فینگلیش به فارسی با Cloudflare Workers و پایتون',
          category: 'Automation & Tools',
          year: '۲۰۲۵',
          status: 'تکمیل‌شده',
          featured: false,
          technologies: ['Python', 'Telegram Bot API', 'Cloudflare Workers', 'Wrangler', 'Serverless'],
          summary: 'یک ربات تلگرام سریع و سبک که متون فینگلیش (فارسی نوشته‌شده با حروف لاتین) را با رعایت قواعد املایی و بافتاری به خط فارسی استاندارد تبدیل می‌کند.',
          problem: 'استفاده از حروف لاتین برای نوشتن جملات فارسی در گفتگوهای روزمره باعث دشواری در خواندن و عدم امکان جستجوی دقیق متون می‌شود.',
          solution: 'ایجاد یک موتور نگاشت آوایی هوشمند که ترکیب حروف را تحلیل کرده، ابهامات نگارشی را برطرف می‌کند و با کمترین تاخیر روی سرورهای لبه (Edge) اجرا می‌شود.',
          keyFeatures: [
            'نگاشت آوایی مبتنی بر قواعد: تبدیل دقیق ترکیب‌های چندحرفی (مانند kh، sh، ch، zh) و جایگذاری هوشمند مصوت‌ها.',
            'پشتیبانی از حالت درون‌خطی (Inline): امکان تبدیل متن در هر پنجره گفتگوی تلگرام بدون خروج از چت.',
            'درگاه سرورلس لبه (Edge): پردازش وب‌هوک‌ها با زمان پاسخگویی فوق‌سریع و بدون تاخیر راه‌اندازی (Cold-start).',
            'حفظ کامل حریم خصوصی: پردازش متون به‌صورت کاملاً درجا بدون ذخیره‌سازی هیچ‌گونه پیامی.',
          ],
          architectureDetails: [
            'خط لوله دولایه: محیط نمونه‌سازی قواعد زبانی در پایتون همراه با استقرار نهایی روی Cloudflare Workers.',
            'توکنایز کردن بهینه با عبارات منظم (Regex) و بررسی ساختار پیشوندها و پسوندهای فارسی.',
            'پردازش بدون حالت (Stateless) با زمان پاسخگویی زیر ۱۵۰ میلی‌ثانیه.',
          ],
          challenges: [
            'مدیریت اصطلاحات عامیانه و املاهای متفاوت کاربران مختلف در نوشتار فینگلیش.',
            'حفظ جهت صحیح نوشتار راست‌به‌چپ (RTL) هنگام ترکیب کلمات انگلیسی و علائم نگارشی.',
          ],
          lessonsLearned: [
            'محاسبات لبه (Edge Compute) برای پردازش‌های متنی پرتعداد و کم‌حجم ایده‌آل است.',
            'سیستم‌های مبتنی بر قواعد برای تبدیل‌های الفبایی مشخص، بسیار سریع‌تر و قابل‌پیش‌بینی‌تر از مدل‌های سنگین عمل می‌کنند.',
          ],
        },
        {
          id: 'scraping-automation-suite',
          title: 'مجموعه وب‌اسکرپینگ و هوش رقابتی بازار',
          subtitle: 'اتوماسیون مرورگر نامحسوس و سیستم هوشمند پیشنهاد تامین کالا',
          category: 'Automation & Tools',
          year: '۲۰۲۴ – ۲۰۲۵',
          status: 'تکمیل‌شده',
          featured: false,
          technologies: ['Python', 'nodriver', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Docker'],
          summary: 'موتورهای اسکرپینگ پرسرعت و داشبوردهای هوش رقابتی برای رصد نوسانات بازار، پایش قیمت رقبا و ارائه سیستم هوشمند پیشنهاد زمان بهینه سفارش کالا.',
          problem: 'فروشندگان آنلاین با تغییرات مداوم قیمت رقبا و اتمام ناگهانی موجودی روبه‌رو هستند که بدون رصد ۲۴ ساعته منجر به از دست رفتن فروش می‌شود.',
          solution: 'مهندسی اسکرپرهای نامحسوس با استفاده از nodriver و تکنیک‌های ضدتشخیص بات، همراه با موتور تحلیلی که زمان دقیق شارژ مجدد کالاها را پیشنهاد می‌دهد.',
          keyFeatures: [
            'اتوماسیون مرورگر نامحسوس: عبور از سیستم‌های ضدبات با nodriver و Selenium برای اجرای پایدار روزانه.',
            'پیشنهاد هوشمند سفارش کالا: الگوریتم‌های محاسبه سرعت فروش و زمان تامین موجودی.',
            'خط لوله پردازش تصاویر محصولات: تغییر اندازه خودکار، درج واترمارک و آماده‌سازی کاتالوگ.',
            'داشبورد هوش رقابتی: هشدارهای لحظه‌ای اختلاف قیمت و گزارش‌های روند بازار.',
          ],
          architectureDetails: [
            'معماری پردازشگران توزیع‌شده زمان‌بندی‌شده با Cron و صف کانتینرهای Docker.',
            'ذخیره‌سازی ساختاریافته و پایدار تاریخچه قیمت‌های بازار در پایگاه داده PostgreSQL.',
            'ربات اطلاع‌رسانی تلگرام برای ارسال هشدارهای فوری تغییرات قیمت به مدیران فروش.',
          ],
          challenges: [
            'عبور از مکانیزم‌های متغیر تشخیص ربات بدون مسدود شدن آدرس‌های IP.',
            'نرمال‌سازی داده‌های نامنظم فروشندگان در قالب‌های مختلف کاتالوگ‌های فروشگاهی.',
          ],
          lessonsLearned: [
            'ابزار nodriver عملکرد بسیار سریع‌تر و مصرف منابع کمتری نسبت به ChromeDriver سنتی دارد.',
            'خطوط لوله داده باید دارای اسکیمای دفاعی باشند تا در برابر تغییرات ساختار HTML سایت‌های مقصد مقاوم بمانند.',
          ],
        },
      ],
    },
    skills: {
      kicker: '۰۴. توانمندی‌های فنی و مهارت‌ها',
      title: 'مهارت‌ها، تکنولوژی‌ها و سیستم‌ها',
      descriptionPart1: 'مروری جامع بر زبان‌های برنامه‌نویسی، فریم‌ورک‌های بک‌اند، موتورهای اتوماسیون و ابزارهای معماری سیستم که روزانه با آن‌ها کار می‌کنم — در مسیر هدف نهایی من یعنی ',
      descriptionHighlight: 'هوش مصنوعی در امنیت سایبری',
      levels: {
        All: 'همه',
        'Actively Using': 'استفاده مستمر',
        'Familiar With': 'مسلط و آشنا',
        Learning: 'در حال یادگیری',
        Exploring: 'در حال کاوش',
      },
      categoryLabel: 'دسته‌بندی:',
      synapticKicker: 'معماری سیناپسی مهارت‌ها',
      neuralNetworkTitle: 'شبکه عصبی سه‌بعدی مهارت‌ها',
      categories: [
        {
          title: 'زبان‌ها و مبانی نظری علوم کامپیوتر',
          description: 'زبان‌های برنامه‌نویسی، مدیریت حافظه و اصول بنیادین علوم کامپیوتر.',
          skills: [
            { name: 'Python', level: 'Actively Using', context: 'زبان اصلی برای توسعه نرم‌افزار دسکتاپ، اتوماسیون و APIهای بک‌اند' },
            { name: 'Data Structures', level: 'Actively Using', context: 'درخت‌ها، گراف‌ها، هیپ، جداول هش و ساختمان‌های داده بهینه' },
            { name: 'Algorithms', level: 'Actively Using', context: 'پیمایش گراف، برنامه‌نویسی پویا و تحلیل پیچیدگی زمانی و مکانی' },
            { name: 'TypeScript', level: 'Familiar With', context: 'معماری‌های کلاینت تایپ‌سیف و موتورهای برنامه‌های وب مدرن' },
            { name: 'JavaScript', level: 'Familiar With', context: 'حلقه رویداد ناهمگام (Async)، قابلیت‌های ESNext و اسکریپت‌نویسی' },
            { name: 'Rust', level: 'Exploring', context: 'برنامه‌نویسی سیستم، ایمنی حافظه بدون Garbage Collector و ماژول‌های بومی' },
          ],
        },
        {
          title: 'سیستم‌های بک‌اند و معماری سرور',
          description: 'میکروسرویس‌های ناهمگام پرسرعت، طراحی REST API و مهندسی پایگاه داده.',
          skills: [
            { name: 'FastAPI', level: 'Actively Using', context: 'توسعه REST APIهای ناهمگام با کارایی بالا و مستندات OpenAPI' },
            { name: 'PostgreSQL', level: 'Actively Using', context: 'مدل‌سازی پایگاه داده رابطه‌ای، تراکنش‌ها، ایندکس‌گذاری و کوئری‌های SQL' },
            { name: 'REST APIs', level: 'Actively Using', context: 'طراحی API، دریافت وب‌هوک، احراز هویت توکنی و یکپارچه‌سازی سرویس‌ها' },
            { name: 'Pydantic', level: 'Familiar With', context: 'اعتبارسنجی داده‌ها، تعریف اسکیمای دقیق و سریال‌سازی مدل‌ها' },
            { name: 'SQLAlchemy', level: 'Familiar With', context: 'ابزار SQL پایتون و مدیریت پایگاه داده با ORM' },
            { name: 'Node.js', level: 'Exploring', context: 'محیط اجرای جاوااسکریپت سمت سرور و ابزارهای اکوسیستم npm' },
          ],
        },
        {
          title: 'نرم‌افزارهای دسکتاپ و مهندسی رابط کاربری',
          description: 'رابط‌های گرافیکی بومی دسکتاپ، فرانت‌اندهای واکنش‌گرا و معماری کامپوننت.',
          skills: [
            { name: 'PySide6', level: 'Actively Using', context: 'طراحی رابط گرافیکی دسکتاپ سازمانی، چندتردی در Qt و ویجت‌های سفارشی' },
            { name: 'React', level: 'Exploring', context: 'معماری کامپوننت‌ها، مدیریت وضعیت واکنش‌گرا و هوک‌های مدرن' },
            { name: 'Tauri', level: 'Exploring', context: 'فریم‌ورک فوق‌سبک ساخت نرم‌افزارهای دسکتاپ با هسته Rust' },
            { name: 'HTML', level: 'Familiar With', context: 'نشانه‌گذاری معنایی، استانداردهای دسترس‌پذیری و ساختار اسناد وب' },
            { name: 'CSS', level: 'Familiar With', context: 'طراحی‌های واکنش‌گرا، Flexbox، Grid و انیمیشن‌های پیشرفته' },
            { name: 'Tailwind CSS', level: 'Exploring', context: 'استایل‌دهی ماژولار و ساخت سریع رابط‌های کاربری مدرن' },
            { name: 'WordPress', level: 'Familiar With', context: 'مدیریت سیستم‌های محتوا، سفارشی‌سازی قالب و راه‌اندازی فروشگاه' },
          ],
        },
        {
          title: 'علوم داده، ریاضیات و یادگیری ماشین',
          description: 'محاسبات علمی، جبر خطی، تانسورها و معماری شبکه‌های عصبی.',
          skills: [
            { name: 'NumPy', level: 'Actively Using', context: 'محاسبات برداری روی آرایه‌ها، عملیات عددی و جبر ماتریسی' },
            { name: 'PyTorch', level: 'Familiar With', context: 'تانسورها، معماری‌های یادگیری عمیق و آموزش شبکه‌های عصبی' },
            { name: 'Pandas', level: 'Familiar With', context: 'پالایش داده، دیتاست‌های جدولی و خطوط لوله تحلیل ساختاریافته' },
            { name: 'SciPy', level: 'Familiar With', context: 'محاسبات علمی، الگوریتم‌های عددی و روتین‌های ریاضی' },
            { name: 'R', level: 'Familiar With', context: 'محاسبات آماری، تحلیل داده و مدل‌سازی ریاضی' },
            { name: 'Advanced Math', level: 'Learning', context: 'احتمالات و آمار پیشرفته، جبر خطی و محاسبات عددی' },
            { name: 'AI & ML', level: 'Learning', context: 'مبانی یادگیری ماشین، سیستم‌های هوشمند و مدل‌های عامل‌محور' },
            { name: 'Optimization', level: 'Learning', context: 'بهینه‌سازی ریاضی، جستجوی ترکیبیاتی و الگوریتم‌های ابتکاری' },
          ],
        },
        {
          title: 'وب‌اسکرپینگ و اتوماسیون مرورگر',
          description: 'مرورگرهای بدون رابط نامحسوس، پروتکل‌های HTTP، توسعه افزونه و استخراج خودکار داده.',
          skills: [
            { name: 'nodriver', level: 'Actively Using', context: 'اتوماسیون مرورگر پرسرعت و ضدتشخیص بدون نیاز به ChromeDriver' },
            { name: 'Requests', level: 'Actively Using', context: 'ارتباطات HTTP، مدیریت نشست‌های شبکه و پردازش درخواست‌ها' },
            { name: 'Chrome Extension Development', level: 'Familiar With', context: 'معماری Manifest V3، سرویس‌ورکرها و دستکاری DOM' },
            { name: 'Selenium', level: 'Familiar With', context: 'اتوماسیون مرورگر، گزارش‌گیری خودکار و تعامل با فرم‌ها' },
            { name: 'BeautifulSoup', level: 'Familiar With', context: 'تجزیه HTML/XML، پیمایش درخت DOM و استخراج اطلاعات' },
          ],
        },
        {
          title: 'امنیت سایبری، DevOps و ابزارهای خلاقانه',
          description: 'تحلیل بسته‌های شبکه، زیرساخت کانتینری، گردش‌کار گیت و طراحی گرافیک.',
          skills: [
            { name: 'Cybersecurity', level: 'Learning', context: 'امنیت شبکه، تحلیل آسیب‌پذیری و هدف نهایی: هوش مصنوعی در امنیت سایبری' },
            { name: 'Wireshark', level: 'Familiar With', context: 'شنود بسته‌های شبکه، بررسی پروتکل‌ها و عیب‌یابی ترافیک' },
            { name: 'Docker', level: 'Familiar With', context: 'کانتینرسازی، محیط‌های تکرارپذیر و ایزوله‌سازی سرویس‌ها' },
            { name: 'Git & GitHub', level: 'Familiar With', context: 'کنترل نسخه، گردش‌کارهای تیمی و مدیریت مخازن کد' },
            { name: 'Photoshop', level: 'Actively Using', context: 'ویرایش تصاویر دیجیتال، طراحی دارایی‌های رابط کاربری و نقاشی دیجیتال' },
          ],
        },
      ],
    },
    experience: {
      kicker: '۰۵. مسیر پیشرفت و نقاط عطف',
      title: 'از سیستم‌های زیستی تا مهندسی الگوریتمی',
      description: 'خط زمانی مستند از پروژه‌های اجرایی، دستاوردهای دانشگاهی و مسیر ورود تخصصی به علوم کامپیوتر.',
      focusLabel: 'تمرکز:',
      milestones: [
        {
          period: 'اردیبهشت ۱۴۰۴ – خرداد ۱۴۰۵ (May 2025 – June 2026)',
          title: 'مدیر بخش فروش',
          organizationOrContext: 'گالری ناریا (Naria Gallery)',
          description: 'کاهش چشمگیر کارهای تکراری، ارتقای دقت و کارایی عملیاتی و دو برابر کردن میانگین فروش. طراحی و ساخت ۱۴ اپلیکیشن اتوماسیون اختصاصی که گلوگاه‌های دستی را حذف کردند. مدیریت عکاسی صنعتی محصولات، ساخت ابزارهای تحلیل فروش و تولید گزارش‌های مدیریتی.',
          tags: ['۱۴ نرم‌افزار اتوماسیون', 'بهینه‌سازی فرآیندها', 'تحلیل فروش', 'گزارش‌های مدیریتی', 'پایتون'],
          type: 'project',
        },
        {
          period: 'مرداد ۱۴۰۳ – اردیبهشت ۱۴۰۴ (Aug 2024 – May 2025)',
          title: 'سرپرست فروش',
          organizationOrContext: 'بخش دیجی‌کالا (Peaksale)',
          description: 'مدیریت حساب‌های فروشندگان پرتراکنش در دیجی‌کالا، بهینه‌سازی کاتالوگ محصولات و اجرای تحلیل‌های داده‌محور فروش برای هدایت تصمیمات کلیدی کسب‌وکار و کمپین‌های تبلیغاتی.',
          tags: ['مارکت‌پلیس دیجی‌کالا', 'تحلیل فروش', 'بهینه‌سازی کاتالوگ', 'تجارت الکترونیک', 'کمپین‌های فروش'],
          type: 'project',
        },
        {
          period: '۱۴۰۱ – ۱۴۰۵ (2022 – 2026)',
          title: 'کارشناسی علوم کامپیوتر',
          organizationOrContext: 'دانشگاه خوارزمی',
          description: 'فارغ‌التحصیل سال ۱۴۰۵ با معدل کل عالی ۱۷.۲۲ از ۲۰. پایه علمی عمیق در الگوریتم‌ها، ساختمان داده‌ها، آمار و احتمالات پیشرفته، جبر خطی، محاسبات عددی، طراحی نرم‌افزار و برنامه‌نویسی سیستم.',
          tags: ['معدل: ۱۷.۲۲ از ۲۰', 'آمار و احتمالات', 'جبر خطی', 'محاسبات عددی', 'الگوریتم‌ها'],
          type: 'education',
        },
        {
          period: '۱۴۰۳ – ۱۴۰۴ (2024 – 2025)',
          title: 'عضو دانشجویی',
          organizationOrContext: 'انجمن ماشین‌های حسابگر (ACM)',
          description: 'مشارکت فعال در جامعه علمی علوم کامپیوتر، شرکت در کارگاه‌های تخصصی فنی، رویدادهای برنامه‌نویسی و جلسات گروهی حل مسائل الگوریتمی.',
          tags: ['ACM', 'کارگاه‌های تخصصی', 'رویدادهای برنامه‌نویسی', 'انجمن علمی'],
          type: 'exploration',
        },
      ],
    },
    contact: {
      kicker: '۰۶. ارتباط و همکاری',
      title: 'شروع یک گفتگو',
      description: 'علاقه‌مند به همکاری، فرصت‌های شغلی، گفتگوهای نرم‌افزاری یا بررسی کدهای پروژه‌ها هستید؟ خوشحال می‌شوم مستقیماً در ارتباط باشیم.',
      directInfoTitle: 'اطلاعات تماس مستقیم',
      emailLabel: 'ایمیل',
      phoneLabel: 'تلفن و تلگرام',
      callBtn: 'تماس',
      locationLabel: 'موقعیت:',
      locationValue: 'تهران، ایران',
      currentlyPrefix: 'وضعیت فعلی من در تهران:',
      cvTitle: 'رزومه مهندسی (CV)',
      pdfDoc: 'سند PDF',
      resumeHeading: 'سینا ریاحی · رزومه',
      resumeDesc: 'نسخه PDF قابل‌چاپ شامل خلاصه سوابق تحصیلی، پروژه‌های مهندسی و مهارت‌های فنی را دانلود کنید.',
      downloadResumeBtn: 'دانلود رزومه (PDF)',
      githubProfile: 'پروفایل گیت‌هاب',
      linkedinProfile: 'پروفایل لینکدین',
      instagramProfile: 'اینستاگرام (@sina___riahi)',
      formTitle: 'ارسال پیام مستقیم',
      formSubtitle: 'پیام شما مستقیماً در برنامه ایمیل پیش‌فرض دستگاهتان آماده ارسال می‌شود.',
      yourName: 'نام شما',
      namePlaceholder: 'مثلاً سینا ریاحی',
      yourEmail: 'ایمیل شما',
      emailPlaceholder: 'مثلاً name@example.com',
      messageLabel: 'متن پیام / موضوع گفتگو',
      messagePlaceholder: 'پروژه، موقعیت شغلی یا موضوع مورد نظر خود را بنویسید...',
      sendBtn: 'ارسال پیام از طریق برنامه ایمیل',
      formSentMsg: '✓ برنامه ایمیل با متن پیام شما باز شد!',
    },
    footer: {
      roleLine: 'سینا ریاحی · توسعه‌دهنده علوم کامپیوتر',
      engineeredLine: 'مهندسی‌شده با React، TypeScript، Vite و Tailwind CSS. طراحی‌شده برای کارایی و دسترس‌پذیری.',
      github: 'گیت‌هاب',
      linkedin: 'لینکدین',
      instagram: 'اینستاگرام',
      resume: 'رزومه',
    },
  },
};
