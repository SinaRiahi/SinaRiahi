# Architecture & AI Engineering Guidelines

> **Single Source of Truth**: This document defines the core architecture, design system, multilingual localization rules, interactive components, and coding standards for the **Sina Riahi Engineering Portfolio**. Always read and obey this specification before modifying the codebase, and keep it synchronized with all architectural updates.

---

## 1. System Architecture & Directory Structure

- **Framework & Build Stack**: React 18 SPA + TypeScript + Vite 6 + Tailwind CSS 3.
- **Directory Layout**:
  - `/src/components/` — Modular UI sections and interactive widgets:
    - `Navbar.tsx` — 3-zone header with scroll-triggered brand wordmark, section links, search trigger (`⌘K`), theme toggle, localized resume download CTA, and circular flag-only language dropdown (`en`, `fr`, `fa`).
    - `Hero.tsx` — Editorial introduction, focus areas, primary CTAs, and the interactive `TrackingEye` ocular sensor.
    - `TrackingEye.tsx` — Bionic cursor-tracking ocular sensor with 15-second stare-contest nervous sweat droplets, glitch effect, and permanent 3-click crimson red lock (`DO NOT CLICK`).
    - `About.tsx` — Academic credentials (Kharazmi University, 17.22/20 GPA), linguistic proficiencies, engineering philosophy, and 4 production capability cards.
    - `Projects.tsx` & `ProjectDetailModal.tsx` — Categorized bento grid and deep-dive engineering case study modal.
    - `Skills.tsx` & `NeuralSkillNetwork.tsx` — Proficiency filter matrix and interactive 3D cerebral hemisphere neural network canvas.
    - `Experience.tsx` & `TimeTravelCalendar.tsx` — Chronological milestone timeline paired with a scroll-synchronized kinetic calendar widget.
    - `Contact.tsx` & `NomNomMonster.tsx` — Direct contact cards, Tehran live schedule status, localized resume download card, mailto form, and interactive snack-eating monster widget.
    - `CommandPalette.tsx` — `⌘K / Ctrl+K` keyboard navigation and action launcher.
    - `TerminalModal.tsx` — Developer terminal emulator (`~` key) supporting system inspection commands, interactive `destroy` prank protocol, and hidden accent theme commands (`spider`, `dragon`, `rock`).
    - `MorphText.tsx` — Lightweight text primitive applying Persian `dir="rtl"` and `Vazirmatn` font styling without altering page layout geometry.
    - `ScrollFade.tsx` — Bidirectional `IntersectionObserver` wrapper animating sections and cards on viewport entry and exit.
  - `/src/context/` — Global React Context providers:
    - `ThemeContext.tsx` — Manages `dark` / `light` surface mode and `default` / `spider` (red) / `dragon` (orange) accent themes.
    - `LanguageContext.tsx` — Manages active language (`en`, `fr`, `fa`), `localStorage` persistence (`sr_portfolio_lang`), and lightweight opacity transitions.
  - `/src/data/` — Static data stores and localization bundles:
    - `translations.ts` — Complete trilingual dictionary (`en`, `fr`, `fa`) for all UI sections, projects, skills, and milestones.
    - `resumeMarkdown.ts` — Trilingual Markdown (`md`) resume sources and structured parser for client-side PDF generation.
    - `projects.ts`, `skills.ts`, `experience.ts`, `socials.ts`, `schedule.ts`.
  - `/src/utils/`:
    - `resume.ts` — Client-side Markdown-to-PDF (`md -> pdf`) generator and downloader that compiles the active language's Markdown resume into a multi-page A4 PDF (`Sina_Riahi_Resume_EN.pdf`, `Sina_Riahi_Resume_FR.pdf`, `Sina_Riahi_Resume_FA.pdf`).

---

## 2. Design System & Visual Invariants

1. **Surface Palette (60-30-10 Rule)**:
   - Dark Mode Canvas: `#08090D` primary background, `#0d0f17` elevated card surfaces, `rgba(255,255,255,0.1)` subtle borders.
   - Light Mode Canvas: `#F8F9FC` primary background, `#FFFFFF` card surfaces, `#E2E8F0` / `#CBD5E1` borders.
   - Accent Themes: Default Cyber Blue (`#2563EB` / `#38BDF8`), Spider Crimson (`#DC2626` / `#F87171`), and Dragon Solar Orange (`#EA580C` / `#FB923C`). Accent themes only override accent elements (buttons, badges, highlights) and must never alter the page background canvas.
2. **Typography & Multilingual Directionality**:
   - Latin (`en`, `fr`): `Plus Jakarta Sans` for UI/display and `JetBrains Mono` for technical metadata.
   - Persian (`fa`): `Vazirmatn` font with text-level `dir="rtl"`.
   - **Layout Geometry Invariant**: Selecting Persian (`fa`) must NEVER flip the global page layout to RTL (`<html dir="ltr">` remains fixed). Only text blocks receive `dir="rtl"` and `.font-persian`.
3. **Zero-Pill Metadata Discipline**:
   - Static metadata (tech stacks, dates, categories, focus tags) must be rendered as clean unboxed text separated by `·` or `/`. Interactive filter tabs and buttons use clean segmented controls.

---

## 3. Multilingual Markdown-to-PDF (`md -> pdf`) Resume Pipeline

- **Language-Aware Generation**: Clicking any Resume download button (`Navbar`, `Hero`, `Contact`, `Footer`, `CommandPalette`, or running `resume` in `TerminalModal`) detects the current site language (`en`, `fr`, or `fa`).
- **Markdown Source (`src/data/resumeMarkdown.ts`)**: Stores canonical Markdown resume documents for English, French, and Persian, covering Header & Contact Info, Professional Summary, Technical Skills, Experience, Major Projects, Additional Projects, Education, Languages, and Volunteer Experience.
- **Client-Side PDF Rendering (`src/utils/resume.ts`)**: Parses the localized Markdown into paginated A4 sheets, renders them offscreen with native browser font shaping (supporting Persian RTL ligatures in `Vazirmatn` and French diacritics in `Plus Jakarta Sans`), captures high-DPI pages via `html2canvas` + `jsPDF`, caches the resulting PDF blob per language, and downloads `Sina_Riahi_Resume_<LANG>.pdf`.
