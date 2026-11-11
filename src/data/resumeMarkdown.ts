import { Language } from './translations';

export interface ParsedResumePage {
  pageNumber: number;
  totalPages: number;
  html: string;
}

/**
 * Canonical Markdown (MD) resume sources for English (en), French (fr), and Persian (fa).
 * Uses `---PAGE---` to denote clean A4 page boundaries so multi-page PDFs never clip mid-paragraph.
 */
export const RESUME_MARKDOWN: Record<Language, string> = {
  en: `# SINA RIAHI
Tehran, Iran • 09396030319 • sinariahi1382@gmail.com • github.com/Sinariahi

## PROFESSIONAL SUMMARY
Python and systems developer specializing in desktop applications, business automation, data processing, web scraping, and workflow optimization. Experienced building production tools that automate repetitive operations, integrate with REST APIs, process Excel datasets, and generate business reports.

## TECHNICAL SKILLS
| Languages | Python, Rust, TypeScript, JavaScript, SQL, R |
| Frameworks & Libraries | PySide6 (Qt), FastAPI, Pandas, NumPy, SciPy, Pydantic, React, Tauri v2 |
| Database & APIs | REST APIs, PostgreSQL, SQLAlchemy, WebRTC |
| Automation & Scraping | nodriver, Selenium, BeautifulSoup, Requests, Chrome Extensions |
| Tools & Security | Docker, Git & GitHub, Wireshark, Linux, WordPress, Photoshop |

## EXPERIENCE
### Sales Department Manager | Naria Gallery | May 2025 – June 2026
- Reduced repetitive tasks, improving operational accuracy and efficiency and doubling the average sales.
- Engineered 14 custom automation applications that eliminated manual workflows and improved operational efficiency.
- Managed product photography and editing for online listings.
- Created sales analysis tools and generated executive management reports.

### Sales Supervisor | Digikala (Peaksale) Division | August 2024 – May 2025
- Managed high-volume seller accounts on Digikala and optimized product catalog listings.
- Conducted data-driven sales analysis to support critical business decisions.
- Assisted in content creation and product photography for marketing campaigns.
- Planned and managed promotional events for increased marketplace engagement.

---PAGE---

## MAJOR PROJECTS
### MyPal — Modular Desktop Utility & P2P Ecosystem
\`Rust, Tauri v2, TypeScript, React 19, Tailwind CSS, WebRTC\`
- Architected a lightweight, modular Windows utility using Rust (Tauri v2) and React 19, keeping the core executable lean with essential system diagnostics and delegating secondary tools to dynamically loaded external modules.
- Engineered an external sandboxed plugin loader with runtime dependency injection, dynamic script evaluation, and IndexedDB caching, allowing users to drop in or hot-swap third-party plugins (manifest.json + bundled code) with zero core rebuilds.
- Implemented a zero-configuration mobile-to-PC file transfer and clipboard bridge via WebRTC/WebSocket data channels and QR-code pairing, completely bypassing cloud intermediaries for low-latency local sharing.
- Integrated deep OS-level Windows APIs including global keyboard hook accelerators, system tray lifecycle handling, wake-word activation, multi-monitor bounds detection, and an audited IPC bridge.
- Automated CI/CD build scripts (PowerShell, Batch, Inno Setup) producing standalone multi-artifact distributions (mypal.exe + modular zip packs) and Windows installers with firewall rule registration.

### Utilities Suite — Web Productivity & Media Engineering
\`TypeScript, Node.js, Web Audio API, HTML5 Canvas, KaTeX, Mermaid.js\`
- Architected and deployed an all-in-one suite of high-performance, client-side web tools focusing on advanced document processing, media transformation, and secure peer-to-peer sharing with zero required backend dependencies.
- Engineered MD Studio, an advanced split-screen Markdown IDE supporting live rendering, syntax highlighting, LaTeX/KaTeX mathematical typesetting, Mermaid flowchart rendering, and export to PDF/HTML.
- Developed a fully responsive view engine for MD Studio featuring adaptive gesture switching on mobile devices, live document statistics, customizable themes, and automated local document caching.
- Built dedicated micro-tools including Audio Forge (in-browser audio editor), Image Forge, QR Forge, PDF to Markdown text extraction, and secure room-based P2P File Transfer.
- Optimized client-side performance and latency by implementing pure in-browser file parsing and encoding, eliminating server transfer costs and ensuring 100% user data privacy.

---PAGE---

### Task Master — E-Commerce Automation Platform
\`Python, PySide6 (Qt), FastAPI, Pandas, PostgreSQL\`
- Designed and developed a modular desktop platform for e-commerce automation, inventory management, promotional repricing, sales reporting, and business workflow optimization.
- Architected a scalable application consisting of 6 integrated modules with reusable components and a maintainable, extensible codebase.
- Implemented multithreaded background processing (Qt QThread), REST API integration, and automated Excel data pipelines for high-volume data collection and analysis.
- Built an enterprise-style desktop interface using PySide6 (Qt), emphasizing usability, 60 FPS responsiveness, and operational stability.

## ADDITIONAL PROJECTS
* Web Scraping & Competitive Intelligence Suite
* Smart Reorder Recommendation System
* Yadban — Smart Persian Calendar Android App (Myket)
* Finglish Bot — Serverless Telegram Transliteration
* Product Image Processing Pipeline
* Desktop Workflow Automation Suite

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
Téhéran, Iran • +98 939 603 0319 • sinariahi1382@gmail.com • github.com/Sinariahi

## PROFIL PROFESSIONNEL
Développeur Python et systèmes spécialisé dans les applications de bureau, l'automatisation des processus métiers, le traitement de données, le web scraping et l'optimisation des flux de travail. Expérimenté dans la conception d'outils de production qui automatisent les opérations répétitives, s'intègrent aux API REST, traitent les fichiers Excel et génèrent des rapports analytiques.

## COMPÉTENCES TECHNIQUES
| Langages | Python, Rust, TypeScript, JavaScript, SQL, R |
| Frameworks & Bibliothèques | PySide6 (Qt), FastAPI, Pandas, NumPy, SciPy, Pydantic, React, Tauri v2 |
| Bases de Données & API | REST APIs, PostgreSQL, SQLAlchemy, WebRTC |
| Automatisation & Scraping | nodriver, Selenium, BeautifulSoup, Requests, Extensions Chrome |
| Outils & Sécurité | Docker, Git & GitHub, Wireshark, Linux, WordPress, Photoshop |

## EXPÉRIENCE PROFESSIONNELLE
### Responsable du Département des Ventes | Naria Gallery | Mai 2025 – Juin 2026
- Réduction des tâches répétitives, améliorant la précision et l'efficacité opérationnelle et doublant la moyenne des ventes.
- Conception et déploiement de 14 applications d'automatisation sur mesure éliminant les goulets d'étranglement manuels.
- Gestion de la photographie produit et de l'édition graphique pour les catalogues en ligne.
- Création d'outils d'analyse des ventes et génération de rapports exécutifs pour la direction.

### Superviseur des Ventes | Division Digikala (Peaksale) | Août 2024 – Mai 2025
- Gestion de comptes vendeurs à fort volume sur Digikala et optimisation du référencement des fiches produits.
- Réalisation d'analyses de ventes basées sur les données pour guider les décisions commerciales stratégiques.
- Participation à la création de contenu et à la photographie produit pour le marketing.
- Planification et pilotage des campagnes promotionnelles pour accroître l'engagement sur la marketplace.

---PAGE---

## PROJETS MAJEURS
### MyPal — Utilitaire de Bureau Modulaire & Écosystème P2P
\`Rust, Tauri v2, TypeScript, React 19, Tailwind CSS, WebRTC\`
- Architecture d'un utilitaire de bureau Windows léger et modulaire avec Rust (Tauri v2) et React 19, conservant un exécutable principal minimaliste et déléguant les fonctionnalités secondaires à des modules externes chargés dynamiquement.
- Développement d'un chargeur de plugins isolé (sandbox) avec injection de dépendances à l'exécution et mise en cache IndexedDB, permettant d'ajouter des plugins tiers (manifest.json + code) sans recompiler le cœur.
- Implémentation d'un pont de transfert de fichiers et de presse-papiers mobile-vers-PC sans configuration via WebRTC/WebSocket et appairage par QR code, sans passer par le cloud.
- Intégration poussée des API Windows bas niveau : raccourcis clavier globaux, gestion de la barre d'état système, détection multi-écrans et pont IPC audité.
- Automatisation du pipeline CI/CD (PowerShell, Batch, Inno Setup) générant l'exécutable autonome mypal.exe, les archives modulaires et les installateurs Windows avec règles de pare-feu.

### Utilities Suite — Productivité Web & Ingénierie Multimédia
\`TypeScript, Node.js, Web Audio API, HTML5 Canvas, KaTeX, Mermaid.js\`
- Conception et déploiement d'une suite complète d'outils web haute performance exécutés 100 % côté client pour le traitement de documents, la transformation multimédia et le partage pair-à-pair sécurisé sans serveur.
- Développement de MD Studio, un IDE Markdown à écran partagé prenant en charge le rendu en direct, la coloration syntaxique, les formules mathématiques LaTeX/KaTeX, les diagrammes Mermaid et l'export PDF/HTML.
- Création d'un moteur d'affichage adaptatif pour mobile et tablette avec statistiques en temps réel, thèmes personnalisables et sauvegarde locale automatique.
- Réalisation de micro-outils dédiés : Audio Forge (éditeur audio dans le navigateur), Image Forge, QR Forge, extraction PDF vers Markdown et transfert P2P chiffré par salon.
- Optimisation des performances côté client par traitement local dans le navigateur, garantissant zéro coût serveur et une confidentialité totale des données.

---PAGE---

### Task Master — Plateforme d'Automatisation E-Commerce
\`Python, PySide6 (Qt), FastAPI, Pandas, PostgreSQL\`
- Conception et développement d'une plateforme de bureau modulaire pour l'automatisation du commerce électronique, la gestion des stocks, l'ajustement tarifaire et le reporting des ventes.
- Architecture évolutive articulée autour de 6 modules intégrés avec composants réutilisables et séparation stricte MVC.
- Implémentation de travailleurs d'arrière-plan multithreadés (Qt QThread), synchronisation API REST et pipelines Excel automatisés via Pandas.
- Création d'une interface graphique professionnelle sous PySide6 (Qt) garantissant une fluidité constante à 60 FPS lors des traitements lourds.

## PROJETS COMPLÉMENTAIRES
* Suite de Web Scraping & Veille Concurrentielle
* Système Intelligent de Recommandation de Réapprovisionnement
* Yadban — Application Android de Calendrier Persan (Myket)
* Finglish Bot — Bot Telegram de Translittération Serverless
* Pipeline Automatisé de Traitement d'Images Produits
* Suite d'Automatisation des Flux Bureautiques

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
تهران، ایران • ۰۹۳۹۶۰۳۰۳۱۹ • sinariahi1382@gmail.com • github.com/Sinariahi

## خلاصه حرفه‌ای
توسعه‌دهنده پایتون و سیستم‌های نرم‌افزاری، متخصص در ساخت نرم‌افزارهای دسکتاپ، اتوماسیون فرآیندهای کسب‌وکار، پردازش داده، وب‌اسکرپینگ و بهینه‌سازی گردش کار. دارای تجربه عملی در مهندسی ابزارهای عملیاتی که کارهای تکراری را خودکار می‌کنند، با سرویس‌های REST API یکپارچه می‌شوند، داده‌های پیچیده اکسل را پردازش کرده و گزارش‌های مدیریتی تولید می‌کنند.

## مهارت‌های فنی
| زبان‌های برنامه‌نویسی | Python, Rust, TypeScript, JavaScript, SQL, R |
| فریم‌ورک‌ها و کتابخانه‌ها | PySide6 (Qt), FastAPI, Pandas, NumPy, SciPy, Pydantic, React, Tauri v2 |
| پایگاه داده و رابط‌ها | REST APIs, PostgreSQL, SQLAlchemy, WebRTC |
| اتوماسیون و وب‌اسکرپینگ | nodriver, Selenium, BeautifulSoup, Requests, Chrome Extensions |
| ابزارها و امنیت شبکه | Docker, Git & GitHub, Wireshark, Linux, WordPress, Photoshop |

## سوابق شغلی و اجرایی
### مدیر بخش فروش | گالری ناریا (Naria Gallery) | اردیبهشت ۱۴۰۴ – خرداد ۱۴۰۵
- کاهش چشمگیر فرآیندهای دستی و تکراری، ارتقای دقت و سرعت عملیاتی و دو برابر کردن میانگین فروش مجموعه.
- طراحی و پیاده‌سازی ۱۴ نرم‌افزار اتوماسیون اختصاصی برای حذف گلوگاه‌های دستی و بهینه‌سازی گردش کار.
- مدیریت عکاسی صنعتی محصولات و ویرایش تصاویر برای درج در فروشگاه‌های آنلاین.
- ساخت ابزارهای تحلیلی فروش و تولید گزارش‌های مدیریتی جهت تصمیم‌گیری کلان.

### سرپرست فروش | بخش دیجی‌کالا (Peaksale) | مرداد ۱۴۰۳ – اردیبهشت ۱۴۰۴
- مدیریت حساب‌های فروشندگان پرحجم در دیجی‌کالا و بهینه‌سازی کاتالوگ و صفحات محصولات.
- اجرای تحلیل‌های داده‌محور فروش برای هدایت تصمیمات تجاری و قیمت‌گذاری رقابتی.
- مشارکت در تولید محتوا و عکاسی محصولات برای کمپین‌های بازاریابی.
- برنامه‌ریزی و مدیریت کمپین‌های تخفیفی و پروموشن‌ها برای افزایش تعامل و فروش در مارکت‌پلیس.

---PAGE---

## پروژه‌های شاخص مهندسی
### MyPal — ابزار دسکتاپ ماژولار و اکوسیستم همتابه‌همتا (P2P)
\`Rust, Tauri v2, TypeScript, React 19, Tailwind CSS, WebRTC\`
- طراحی و معماری ابزار دسکتاپ سبک و ماژولار ویندوز با استفاده از Rust (Tauri v2) و React 19 با حفظ هسته اجرایی کم‌حجم و واگذاری ابزارهای جانبی به ماژول‌های خارجی قابل بارگذاری پویا.
- پیاده‌سازی سیستم بارگذاری پلاگین ایزوله (Sandboxed) با تزریق وابستگی در زمان اجرا و کش IndexedDB جهت افزودن پلاگین‌های جانبی (manifest.json + کد) بدون نیاز به بیلد مجدد هسته.
- ساخت پل ارتباطی انتقال فایل و کلیپ‌بورد بین موبایل و کامپیوتر بدون نیاز به تنظیمات (Zero-Config) از طریق کانال‌های داده WebRTC/WebSocket و جفت‌سازی با کد QR بدون وابستگی به سرور ابری.
- یکپارچه‌سازی عمیق با APIهای سطح سیستم‌عامل ویندوز شامل هوک‌های سراسری صفحه‌کلید، مدیریت System Tray، تشخیص مرزهای چند مانیتور و پل ارتباطی امن IPC.
- خودکارسازی پایپ‌لاین بیلد و توزیع (PowerShell, Batch, Inno Setup) برای تولید فایل اجرایی مستقل mypal.exe، بسته‌های ماژولار و نصاب سازمانی ویندوز به همراه ثبت قوانین فایروال.

### Utilities Suite — مجموعه ابزارهای بهره‌وری وب و مهندسی رسانه
\`TypeScript, Node.js, Web Audio API, HTML5 Canvas, KaTeX, Mermaid.js\`
- طراحی و توسعه مجموعه یکپارچه‌ای از ابزارهای وب سریع و صددرصد سمت کاربر (Client-Side) برای ویرایش پیشرفته اسناد، پردازش رسانه و اشتراک‌گذاری امن فایل همتابه‌همتا بدون نیاز به سرور بک‌اند.
- مهندسی MD Studio؛ محیط توسعه دوطرفه مارک‌داون با پیش‌نمایش زنده، هایلایت سینتکس، حروف‌چینی فرمول‌های ریاضی LaTeX/KaTeX، رسم فلوچارت‌های Mermaid و خروجی PDF/HTML.
- پیاده‌سازی موتور نمایش واکنش‌گرا برای موبایل و تبلت با قابلیت سوییچ حرکتی، آمار زنده سند، تم‌های متنوع و ذخیره‌سازی خودکار محلی.
- ساخت میکروابزارهای تخصصی شامل Audio Forge (ویرایشگر صوتی تحت مرورگر)، Image Forge، QR Forge، استخراج متن PDF به مارک‌داون و انتقال فایل رمزنگاری‌شده مبتنی بر اتاق.
- بهینه‌سازی کارایی و حذف تاخیر شبکه با اجرای کامل پردازش‌ها درون مرورگر کاربر، تضمین حفظ کامل حریم خصوصی و حذف هزینه‌های سرور.

---PAGE---

### Task Master — پلتفرم اتوماسیون تجارت الکترونیک و عملیات فروش
\`Python, PySide6 (Qt), FastAPI, Pandas, PostgreSQL\`
- طراحی و توسعه پلتفرم دسکتاپ ماژولار برای خودکارسازی عملیات فروش آنلاین، مدیریت موجودی انبار، قیمت‌گذاری پویا، گزارش‌گیری مالی و بهینه‌سازی فرآیندهای کسب‌وکار.
- معماری مقیاس‌پذیر متشکل از ۶ ماژول یکپارچه با کامپوننت‌های قابل استفاده مجدد و تفکیک لایه‌های MVC.
- پیاده‌سازی پردازش‌های پس‌زمینه چندنخی (Qt QThread)، همگام‌سازی با REST API و پایپ‌لاین‌های خودکار پردازش فایل‌های اکسل حجیم با Pandas.
- ساخت رابط کاربری دسکتاپ سازمانی با PySide6 (Qt) با تمرکز بر سهولت کاربری، پایداری عملیاتی و نرخ نوسازی ۶۰ فریم بر ثانیه.

## سایر پروژه‌های تخصصی
* مجموعه وب‌اسکرپینگ مخفیانه و داشبورد هوش رقابتی
* سیستم هوشمند پیشنهاد سفارش مجدد کالا (Smart Reorder)
* یادبان (Yadban) — اپلیکیشن اندروید تقویم جلالی و مدیریت قرارها (منتشرشده در مایکت)
* ربات تلگرام فینگلیش (Finglish Bot) — تبدیل هوشمند فینگلیش به فارسی بر بستر Cloudflare Workers
* پایپ‌لاین خودکار پردازش و واترمارک تصاویر محصولات
* مجموعه ابزارهای اتوماسیون گردش کار دسکتاپ

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
