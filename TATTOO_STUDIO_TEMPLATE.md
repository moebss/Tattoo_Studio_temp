# AI-Executable Template: Tattoo & Piercing Studio Landing Page

---

## BLOCK 1 – AI Execution Header

```yaml
---
template_name: "tattoo_piercing_studio_landing_page"
version: "1.0"
description: "Premium single-page landing page for a tattoo & piercing studio. Dark luxury aesthetic with gold accents, animated scroll-in sections, portfolio gallery with lightbox, team profiles, booking form, and FAQ accordion."

output_target: react_jsx

stack:
  css_framework:      "tailwind"
  css_version:        "4.1"
  js_framework:       "react"
  js_version:         "19.0"
  build_tool:         "vite"
  build_tool_version: "6.2"
  icon_library:       "lucide-react"
  font_source:        "google_fonts"
  animation_library:  "motion"          # framer-motion successor, import from 'motion/react'
  additional_libs:    []

ai_instructions:
  task: "Reproduce this page exactly using provided variable data. Generate a complete Vite + React + Tailwind 4 project with all components."
  output_format: "Multi-file React project: index.html, src/main.tsx, src/App.tsx, src/index.css, src/components/*.tsx"
  strict_mode: true
  on_empty_required: "throw error: MISSING_REQUIRED_VARIABLE: {{NAME}}"
  on_empty_optional: "omit entire parent block silently"
  on_ambiguous: "use fallback value defined per variable"

constraints:
  - "Do NOT modify static text marked with <!-- COPY: static -->"
  - "Do NOT invent or hallucinate missing values"
  - "Do NOT add elements not present in template"
  - "Do NOT deviate from design tokens"
  - "Do NOT use frameworks not listed in stack"
  - "Reproduce layout pixel-accurately"
  - "All animations must use 'motion/react' – NOT 'framer-motion'"
  - "Tailwind 4 uses @theme {} in CSS, NOT tailwind.config.js"
  - "Base path in vite.config.ts must match {{REPO_NAME}}"

# ─── VARIABLES ───────────────────────────────────────────────────
# Every dynamic field that changes per studio customer.
# Grouped by domain for clarity.
variables:

  # ── Branding ──
  - name: STUDIO_NAME
    type: string
    required: true
    fallback: null
    description: "Full studio name, e.g. 'Tattoostudio Tattoo & Piercing'"
  - name: STUDIO_NAME_PART1
    type: string
    required: true
    fallback: null
    description: "First part of logo text, rendered in light color, e.g. 'LOS'"
  - name: STUDIO_NAME_PART2
    type: string
    required: true
    fallback: null
    description: "Second part of logo text, rendered in gold color, e.g. 'NACHOS'"
  - name: STUDIO_TAGLINE
    type: string
    required: true
    fallback: null
    description: "Short tagline under hero title, e.g. 'Tattoo & Piercing'"
  - name: STUDIO_SUBTITLE
    type: string
    required: false
    fallback: "Premium Tattoo Studio"
    description: "Small label above hero title, e.g. 'Premium Tattoo Studio'"
  - name: REPO_NAME
    type: string
    required: true
    fallback: null
    description: "GitHub repo name for base path in vite.config.ts, e.g. 'Tattoostudio'"

  # ── Location & Contact ──
  - name: CITY
    type: string
    required: true
    fallback: null
    description: "City name for SEO title, e.g. 'Kerpen'"
  - name: CITY_DISTRICT
    type: string
    required: false
    fallback: null
    description: "District/Stadtteil if applicable, e.g. 'Horrem'"
  - name: STREET_ADDRESS
    type: string
    required: true
    fallback: null
    description: "Street and house number, e.g. 'Hauptstr. 158'"
  - name: ZIP_CODE
    type: string
    required: true
    fallback: null
    description: "Postal code, e.g. '50169'"
  - name: COUNTRY
    type: string
    required: false
    fallback: "Deutschland"
    description: "Country name"
  - name: PHONE_NUMBER
    type: string
    required: true
    fallback: null
    description: "Phone number in international format, e.g. '+491632563075'"
  - name: PHONE_DISPLAY
    type: string
    required: true
    fallback: null
    description: "Phone number in human-readable format, e.g. '+49 163 256 30 75'"
  - name: EMAIL
    type: string
    required: true
    fallback: null
    description: "Contact email, e.g. 'info@tattoostudio.de'"

  # ── Social Media ──
  - name: INSTAGRAM_URL
    type: string
    required: false
    fallback: "#"
    description: "Instagram profile URL"
  - name: FACEBOOK_URL
    type: string
    required: false
    fallback: "#"
    description: "Facebook page URL"

  # ── About Section ──
  - name: ABOUT_HEADLINE
    type: string
    required: true
    fallback: null
    description: "Section headline, e.g. 'Kunst, die unter die Haut geht.'"
  - name: ABOUT_TEXT
    type: string
    required: true
    fallback: null
    description: "Full paragraph describing the studio's story and philosophy"
  - name: YEARS_EXPERIENCE
    type: string
    required: true
    fallback: null
    description: "Years of experience badge value, e.g. '10+'"
  - name: ABOUT_IMAGE_URL
    type: string
    required: true
    fallback: null
    description: "URL or local path to studio interior/atmosphere image"

  # ── Features (About section cards) ──
  - name: FEATURES
    type: list
    required: true
    fallback: null
    description: "List of 2-3 feature cards. Each: { icon: lucide-icon-name, title: string, description: string }"

  # ── Artists ──
  - name: ARTISTS
    type: list
    required: true
    fallback: null
    description: "List of artists. Each: { name, role, specialties: string[], image: url, instagram: handle }"

  # ── Gallery ──
  - name: GALLERY_ITEMS
    type: list
    required: true
    fallback: null
    description: "Portfolio images. Each: { id: number, style: string, image: url }"
  - name: GALLERY_STYLES
    type: list
    required: true
    fallback: null
    description: "Filter labels for gallery, first must be 'All'. E.g. ['All', 'Realism', 'Old School', 'Blackwork']"

  # ── Booking / Pricing ──
  - name: BOOKING_STYLES
    type: list
    required: true
    fallback: null
    description: "Tattoo style options for booking form dropdown, e.g. ['Realism', 'Fine Line', 'Blackwork']"
  - name: PRICING_ITEMS
    type: list
    required: true
    fallback: null
    description: "Pricing info blocks. Each: { title: string, description: string }"

  # ── FAQ ──
  - name: FAQ_ITEMS
    type: list
    required: true
    fallback: null
    description: "FAQ entries. Each: { question: string, answer: string }"

  # ── Opening Hours ──
  - name: OPENING_HOURS
    type: list
    required: true
    fallback: null
    description: "Opening hours. Each: { days: string, hours: string, dimmed?: boolean }"

  # ── Footer ──
  - name: FOOTER_TAGLINE
    type: string
    required: true
    fallback: null
    description: "Short brand description in footer, e.g. 'Dein Studio für erstklassige Tattoos & Piercings in Kerpen-Horrem. Kunst, die bleibt.'"
  - name: FOOTER_BOTTOM_TEXT
    type: string
    required: false
    fallback: null
    description: "Craft line in footer bottom, e.g. 'Handcrafted with ♥ in Kerpen'"

  # ── SEO ──
  - name: META_TITLE
    type: string
    required: true
    fallback: null
    description: "HTML <title> tag, e.g. 'Tattoostudio Tattoo & Piercing Studio | Kerpen'"
  - name: META_DESCRIPTION
    type: string
    required: true
    fallback: null
    description: "Meta description for SEO"

  # ── Hero Background ──
  - name: HERO_BG_IMAGE_URL
    type: string
    required: true
    fallback: null
    description: "Hero section background image URL or local path"

  # ── Navigation ──
  - name: NAV_LINKS
    type: list
    required: true
    fallback: null
    description: "Navigation items. Each: { name: string, href: '#section-id' }"
  - name: CTA_LABEL
    type: string
    required: false
    fallback: "Termin buchen"
    description: "Call-to-action button label in navbar and hero"
---
```

---

## BLOCK 2 – Design Tokens

```yaml
design_tokens:

  # ── Typography ──────────────────────────────────────────────
  # Tailwind 4: defined via @theme {} in index.css
  typography:
    font_family_primary:    "'Inter', ui-sans-serif, system-ui, sans-serif"
    font_family_secondary:  "'Playfair Display', ui-serif, Georgia, serif"
    google_fonts_import:    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
    # Sans-serif (Inter) = body, labels, buttons
    # Serif (Playfair Display) = headings, FAQ questions, logo
    font_size_section_label:  "text-sm uppercase tracking-[0.2em]"    # gold label above each section
    font_size_h1:             "text-5xl md:text-7xl lg:text-8xl font-serif"
    font_size_h3:             "text-4xl md:text-6xl font-serif"
    font_size_h4:             "text-2xl font-serif"
    font_size_body:           "text-lg leading-relaxed"
    font_size_small:          "text-sm"
    font_size_xs:             "text-xs uppercase tracking-widest"
    heading_weight:           "font-weight: 400"  # Playfair uses normal weight

  # ── Colors ──────────────────────────────────────────────────
  # Defined as Tailwind 4 @theme CSS custom properties
  colors:
    gold:           "#C5A059"   # Primary accent – CTAs, labels, icons, hover states
    gold_hover:     "#D4AF37"   # Gold on hover/active
    dark:           "#0A0A0A"   # Dark background variant
    darker:         "#050505"   # Deepest background – body, main sections
    anthracite:     "#1A1A1A"   # Card/alternate section backgrounds
    light:          "#F5F5F5"   # Primary text color on dark backgrounds
    white_80:       "text-white/80"   # Italic heading accents
    white_70:       "text-light/70"   # Body text on dark
    white_50:       "text-light/50"   # Muted text, descriptions
    white_40:       "text-light/40"   # Very muted footer text
    white_30:       "text-light/30"   # Placeholder/disabled text
    white_10:       "border-white/10" # Subtle borders
    white_5:        "border-white/5"  # Very subtle section dividers

  # ── Spacing ─────────────────────────────────────────────────
  spacing:
    page_container:     "max-w-7xl mx-auto px-6 md:px-12"
    section_padding:    "py-32"
    section_gap:        "gap-16"
    block_gap:          "mb-8"
    element_gap:        "mb-4"
    card_padding:       "p-8 md:p-12"

  # ── Layout ──────────────────────────────────────────────────
  layout:
    page_width:         "max-w-7xl"     # ≈ 1280px
    faq_max_width:      "max-w-3xl"     # ≈ 768px – centered FAQ
    border_radius:      "rounded-sm"    # 2px – subtle, premium feel
    hero_height:        "h-screen"

  # ── Responsive ──────────────────────────────────────────────
  breakpoints:
    sm:     "640px  → 2-column grids in forms, feature cards"
    md:     "768px  → Desktop nav visible, grid layouts, larger padding"
    lg:     "1024px → 2-column hero/about splits, 3-column gallery grid"

  # ── Interaction States ──────────────────────────────────────
  states:
    button_primary:     "bg-gold text-darker hover:bg-gold-hover transition-all duration-300"
    button_outline:     "border border-gold text-gold hover:bg-gold hover:text-darker transition-all duration-300"
    input_field:        "bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors"
    link:               "text-light/70 hover:text-gold transition-colors"
    nav_link:           "text-sm uppercase tracking-widest text-light/70 hover:text-gold transition-colors"
    social_icon:        "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light/50 hover:text-gold hover:border-gold transition-all duration-300"
    gallery_hover:      "grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"

  # ── Animation Patterns ─────────────────────────────────────
  # All animations use 'motion/react' (NOT framer-motion)
  animations:
    fade_up:            "initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}"
    fade_left:          "initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}"
    fade_right:         "initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}"
    stagger_children:   "transition={{ duration: 0.8, delay: index * 0.2 }}"
    accordion_expand:   "initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}"
    gallery_item:       "layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}"

  # ── Scrollbar Styling ──────────────────────────────────────
  scrollbar:
    width:          "8px"
    track:          "var(--color-darker)"
    thumb:          "var(--color-anthracite)"
    thumb_hover:    "var(--color-gold)"
    thumb_radius:   "4px"
```

---

## BLOCK 3 – Asset Registry

```yaml
assets:
  # No external logo file – logo is rendered as styled text in Navbar/Footer
  # using STUDIO_NAME_PART1 (light) + STUDIO_NAME_PART2 (gold)

  - id: HERO_BG
    src: "{{HERO_BG_IMAGE_URL}}"
    width: "100%"
    height: "100vh"
    alt: "{{STUDIO_NAME}} – Studio Atmosphere"
    css: "w-full h-full object-cover opacity-40"
    required: true

  - id: ABOUT_IMAGE
    src: "{{ABOUT_IMAGE_URL}}"
    width: "100%"
    height: "auto"
    aspect: "3/4"
    alt: "{{STUDIO_NAME}} Interior"
    css: "w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
    required: true

  - id: ARTIST_IMAGES
    src: "{{ARTISTS[n].image}}"
    width: "100%"
    height: "auto"
    aspect: "3/4"
    alt: "{{ARTISTS[n].name}}"
    css: "w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
    required: true
    per_item: true

  - id: GALLERY_IMAGES
    src: "{{GALLERY_ITEMS[n].image}}"
    width: "100%"
    height: "auto"
    aspect: "1/1"
    alt: "{{GALLERY_ITEMS[n].style}} Tattoo"
    css: "w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
    required: true
    per_item: true

  # Lucide React icons used across the site:
  # Navbar: Menu, X
  # About: PenTool, ShieldCheck, Droplet (configurable via FEATURES[n].icon)
  # Booking: Upload, CheckCircle2
  # FAQ: ChevronDown
  # Footer: Instagram, Facebook, MapPin, Phone, Mail
  # Gallery: Maximize2, X
  # Hero: ArrowRight
```

---

## BLOCK 4 – Component Definitions

```
# Reusable UI components – defined once, referenced via [REUSE]
# Syntax: [TAG | attributes] content [/TAG]
# Tailwind classes as direct class attributes

# ── SectionHeader ─────────────────────────────────────────────
# Gold label + large serif heading. Used in: About, Artists, Gallery, Booking, FAQ
# Params: LABEL, HEADING_PART1, HEADING_PART2_ITALIC (optional)
[COMPONENT: SectionHeader]
  [motion.h2 | ANIM:fade_up class="text-gold uppercase tracking-[0.2em] text-sm mb-4"]
    {{LABEL}}
  [/motion.h2]
  [motion.h3 | ANIM:fade_up delay=0.2 class="font-serif text-4xl md:text-6xl text-light leading-tight mb-12"]
    {{HEADING_PART1}} {{#IF HEADING_PART2_ITALIC?}}[span | class="italic text-white/80"]{{HEADING_PART2_ITALIC}}[/span]{{/IF}}
  [/motion.h3]
[/COMPONENT]

# ── LogoText ──────────────────────────────────────────────────
# Text-based logo – no image file needed. Used in Navbar and Footer.
# Params: SIZE_CLASS (text-2xl in nav, text-3xl in footer)
[COMPONENT: LogoText]
  [a | href="#" class="inline-block"]
    [span | class="font-serif {{SIZE_CLASS}} tracking-wider text-light"]
      {{STUDIO_NAME_PART1}}[span | class="text-gold"]{{STUDIO_NAME_PART2}}[/span]
    [/span]
  [/a]
[/COMPONENT]

# ── ArtistCard ────────────────────────────────────────────────
# Params: ARTIST object { name, role, specialties[], image, instagram }, INDEX
[COMPONENT: ArtistCard]
  [motion.div | ANIM:stagger(INDEX) class="group cursor-pointer"]
    [div | class="aspect-[3/4] overflow-hidden rounded-sm relative mb-8"]
      [img | src="{{ARTIST.image}}" alt="{{ARTIST.name}}" class="ASSET:ARTIST_IMAGES.css" referrerPolicy="no-referrer"]
      [div | class="absolute inset-0 bg-gradient-to-t from-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"]
      [a | href="https://instagram.com/{{ARTIST.instagram_handle}}" target="_blank" class="absolute bottom-6 left-6 flex items-center gap-2 text-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:text-gold"]
        [Instagram | size=20] [span | class="text-sm tracking-wider"]{{ARTIST.instagram}}[/span]
      [/a]
    [/div]
    [h4 | class="text-2xl font-serif text-light mb-2 group-hover:text-gold transition-colors"]{{ARTIST.name}}[/h4]
    [p | class="text-gold uppercase tracking-widest text-xs mb-4"]{{ARTIST.role}}[/p]
    [div | class="flex flex-wrap gap-2"]
      {{#EACH ARTIST.specialties AS spec}}
        [span | class="text-xs uppercase tracking-wider text-light/50 border border-white/10 px-3 py-1 rounded-full"]{{spec}}[/span]
      {{/EACH}}
    [/div]
  [/motion.div]
[/COMPONENT]

# ── GalleryItem ───────────────────────────────────────────────
# Params: ITEM { id, style, image }, onClick → lightbox
[COMPONENT: GalleryItem]
  [motion.div | ANIM:gallery_item key="{{ITEM.id}}" class="group relative aspect-square overflow-hidden cursor-pointer rounded-sm" onClick="setSelectedImage(ITEM.image)"]
    [img | src="{{ITEM.image}}" alt="{{ITEM.style}} Tattoo" class="ASSET:GALLERY_IMAGES.css" referrerPolicy="no-referrer"]
    [div | class="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"]
      [Maximize2 | class="text-gold w-8 h-8"]
    [/div]
    [div | class="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"]
      [p | class="text-gold uppercase tracking-widest text-xs"]{{ITEM.style}}[/p]
    [/div]
  [/motion.div]
[/COMPONENT]

# ── FAQItem ───────────────────────────────────────────────────
# Accordion item with animated expand/collapse
# Params: FAQ { question, answer }, INDEX, openIndex state
[COMPONENT: FAQItem]
  [div | class="border-b border-white/10"]
    [button | onClick="toggle(INDEX)" class="w-full flex items-center justify-between py-6 text-left focus:outline-none group"]
      [span | class="font-serif text-xl text-light group-hover:text-gold transition-colors"]{{FAQ.question}}[/span]
      [ChevronDown | class="text-gold transition-transform duration-300 {{IF open: rotate-180}}"]
    [/button]
    [AnimatePresence]
      {{#IF openIndex === INDEX}}
        [motion.div | ANIM:accordion_expand class="overflow-hidden"]
          [p | class="text-light/70 pb-6 leading-relaxed"]{{FAQ.answer}}[/p]
        [/motion.div]
      {{/IF}}
    [/AnimatePresence]
  [/div]
[/COMPONENT]

# ── PricingBlock ──────────────────────────────────────────────
# Left-bordered info block – used in Booking sidebar
# Params: PRICING { title, description }
[COMPONENT: PricingBlock]
  [div | class="border-l-2 border-gold pl-6"]
    [h4 | class="text-light font-medium uppercase tracking-wider text-sm mb-2"]{{PRICING.title}}[/h4]
    [p | class="text-light/50 text-sm"]{{PRICING.description}}[/p]
  [/div]
[/COMPONENT]

# ── FeatureCard ───────────────────────────────────────────────
# About section feature card – icon + title + description
# Params: FEATURE { icon (lucide component name), title, description }
[COMPONENT: FeatureCard]
  [div | class="flex flex-col"]
    [{{FEATURE.icon}} | size=32 class="text-gold mb-6"]
    [h4 | class="text-light font-medium uppercase tracking-wider text-sm mb-3"]{{FEATURE.title}}[/h4]
    [p | class="text-light/50 text-sm leading-relaxed"]{{FEATURE.description}}[/p]
  [/div]
[/COMPONENT]

# ── OpeningHoursRow ───────────────────────────────────────────
# Params: HOURS { days, hours, dimmed? }
[COMPONENT: OpeningHoursRow]
  [li | class="flex justify-between border-b border-white/5 pb-2 {{IF HOURS.dimmed: text-light/40}}"]
    [span]{{HOURS.days}}[/span]
    [span]{{HOURS.hours}}[/span]
  [/li]
[/COMPONENT]
```

---

## BLOCK 5 – Page Structure

```
# Page Structure: Exact section order and render instructions.
# File: src/App.tsx wraps all sections in:
#   [div | class="bg-darker min-h-screen text-light font-sans"]
# Section order is FIXED – do not reorder.


# ── FILE: index.html ─────────────────────────────────────────
[FILE: index.html]
  <!doctype html>
  <html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{META_TITLE}}</title>
    <meta name="description" content="{{META_DESCRIPTION}}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
  </html>
[/FILE]


# ── FILE: src/index.css ──────────────────────────────────────
[FILE: src/index.css]
  @import url('{{DESIGN_TOKENS.typography.google_fonts_import}}');
  @import "tailwindcss";
  @theme {
    --font-sans: {{DESIGN_TOKENS.typography.font_family_primary}};
    --font-serif: {{DESIGN_TOKENS.typography.font_family_secondary}};
    --color-gold: {{DESIGN_TOKENS.colors.gold}};
    --color-gold-hover: {{DESIGN_TOKENS.colors.gold_hover}};
    --color-dark: {{DESIGN_TOKENS.colors.dark}};
    --color-darker: {{DESIGN_TOKENS.colors.darker}};
    --color-anthracite: {{DESIGN_TOKENS.colors.anthracite}};
    --color-light: {{DESIGN_TOKENS.colors.light}};
  }
  <!-- COPY: static – base styles -->
  body { background-color: var(--color-darker); color: var(--color-light); font-family: var(--font-sans); }
  h1-h6 { font-family: var(--font-serif); font-weight: 400; }
  html { scroll-behavior: smooth; }
  Scrollbar: width 8px, track darker, thumb anthracite, thumb:hover gold, radius 4px
[/FILE]


# ═══════════════════════════════════════════════════════════════
# SECTION 1: NAVBAR
# Fixed top, transparent → bg-darker/90 + blur on scroll > 50px
# Mobile: hamburger → slide-down overlay with AnimatePresence
# ═══════════════════════════════════════════════════════════════
[SECTION: navbar | COMPONENT_FILE="Navbar.tsx"]
  [nav | class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {{IF scrolled: bg-darker/90 backdrop-blur-md py-4 shadow-lg ELSE: bg-transparent py-6}}"]
    [div | class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between"]
      [REUSE: LogoText | SIZE_CLASS="text-2xl"]
      [div | class="hidden md:flex items-center gap-8"]
        [ul | class="flex items-center gap-8"]
          {{#EACH NAV_LINKS AS link}}
            [li][a | href="{{link.href}}" class="STATE:nav_link"]{{link.name}}[/a][/li]
          {{/EACH}}
        [/ul]
        [a | href="#booking" class="STATE:button_outline px-6 py-2 text-sm uppercase tracking-widest"]{{CTA_LABEL}}[/a]
      [/div]
      [button | class="md:hidden text-light hover:text-gold" onClick="toggleMenu"]
        {{IF menuOpen: X(28) ELSE: Menu(28)}}
      [/button]
    [/div]
    # Mobile overlay (AnimatePresence, slide down)
    [AnimatePresence]
      {{#IF menuOpen}}
        [motion.div | fade-slide-down class="absolute top-full w-full bg-darker/95 backdrop-blur-xl border-t border-white/5 py-6 px-6 md:hidden flex flex-col gap-6"]
          [ul | class="flex flex-col gap-4"]
            {{#EACH NAV_LINKS AS link}}
              [li][a | href="{{link.href}}" onClick="close" class="text-lg uppercase tracking-widest text-light/80 hover:text-gold block"]{{link.name}}[/a][/li]
            {{/EACH}}
          [/ul]
          [a | href="#booking" onClick="close" class="STATE:button_outline px-6 py-3 text-center text-sm uppercase tracking-widest"]{{CTA_LABEL}}[/a]
        [/motion.div]
      {{/IF}}
    [/AnimatePresence]
  [/nav]
[/SECTION]


# ═══════════════════════════════════════════════════════════════
# SECTION 2: HERO (fullscreen, bg image + gradient overlay)
# ═══════════════════════════════════════════════════════════════
[SECTION: hero | COMPONENT_FILE="Hero.tsx" class="relative h-screen w-full flex items-center justify-center overflow-hidden"]
  [div | class="absolute inset-0 z-0"]
    [img | src="{{HERO_BG_IMAGE_URL}}" alt="Studio" class="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer"]
    [div | class="absolute inset-0 bg-gradient-to-b from-darker/60 via-darker/80 to-darker"]
  [/div]
  [div | class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20"]
    [p | class="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6"]{{STUDIO_SUBTITLE}}[/p]
    [h1 | class="text-5xl md:text-7xl lg:text-8xl font-serif text-light leading-tight mb-8"]
      {{STUDIO_NAME_PART1}} {{STUDIO_NAME_PART2}} [br]
      [span | class="italic text-white/80"]{{STUDIO_TAGLINE}}[/span]
    [/h1]
    [div | class="flex flex-col sm:flex-row gap-6 mt-8"]
      [a | href="#booking" class="group flex items-center justify-center gap-3 STATE:button_primary px-8 py-4 uppercase tracking-widest text-sm font-medium"]
        {{CTA_LABEL}} [ArrowRight | size=18 class="group-hover:translate-x-1 transition-transform"]
      [/a]
      [a | href="#portfolio" class="flex items-center justify-center gap-3 border border-white/20 text-light px-8 py-4 uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all duration-300"]
        Portfolio ansehen
      [/a]
    [/div]
  [/div]
  # Scroll indicator
  [div | class="flex flex-col items-center gap-4 mt-16 md:mt-24"]
    [span | class="text-xs uppercase tracking-[0.2em] text-white/40 rotate-90 mb-8 mt-4"]Scroll[/span]
    [div | class="w-[1px] h-16 bg-white/20 relative overflow-hidden"]
      [div | class="absolute top-0 left-0 w-full h-1/2 bg-gold"]
    [/div]
  [/div]
[/SECTION]


# ═══════════════════════════════════════════════════════════════
# SECTION 3: ABOUT (2-col: image left, text+features right)
# id="studio"
# ═══════════════════════════════════════════════════════════════
[SECTION: about | id="studio" COMPONENT_FILE="About.tsx" class="py-32 bg-darker relative"]
  [div | class="max-w-7xl mx-auto px-6 md:px-12"]
    [div | class="grid lg:grid-cols-2 gap-16 items-center"]
      # Left: Image + experience badge
      [motion.div | ANIM:fade_left class="relative"]
        [div | class="aspect-[3/4] overflow-hidden rounded-sm relative"]
          [img | src="{{ABOUT_IMAGE_URL}}" alt="Studio Interior" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer"]
          [div | class="absolute inset-0 border border-white/10 m-4 pointer-events-none"]
        [/div]
        [div | class="absolute -bottom-8 -right-8 bg-anthracite p-8 border border-white/5 hidden md:block"]
          [p | class="font-serif text-4xl text-gold mb-2"]{{YEARS_EXPERIENCE}}[/p]
          [p | class="text-sm uppercase tracking-widest text-light/60"]Jahre Erfahrung[/p]
        [/div]
      [/motion.div]
      # Right: Text + Features
      [motion.div | ANIM:fade_right]
        [REUSE: SectionHeader | LABEL="Über das Studio" HEADING_PART1="{{ABOUT_HEADLINE}}"]
        [p | class="text-light/70 leading-relaxed mb-12 text-lg"]{{ABOUT_TEXT}}[/p]
        [div | class="grid sm:grid-cols-2 gap-8"]
          {{#EACH FEATURES AS feature}}
            [REUSE: FeatureCard | FEATURE=feature]
          {{/EACH}}
        [/div]
      [/motion.div]
    [/div]
  [/div]
[/SECTION]


# ═══════════════════════════════════════════════════════════════
# SECTION 4: ARTISTS (team grid)
# id="artists"
# ═══════════════════════════════════════════════════════════════
[SECTION: artists | id="artists" COMPONENT_FILE="Artists.tsx" class="py-32 bg-anthracite relative"]
  [div | class="max-w-7xl mx-auto px-6 md:px-12"]
    [div | class="flex flex-col md:flex-row justify-between items-end mb-20"]
      [motion.div | ANIM:fade_left]
        [REUSE: SectionHeader | LABEL="Das Team" HEADING_PART1="Unsere" HEADING_PART2_ITALIC="Künstler"]
      [/motion.div]
      [motion.a | ANIM:fade_right href="#booking" class="hidden md:flex items-center gap-2 text-gold hover:text-light transition-colors uppercase tracking-widest text-sm"]
        Termin anfragen [ArrowUpRight | size=16]
      [/motion.a]
    [/div]
    [div | class="grid md:grid-cols-2 lg:grid-cols-3 gap-12"]
      {{#EACH ARTISTS AS artist, index}}
        [REUSE: ArtistCard | ARTIST=artist INDEX=index]
      {{/EACH}}
    [/div]
  [/div]
[/SECTION]


# ═══════════════════════════════════════════════════════════════
# SECTION 5: GALLERY (filterable grid + lightbox)
# id="portfolio" | State: activeFilter, selectedImage
# ═══════════════════════════════════════════════════════════════
[SECTION: gallery | id="portfolio" COMPONENT_FILE="Gallery.tsx" class="py-32 bg-darker relative"]
  [div | class="max-w-7xl mx-auto px-6 md:px-12"]
    [div | class="text-center mb-16"]
      [REUSE: SectionHeader | LABEL="Portfolio" HEADING_PART1="Unsere" HEADING_PART2_ITALIC="Arbeiten"]
      # Filter buttons
      [motion.div | ANIM:fade_up delay=0.4 class="flex flex-wrap justify-center gap-4 md:gap-8"]
        {{#EACH GALLERY_STYLES AS style}}
          [button | onClick="filter(style)" class="uppercase tracking-widest text-xs md:text-sm pb-2 border-b-2 transition-all duration-300 {{IF active: border-gold text-gold ELSE: border-transparent text-light/50 hover:text-light}}"]
            {{style}}
          [/button]
        {{/EACH}}
      [/motion.div]
    [/div]
    # Grid
    [motion.div | layout class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"]
      [AnimatePresence]
        {{#EACH filteredItems AS item}}
          [REUSE: GalleryItem | ITEM=item]
        {{/EACH}}
      [/AnimatePresence]
    [/motion.div]
    # Lightbox
    [AnimatePresence]
      {{#IF selectedImage?}}
        [motion.div | fade class="fixed inset-0 z-[100] bg-darker/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12" onClick="close"]
          [button | class="absolute top-8 right-8 text-light/50 hover:text-gold"][X | size=32][/button]
          [motion.img | scale src="{{selectedImage}}" alt="Enlarged" class="max-w-full max-h-full object-contain rounded-sm shadow-2xl" onClick="stop"]
        [/motion.div]
      {{/IF}}
    [/AnimatePresence]
  [/div]
[/SECTION]


# ═══════════════════════════════════════════════════════════════
# SECTION 6: BOOKING (2-col: info + form)
# id="booking" | State: isSubmitted
# ═══════════════════════════════════════════════════════════════
[SECTION: booking | id="booking" COMPONENT_FILE="Booking.tsx" class="py-32 bg-darker relative"]
  [div | class="max-w-7xl mx-auto px-6 md:px-12"]
    [div | class="grid lg:grid-cols-2 gap-16 items-start"]
      # Left: Info
      [motion.div | ANIM:fade_left]
        [REUSE: SectionHeader | LABEL="Termin buchen" HEADING_PART1="Dein nächstes" HEADING_PART2_ITALIC="Kunstwerk"]
        [p | class="text-light/70 leading-relaxed mb-12 text-lg"]
          Fülle das Formular aus, um einen Termin oder ein Beratungsgespräch anzufragen. Wir melden uns innerhalb von 48 Stunden bei dir.
        [/p]
        [div | class="space-y-6"]
          {{#EACH PRICING_ITEMS AS pricing}}
            [REUSE: PricingBlock | PRICING=pricing]
          {{/EACH}}
        [/div]
      [/motion.div]
      # Right: Form / Success
      [motion.div | ANIM:fade_right class="bg-anthracite p-8 md:p-12 border border-white/5"]
        {{#IF isSubmitted}}
          [div | class="flex flex-col items-center justify-center h-full text-center py-20"]
            [CheckCircle2 | class="text-gold w-16 h-16 mb-6"]
            [h4 | class="font-serif text-3xl text-light mb-4"]Anfrage gesendet[/h4]
            [p | class="text-light/70"]Wir melden uns in Kürze bei dir.[/p]
          [/div]
        {{ELSE}}
          [form | onSubmit="handleSubmit" class="space-y-6"]
            [div | class="grid sm:grid-cols-2 gap-6"]
              [FIELD: name | label="Name" type="text" required]
              [FIELD: email | label="E-Mail" type="email" required]
            [/div]
            [div | class="grid sm:grid-cols-2 gap-6"]
              [div]
                [label | class="block text-xs uppercase tracking-widest text-light/50 mb-2"]Stil[/label]
                [select | class="STATE:input_field appearance-none w-full"]
                  {{#EACH BOOKING_STYLES AS s}}[option]{{s}}[/option]{{/EACH}}
                [/select]
              [/div]
              [FIELD: size | label="Größe (ca.)" type="text" placeholder="z.B. 10x10 cm"]
            [/div]
            [FIELD: placement | label="Körperstelle" type="text" placeholder="z.B. Rechter Unterarm"]
            [div]
              [label | class="block text-xs uppercase tracking-widest text-light/50 mb-2"]Beschreibung[/label]
              [textarea | rows=4 required class="STATE:input_field resize-none w-full" placeholder="Beschreibe deine Idee..."]
            [/div]
            [div]
              [label | class="block text-xs uppercase tracking-widest text-light/50 mb-2"]Referenzbilder[/label]
              [div | class="w-full bg-darker border border-dashed border-white/20 rounded-sm p-8 text-center hover:border-gold transition-colors cursor-pointer group"]
                [Upload | class="mx-auto text-light/30 group-hover:text-gold mb-4" size=24]
                [p | class="text-light/50 text-sm"]Klicke oder ziehe Bilder hierher[/p]
              [/div]
            [/div]
            [button | type="submit" class="w-full STATE:button_primary px-8 py-4 uppercase tracking-widest text-sm font-medium"]Anfrage senden[/button]
          [/form]
        {{/IF}}
      [/motion.div]
    [/div]
  [/div]
[/SECTION]


# ═══════════════════════════════════════════════════════════════
# SECTION 7: FAQ (centered accordion)
# id="faq" | State: openIndex
# ═══════════════════════════════════════════════════════════════
[SECTION: faq | id="faq" COMPONENT_FILE="FAQ.tsx" class="py-32 bg-anthracite relative border-t border-white/5"]
  [div | class="max-w-7xl mx-auto px-6 md:px-12"]
    [div | class="text-center mb-16"]
      [REUSE: SectionHeader | LABEL="Wissen & Vorbereitung" HEADING_PART1="Häufige" HEADING_PART2_ITALIC="Fragen"]
    [/div]
    [div | class="max-w-3xl mx-auto"]
      [motion.div | ANIM:fade_left class="space-y-4"]
        {{#EACH FAQ_ITEMS AS faq, index}}
          [REUSE: FAQItem | FAQ=faq INDEX=index]
        {{/EACH}}
      [/motion.div]
    [/div]
  [/div]
[/SECTION]


# ═══════════════════════════════════════════════════════════════
# SECTION 8: FOOTER (4-column grid + bottom bar)
# ═══════════════════════════════════════════════════════════════
[SECTION: footer | COMPONENT_FILE="Footer.tsx" class="bg-darker pt-32 pb-12 border-t border-white/5 relative overflow-hidden"]
  [div | class="max-w-7xl mx-auto px-6 md:px-12"]
    [div | class="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24"]
      # Col 1: Brand + Social
      [div | class="lg:col-span-1"]
        [div | class="mb-8"][REUSE: LogoText | SIZE_CLASS="text-3xl"][/div]
        [p | class="text-light/50 text-sm leading-relaxed mb-8"]{{FOOTER_TAGLINE}}[/p]
        [div | class="flex gap-4"]
          {{#IF INSTAGRAM_URL?}}[a | href="{{INSTAGRAM_URL}}" class="STATE:social_icon"][Instagram | size=18][/a]{{/IF}}
          {{#IF FACEBOOK_URL?}}[a | href="{{FACEBOOK_URL}}" class="STATE:social_icon"][Facebook | size=18][/a]{{/IF}}
        [/div]
      [/div]
      # Col 2: Contact
      [div]
        [h4 | class="text-gold uppercase tracking-widest text-xs mb-8"]Kontakt[/h4]
        [ul | class="space-y-4"]
          [li | class="flex items-start gap-3 text-light/70 text-sm"]
            [MapPin | size=18 class="text-gold shrink-0 mt-0.5"]
            [span]{{STREET_ADDRESS}}[br]{{ZIP_CODE}} {{CITY}}{{#IF CITY_DISTRICT?}} ({{CITY_DISTRICT}}){{/IF}}[br]{{COUNTRY}}[/span]
          [/li]
          [li | class="flex items-center gap-3 text-light/70 text-sm"]
            [Phone | size=18 class="text-gold shrink-0"]
            [a | href="tel:{{PHONE_NUMBER}}" class="STATE:link"]{{PHONE_DISPLAY}}[/a]
          [/li]
          [li | class="flex items-center gap-3 text-light/70 text-sm"]
            [Mail | size=18 class="text-gold shrink-0"]
            [a | href="mailto:{{EMAIL}}" class="STATE:link"]{{EMAIL}}[/a]
          [/li]
        [/ul]
      [/div]
      # Col 3: Opening Hours
      [div]
        [h4 | class="text-gold uppercase tracking-widest text-xs mb-8"]Öffnungszeiten[/h4]
        [ul | class="space-y-4 text-light/70 text-sm"]
          {{#EACH OPENING_HOURS AS hours}}
            [REUSE: OpeningHoursRow | HOURS=hours]
          {{/EACH}}
        [/ul]
      [/div]
      # Col 4: Legal
      [div]
        [h4 | class="text-gold uppercase tracking-widest text-xs mb-8"]Rechtliches[/h4]
        [ul | class="space-y-4 text-light/70 text-sm"]
          [li][a | href="#" class="STATE:link"]Impressum[/a][/li]
          [li][a | href="#" class="STATE:link"]Datenschutz[/a][/li]
          [li][a | href="#" class="STATE:link"]AGB[/a][/li]
          [li][a | href="#" class="STATE:link"]Pflegehinweise[/a][/li]
        [/ul]
      [/div]
    [/div]
    # Bottom bar
    [div | class="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"]
      [p | class="text-light/40 text-xs uppercase tracking-widest"]© {{CURRENT_YEAR}} {{STUDIO_NAME}}. All rights reserved.[/p]
      {{#IF FOOTER_BOTTOM_TEXT?}}
        [p | class="text-light/40 text-xs uppercase tracking-widest"]{{FOOTER_BOTTOM_TEXT}}[/p]
      {{/IF}}
    [/div]
  [/div]
[/SECTION]
```

---

## Reference: Tattoostudio Variable Data

```yaml
STUDIO_NAME: "Tattoostudio Tattoo & Piercing"
STUDIO_NAME_PART1: "LOS"
STUDIO_NAME_PART2: "NACHOS"
STUDIO_TAGLINE: "Tattoo & Piercing"
STUDIO_SUBTITLE: "Premium Tattoo Studio"
REPO_NAME: "Tattoostudio"
CITY: "Kerpen"
CITY_DISTRICT: "Horrem"
STREET_ADDRESS: "Hauptstr. 158"
ZIP_CODE: "50169"
COUNTRY: "Deutschland"
PHONE_NUMBER: "+491632563075"
PHONE_DISPLAY: "+49 163 256 30 75"
EMAIL: "info@tattoostudio.de"
INSTAGRAM_URL: "#"
FACEBOOK_URL: "#"
META_TITLE: "Tattoostudio Tattoo & Piercing Studio | Kerpen"
META_DESCRIPTION: "Dein erstklassiges Studio für Tattoos und Piercings in Kerpen-Horrem."
HERO_BG_IMAGE_URL: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2000"
ABOUT_IMAGE_URL: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1000"
ABOUT_HEADLINE: "Kunst, die unter die Haut geht."
ABOUT_TEXT: "Willkommen bei Tattoostudio. Seit über einem Jahrzehnt..."
YEARS_EXPERIENCE: "10+"
CTA_LABEL: "Termin buchen"
FOOTER_TAGLINE: "Dein Studio für erstklassige Tattoos & Piercings in Kerpen-Horrem. Kunst, die bleibt."
FOOTER_BOTTOM_TEXT: "Handcrafted with ♥ in Kerpen"
NAV_LINKS:
  - { name: "Studio", href: "#studio" }
  - { name: "Artists", href: "#artists" }
  - { name: "Portfolio", href: "#portfolio" }
  - { name: "FAQ", href: "#faq" }
FEATURES:
  - { icon: "PenTool", title: "Kreative Exzellenz", description: "..." }
  - { icon: "ShieldCheck", title: "Höchste Hygiene", description: "..." }
  - { icon: "Droplet", title: "Premium Farben", description: "..." }
ARTISTS:
  - { name: "Gordian Linck", role: "Inhaber & Artist", specialties: ["Allrounder","Custom Designs"], image: "...", instagram: "@tattoostudiotattoo" }
  - { name: "Jochen", role: "Artist", specialties: ["Old School","New School","Traditional"], image: "...", instagram: "@tattoostudiotattoo" }
  - { name: "Martin", role: "Artist", specialties: ["Black & Grey","Realistic","Surrealism"], image: "...", instagram: "@tattoostudiotattoo" }
  - { name: "Louis", role: "Artist", specialties: ["Lettering","Blackwork"], image: "...", instagram: "@tattoostudiotattoo" }
GALLERY_STYLES: ["All","Realism","Old School","Neo-Traditional","Blackwork","Lettering","Maori"]
GALLERY_ITEMS:
  - { id: 1, style: "Realism", image: "..." }
  - { id: 2, style: "Fine Line", image: "..." }
  - { id: 3, style: "Blackwork", image: "..." }
  - { id: 4, style: "Traditional", image: "..." }
  - { id: 5, style: "Realism", image: "..." }
  - { id: 6, style: "Fine Line", image: "..." }
BOOKING_STYLES: ["Realism","Fine Line","Blackwork","Traditional","Weiß noch nicht"]
PRICING_ITEMS:
  - { title: "Mindestpreis", description: "Ab 150€ für kleine Motive" }
  - { title: "Stundenpreis", description: "180€ / Stunde für größere Projekte" }
  - { title: "Beratung", description: "Kostenlos und unverbindlich" }
FAQ_ITEMS:
  - { question: "Wie bereite ich mich auf meinen Termin vor?", answer: "..." }
  - { question: "Tut tätowieren weh?", answer: "..." }
  - { question: "Wie pflege ich mein neues Tattoo?", answer: "..." }
  - { question: "Kann ich mein eigenes Design mitbringen?", answer: "..." }
OPENING_HOURS:
  - { days: "Montag - Freitag", hours: "11:00 - 18:00" }
  - { days: "Samstag", hours: "12:00 - 16:00" }
  - { days: "Sonntag", hours: "Geschlossen", dimmed: true }
```
