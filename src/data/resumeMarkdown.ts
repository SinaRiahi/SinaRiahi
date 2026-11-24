import { Language } from './translations';

export interface ParsedResumePage {
  pageNumber: number;
  totalPages: number;
  html: string;
}

/**
 * Canonical Markdown (MD) resume sources for English (en), French (fr), and Persian (fa).
 * Updated November 24, 2026 (The Genesis Clause Android release & Founding Arachnest).
 * Uses `---PAGE---` to denote clean A4 page boundaries so multi-page PDFs never clip mid-paragraph.
 */
export const RESUME_MARKDOWN: Record<Language, string> = {
  en: `# SINA RIAHI
Tehran, Iran • 09396030319 • sinariahi1382@gmail.com • github.com/Sinariahi • arachnest.itch.io

## PROFESSIONAL SUMMARY
Python, Kotlin, and systems developer specializing in desktop applications, Android mobile apps & games, business automation, web scraping, and workflow optimization. Founder of Arachnest (@Arachneststudio), experienced building production automation suites, shipping indie Android games with custom dev pipelines, and producing animated media.

## TECHNICAL SKILLS
| Languages | Python, Kotlin, Rust, TypeScript, JavaScript, SQL, R |
| Frameworks & UI | Jetpack Compose, PySide6 (Qt), FastAPI, Pandas, NumPy, SciPy, React, Tauri v2 |
| Database & APIs | REST APIs, PostgreSQL, SQLAlchemy, Room Database, WebRTC |
| Automation & Scraping | nodriver, Selenium, BeautifulSoup, Requests, Chrome Extensions, Python Dev Scripts |
| Game, Animation & Media | Godot (2D Animation), Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro |
| Tools & Security | Docker, Git & GitHub, Wireshark, Linux, WordPress |

## EXPERIENCE
### Founder & Indie Developer / Animator | Arachnest (@Arachneststudio) | 2026 – Present
- Founded Arachnest, an independent entertainment studio dedicated to creating original video games and animated cartoons.
- Developed and published my first Android mobile game, **The Genesis Clause** (Nov 24, 2026 on itch.io), using Kotlin, Jetpack Compose, Photoshop, and Illustrator alongside 3 custom Python game-dev workflow scripts.
- Learned 2D animation in Godot and video editing in Adobe Premiere Pro to produce original animated cartoons for @Arachneststudio on Instagram.

### Sales Department Manager | Naria Gallery | May 2025 – June 2026
- Reduced repetitive tasks, improving operational accuracy and efficiency and doubling average sales.
- Engineered 14 custom automation applications that eliminated manual workflows and bottlenecks.
- Managed product photography, image editing for online listings, sales analysis tools, and executive reports.

### Sales Supervisor | Digikala (Peaksale) Division | August 2024 – May 2025
- Managed high-volume seller accounts on Digikala and optimized product catalog listings.
- Conducted data-driven sales analysis to support critical business decisions and promotional campaigns.
- Assisted in content creation and product photography for marketplace marketing initiatives.

---PAGE---

## MAJOR PROJECTS
### The Genesis Clause — Hardcore Permadeath Android Survival Game (arachnest.itch.io/the-genesis-clause)
\`Kotlin, Jetpack Compose, Android SDK, Python (3 Dev Scripts), Photoshop, Illustrator\`
- Built and shipped my first Android mobile game on itch.io (November 24, 2026) under Arachnest: an unforgiving permadeath wasteland survival game spanning distinct biomes and interactive landmarks.
- Engineered an automated narrative diary generator that logs every player choice and action into a readable survivor journal exportable as a PDF at any time.
- Designed deep survival systems featuring 4 life paths (Fighter, Looter, Engineer, Planner), extensive items and branching random events, vehicle repairs, surveyor drones, pets, crew hiring, and stylized tactile mini-games (hacking, lockpicking, radio tuning, wasteland cards).
- Created custom post-apocalyptic UI textures and artwork in Adobe Photoshop & Illustrator and authored 3 custom Python scripts to automate game data validation, asset processing, and balancing workflows.

### MyPal — Modular Desktop Utility & P2P Ecosystem
\`Rust, Tauri v2, TypeScript, React 19, Tailwind CSS, WebRTC\`
- Architected a lightweight, modular Windows utility using Rust (Tauri v2) and React 19, keeping the core executable lean and delegating secondary tools to dynamically loaded external modules.
- Engineered a sandboxed plugin loader with runtime dependency injection and IndexedDB caching, enabling hot-swappable third-party plugins (manifest.json + bundled code) with zero core rebuilds.
- Implemented a zero-configuration mobile-to-PC file transfer and clipboard bridge via WebRTC/WebSocket data channels and QR pairing, bypassing cloud servers for low-latency local sharing.
- Integrated deep OS-level Windows APIs (global keyboard hooks, system tray, multi-monitor bounds, audited IPC) and automated CI/CD packaging with PowerShell and Inno Setup.

### Utilities Suite — Web Productivity & Media Engineering
\`TypeScript, Node.js, Web Audio API, HTML5 Canvas, KaTeX, Mermaid.js\`
- Architected and deployed an all-in-one suite of 100% client-side web tools for document authoring, media transformation, and encrypted peer-to-peer file sharing with zero backend dependencies.
- Engineered MD Studio, a split-screen Markdown IDE with live syntax highlighting, LaTeX/KaTeX math rendering, Mermaid flowcharts, adaptive mobile gestures, and PDF/HTML export.
- Built dedicated in-browser micro-tools including Audio Forge (Web Audio API), Image Forge, QR Forge, PDF-to-Markdown extraction, and room-based P2P File Transfer.

---PAGE---

### Task Master — E-Commerce Automation Platform
\`Python, PySide6 (Qt), FastAPI, Pandas, PostgreSQL\`
- Designed and developed a modular 6-module desktop platform for e-commerce automation, inventory management, promotional repricing, sales reporting, and workflow optimization.
- Implemented multithreaded background processing (Qt QThread), REST API integration, and automated Pandas Excel pipelines for high-volume marketplace datasets.
- Built an enterprise-grade PySide6 (Qt) desktop interface emphasizing 60 FPS responsiveness, error isolation, and operational stability.

## ADDITIONAL PROJECTS
* Arachnest Animated Cartoons (Godot & Premiere Pro — @Arachneststudio)
* Yadban — Smart Persian Calendar Android App (Myket)
* Web Scraping & Competitive Intelligence Suite
* Smart Reorder Recommendation System
* Finglish Bot — Serverless Telegram Transliteration
* Product Image Processing & Desktop Automation Suite

<!-- SPLIT_EDU_LANG -->
## EDUCATION
**Bachelor of Computer Science**
Kharazmi University
Graduated in 2026
Cumulative Average: 17.22 / 20

<!-- COL_DIVIDER -->
## LANGUAGES
**English:** C2, Full Fluency
**Persian:** Native
**French:** A2, Fundamental Knowledge
<!-- END_SPLIT -->

## VOLUNTEER EXPERIENCE
### Student Member | Association for Computing Machinery (ACM) | 2024 – 2025
- Participated in specialized technical workshops, algorithmic competitions, and programming events.
- Engaged with the computer science community through collaborative ACM research and study sessions.`,

  fr: `# SINA RIAHI
Téhéran, Iran • +98 939 603 0319 • sinariahi1382@gmail.com • github.com/Sinariahi • arachnest.itch.io

## PROFIL PROFESSIONNEL
Développeur Python, Kotlin et systèmes spécialisé dans les logiciels de bureau, applications et jeux mobiles Android, automatisation métier et web scraping. Fondateur d'Arachnest (@Arachneststudio), expérimenté dans la conception d'outils d'automatisation en production, le développement de jeux mobiles indépendants et la création d'animations.

## COMPÉTENCES TECHNIQUES
| Langages | Python, Kotlin, Rust, TypeScript, JavaScript, SQL, R |
| Frameworks & UI | Jetpack Compose, PySide6 (Qt), FastAPI, Pandas, NumPy, SciPy, React, Tauri v2 |
| Bases de Données & API | REST APIs, PostgreSQL, SQLAlchemy, Room Database, WebRTC |
| Automatisation & Scraping | nodriver, Selenium, BeautifulSoup, Requests, Extensions Chrome, Scripts Python |
| Jeu, Animation & Média | Godot (Animation 2D), Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro |
| Outils & Sécurité | Docker, Git & GitHub, Wireshark, Linux, WordPress |

## EXPÉRIENCE PROFESSIONNELLE
### Fondateur, Développeur Indépendant & Animateur | Arachnest (@Arachneststudio) | 2026 – Présent
- Création d'Arachnest, un studio de divertissement indépendant dédié aux jeux vidéo et aux dessins animés.
- Conception et publication de mon premier jeu mobile Android, **The Genesis Clause** (sorti le 24 nov. 2026 sur itch.io), avec Kotlin, Jetpack Compose, Photoshop, Illustrator et 3 scripts Python sur mesure.
- Apprentissage de l'animation 2D sous Godot et du montage vidéo sur Adobe Premiere Pro pour produire des dessins animés originaux sur Instagram (@Arachneststudio).

### Responsable du Département des Ventes | Naria Gallery | Mai 2025 – Juin 2026
- Réduction des tâches répétitives, améliorant la précision opérationnelle et doublant la moyenne des ventes.
- Conception de 14 applications d'automatisation sur mesure éliminant les goulets d'étranglement manuels.
- Gestion de la photographie produit, édition graphique, outils d'analyse des ventes et rapports de direction.

### Superviseur des Ventes | Division Digikala (Peaksale) | Août 2024 – Mai 2025
- Gestion de comptes vendeurs à fort volume sur Digikala et optimisation des fiches produits.
- Analyses de ventes basées sur les données pour guider les décisions commerciales et campagnes promotionnelles.
- Participation à la création de contenu et à la photographie produit pour le marketing.

---PAGE---

## PROJETS MAJEURS
### The Genesis Clause — Jeu de Survie Hardcore Permadeath sur Android (arachnest.itch.io/the-genesis-clause)
\`Kotlin, Jetpack Compose, Android SDK, Python (3 Scripts Dev), Photoshop, Illustrator\`
- Développement et publication de mon premier jeu mobile Android sur itch.io (24 novembre 2026) sous Arachnest : un jeu de survie hardcore à mort permanente explorant des biomes variés et lieux interactifs.
- Création d'un générateur automatique de journal intime consignant chaque choix et événement du joueur dans un récit consultable et exportable en PDF à tout moment.
- Systèmes de survie riches : 4 voies (Combattant, Pilleur, Ingénieur, Stratège), nombreux objets, événements aléatoires à embranchements, véhicules à réparer, drones, animaux, recrutement d'équipage et mini-jeux tactiles (piratage, crochetage, radio, cartes).
- Direction artistique et interfaces texturées réalisées sous Photoshop & Illustrator, soutenues par 3 scripts Python dédiés à l'automatisation des données et du pipeline de développement.

### MyPal — Utilitaire de Bureau Modulaire & Écosystème P2P
\`Rust, Tauri v2, TypeScript, React 19, Tailwind CSS, WebRTC\`
- Architecture d'un utilitaire Windows léger avec Rust (Tauri v2) et React 19, conservant un cœur minimaliste et déléguant les outils secondaires à des modules externes chargés dynamiquement.
- Chargeur de plugins isolé (sandbox) avec injection de dépendances et cache IndexedDB pour intégrer des extensions tierces (manifest.json) sans recompilation.
- Pont de transfert de fichiers et presse-papiers mobile-vers-PC sans configuration via WebRTC/WebSocket et QR code, sans passer par le cloud.
- Intégration poussée des API Windows (raccourcis globaux, barre système, multi-écrans, IPC audité) et scripts de packaging PowerShell / Inno Setup.

### Utilities Suite — Productivité Web & Ingénierie Multimédia
\`TypeScript, Node.js, Web Audio API, HTML5 Canvas, KaTeX, Mermaid.js\`
- Suite complète d'outils web exécutés 100 % côté client pour le traitement de documents, médias et partage P2P chiffré sans serveur backend.
- Développement de MD Studio, IDE Markdown à écran partagé avec coloration syntaxique, formules LaTeX/KaTeX, diagrammes Mermaid et export PDF/HTML.
- Micro-outils natifs navigateur : Audio Forge (Web Audio API), Image Forge, QR Forge, extraction PDF vers Markdown et transfert P2P par salon.

---PAGE---

### Task Master — Plateforme d'Automatisation E-Commerce
\`Python, PySide6 (Qt), FastAPI, Pandas, PostgreSQL\`
- Plateforme de bureau modulaire à 6 modules pour la gestion des stocks, tarification promotionnelle, analyse des ventes et automatisation des flux métiers.
- Travailleurs multithreadés (Qt QThread), synchronisation API REST et pipelines Excel automatisés via Pandas.
- Interface graphique professionnelle sous PySide6 (Qt) garantissant une fluidité constante à 60 FPS.

## PROJETS COMPLÉMENTAIRES
* Dessins Animés Arachnest (Godot & Premiere Pro — @Arachneststudio)
* Yadban — Application Android de Calendrier Persan (Myket)
* Suite de Web Scraping & Veille Concurrentielle
* Système Intelligent de Recommandation de Réapprovisionnement
* Finglish Bot — Bot Telegram de Translittération Serverless
* Pipeline de Traitement d'Images & Automatisation Bureautique

<!-- SPLIT_EDU_LANG -->
## FORMATION ACADÉMIQUE
**Licence en Informatique (B.Sc.)**
Université Kharazmi
Diplômé en 2026
Moyenne Générale : 17.22 / 20

<!-- COL_DIVIDER -->
## LANGUES
**Anglais :** C2, Maîtrise Complète
**Persan :** Langue Maternelle
**Français :** A2, Connaissances Fondamentales
<!-- END_SPLIT -->

## ENGAGEMENT ASSOCIATIF
### Membre Étudiant | Association for Computing Machinery (ACM) | 2024 – 2025
- Participation à des ateliers techniques spécialisés, événements de programmation et sessions collaboratives d'algorithmique.
- Implication active au sein de la communauté informatique universitaire à travers les activités de l'ACM.`,

  fa: `# سینا ریاحی
تهران، ایران • ۰۹۳۹۶۰۳۰۳۱۹ • sinariahi1382@gmail.com • github.com/Sinariahi • arachnest.itch.io

## خلاصه حرفه‌ای
توسعه‌دهنده پایتون، کاتلین و سیستم‌های نرم‌افزاری، متخصص در ساخت نرم‌افزارهای دسکتاپ، اپلیکیشن و بازی موبایل اندروید، اتوماسیون کسب‌وکار و وب‌اسکرپینگ. بنیان‌گذار استودیوی سرگرمی آراکنست (Arachnest / @Arachneststudio) با تجربه در ساخت ابزارهای اتوماسیون عملیاتی، انتشار بازی مستقل اندروید همراه با ابزارهای توسعه اختصاصی و تولید انیمیشن.

## مهارت‌های فنی
| زبان‌های برنامه‌نویسی | Python, Kotlin, Rust, TypeScript, JavaScript, SQL, R |
| فریم‌ورک‌ها و رابط کاربری | Jetpack Compose, PySide6 (Qt), FastAPI, Pandas, NumPy, SciPy, React, Tauri v2 |
| پایگاه داده و رابط‌ها | REST APIs, PostgreSQL, SQLAlchemy, Room Database, WebRTC |
| اتوماسیون و وب‌اسکرپینگ | nodriver, Selenium, BeautifulSoup, Requests, Chrome Extensions, Python Dev Scripts |
| بازی‌سازی، انیمیشن و رسانه | Godot (2D Animation), Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro |
| ابزارها و امنیت شبکه | Docker, Git & GitHub, Wireshark, Linux, WordPress |

## سوابق شغلی و اجرایی
### بنیان‌گذار، بازی‌ساز مستقل و انیماتور | استودیو آراکنست (Arachnest · @Arachneststudio) | ۱۴۰۵ – اکنون (2026 – Present)
- بنیان‌گذاری استودیو مستقل سرگرمی آراکنست با تمرکز بر ساخت بازی‌های ویدیویی و کارتون‌های انیمیشنی.
- طراحی، توسعه و انتشار اولین بازی موبایل اندروید خود به نام **The Genesis Clause** در تاریخ ۳ آذر ۱۴۰۵ (۲۴ نوامبر ۲۰۲۶) روی itch.io با Kotlin، Jetpack Compose، Photoshop و Illustrator همراه با ۳ اسکریپت اختصاصی پایتون برای تسهیل فرآیند بازی‌سازی.
- یادگیری انیمیشن‌سازی در Godot و تدوین در Adobe Premiere Pro جهت ساخت و انتشار کارتون‌های اختصاصی در صفحه اینستاگرام @Arachneststudio.

### مدیر بخش فروش | گالری ناریا (Naria Gallery) | اردیبهشت ۱۴۰۴ – خرداد ۱۴۰۵
- کاهش چشمگیر فرآیندهای دستی، ارتقای دقت عملیاتی و دو برابر کردن میانگین فروش مجموعه.
- طراحی و پیاده‌سازی ۱۴ نرم‌افزار اتوماسیون اختصاصی برای حذف گلوگاه‌های دستی و بهینه‌سازی گردش کار.
- مدیریت عکاسی و ویرایش تصاویر محصولات، ساخت ابزارهای تحلیل فروش و تولید گزارش‌های مدیریتی.

### سرپرست فروش | بخش دیجی‌کالا (Peaksale) | مرداد ۱۴۰۳ – اردیبهشت ۱۴۰۴
- مدیریت حساب‌های فروشندگان پرحجم در دیجی‌کالا و بهینه‌سازی کاتالوگ محصولات.
- اجرای تحلیل‌های داده‌محور فروش برای هدایت تصمیمات تجاری و برنامه‌ریزی کمپین‌های تخفیفی.
- مشارکت در تولید محتوا و عکاسی محصولات برای کمپین‌های بازاریابی مارکت‌پلیس.

---PAGE---

## پروژه‌های شاخص مهندسی
### The Genesis Clause — بازی موبایل بقای هاردکور و مرگ دائمی اندروید (arachnest.itch.io/the-genesis-clause)
\`Kotlin, Jetpack Compose, Android SDK, Python (3 Dev Scripts), Photoshop, Illustrator\`
- طراحی و انتشار اولین بازی موبایل اندروید روی پلتفرم itch.io (۳ آذر ۱۴۰۵ / ۲۴ نوامبر ۲۰۲۶) تحت استودیو آراکنست: یک بازی بقای هاردکور با مکانیزم مرگ دائمی (Permadeath) در زیست‌بوم‌های متنوع و مکان‌های تعاملی.
- مهندسی سیستم تولید خودکار دفترچه خاطرات (Diary Generation) که تمامی تصمیم‌ها و وقایع بازیکن را ثبت کرده و داستان شخصی او را با قابلیت خروجی گرفتن به‌صورت فایل PDF در هر لحظه تولید می‌کند.
- پیاده‌سازی سیستم‌های عمیق بقا شامل ۴ مسیر زندگی (مبارز، غارتگر، مهندس، برنامه‌ریز)، انبوه آیتم‌ها و رویدادهای تصادفی شاخه‌دار، تعمیر خودرو، ساخت پهپاد، نجات حیوانات، استخدام خدمه و مینی‌گیم‌های سبک‌دار (هک، قفل‌گشایی، رادیو و بازی ورق).
- طراحی رابط کاربری و تصاویر هنری بازی در Photoshop و Illustrator و نگارش ۳ اسکریپت پایتون جهت خودکارسازی مدیریت داده‌ها، دارایی‌ها و تسریع فرآیند تولید بازی.

### MyPal — ابزار دسکتاپ ماژولار و اکوسیستم همتابه‌همتا (P2P)
\`Rust, Tauri v2, TypeScript, React 19, Tailwind CSS, WebRTC\`
- معماری ابزار دسکتاپ سبک و ماژولار ویندوز با Rust (Tauri v2) و React 19 با هسته اجرایی کم‌حجم و بارگذاری پویای ماژول‌های خارجی.
- پیاده‌سازی سیستم پلاگین ایزوله (Sandboxed) با تزریق وابستگی در زمان اجرا و کش IndexedDB بدون نیاز به بیلد مجدد هسته.
- ساخت پل انتقال فایل و کلیپ‌بورد موبایل به کامپیوتر بدون تنظیمات از طریق WebRTC/WebSocket و جفت‌سازی QR بدون نیاز به سرور ابری.
- یکپارچه‌سازی عمیق با APIهای ویندوز (میانبرهای سراسری، System Tray، تشخیص چند مانیتور، IPC امن) و پایپ‌لاین نصاب با PowerShell و Inno Setup.

### Utilities Suite — مجموعه ابزارهای بهره‌وری وب و مهندسی رسانه
\`TypeScript, Node.js, Web Audio API, HTML5 Canvas, KaTeX, Mermaid.js\`
- طراحی و توسعه مجموعه ابزارهای وب صددرصد سمت کاربر (Client-Side) برای ویرایش اسناد، پردازش رسانه و انتقال امن P2P بدون نیاز به بک‌اند.
- مهندسی MD Studio؛ محیط ویرایش دوطرفه مارک‌داون با فرمول‌های LaTeX/KaTeX، نمودارهای Mermaid و خروجی PDF/HTML.
- ساخت میکروابزارهای تحت مرورگر شامل Audio Forge (Web Audio API)، Image Forge، QR Forge، استخراج PDF به مارک‌داون و انتقال P2P رمزنگاری‌شده.

---PAGE---

### Task Master — پلتفرم اتوماسیون تجارت الکترونیک و عملیات فروش
\`Python, PySide6 (Qt), FastAPI, Pandas, PostgreSQL\`
- طراحی و توسعه پلتفرم دسکتاپ ۶ ماژوله برای خودکارسازی عملیات فروش، مدیریت موجودی انبار، قیمت‌گذاری پویا و گزارش‌گیری مالی.
- پیاده‌سازی پردازش‌های پس‌زمینه چندنخی (Qt QThread)، همگام‌سازی REST API و پایپ‌لاین‌های خودکار اکسل با Pandas.
- ساخت رابط کاربری دسکتاپ سازمانی با PySide6 (Qt) با پایداری بالا و نرخ نوسازی ۶۰ فریم بر ثانیه.

## سایر پروژه‌های تخصصی
* کارتون‌های انیمیشنی آراکنست (Godot و Premiere Pro — @Arachneststudio)
* یادبان (Yadban) — اپلیکیشن اندروید تقویم جلالی و مدیریت قرارها (مایکت)
* مجموعه وب‌اسکرپینگ مخفیانه و داشبورد هوش رقابتی
* سیستم هوشمند پیشنهاد سفارش مجدد کالا (Smart Reorder)
* ربات تلگرام فینگلیش (Finglish Bot) بر بستر Cloudflare Workers
* پایپ‌لاین خودکار پردازش تصاویر محصولات و اتوماسیون دسکتاپ

<!-- SPLIT_EDU_LANG -->
## تحصیلات دانشگاهی
**کارشناسی علوم کامپیوتر (B.Sc.)**
دانشگاه خوارزمی
فارغ‌التحصیل ۱۴۰۵ (2026)
معدل کل: ۱۷.۲۲ از ۲۰

<!-- COL_DIVIDER -->
## مهارت‌های زبانی
**انگلیسی:** سطح C2 (تسلط کامل)
**فارسی:** زبان مادری
**فرانسوی:** سطح A2 (آشنایی مقدماتی)
<!-- END_SPLIT -->

## فعالیت‌های علمی و داوطلبانه
### عضو دانشجویی | انجمن ماشین‌های حسابگر (ACM) | ۱۴۰۳ – ۱۴۰۴ (2024 – 2025)
- مشارکت فعال در کارگاه‌های تخصصی فنی، رویدادهای برنامه‌نویسی و جلسات حل مسئله الگوریتمی.
- همکاری و تعامل علمی با جامعه علوم کامپیوتر از طریق فعالیت‌های شاخه دانشجویی ACM.`,
};
