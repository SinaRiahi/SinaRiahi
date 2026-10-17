# Multilingual Portfolio Experience & Dynamic Scroll Animations

Add seamless English, French, and Persian (Farsi) language switching with inline flag controls in the top navigation bar, accompanied by a wave letter-by-letter flip morphing animation on text transitions, text-level RTL directionality for Persian (keeping the overall site layout geometry unchanged), and bidirectional scroll-triggered fade-in and fade-out animations across all sections.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following design and behavior decisions were confirmed during interactive clarification and govern this implementation:

- **Confirmed Decision 1 — Inline Flag Switcher in Top Navbar**: English (🇬🇧/🇺🇸), French (🇫🇷), and Persian (🇮🇷) flag buttons will be displayed inline in the top navigation bar (and accessible in the mobile drawer) with clear active state styling.
- **Confirmed Decision 2 — Wave Letter-by-Letter Flip Animation**: Switching languages triggers a staggered 3D wave flip (`rotateX` / `translateY` + opacity) across characters/words as the old language flips out and the newly selected language flips in.
- **Confirmed Decision 3 — Text-Only RTL for Persian**: When Persian is active, page grids, columns, navbar zones, and card placements remain strictly Left-to-Right (`LTR`) so the visual architecture never mirrors or shifts, while individual text blocks render with `dir="rtl"` and Persian-appropriate typography for natural reading flow.
- **Confirmed Decision 4 — Scroll-Triggered Fade In & Out**: All major portfolio sections and cards will smoothly fade and slide in when entering the viewport and fade out when scrolling away.

---

## 1. Overview & Core Concept

- **What It Does**: Transforms the portfolio into a trilingual experience (English, French, Persian) where every heading, bio narrative, project case study, skill category, timeline milestone, and contact prompt morphs smoothly between languages. Simultaneously, scroll-driven reveal and exit transitions bring a fluid editorial rhythm to the page as visitors browse up and down.
- **Target Audience / Persona**: International recruiters, engineering leads, and collaborators across English-, French-, and Persian-speaking regions evaluating Sina Riahi's systems and software engineering work.
- **Key Value**: Showcases frontend polish and international accessibility while strictly preserving the carefully engineered spatial balance of the portfolio.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Language Selection**: The user clicks one of the three crisp SVG flag buttons (`EN`, `FR`, `FA`) in the top navigation bar.
  2. **Wave Letter Morphing**: Visible headings, navigation labels, and descriptions perform a rapid, staggered wave flip where letters/graphemes cascade into the target language over ~350ms using compositor-friendly transforms.
  3. **Persian Reading Posture**: Selecting the Persian flag renders Persian prose with `dir="rtl"` and clean Persian typography inside its existing containers, without flipping the 2-column Hero split, timeline alignment, or card grids.
  4. **Bidirectional Scroll Fade**: As the user scrolls down or up the page, sections and cards smoothly transition from `opacity: 0, translateY(20px)` to `opacity: 1, translateY(0)` upon entering the viewport, and gently fade out as they leave the viewport.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: High-craft technical editorial portfolio with responsive micro-interactions.
  - *Color Palette & Mood*: Preserves the 60-30-10 dark (`#08090D`) and light (`#F8F9FC`) canvas posture, plus full compatibility with the existing `spider` (crimson red) and `dragon` (solar orange) accent themes.
  - *Typography & Hierarchy*: `Plus Jakarta Sans` for Latin display/body, `JetBrains Mono` for technical metadata, and `Vazirmatn` (loaded via Google Fonts) paired as a fallback for crisp, modern Persian script legibility.
  - *Component Styling & Layout*: Compact segmented inline flag group in the navbar (`gap-1 p-1 rounded-lg`) using crisp inline SVG flags so they render identically across all operating systems (including Windows where flag emojis often fail).

- **Interactive Feedback & Motion**:
  - Wave flip morph settles within `350ms` (`cubic-bezier(0.16, 1, 0.3, 1)`), respecting `prefers-reduced-motion`.
  - Scroll fade-in/out uses `IntersectionObserver` with dual thresholds so elements enter smoothly and exit without jitter at viewport edges.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Word/Grapheme-Safe Wave Flip for Persian & Latin**
  - *Chosen Approach*: For Latin scripts (English/French), animate character-by-character in a staggered wave; for Persian (`fa`), animate word-by-word (or connected grapheme clusters) in the same staggered wave flip.
  - *Why*: Arabic/Persian script uses cursive contextual letter joining. Splitting individual Persian letters into separate `<span>` tags breaks letter ligatures. Animating connected word tokens in Persian preserves authentic cursive shaping while delivering the exact same 3D wave flip visual effect.
  - *Alternatives Considered*: Character-level splitting for all languages (rejected because it disconnects Persian cursive letters).

- **Decision 2: Inline SVG Flags Instead of OS Emoji Flags**
  - *Chosen Approach*: Render custom, crisp inline SVG flag icons for UK/US (English), France (French), and Iran (Persian) inside the navbar switcher buttons.
  - *Why*: Chromium browsers on Windows do not render country flag emojis (displaying two-letter country codes instead). Inline SVGs guarantee crisp, consistent flag buttons on every device.

- **Decision 3: Isolated Text-Direction (`dir="rtl"`) Without Layout Mirroring**
  - *Chosen Approach*: Keep `<html dir="ltr">` globally so flexbox, grid columns, timelines, and icons stay in their exact coordinates, while applying `dir="rtl"` specifically to translated text elements when `language === 'fa'`.
  - *Why*: Directly fulfills the requirement that the format and layout of the site must not become RTL, while ensuring Persian sentences, punctuation, and mixed English technical terms read naturally right-to-left.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                        LanguageContext & Provider                       │
│   State: language ('en' | 'fr' | 'fa'), setLanguage, t() dictionary     │
│   Persistence: localStorage ('sr_portfolio_lang')                       │
└───────────────────┬─────────────────────────────────┬───────────────────┘
                    │                                 │
                    ▼                                 ▼
┌───────────────────────────────────────┐ ┌───────────────────────────────┐
│        Navbar Flag Switcher           │ │     MorphText Component       │
│  Inline SVG Flag Buttons (EN/FR/FA)   │ │  Staggered 3D wave flip on    │
│  Triggers language transition         │ │  language state change +      │
│                                       │ │  text-only dir="rtl" for FA   │
└───────────────────────────────────────┘ └───────────────┬───────────────┘
                                                          │
                                                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                  ScrollFade Wrapper (IntersectionObserver)              │
│   Observes viewport entry & exit -> toggles fade-in / fade-out classes  │
└──────┬────────────┬────────────┬────────────┬────────────┬──────────────┘
       │            │            │            │            │
       ▼            ▼            ▼            ▼            ▼
   ┌───────┐    ┌───────┐   ┌──────────┐  ┌────────┐  ┌──────────┐
   │ Hero  │    │ About │   │ Projects │  │ Skills │  │ Journey  │
   └───────┘    └───────┘   └──────────┘  └────────┘  └──────────┘
```

### Data Model & State
- **Translations Dictionary**: Structured localization store containing complete English (`en`), French (`fr`), and Persian (`fa`) translations for all UI labels, section headers, personal bio, capability cards, project summaries/case studies, skill categories, journey milestones, and contact section copy.
- **Language Context**: Provides current `language`, `setLanguage`, `isRtlText` (`language === 'fa'`), and helper lookups to all components.

### Interactive Component & State Mapping
- **Flag Switcher (`Navbar`)**: Clicking a flag button updates `language` in `LanguageContext` and persists to `localStorage`.
- **`MorphText` Primitive**: Listens to `language` changes; triggers a two-phase wave animation (`flip-out` old text $\rightarrow$ swap string $\rightarrow$ `flip-in` new text with staggered `--char-index` CSS delay) and applies `dir="rtl"` + Persian font family when `language === 'fa'`.
- **`ScrollFade` Observer**: Wraps section headers, cards, and interactive blocks. Uses `IntersectionObserver` (`threshold: 0.12`, `rootMargin: "-40px 0px"`) to smoothly transition elements into view (`opacity-100 translate-y-0 scale-100`) when scrolling over them and fade them out (`opacity-0 translate-y-6 scale-[0.98]`) when they leave the viewport.
