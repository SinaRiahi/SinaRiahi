import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
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
      'Automated Distribution Pipeline: PowerShell, Batch, and Inno Setup automation producing standalone mypal.exe, modular zip packs, and enterprise installers with firewall rules.'
    ],
    architectureDetails: [
      'Tauri v2 IPC boundary enforcing strict capability-based permissions between the webview and Rust native threads.',
      'Decoupled diagnostic supervisor querying native Windows performance counters with minimal CPU impact.',
      'Cryptographically verified plugin signatures preventing unauthorized code execution in the sandboxed runtime.',
      'Local-first peer discovery using mDNS and WebRTC STUN/TURN fallbacks strictly on local network subnets.'
    ],
    challenges: [
      'Maintaining responsive UI rendering while streaming gigabyte-sized files across the local WebRTC data channel buffer.',
      'Handling multi-monitor DPI scaling discrepancies and borderless window snaps across Windows 10 and 11.'
    ],
    lessonsLearned: [
      'Rust + Tauri provides an order of magnitude memory advantage over Electron for background system utilities.',
      'Designing a plugin system around strict JSON manifests and isolated sandboxes makes long-term modularity effortless.'
    ],
    futureRoadmap: [
      'Cross-platform compilation for macOS and Linux environments.',
      'Bi-directional encrypted folder synchronization daemon.'
    ],
    githubUrl: 'https://github.com/Sinariahi',
    hasInteractiveDemo: false,
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
      'Room-Based P2P Transfer: Ephemeral browser-to-browser large file sharing with end-to-end encryption.'
    ],
    architectureDetails: [
      'Web Workers offloading CPU-intensive audio DSP and image resampling from the primary UI thread.',
      'AST-based markdown parse pipeline with extensible syntax plug-ins for diagrams and math equations.',
      'Adaptive gesture-switching mobile engine providing tablet and smartphone parity with desktop editors.'
    ],
    challenges: [
      'Synchronizing split-screen scroll anchors across variable-height rendered formulas and diagrams.',
      'Managing memory pressure when processing large high-resolution images entirely in WebAssembly/Canvas memory.'
    ],
    lessonsLearned: [
      'Modern web browser APIs (Web Audio, Canvas, Web Workers) enable desktop-grade utility performance with zero cloud operational costs.',
      'Zero-backend architectures provide unmatched user privacy and infinite horizontal scalability.'
    ],
    githubUrl: 'https://github.com/Sinariahi/utilities',
    hasInteractiveDemo: true,
    interactiveDemoType: 'markdown-tool',
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
      'Enterprise Qt Desktop Interface: Polished PySide6 GUI with dark/light themes, custom data tables, and hotkey navigation.'
    ],
    architectureDetails: [
      'Model-View-Controller (MVC) separation isolating UI forms from backend data models and REST client connectors.',
      'Transactional staging queue preventing inventory desync when marketplace endpoints hit rate-limits.',
      'Automated audit logging recording all margin modifications, order states, and system events.'
    ],
    challenges: [
      'Handling sudden rate-limiting spikes from vendor APIs without dropping pending inventory adjustments.',
      'Preventing UI thread lockup when parsing Excel sheets containing tens of thousands of stock-keeping units (SKUs).'
    ],
    lessonsLearned: [
      'Building robust desktop automation requires rigorous error isolation and explicit status telemetry for non-technical operators.',
      'Multithreaded worker pools with Qt signals/slots provide unmatched stability for high-volume data operations.'
    ],
    githubUrl: 'https://github.com/Sinariahi',
    hasInteractiveDemo: false,
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
      'Live on Myket: Officially published and available for Android users on the Myket app store.'
    ],
    architectureDetails: [
      'Clean MVVM architecture using Jetpack Compose and Material 3 design principles for a fluid 60 FPS mobile UI.',
      'Room relational database storing recurring schedules, calendar events, and custom task configurations.',
      'Efficient Jalebi calendar computation engine handling cross-calendar epoch conversions instantly.'
    ],
    challenges: [
      'Accurately aligning complex Persian leap-year calculations and multi-calendar holiday mappings across various epochs.',
      'Optimizing Compose layout renders for high-density calendar grid views with active event heatmaps.'
    ],
    lessonsLearned: [
      'Deep localization and native calendar support are paramount for regional productivity tools.',
      'Jetpack Compose state management simplifies complex grid rendering and dynamic form builders.'
    ],
    githubUrl: 'https://github.com/Sinariahi',
    liveUrl: 'https://myket.ir',
    hasInteractiveDemo: false,
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
      'Zero Data Retention: Respects user privacy by processing transliterations purely in-flight without storage.'
    ],
    architectureDetails: [
      'Dual-tier pipeline: Python prototyping environment for linguistic rules combined with Cloudflare Worker deployment.',
      'Optimized regular expression tokenization and prefix/suffix morphological lookups.',
      'Stateless request handling fulfilling Telegram webhook SLA under 150ms.'
    ],
    challenges: [
      'Handling colloquial slang and idiosyncratic spelling variations across different user age groups.',
      'Navigating right-to-left (RTL) text direction switches when punctuation or mixed English words appear in input.'
    ],
    lessonsLearned: [
      'Edge compute is ideal for high-throughput, micro-payload text transformations.',
      'Rule-based text systems remain substantially faster and more predictable than large models for deterministic transliteration tasks.'
    ],
    githubUrl: 'https://github.com/Sinariahi',
    hasInteractiveDemo: true,
    interactiveDemoType: 'transliteration',
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
      'Competitive Intelligence Dashboard: Real-time price disparity alerts and historical trend reports.'
    ],
    architectureDetails: [
      'Distributed worker architecture scheduled via cron and Docker container queues.',
      'Resilient database persistence storing structured market pricing in PostgreSQL.',
      'Telegram notification bot alerting operations managers to critical pricing events.'
    ],
    challenges: [
      'Bypassing shifting bot detection mechanisms without triggering IP bans.',
      'Normalizing unstructured seller data across divergent e-commerce listing formats.'
    ],
    lessonsLearned: [
      'nodriver provides vastly superior performance and lower resource footprint compared to traditional ChromeDriver setups.',
      'Data pipelines must implement defensive schemas to absorb upstream HTML restructuring gracefully.'
    ],
    githubUrl: 'https://github.com/Sinariahi',
    hasInteractiveDemo: false,
  }
];
