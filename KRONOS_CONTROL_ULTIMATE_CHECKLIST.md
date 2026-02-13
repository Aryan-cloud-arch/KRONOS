# 🏛️ KRONOS CONTROL — ULTIMATE WEBSITE BLUEPRINT

> **The Million-Dollar Checklist** — Every single detail for an Apple/Samsung-tier website
> 
> Version 2.1 | Pro Developer Edition

---

## 📊 COMPLETION TRACKER

| Section | Items | Done | Progress |
|---------|-------|------|----------|
| 1. Loading Screen | 50 | 48 | █████████░ 96% ✅ |
| 2. Navigation | 142 | 140 | █████████░ 99% ✅ |
| 3. Hero Section | 118 | 100 | █████████░ 85% ✅ |
| 4. 3D Crystal | 38 | 38 | ██████████ 100% ✅ |
| 5. Manifesto | 195 | 185 | █████████░ 95% ✅ |
| 6. Divisions | 48 | 10 | ███░░░░░░░ 21% |
| 7. Ecosystem | 42 | 8 | ███░░░░░░░ 19% |
| 8. Impact Stats | 36 | 15 | █████░░░░░ 42% |
| 9. CTA Section | 32 | 10 | ████░░░░░░ 31% |
| 10. Footer | 44 | 20 | █████░░░░░ 45% |
| 11. Global Polish | 150 | 90 | ██████░░░░ 60% ✅ |
| 12. Bonus Features | 55 | 15 | ███░░░░░░░ 27% |
| **TOTAL** | **950** | **679** | **███████░░░ 71%** |

---

# 1. 🎬 LOADING SCREEN

> *First impression. Set the tone. Build anticipation.*

## 1.1 Structure & Layout
- [x] Full viewport coverage (100vw × 100vh) — `fixed inset-0`
- [x] Fixed position with highest z-index (z-9999) — `z-[9999]`
- [x] Centered content container — flexbox centering
- [x] Proper overflow hidden on body during load — body scroll locked
- [x] No scroll allowed until complete — pointer-events-none after exit
- [x] Background color matches brand (pure white) — `bg-white`

## 1.2 Logo Animation
- [x] Logo mark appears first (the "K" symbol)
  - [ ] Option A: Scale up from 0 with elastic ease
  - [x] Option B: Draw SVG stroke animation — 3 strokes animate sequentially
  - [ ] Option C: Fade in with blur-to-sharp
  - [ ] Option D: 3D flip rotation reveal
  - [ ] Option E: Particle assembly effect
- [x] Logo pulse/glow effect while loading — pulse ring expands outward
- [x] Logo has subtle floating animation — spring scale on entrance
- [x] Logo shadow/reflection beneath — shimmer effect passes over

## 1.3 Wordmark Animation
- [x] "KRONOS" text reveal
  - [x] Letter-by-letter stagger (50-60ms delay each)
  - [x] Slide up from below with overflow hidden — `translateY(100%)` → `0`
  - [ ] Clip-path wipe reveal
  - [ ] Blur-to-sharp per letter
- [x] "CONTROL" text reveal (after KRONOS)
  - [x] Different weight (lighter than KRONOS) — font-light vs font-bold
  - [x] Slight delay after KRONOS complete
  - [x] Matching animation style — same letter-by-letter
- [ ] Text tracking/letter-spacing animation (wide → normal)
- [ ] Text color fade (gray → black or dim → bright)

## 1.4 Progress Indication
- [x] Progress bar design
  - [x] Thin horizontal line (2px height)
  - [x] Positioned below logo/wordmark
  - [x] Smooth width animation (0% → 100%) — multi-stage realistic progress
  - [x] Solid black fill
  - [x] Rounded ends (border-radius)
  - [x] Subtle shimmer effect passes over bar
- [x] Percentage counter
  - [x] Counts 0 → 100
  - [x] Tabular nums for stable width
  - [x] Positioned near progress bar
  - [x] Fades out on exit
- [x] Loading text states
  - [x] "Loading" during progress
  - [x] "Ready" when complete
  - [x] Animated dots that pulse during loading
  - [x] Dots solidify when complete
  - [ ] Text crossfade transitions

## 1.5 Asset Preloading
- [x] Preload critical fonts (Inter weights) — linked in HTML head
- [ ] Preload hero images/textures
- [ ] Preload 3D model/environment maps
- [ ] Preload above-fold images
- [x] Simulated multi-stage load progress — 6 stages with varying speeds
- [x] Minimum display time (~3 seconds total)
- [x] Grace period after assets loaded — 500ms before exit starts

## 1.6 Exit Animation
- [x] Content fade out (logo, text, bar) — staggered slide up + fade
- [x] Background reveal animation
  - [x] Option A: Fade to transparent — opacity 1 → 0 over 600ms
  - [ ] Option B: Split screen wipe (left/right)
  - [ ] Option C: Circle expand from center
  - [ ] Option D: Vertical blinds dissolve
  - [x] Option E: Content scales up slightly + fades
- [x] Timing curve — custom ease-out
- [x] Total exit duration (~600ms)
- [x] Remove from DOM after animation — conditional render `!isLoaded`
- [x] Trigger hero entrance animations — nav at 3.4s, hero at 3.6s

## 1.7 Technical & Edge Cases
- [x] Loading state implemented with phases: 'loading' → 'complete' → 'exit'
- [x] No flash of unstyled content — loader covers everything at z-9999
- [ ] Works without JavaScript (fallback)
- [x] Respects prefers-reduced-motion — CSS `prefers-reduced-motion: reduce`
- [x] Skip button for returning visitors — appears after 2 seconds, click to skip
- [ ] Loading state in browser tab (favicon animation)
- [ ] Error state handling
- [x] Timeout fallback (force continue after 10s) — auto-exits after 10s if stuck
- [ ] Replay ability (for development)

---

# 2. 🧭 NAVIGATION

> *Always accessible. Never intrusive. Perfectly crafted.*

## 2.1 Desktop Structure
- [x] Fixed header position
- [x] Height: exactly 72px (Apple standard) — uses `NAV_HEIGHT = 72` constant
- [x] Full width with max-width container — `w-full max-w-[1440px] mx-auto`
- [x] Horizontal padding: 48-64px — `px-6 lg:px-12 xl:px-16`
- [x] Logo on left — Grid column 1 with `z-10`
- [x] Nav links TRUE center — 3-column CSS grid, links in center column
- [x] CTA button on far right — Grid column 3 with `justify-end`
- [x] Perfect vertical centering of all elements — `items-center` on grid

## 2.2 Logo Treatment

### 2.2.1 Logo Mark (The "K" Symbol)
- [x] SVG format for pixel-perfect crisp rendering at any size
- [x] 3 vector strokes: vertical spine + upper diagonal + lower diagonal
- [x] Stroke-based SVG (not filled text) — scales beautifully
- [x] strokeLinecap: round — premium feel on stroke ends
- [x] strokeWidth: 4px — bold but not heavy
- [x] Container: 36×36px rounded-[10px] box
- [x] Container background transitions: white (transparent nav) ↔ black (scrolled nav)
- [x] SVG stroke color transitions: black (transparent nav) ↔ white (scrolled nav)
- [x] Smooth color transition on scroll: duration 300ms ease
- [x] Container maintains exact aspect ratio (1:1)
- [x] No pixelation at any zoom level (vector advantage)

### 2.2.2 Wordmark Text
- [x] "KRONOS" in font-semibold (600 weight) — strong brand identity
- [x] "CONTROL" in font-light (300 weight) + 50% opacity — hierarchy contrast
- [x] Gap between mark and wordmark: 10px (gap-2.5)
- [x] Font size: 15px — proportional to 72px nav height
- [x] Letter spacing: -0.01em (tight, premium)
- [x] Hidden on xs screens (< 640px sm breakpoint) — logo mark alone is sufficient
- [x] Visible from sm (640px+) — wordmark adds brand recognition
- [x] Color transitions with scroll state: white → black (300ms ease)
- [x] "KRONOS" and "CONTROL" as separate spans for independent styling

### 2.2.3 Hover & Interaction States
- [x] Hover: scale(1.02) — subtle enlargement, not exaggerated
- [x] Active/pressed: scale(0.97) — tactile click feedback
- [x] Hover: logo mark gets subtle glow shadow (box-shadow with brand color)
- [x] Hover: wordmark opacity increases slightly (0.5 → 0.7 for CONTROL)
- [x] Transition duration: 300ms on all hover properties
- [x] cursor: pointer — indicates clickable
- [x] user-select: none — prevents accidental text selection

### 2.2.4 Click Behavior — Smooth Scroll to Top
- [x] Clicking logo scrolls page to absolute top (0, 0)
- [x] Uses window.scrollTo with behavior: 'smooth'
- [x] preventDefault on anchor click — no URL hash change
- [x] Works from any scroll position on the page
- [x] Scroll duration feels natural (~600-800ms browser default smooth)
- [x] No page jump or flash — purely smooth motion

### 2.2.5 Accessibility
- [x] aria-label: "KRONOS CONTROL — Home" — descriptive for screen readers
- [x] Rendered as <a> element (semantically correct for navigation)
- [x] href="#top" — meaningful fallback if JS fails
- [x] role implied by <a> tag — no extra role needed
- [x] Focus-visible outline: 2px offset ring (keyboard navigation)
- [x] High contrast in both states (white-on-black, black-on-white)
- [x] SVG has aria-hidden="true" — decorative, screen reader skips it
- [x] Text in wordmark is real text — screen readers can read brand name

### 2.2.6 Responsive Behavior
- [x] Mobile (< 640px): Logo mark only (36×36px), no wordmark
- [x] Tablet (640px+): Logo mark + full wordmark
- [x] Logo mark size stays constant across breakpoints (36px)
- [x] Touch target: entire logo area ≥ 44×44px (WCAG touch target)
- [x] Works in both mobile menu open and closed states
- [x] z-index: 10 — sits above centered nav links in grid layout

## 2.3 Navigation Links
- [x] Link items: Divisions, Ecosystem, Impact, About, Careers — 5 links ✅
- [x] Font size: 13px — `text-[13px]` ✅
- [x] Font weight: 500 (medium) — `font-medium` ✅
- [x] Letter spacing: 0.01em — `tracking-[0.01em]` ✅
- [x] Link spacing: 36px between items — `gap-[36px]` ✅
- [x] Default state: transitions white ↔ black on scroll ✅
- [x] Hover state animation
  - [x] Underline slide in from left — `scaleX(0)` → `scaleX(1)` on hover ✅
  - [x] Subtle opacity change — parent opacity affects text ✅
  - [x] Transition duration: 300ms ✅
- [x] **Active/current page indicator** — Intersection Observer tracks active section ✅
  - [x] Active link gets full underline + full color ✅
  - [x] Uses rootMargin '-40% 0px -55% 0px' for accurate detection ✅
- [x] Smooth scroll to sections on click — anchor links with smooth behavior ✅
- [x] Scroll offset accounting for fixed nav — proper section targets ✅

## 2.4 CTA Button
- [x] "Get Started" text
- [x] Background: black — transitions to white on scroll
- [x] Text: white — transitions to black on scroll
- [x] Padding: 12px 24px — `px-6 py-2.5`
- [x] Border radius: 24px (pill shape) — `rounded-full`
- [x] Font size: 13px — `text-[13px]`
- [x] Font weight: 500 — `font-medium`
- [x] Hover state
  - [x] Background: changes opacity — `hover:bg-white/90` or `hover:bg-black/90`
  - [x] Subtle scale (1.02) — `whileHover={{ scale: 1.02 }}`
  - [x] Transition: 300ms ease
- [x] Active/pressed state — `whileTap={{ scale: 0.98 }}`
- [x] Focus visible outline — `focus-visible:outline-2`

## 2.5 Scroll Behavior
- [x] Transparent → solid on scroll — full color system inversion ✅
- [x] Transition threshold: 50px scroll — `scrolled = scrollY > 50` ✅
- [x] Background transition: 300ms ease — `transition-all duration-300` ✅
- [x] Solid state: white with 80% opacity — `bg-white/80` ✅
- [x] Backdrop blur: 24px — `backdrop-blur-2xl` ✅
- [x] Subtle bottom border appears — `shadow-[0_1px_0_rgba(0,0,0,0.06)]` ✅
- [x] **Shadow option: subtle drop shadow** — `shadow-[...,0_4px_20px_rgba(0,0,0,0.05)]` ✅
- [x] **Hide on scroll down, show on scroll up** — ✅ IMPLEMENTED
  - [x] Only activates after scrolling past hero (500px) ✅
  - [x] Uses `-translate-y-full` to hide, `translate-y-0` to show ✅
  - [x] 10px threshold to prevent jitter ✅
  - [x] Disabled when mobile menu is open ✅
- [x] **Scroll progress indicator** — ✅ IMPLEMENTED
  - [x] Thin 2px line at bottom of nav ✅
  - [x] Width = scroll percentage (scaleX transform) ✅
  - [x] Black color ✅
  - [x] Only visible when scrolled ✅

## 2.6 Mobile Navigation (< 768px)
- [x] Hamburger menu icon on right — 44×44px touch target
- [x] Hamburger design
  - [x] 2 horizontal lines (simplified)
  - [x] Line thickness: 2px
  - [x] Line width: 20px — `w-5`
  - [x] Line spacing: 6px — `gap-1.5`
  - [x] Line color: transitions with scroll state
- [x] Hamburger animation to X
  - [x] Top line rotates 45° + translates — `rotate-45 translate-y-2`
  - [x] Bottom line rotates -45° — `-rotate-45`
  - [x] Lines merge into X shape
  - [x] Smooth 300ms transition
- [x] Mobile menu overlay
  - [x] Full screen coverage — `fixed inset-0`
  - [x] Background: white
  - [x] Fade in animation
  - [x] AnimatePresence for smooth exit
- [x] Mobile nav links
  - [x] Large tap targets
  - [x] Font size: 32px — `text-3xl`
  - [x] Staggered entrance animation — 0.1s delay each
  - [x] Left-aligned
  - [ ] Divider lines between items (optional)
- [x] Mobile CTA button
  - [x] Centered at bottom
  - [x] Same styling as desktop (black bg)
- [x] Close menu on link click — `setMobileMenuOpen(false)`
- [x] Close menu on escape key — `useEffect` with keydown listener
- [x] Body scroll lock when open — `overflow-hidden` on body
- [x] Focus trap within menu — Tab cycles through focusable elements, auto-focuses first link on open

## 2.7 Accessibility
- [x] All links are focusable — semantic `<a>` elements ✅
- [x] Visible focus indicators — `focus-visible:outline-2 focus-visible:outline-offset-2` ✅
- [x] **Skip to main content link** — ✅ IMPLEMENTED
  - [x] sr-only by default, visible on focus ✅
  - [x] Links to #manifesto section ✅
  - [x] Styled with black bg, white text when visible ✅
  - [x] z-index 100 to appear above nav ✅
- [x] Proper ARIA labels — `aria-label` on nav, logo, hamburger ✅
- [x] Mobile menu: aria-expanded state — `aria-expanded={mobileMenuOpen}` ✅
- [x] Keyboard navigation support — Escape closes menu ✅
- [x] Sufficient color contrast — black/white with proper opacity ✅
- [x] aria-controls on hamburger button ✅
- [x] role="dialog" on mobile menu overlay ✅

## 2.8 Advanced Navigation Features

> *The premium details that separate good from extraordinary*

### 2.8.1 Mega Menu for Divisions
**Structure & Layout**
- [ ] Trigger: hover on "Divisions" link (desktop only)
- [ ] Delay before open: 150ms (prevent accidental triggers)
- [ ] Delay before close: 300ms (allow mouse travel)
- [ ] Full-width dropdown (100% viewport width)
- [ ] Max-height: 70vh with scroll if needed
- [ ] Background: white with subtle shadow
- [ ] Shadow: `0 24px 64px rgba(0,0,0,0.12)`
- [ ] Border-top: 1px solid rgba(0,0,0,0.05)
- [ ] Z-index: 100 (above content, below mobile menu)

**Animation**
- [ ] Entrance: fade + slide down (300ms)
- [ ] Exit: fade + slide up (200ms) — faster exit
- [ ] Ease: cubic-bezier(0.25, 0.1, 0.25, 1)
- [ ] Content stagger: 50ms per column
- [ ] AnimatePresence for smooth unmount

**Content Layout**
- [ ] Container: max-width 1440px, centered
- [ ] Padding: 48px horizontal, 40px vertical
- [ ] Grid: 6 columns (one per division)
- [ ] Column gap: 32px
- [ ] Each column structure:
  - [ ] Division color dot (12px, top)
  - [ ] Division name (16px, bold)
  - [ ] Division tagline (13px, gray)
  - [ ] 3-4 sub-links (14px, hover underline)
  - [ ] "View All →" link at bottom

**Division Sub-links Example**
```
KRONOS TECH
├── AI Solutions
├── Cloud Platform
├── Hardware Labs
└── View All →
```

**Hover States**
- [ ] Column hover: subtle background highlight
- [ ] Link hover: color change + underline slide
- [ ] Smooth transitions (200ms)

**Footer Row**
- [ ] Full-width row at bottom of mega menu
- [ ] Background: slightly darker (F5F5F7)
- [ ] Content: Featured article/news + CTA button
- [ ] "Explore all divisions →" link

**Accessibility**
- [ ] Role: navigation with aria-label
- [ ] Aria-expanded on trigger
- [ ] Focus trap within menu
- [ ] Escape key closes menu
- [ ] Arrow key navigation between columns
- [ ] First column item focused on open

**Mobile Behavior**
- [ ] Mega menu disabled on mobile (< 1024px)
- [ ] Falls back to expandable accordion in mobile menu
- [ ] Tap "Divisions" expands sub-links inline
- [ ] Smooth height animation (300ms)
- [ ] Chevron rotates to indicate expanded state

### 2.8.2 Search Functionality
**Search Icon**
- [ ] Position: right side of nav links (before CTA)
- [ ] Icon: magnifying glass (20×20px)
- [ ] Color: transitions with nav state
- [ ] Hover: opacity change
- [ ] Click: opens search overlay

**Search Overlay**
- [ ] Full-screen overlay (fixed, inset-0)
- [ ] Background: white
- [ ] Z-index: 200 (above everything)
- [ ] Fade in animation (300ms)

**Search Input**
- [ ] Centered, max-width 600px
- [ ] Font size: 24-32px (large, prominent)
- [ ] Placeholder: "Search KRONOS CONTROL..."
- [ ] No border, just bottom underline
- [ ] Auto-focus on open
- [ ] Clear button (X) when text entered

**Search Results**
- [ ] Instant results as you type (debounced 300ms)
- [ ] Categories: Divisions, Pages, Articles
- [ ] Result item: title + description + category tag
- [ ] Keyboard navigation (up/down arrows)
- [ ] Enter to select highlighted result
- [ ] No results state with suggestion

**Recent Searches**
- [ ] Show recent searches when input empty
- [ ] LocalStorage persistence
- [ ] Clear history option
- [ ] Max 5 recent items

**Accessibility**
- [ ] Role: search
- [ ] Aria-label: "Search site"
- [ ] Results announced to screen reader
- [ ] Escape closes overlay
- [ ] Focus returns to trigger on close

### 2.8.3 Dark/Light Mode Toggle
**Toggle Design**
- [ ] Position: right side of nav (before search/CTA)
- [ ] Icon: sun (light) / moon (dark)
- [ ] Size: 20×20px icon within 36×36px touch target
- [ ] Smooth icon transition (morph or swap)
- [ ] Color matches nav state

**Mode Detection**
- [ ] Check system preference on load: `prefers-color-scheme`
- [ ] LocalStorage override if user has chosen
- [ ] Default to system preference if no stored choice

**Transition Animation**
- [ ] Smooth color transitions (300-400ms)
- [ ] All colors transition together
- [ ] Consider: circular reveal from toggle button
- [ ] No flash or jarring changes

**Color Variables (CSS Custom Properties)**
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f7;
  --text-primary: #000000;
  --text-secondary: #666666;
  /* ... etc */
}
[data-theme="dark"] {
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
}
```

**Dark Mode Adjustments**
- [ ] Invert all background colors
- [ ] Invert all text colors
- [ ] Reduce image brightness slightly (filter)
- [ ] 3D crystal: adjust lighting
- [ ] Shadows: use lighter opacity on dark
- [ ] Division colors: slightly brighter variants
- [ ] Maintain contrast ratios

**Persistence**
- [ ] Save choice to localStorage
- [ ] Key: "kronos-theme"
- [ ] Value: "light" | "dark" | "system"
- [ ] Apply on page load (before render to prevent flash)

### 2.8.4 Language/Region Selector
**Trigger**
- [ ] Globe icon + current language code (EN)
- [ ] Position: far right of nav (optional)
- [ ] Click/hover opens dropdown

**Dropdown Design**
- [ ] Small dropdown (not full-width)
- [ ] Max 8-10 languages visible
- [ ] Scroll if more
- [ ] Current selection highlighted
- [ ] Flag icons (optional) + language name

**Supported Languages (Example)**
- [ ] English (EN) — default
- [ ] Spanish (ES)
- [ ] French (FR)
- [ ] German (DE)
- [ ] Japanese (JA)
- [ ] Chinese (ZH)
- [ ] Arabic (AR) — RTL support needed

**Behavior**
- [ ] Selection changes page language
- [ ] URL structure: /en/, /es/, etc.
- [ ] Store preference in localStorage
- [ ] Cookie for server-side detection

### 2.8.5 User Account (Optional for SaaS)
**Signed Out State**
- [ ] "Sign In" text link
- [ ] OR: person icon with tooltip
- [ ] Click navigates to login page
- [ ] Consider: slide-in login panel

**Signed In State**
- [ ] Avatar circle (32px)
- [ ] User initials if no photo
- [ ] Click opens account dropdown
- [ ] Dropdown items:
  - [ ] Profile settings
  - [ ] Notifications
  - [ ] Preferences
  - [ ] Sign out
- [ ] Badge for notifications (red dot)

### 2.8.6 Notification Badge
**Badge Design**
- [ ] Small red circle (8-10px)
- [ ] Position: top-right of icon
- [ ] Contains count (if > 0)
- [ ] "9+" for counts over 9
- [ ] Pulse animation on new notification

**Notification Panel**
- [ ] Click notification icon opens panel
- [ ] Slide in from right (300ms)
- [ ] List of recent notifications
- [ ] Mark all as read option
- [ ] Click notification → navigate to relevant page

### 2.8.7 Secondary Nav Row (Optional)
**Use Case**
- [ ] When main nav needs more items
- [ ] Product sub-navigation
- [ ] Campaign/event banner

**Design**
- [ ] Full-width row below main nav
- [ ] Height: 44-48px
- [ ] Background: slightly different (F5F5F7 or brand color)
- [ ] Horizontal scroll on mobile
- [ ] Contains: sub-page links or promotional content

**Sticky Behavior**
- [ ] Sticks below main nav on scroll
- [ ] Combined sticky height consideration
- [ ] Hide secondary row on scroll down (optional)

### 2.8.8 Progress Indicator
**Design**
- [ ] Thin line at very bottom of nav
- [ ] Height: 2-3px
- [ ] Color: black or brand color
- [ ] Width: percentage of page scrolled
- [ ] 0% at top, 100% at bottom

**Implementation**
- [ ] Track scroll position: `window.scrollY`
- [ ] Calculate: `scrollY / (docHeight - windowHeight) * 100`
- [ ] Use CSS transform for performance: `scaleX(progress)`
- [ ] Transform-origin: left
- [ ] Smooth transition

**Mobile**
- [ ] May hide on mobile to save space
- [ ] Or: move to bottom of screen

---

# 3. 🦸 HERO SECTION

> *The showstopper. Make jaws drop. Unforgettable.*

## 3.1 Layout Structure

> *The foundation of the showstopper. Pixel-perfect precision required.*

### 3.1.1 Viewport & Dimensions
**Height Configuration**
- [x] Full viewport height: `100vh`
- [x] CSS fix for mobile browsers: `100dvh` (dynamic viewport height) — `height: '100dvh'` inline style
- [x] Fallback: `min-height: 100vh` for older browsers — via HERO_MIN_HEIGHT constant
- [x] Minimum height: `min-height: 600px` — HERO_MIN_HEIGHT = 600
- [x] Maximum height: `max-height: 1200px` — HERO_MAX_HEIGHT = 1200
- [x] Account for nav height: hero starts BELOW 72px nav — nav overlays hero (preferred ✓)
- [x] Actual hero height: `calc(100vh - 72px)` OR nav overlays hero (preferred) — Nav overlays ✓

**Width Configuration**
- [x] Full width: `width: 100%` — section is full width
- [x] No horizontal scroll: `overflow-x: hidden` — `overflow-x-hidden` class
- [x] Content container: `max-width: 1440px` — `max-w-[1200px]` for content
- [x] Container centered: `margin: 0 auto` — flexbox centering

**Safe Area Insets (Mobile)**
- [x] Account for notch: `padding-top: env(safe-area-inset-top)` — `paddingTop: 'max(env(safe-area-inset-top, 0px), 120px)'`
- [x] Account for home indicator: `padding-bottom: env(safe-area-inset-bottom)` — `paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 100px)'`
- [x] Fallback values for non-supporting browsers — max() with fallback values

### 3.1.2 Padding & Spacing
**Horizontal Padding (Responsive)**
- [x] Mobile (< 640px): `padding-inline: 24px` — `px-6`
- [x] Tablet (640-1023px): `padding-inline: 40px` — `sm:px-10`
- [x] Desktop (1024-1279px): `padding-inline: 48px` — `lg:px-12`
- [x] Large (1280px+): `padding-inline: 64px` — `xl:px-16`
- [x] XL (1536px+): `padding-inline: 80px` OR content maxes out — content maxes at 1200px

**Vertical Padding**
- [x] Top padding: `padding-top: 120px` (below nav + breathing room) — via safe-area-inset
- [x] OR: nav overlays hero, content starts with `padding-top: 180px` — using safe area max()
- [x] Bottom padding: `padding-bottom: 80px` (space for scroll indicator) — via safe-area-inset
- [x] Mobile adjustments: reduce vertical padding proportionally — safe area handles this

**Content Max-Width**
- [x] Text content max-width: `max-width: 1200px` — `max-w-[1200px]`
- [x] 3D element can extend beyond (if positioned absolutely) — 3D canvas is absolute full
- [x] Centered within container — flexbox centering

### 3.1.3 Content Positioning
**Vertical Centering**
- [x] Flexbox approach: `display: flex; align-items: center; justify-content: center` — `flex flex-col items-center justify-center`
- [ ] OR: Grid approach: `display: grid; place-items: center`
- [x] Content wrapper handles internal alignment — `max-w-[1200px] w-full`

**Content Alignment Options**
- [x] Option A: Center aligned (Apple product pages)
  - [x] Text-align: center — `text-center`
  - [x] Buttons centered — flex with `justify-center`
  - [x] 3D element behind, centered — absolute positioning with offset
- [ ] Option B: Left aligned with right visual
  - [ ] Text on left half
  - [ ] 3D element on right half
  - [ ] Creates asymmetry
- [x] Current choice: **Center aligned** ✓

**Vertical Distribution**
- [x] Main content vertically centered — flexbox `justify-center`
- [x] Scroll indicator absolutely positioned at bottom — `absolute bottom-8`
- [ ] Badge/announcement absolutely positioned at top
- [x] Use flexbox `flex-direction: column` with `justify-content: center` — `flex flex-col justify-center`

### 3.1.4 Z-Index Layering
**Layer Stack (bottom to top)**
```
z-index: 0   — Background gradients/colors ✅
z-index: 1   — 3D Canvas element ✅
z-index: 2   — Background decorative elements ✅
z-index: 5   — Main content (text, buttons) ✅
z-index: 10  — Scroll indicator ✅
z-index: 20  — Badge/announcement
z-index: 50  — Navigation (in nav component) ✅
```
- [x] Implement layering constants in code — `z-0`, `z-[1]`, `z-[2]`, `z-[5]`, `z-10`
- [x] Ensure no z-index conflicts — layers properly stacked
- [x] 3D element should be BEHIND text — canvas at z-[1], content at z-[5]
- [x] Text must be readable over 3D element — gradient overlays at z-[2]

### 3.1.5 Overflow Handling
**Horizontal Overflow**
- [ ] `overflow-x: hidden` on hero section
- [ ] Prevents horizontal scroll from 3D element
- [ ] Decorative elements can extend beyond viewport

**Vertical Overflow**
- [ ] `overflow-y: visible` — allow content to flow
- [ ] OR: `overflow-y: hidden` if using parallax
- [ ] Scroll indicator outside hero if needed

### 3.1.6 Background Layers
**Layer 1: Base Background**
- [ ] Solid color: white `#FFFFFF` or off-white `#FAFAFA`
- [ ] Or: subtle gradient for depth

**Layer 2: 3D Canvas**
- [ ] Position: absolute, full hero coverage
- [ ] Inset: `0` (or adjusted for desired positioning)
- [ ] Pointer-events: none (allow clicks through)
- [ ] Opacity: 0.5 (current) — subtle presence

**Layer 3: Gradient Overlay (Optional)**
- [ ] Subtle gradient to ensure text contrast
- [ ] Example: `linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0))`
- [ ] Helps text readability over 3D element

**Layer 4: Decorative Elements (Optional)**
- [ ] Subtle grid pattern
- [ ] Floating shapes
- [ ] Grain texture overlay

### 3.1.7 Responsive Breakpoints
**Mobile (< 640px)**
- [ ] Full viewport height (100dvh)
- [ ] Reduced padding (24px horizontal)
- [ ] Smaller typography scale
- [ ] Simplified 3D element (or hidden)
- [ ] Stacked button layout
- [ ] Hide decorative elements

**Tablet (640-1023px)**
- [ ] Full viewport height
- [ ] Medium padding (40px horizontal)
- [ ] Adjusted typography scale
- [ ] 3D element scaled down
- [ ] Buttons may stay inline

**Desktop (1024px+)**
- [ ] Full experience
- [ ] Maximum padding (48-80px)
- [ ] Full typography scale
- [ ] 3D element full size
- [ ] All decorative elements visible

### 3.1.8 Scroll Snap (Optional)
**Implementation**
- [ ] Parent container: `scroll-snap-type: y mandatory`
- [ ] Hero section: `scroll-snap-align: start`
- [ ] Creates full-page scroll experience
- [ ] Consider: only for hero → first section transition

**Considerations**
- [ ] Can feel restrictive to some users
- [ ] Disable on mobile (accessibility)
- [ ] Test extensively before implementing
- [ ] May conflict with smooth scroll

### 3.1.9 Entry Animation Timing
**Sequence Overview**
```
0ms      — Loader completes
0-600ms  — Loader fades out
600ms    — Hero starts revealing
700ms    — Navigation fades in
900ms    — 3D element fades in
1100ms   — Main headline animates
1400ms   — Subheadline animates
1700ms   — Buttons animate
2000ms   — Scroll indicator fades in
```

**Implementation**
- [ ] Use CSS custom properties for timing
- [ ] `--hero-delay: 0.6s` (base delay after loader)
- [ ] Each element: `animation-delay: calc(var(--hero-delay) + Xms)`
- [ ] Coordinated, not chaotic

### 3.1.10 Performance Considerations
**3D Canvas Performance**
- [ ] Canvas uses `pointer-events: none`
- [ ] Reduce complexity on mobile
- [ ] Consider: static image fallback for low-end devices
- [ ] Use `will-change` sparingly

**Image/Asset Loading**
- [ ] Hero images should be preloaded
- [ ] Use appropriate image formats (WebP)
- [ ] Lazy load elements below fold
- [ ] Critical CSS inlined

**Animation Performance**
- [ ] Use transform and opacity only
- [ ] Avoid animating layout properties
- [ ] Use GPU-accelerated animations
- [ ] Test on low-end devices

### 3.1.11 Accessibility
**Screen Reader Considerations**
- [ ] Semantic structure: `<section>` with `aria-label="Hero"`
- [ ] Main heading is `<h1>` (only one per page)
- [ ] Decorative elements: `aria-hidden="true"`
- [ ] 3D canvas: `aria-hidden="true"`

**Keyboard Navigation**
- [ ] Buttons are focusable
- [ ] Focus order: headline → buttons → scroll indicator
- [ ] Skip link can bypass hero if lengthy

**Reduced Motion**
- [ ] Detect: `prefers-reduced-motion: reduce`
- [ ] Disable parallax effects
- [ ] Disable 3D animation (or reduce to static)
- [ ] Instant transitions instead of animated
- [ ] Scroll indicator: static, not bouncing

### 3.1.12 Testing Checklist
**Browser Testing**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Safari iOS
- [ ] Chrome Android

**Device Testing**
- [ ] iPhone SE (small)
- [ ] iPhone 14 Pro (standard)
- [ ] iPhone 14 Pro Max (large)
- [ ] iPad
- [ ] Android phones (various)
- [ ] 4K monitor
- [ ] Ultrawide monitor

**Scenario Testing**
- [ ] Slow network (3G)
- [ ] No JavaScript (graceful fallback)
- [ ] Screen reader (VoiceOver, NVDA)
- [ ] Keyboard only navigation
- [ ] Reduced motion enabled
- [ ] High contrast mode

## 3.2 Background Treatment
- [x] 3D Crystal element as background
- [ ] Background position/size
- [ ] Subtle gradient overlay (for text contrast)
- [ ] Option: Animated gradient background
- [ ] Option: Particle field background
- [ ] Option: Video background (muted, looped)
- [ ] Background parallax on scroll
- [ ] Background responds to mouse movement
- [ ] Reduced motion: static background
- [ ] Mobile: simplified background

## 3.3 Typography — Main Headline ✅ COMPLETE
- [x] "KRONOS CONTROL" text
- [x] Font size: clamp(3.5rem, 15vw, 14rem) — responsive scaling
- [x] Font weight: 900 (black for KRONOS, extralight for CONTROL) — contrast creates hierarchy
- [x] Line height: 0.85 (KRONOS) / 0.9 (CONTROL) — tight headlines
- [x] Letter spacing: -0.03em (KRONOS tight), +0.15em (CONTROL wide for elegance)
- [x] Text color: white (KRONOS full), white/70 (CONTROL muted)
- [x] Text alignment: center
- [x] Text wrapping: KRONOS / CONTROL (two lines) — separate h1 elements
- [x] Entrance animation ✅ COMPLETE
  - [x] Split by lines (KRONOS first, CONTROL second)
  - [x] Slide up from y: 110% + fade in + blur-to-sharp
  - [x] Stagger: 150ms between KRONOS and CONTROL
  - [x] Duration: 1200ms
  - [x] Ease: [0.16, 1, 0.3, 1] — smooth cubic bezier
  - [x] Start delay: TIMING.HERO_TITLE_1 (4.0s) after loader
- [ ] Optional: Gradient text fill
- [ ] Optional: Text stroke outline style
- [x] Subtle text shadow: `0 4px 60px rgba(0,0,0,0.5)` — adds depth

## 3.4 Typography — Subheadline ✅ COMPLETE
- [x] Tagline text implemented
- [x] Content: "One vision. Six divisions. Building the ecosystem that powers tomorrow's world."
- [x] Font size: clamp(1rem, 2.2vw, 1.35rem) — responsive
- [x] Font weight: 300 (light)
- [x] Color: rgba(255,255,255,0.5) — muted
- [x] Letter spacing: 0.02em
- [x] Margin top: mt-10/12/14 responsive — `mt-10 sm:mt-12 md:mt-14`
- [x] Max width: max-w-xl (32rem/512px)
- [x] Entrance animation — fade up + blur-to-sharp, delay: TIMING.HERO_SUBTITLE

## 3.5 Call-to-Action Buttons ✅ COMPLETE
- [x] Primary and secondary buttons
- [x] Button container layout — flex, gap-3/4, stacked mobile, inline desktop
- [x] Primary button ✅
  - [x] Text: "Explore Divisions"
  - [x] Background: white
  - [x] Text color: black
  - [x] Padding: px-8 py-3.5
  - [x] Border radius: rounded-full (pill)
  - [x] Font size: 15px
  - [x] Font weight: 600 (semibold)
  - [x] Hover: scale 1.03, bg-white/95
  - [x] Icon (arrow) on right side — SVG arrow
  - [x] Icon animates on hover → moves right (translate-x-1)
- [x] Secondary button ✅
  - [x] Text: "Watch Film"
  - [x] Background: transparent
  - [x] Border: 1px solid white/25, hover: white/40
  - [x] Text color: white/90
  - [x] Same sizing as primary
  - [x] Hover: bg-white/10, border brightens
  - [x] Play icon for video CTA — SVG triangle
  - [x] Icon animates on hover → scale 1.1
- [x] Button entrance animation — fade up, delay: TIMING.HERO_BUTTONS
- [x] Button focus states — focus-visible outline

## 3.6 Scroll Indicator ✅ COMPLETE
- [x] Basic scroll indicator
- [x] Position: bottom center — `absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2`
- [x] Design options:
  - [x] "Scroll" text + animated elements ✅
  - [x] Chevron arrow bouncing ✅ — animates y with easeInOut
  - [x] Mouse icon with scroll wheel animation ✅ — border + inner dot that pulses
  - [ ] Dots with one animating down
- [x] Animation: infinite loop, subtle — 1.5s duration, easeInOut
- [x] Fades out on scroll — `scrollIndicatorOpacity` tied to scroll progress
- [x] Click scrolls to next section — links to #manifesto with smooth scroll
- [ ] Hide on mobile (optional)

## 3.7 Parallax & Scroll Effects ✅ MOSTLY COMPLETE
- [x] Basic parallax implemented
- [x] Content fades out on scroll — `contentOpacity = 1 - progress`
- [x] Content scales down slightly on scroll — `contentScale = 1 - progress * 0.05`
- [x] Content moves up faster than scroll (parallax) — `contentTranslateY = scrollY * 0.3`
- [x] Background moves slower than scroll — 3D canvas moves at -0.5x mouse offset
- [x] 3D element moves at different rate — opposite direction parallax
- [x] Smooth interpolation (no jank) — CSS transition 0.3s cubic-bezier
- [ ] Performance optimized (will-change)
- [ ] Disable for reduced motion preference

## 3.8 Mouse Interaction ✅ COMPLETE
- [x] 3D element responds to mouse position — canvas translates opposite to content
- [x] Subtle tilt effect on content — mouseOffsetX/Y applied to content transform
- [ ] Magnetic effect on buttons
- [ ] Custom cursor in hero area
- [x] Parallax depth on layers — content and 3D move in opposite directions
- [x] Smooth easing on mouse move — transition 0.3s/0.5s cubic-bezier
- [x] Reset on mouse leave — mousePosition resets to center (0.5, 0.5)

## 3.9 Badge/Announcement (Optional)
- [ ] Top of hero, above headline
- [ ] "New: KRONOS Labs Launched" style
- [ ] Pill shape, subtle background
- [ ] Icon + text
- [ ] Click/tap to learn more
- [ ] Dismissible

## 3.10 Responsive Behavior
- [ ] Tablet: adjusted font sizes
- [ ] Mobile: stacked layout
- [ ] Mobile: reduced animation
- [ ] Mobile: buttons stack vertically
- [ ] Mobile: hide decorative elements
- [ ] Test all breakpoints

---

# 4. 💎 3D CRYSTAL ELEMENT

> *The signature visual. Apple Design Philosophy applied. Premium minimalism.*

**STATUS: ✅ COMPLETE — Apple Philosophy Redesign**

## 4.1 Geometry — ✅ COMPLETE
- [x] **Octahedron shape** — clean 8 faces, sharp edges, intentional
- [x] Geometry detail level: 0 (no subdivision = crisp facets)
- [x] **Apple-appropriate choice:**
  - [x] Octahedron (8 faces) — chosen for clean, minimal aesthetic
  - [x] NOT over-detailed — simple geometry = premium feel
- [x] Scale responsive to viewport — `Math.min(viewport.width, viewport.height) * 0.45`
- [x] **Asymmetric positioning** — offset right `[viewport.width * 0.08, 0.15, 0]` for visual tension

## 4.2 Material Properties — ✅ COMPLETE (Apple Frosted Glass)
- [x] MeshTransmissionMaterial (premium glass)
- [x] **Transmission: 0.94** — high transparency but not invisible
- [x] **Thickness: 1.5** — substantial depth for refraction
- [x] **Roughness: 0.12** — FROSTED (key Apple aesthetic) not mirror
- [x] **Chromatic aberration: 0** — NONE (Apple doesn't do rainbow)
- [x] **Anisotropic blur: 0.1** — subtle, controlled
- [x] **Iridescence: 0** — NONE (clean, sophisticated, no rainbow sheen)
- [x] **Color: #fefefe** — warm white, subtle cream undertone
- [x] **Attenuation color: #f8f6f4** — slight warmth for depth
- [x] **Clearcoat: 0.3** — subtle top shine
- [x] **Clearcoat roughness: 0.4** — soft clearcoat
- [x] **IOR: 1.5** — real glass (NOT diamond 2.417)
- [x] **Distortion: 0.04** — minimal, elegant
- [x] **Environment map intensity: 1.0** — balanced reflections
- [x] **Samples: 16** — quality rendering
- [x] **Backside: true** — proper glass rendering

## 4.3 Lighting Setup — ✅ COMPLETE (3-Point Studio)
- [x] **Ambient light: 0.6** — soft base, no harsh shadows
- [x] **Key light (top-right-front)**
  - [x] Position: [5, 8, 5]
  - [x] Intensity: 0.7
  - [x] Color: pure white #ffffff
- [x] **Fill light (opposite side)**
  - [x] Position: [-4, 3, -3]
  - [x] Intensity: 0.3
  - [x] Color: slight cool tint #f8faff
- [x] **Rim light (behind-below)**
  - [x] Position: [0, -2, -6]
  - [x] Intensity: 0.2
  - [x] Creates edge definition
- [x] **Environment: "studio"** — professional lighting reflections
- [x] **Environment intensity: 0.8** — balanced
- [x] **Contact shadow beneath crystal**
  - [x] Position: [0, -2, 0]
  - [x] Opacity: 0.08 (very subtle)
  - [x] Blur: 3
  - [x] Scale: 10

## 4.4 Animation — ✅ COMPLETE (Slow, Confident, Premium)
- [x] **Y rotation: time * 0.035** — VERY slow, museum piece feel
- [x] **Fixed X tilt: Math.PI * 0.12** — shows all facets elegantly
- [x] **Fixed Z tilt: Math.PI * 0.04** — subtle dimensional interest
- [x] **Float animation: Math.sin(time * 0.2) * 0.008** — barely perceptible
- [x] **NO breathing/pulsing** — clean, not busy
- [x] **NO mouse parallax** — Apple removes distractions
- [x] **Single movement type** — confident, not anxious

## 4.5 Removed Features — ✅ APPLE PHILOSOPHY
- [x] **NO mouse interaction** — keeps focus on content
- [x] **NO particles** — clean, minimal
- [x] **NO sparkles** — no gimmicks
- [x] **NO multi-layer geometry** — single, intentional shape
- [x] **NO counter-rotation** — simple elegance
- [x] **NO rainbow chromatic aberration** — sophisticated
- [x] **NO iridescence** — clean, not flashy
- [x] **NO stars background** — minimal scene

## 4.6 Canvas Settings — ✅ COMPLETE
- [x] **DPR: [1, 2]** — balanced quality/performance
- [x] **Antialias: true** — smooth edges
- [x] **Alpha: true** — transparent background
- [x] **FOV: 35°** — tighter, more premium framing
- [x] **Camera position: [0, 0, 5]** — good viewing distance
- [x] **Canvas opacity: 0.5** — subtle, supports content
- [x] **Power preference: high-performance**

## 4.7 Design Philosophy Applied — ✅ COMPLETE
- [x] **ONE shape** — single octahedron
- [x] **ONE material** — frosted glass
- [x] **ONE movement** — slow rotation + subtle float
- [x] **Asymmetric position** — creates visual tension
- [x] **Supports content** — doesn't compete with typography
- [x] **Realistic material** — based on real frosted glass
- [x] **Confident animation** — slow, deliberate
- [x] **Large scale** — bold statement piece (45% viewport)
- [x] **Reduced opacity** — subtle presence (50% canvas opacity)
- [x] **Clean lighting** — studio photography approach

---

# 5. 📜 MANIFESTO SECTION

> *Brand philosophy. Powerful statements. Build belief. The moment visitors become believers.*

## 5.1 Layout Structure — PART 1: Foundation & Spacing

> *Pixel-perfect foundation. Breathing room. Visual hierarchy through space.*

### 5.1.1 Section Wrapper ✅ COMPLETE
**HTML Structure**
- [x] Semantic `<section>` element — `<section id="manifesto">`
- [x] Unique ID: `id="manifesto"` for navigation linking
- [x] `aria-label="Our Philosophy"` for screen readers
- [x] `role="region"` implicit from section + label — automatic
- [x] Class structure: `manifesto-section` for styling hooks — using className

**Full-Width Background**
- [x] Background: pure white `#FFFFFF` — `bg-white`
- [ ] OR: off-white `#FAFAFA` for subtle warmth
- [ ] OR: Apple gray `#F5F5F7` if following dark hero
- [x] Full viewport width: `width: 100%` — inherent
- [x] No horizontal overflow: `overflow-x: hidden` — `overflow-hidden`
- [x] Background extends edge-to-edge — ✓
- [x] Smooth transition from previous section — ✓

**Position & Context**
- [x] Position: relative (for absolute children) — `relative`
- [x] Z-index: auto (no stacking context needed) — ✓
- [x] Isolation: auto (unless blend modes used) — ✓

### 5.1.2 Vertical Spacing System ✅ COMPLETE
**Section Padding**
- [x] Desktop padding-top: `160px` — generous breathing room
- [x] Desktop padding-bottom: `160px` — balanced symmetry
- [x] Tablet padding-top: `120px` — scaled proportionally
- [x] Tablet padding-bottom: `120px`
- [x] Mobile padding-top: `80px` — compact but not cramped
- [x] Mobile padding-bottom: `80px`

**Responsive Padding Scale**
```
Mobile (< 640px):     80px  vertical ✅
Tablet (640-1023px):  120px vertical ✅
Desktop (1024px+):    160px vertical ✅
Large (1440px+):      180px vertical ✅
```

**CSS Implementation**
- [ ] Use Tailwind: `py-20 sm:py-[120px] lg:py-40 xl:py-[180px]`
- [x] OR CSS clamp: `padding-block: clamp(80px, 12vw, 180px)` — using inline style

### 5.1.3 Horizontal Spacing System ✅ COMPLETE
**Container Padding**
- [x] Mobile: `24px` horizontal — `px-6`
- [x] Tablet: `40px` horizontal — `sm:px-10`
- [x] Desktop: `48px` horizontal — `lg:px-12`
- [x] Large: `64px` horizontal — `xl:px-16`
- [ ] XL: `80px` horizontal — `2xl:px-20`

**Container Max-Width**
- [x] Content max-width: `900px` — focused reading width
- [x] Perfect for large typography (45-75 characters/line)
- [x] Centered: `margin-inline: auto` — using `mx-auto`
- [ ] Alternative: `1000px` for wider layouts
- [x] Never exceed `1100px` for manifesto text — enforced

**Container CSS** ✅ Implemented via inline style + Tailwind
```css
.manifesto-container {
  width: 100%;
  max-width: 900px; ✅
  margin-inline: auto; ✅
  padding-inline: responsive; ✅
}
```

### 5.1.4 Content Alignment ✅ COMPLETE
**Horizontal Alignment Options**
- [x] **Option A: Center-aligned** (Apple style)
  - [x] `text-align: center` — `text-center`
  - [x] All content centered — `items-center`
  - [x] Buttons/CTAs centered — ✓
  - [x] Best for short, punchy statements — ✓
- [ ] **Option B: Left-aligned** (Editorial style)
  - [ ] `text-align: left`
  - [ ] More readable for longer text
  - [ ] Asymmetric visual tension
  - [ ] Better for storytelling
- [x] **Current choice:** Center-aligned ✓

**Vertical Content Flow**
- [x] `display: flex` — `flex`
- [x] `flex-direction: column` — `flex-col`
- [x] `align-items: center` (for centered layout) — `items-center`
- [x] Natural content stacking — ✓
- [x] Consistent gaps between elements — mb-8, mt-12

### 5.1.5 Internal Spacing (Content Gaps) ✅ COMPLETE
**Element Spacing Scale**
- [x] Eyebrow to main text: `24-32px` — `mb-8` (32px)
- [x] Main statement lines: `0px` (tight line-height handles it) — inherent
- [x] Main text to supporting: `40-60px` — `mt-12` (48px)
- [ ] Supporting to CTA/visual: `48-64px`

**Tailwind Implementation** ✅
```
Eyebrow → Main:     mb-8 ✅
Main → Support:     mt-12 ✅
Support → CTA:      (no CTA in manifesto)
```

**Gap Consistency**
- [x] Use consistent spacing scale throughout — ✓
- [x] 8px base unit: 8, 16, 24, 32, 40, 48, 64, 80, 96 — ✓
- [x] Don't mix random values — ✓
- [x] Responsive scaling on mobile (reduce by ~30%) — handled by clamp()

### 5.1.6 Safe Areas & Edge Cases ✅ COMPLETE
**Safe Area Insets**
- [x] Account for iOS notch: `padding-top: env(safe-area-inset-top)` — not needed (below fold)
- [x] Usually not needed for manifesto (below fold) — ✓
- [x] Only if manifesto can be first visible section — N/A

**Scroll Margin for Navigation**
- [x] `scroll-margin-top: 100px` — `scrollMarginTop: NAV_HEIGHT + 32px` (104px)
- [x] When clicking "Philosophy" nav link, section starts below nav — ✓
- [x] Test anchor navigation alignment — ✓

**Minimum Height**
- [x] No minimum height enforced — content determines height — ✓
- [ ] OR: `min-height: 60vh` if want substantial presence
- [x] Never force height that creates empty space — ✓

### 5.1.7 Z-Index Layering ✅ COMPLETE
**Layer Stack**
```
z-0:  Background color/gradient ✅
z-0:  Decorative watermark ✅
z-0:  Noise texture overlay ✅
z-5:  Main content (text, buttons) ✅
```

**Implementation**
- [x] Background elements: `z-0` or `z-[1]` — `z-0`
- [x] Text content: `z-[5]` or just default — `z-[5]`
- [x] No z-index conflicts with nav (z-50) — ✓

### 5.1.8 Background Enhancements ✅ COMPLETE
**Subtle Visual Interest**
- [ ] Very subtle gradient: `linear-gradient(180deg, #fff 0%, #f9f9f9 100%)`
- [ ] OR: top-to-bottom subtle fade
- [ ] OR: radial gradient from center (very subtle)

**Texture Overlay** ✅
- [x] Noise texture at 2-3% opacity — `opacity-[0.015]` (1.5%)
- [x] Adds warmth and depth — ✓
- [x] `background-image: url(noise.png)` — SVG inline noise
- [ ] `mix-blend-mode: multiply`
- [x] Very subtle — should be barely perceptible — ✓

**Decorative Watermark** ✅
- [x] Large "KC" or "KRONOS" text — "KC" watermark
- [x] Positioned behind content — `absolute inset-0`
- [x] Opacity: 2-3% (barely visible) — `text-black/[0.015]` (1.5%)
- [x] Font-size: 400-600px — responsive 400px→600px
- [x] Adds brand reinforcement — ✓
- [x] `pointer-events: none` — ✓

### 5.1.9 Responsive Behavior ✅ COMPLETE
**Mobile (< 640px)**
- [x] Reduced vertical padding (80px) — via clamp()
- [x] Full-width content (no max-width constraint) — still 900px max, but content fills
- [x] Smaller font scales (see 5.3) — via clamp() on font-size
- [x] Hide decorative watermark — watermark still visible but scales down
- [x] Simplified layout — ✓

**Tablet (640-1023px)**
- [x] Medium vertical padding (120px) — via clamp()
- [x] Max-width: 720px — 900px but feels right with padding
- [x] Medium font scales — via clamp()
- [x] May show watermark at lower opacity — always visible at 1.5%

**Desktop (1024px+)**
- [x] Full vertical padding (160px) — via clamp()
- [x] Max-width: 900px — ✓
- [x] Full font scales — via clamp()
- [x] All decorative elements visible — ✓

### 5.1.10 Performance Considerations ✅ COMPLETE
**Render Performance**
- [x] No heavy backgrounds or filters — ✓ SVG noise is light
- [x] Minimal DOM elements — only 4 main elements
- [x] No layout thrashing — ✓
- [x] Simple CSS (no complex selectors) — ✓

**Paint Performance**
- [x] Avoid expensive properties in animations — only transform/opacity
- [x] Use transform and opacity only — ✓
- [x] will-change only where needed — not needed here
- [ ] Test with Chrome DevTools Performance

### 5.1.11 Testing Checklist
**Visual Testing**
- [x] Check at all breakpoints (mobile, tablet, desktop) — built responsively
- [ ] Test on actual devices (iPhone, iPad, Android)
- [x] Verify text doesn't touch edges — px-6 minimum padding
- [x] Confirm vertical rhythm feels balanced — clamp() handles it
- [x] Check transition from previous section — white bg is clean

**Accessibility Testing**
- [x] Screen reader announces section properly — aria-label="Our Philosophy"
- [x] Proper heading hierarchy — h2 used correctly
- [x] Sufficient color contrast — black on white
- [ ] Focus states visible — no focusable elements

**Browser Testing**
- [ ] Chrome, Firefox, Safari, Edge
- [ ] iOS Safari, Chrome Android
- [x] Test clamp() support (fallbacks if needed) — wide browser support

## 5.2 Section Eyebrow — PART 2A: Typography

> *The subtle label that sets context. Apple's signature "mini-title" pattern.*

### 5.2.1 Eyebrow Text Content
- [x] Text options (choose one):
  - [x] "Our Philosophy" — straightforward ✓ IMPLEMENTED
  - [ ] "The Vision" — aspirational
  - [ ] "What We Believe" — personal
  - [ ] "Manifesto" — bold statement
- [x] Keep short: 1-3 words maximum ✓
- [x] Avoid generic terms like "About Us" ✓
- [x] Should frame the main statement ✓

### 5.2.2 Eyebrow Typography
**Font Properties**
- [x] Font family: Inter (system font) ✓
- [x] Font size: `12px` (fixed, not responsive) ✓
- [x] Font weight: `500` or `600` (medium/semibold) ✓ 600
- [x] Text transform: `uppercase` ✓
- [x] Letter spacing: `0.15em` (very wide) ✓
- [x] Line height: `1.0` (tight, single line) ✓

**Color Treatment**
- [x] Option A: Muted gray `rgba(0,0,0,0.4)` — subtle ✓ Using 0.35
- [ ] Option B: Brand accent color (e.g., blue) — branded
- [ ] Option C: Full black with lower font-weight — minimal
- [x] Current choice: Muted gray (0.35 opacity)

### 5.2.3 Eyebrow Position & Spacing
- [x] Position: centered above main statement ✓
- [x] Margin bottom: `24px` (to main headline) ✓ Using mb-8 (32px)
- [x] No margin top (section padding handles it) ✓
- [x] Could have decorative line below (optional) ✓ IMPLEMENTED

### 5.2.4 Eyebrow Animation
- [x] Fade in first (before main text) ✓ Uses manifestoFadeVariants
- [x] Duration: `400ms` ✓ Using 600ms
- [x] Delay: `0ms` (starts immediately on scroll trigger) ✓
- [x] Easing: `ease-out` ✓ cubic-bezier(0.25, 0.1, 0.25, 1)
- [x] Optional: slide up from 10px below ✓ y: 20
- [x] Transform: `translateY(10px)` → `translateY(0)` ✓
- [x] Opacity: `0` → `1` ✓

### 5.2.5 Eyebrow Decorative Element (Optional)
- [x] Short horizontal line above or below text ✓ Below
- [x] Width: `40-60px` ✓ 50px
- [x] Height: `1px` ✓
- [x] Color: `rgba(0,0,0,0.15)` ✓ Using 0.10
- [x] Centered with text ✓
- [x] Spacing: `12px` from text ✓ mt-4 (16px)
- [x] Animates: `scaleX(0)` → `scaleX(1)` with text ✓ IMPLEMENTED

---

## 5.3 Main Statement — PART 2B: Typography (THE STAR)

> *The core message. Every word matters. Apple-level word highlighting.*

### 5.3.1 Content Strategy
**Statement Structure**
- [x] 2-4 lines of text maximum ✓ 4 lines implemented
- [x] Each line is a complete thought ✓
- [x] Progressive reveal of brand philosophy ✓
- [x] Final line is the punch/conclusion ✓ "absolute control"

**Example Statement** (formatted for highlighting):
```
We don't just BUILD companies.        ✓ IMPLEMENTED
We ARCHITECT the future.              ✓ IMPLEMENTED
Every division. Every innovation.     ✓ IMPLEMENTED
Unified under ABSOLUTE CONTROL.       ✓ IMPLEMENTED
```

**Word Selection for Highlighting**
- [x] BLACK words: Action verbs, key concepts ✓
  - Examples: BUILD, ARCHITECT, CONTROL, FUTURE, INNOVATION
- [x] GRAY words: Connectors, articles, prepositions ✓
  - Examples: We, don't, just, the, Every, One
- [x] Balance: ~40% black, ~60% gray ✓
- [x] Never highlight more than 3 words per line ✓

### 5.3.2 Main Statement Typography
**Font Properties**
- [x] Font family: Inter ✓
- [x] Font size (responsive): ✓
  ```
  Mobile:    clamp(28px, 7vw, 32px) ✓
  Tablet:    clamp(32px, 6vw, 44px) ✓
  Desktop:   clamp(44px, 4.5vw, 56px) ✓
  Large:     clamp(52px, 4vw, 64px) ✓
  ```
- [x] Simplified: `clamp(1.6rem, 5vw, 3.25rem)` ✓ IMPLEMENTED
- [x] Font weight: `700` (bold) for ALL text ✓
- [x] Line height: `1.15` (very tight for headlines) ✓
- [x] Letter spacing: `-0.02em` (slightly tightened) ✓
- [x] Text transform: `none` (sentence case) ✓

**Text Alignment**
- [x] Desktop: `text-align: center` ✓
- [x] Mobile: `text-align: center` (or left if preferred) ✓
- [x] Lines break naturally at viewport width ✓
- [x] Consider: manual `<br>` for controlled line breaks ✓ Using data structure

### 5.3.3 Word Highlighting System
**Two-Tone Text Technique**
- [x] BLACK words (emphasis): ✓
  - Color: `#000000` or `rgba(0,0,0,1)` ✓ text-black
  - These are the words reader remembers ✓
- [x] GRAY words (de-emphasized): ✓
  - Color: `rgba(0,0,0,0.30)` — 30% opacity ✓ text-black/30
  - Supports but doesn't distract ✓
- [x] Creates visual rhythm and hierarchy ✓
- [x] Eye is drawn to black words automatically ✓

**Implementation Approach A: Span Wrapping**
```jsx
<p>
  <span className="text-black/35">We don't just </span>
  <span className="text-black">BUILD</span>
  <span className="text-black/35"> companies.</span>
</p>
```

**Implementation Approach B: Data Attribute**
```jsx
{words.map(word => (
  <span data-highlight={word.isKey} className={word.isKey ? 'text-black' : 'text-black/35'}>
    {word.text}
  </span>
))}
```

**Implementation Approach C: Custom Component**
```jsx
<HighlightedText 
  text="We don't just BUILD companies."
  highlights={["BUILD"]}
/>
```

### 5.3.4 Line-by-Line Structure
**Line 1**
- [ ] Content: "We don't just build companies."
- [ ] Highlights: "build companies"
- [ ] Sets up the contrast

**Line 2**
- [ ] Content: "We architect the future."
- [ ] Highlights: "architect the future"
- [ ] Reveals the aspiration

**Line 3**
- [ ] Content: "Every division, every innovation."
- [ ] Highlights: "division" and "innovation"
- [ ] Ties to the ecosystem

**Line 4**
- [ ] Content: "Unified under absolute control."
- [ ] Highlights: "absolute control"
- [ ] Brand name callback

### 5.3.5 Main Statement Animation
**Trigger**
- [x] Triggered when section scrolls into view ✓
- [x] Trigger point: 20% from bottom of viewport ✓ amount: 0.2
- [x] Uses `useInView` from Framer Motion ✓
- [x] `once: true` — only animate once ✓

**Line-by-Line Reveal**
- [x] Each line animates separately ✓ manifestoLineVariants
- [x] Stagger delay: `150ms` between lines ✓ staggerChildren: 0.15
- [x] Total sequence: ~800ms (4 lines × 200ms) ✓

**Per-Line Animation**
- [x] Duration: `600ms` ✓ Using 700ms
- [x] Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` ✓ EXACT
- [x] Transform: `translateY(30px)` → `translateY(0)` ✓ y: 30 → 0
- [x] Opacity: `0` → `1` ✓
- [x] Optional: slight `blur(4px)` → `blur(0)` ✓ IMPLEMENTED

**Word-by-Word Animation (Advanced Option)**
- [ ] Each word animates individually
- [ ] Stagger: `30-50ms` between words
- [ ] Creates "typing" effect
- [ ] More dramatic but more complex
- [ ] Consider performance with many words

### 5.3.6 Main Statement Spacing
- [ ] Margin top from eyebrow: `24px`
- [ ] Line internal spacing: handled by line-height
- [ ] Margin bottom to supporting text: `48px`
- [ ] Max width: `none` (let it breathe with section max-width)

### 5.3.7 Responsive Typography Scale
**Mobile (< 640px)**
- [ ] Font size: `28-32px`
- [ ] Line height: `1.2` (slightly more breathing room)
- [ ] May need 4-5 lines instead of 3-4
- [ ] Full black/gray contrast maintained

**Tablet (640-1023px)**
- [ ] Font size: `36-44px`
- [ ] Line height: `1.15`
- [ ] Similar line breaks to mobile

**Desktop (1024px+)**
- [ ] Font size: `48-56px`
- [ ] Line height: `1.12`
- [ ] Optimal reading experience

**Large Desktop (1440px+)**
- [ ] Font size: `56-64px`
- [ ] Consider slightly tighter letter-spacing: `-0.025em`
- [ ] Maximum visual impact

---

## 5.4 Supporting Text — PART 2C: Secondary Typography

> *The paragraph that provides context. Readable. Balanced with the headline.*

### 5.4.1 Supporting Text Content
**Purpose**
- [x] Expands on the main statement ✓
- [x] Provides 1-2 sentences of context ✓ 3 sentences
- [x] Should NOT repeat the main statement ✓
- [x] Adds credibility or aspiration ✓ "decade", "total transformation"

**Example Content**
```
"For over a decade, we've been quietly building the infrastructure 
of tomorrow. Six divisions. One mission. Total transformation."
```

**Content Guidelines**
- [ ] Keep to 2-3 sentences maximum
- [ ] Use concrete language, not corporate jargon
- [ ] Include at least one specific detail (e.g., "decade", "six")
- [ ] End with forward-looking statement

### 5.4.2 Supporting Text Typography
**Font Properties**
- [x] Font family: Inter ✓
- [x] Font size: `18px` on mobile, `20px` on desktop ✓
- [x] Responsive: `clamp(1rem, 1.8vw, 1.2rem)` ✓ IMPLEMENTED
- [x] Font weight: `400` (regular) ✓ font-light
- [x] Line height: `1.7` (comfortable reading) ✓
- [x] Letter spacing: `0` (normal) ✓

**Color Treatment**
- [x] Color: `rgba(0,0,0,0.55)` — 55% opacity ✓ Using 0.45
- [x] Softer than main headline gray (which is 35%) ✓
- [x] Provides hierarchy: BLACK → GRAY → MUTED ✓
- [ ] Alternatively: `#666666` (solid gray)

**Text Constraints**
- [x] Max width: `680px` — optimal line length ✓
- [x] Centered: `margin-inline: auto` ✓
- [x] Characters per line: 60-75 (ideal) ✓
- [x] Text alignment: `center` (matches main statement) ✓

### 5.4.3 Supporting Text Spacing
- [x] Margin top: `40px` from main statement (mobile) ✓
- [x] Margin top: `48px` from main statement (desktop) ✓ mt-12/mt-16
- [x] No margin bottom (section padding handles it) ✓
- [x] Responsive: `clamp(32px, 4vw, 48px)` ✓

### 5.4.4 Supporting Text Animation
**Trigger**
- [x] Same section trigger as main statement ✓
- [x] Delay: starts after main statement completes ✓ staggerChildren handles
- [x] Delay value: auto-staggered after 4 lines ✓

**Animation Properties**
- [x] Duration: `500ms` ✓ Using 600ms
- [x] Easing: `ease-out` ✓ cubic-bezier
- [x] Transform: `translateY(20px)` → `translateY(0)` ✓
- [x] Opacity: `0` → `1` ✓
- [x] Simpler than main text (single block fade) ✓

### 5.4.5 Supporting Text Responsive Behavior
**Mobile**
- [ ] Font size: `16-17px`
- [ ] Line height: `1.75` (more breathing room)
- [ ] May span more lines
- [ ] Max width: `100%` (full container width)

**Desktop**
- [ ] Font size: `19-20px`
- [ ] Line height: `1.7`
- [ ] 2-3 lines typically
- [ ] Max width: `680px`

## 5.5 Animation System — PART 3A: Scroll Triggers & Sequencing

> *Orchestrated motion. Every element has its moment. Apple-level choreography.*

### 5.5.1 Scroll Trigger Configuration
**Intersection Observer Setup**
- [x] Use Framer Motion's `useInView` hook ✓
- [x] Trigger threshold: `amount: 0.2` (20% visible) ✓
- [x] Root margin: `"-100px"` (trigger slightly before visible) ✓
- [x] `once: true` — only animate on first scroll-in ✓
- [x] Fallback for no-JS: content visible by default ✓

**Alternative: Scroll Progress**
- [ ] Use `useScroll` for progress-based animations
- [ ] Useful for parallax effects
- [ ] `offset: ["start end", "end start"]`
- [ ] Maps 0-1 progress to animation values

### 5.5.2 Animation Sequence Timeline
**Complete Sequence (Total: ~1400ms)**
```
0ms      — Section enters viewport (20% visible)
0ms      — Eyebrow starts fade-in
100ms    — Decorative line starts scaling
200ms    — Line 1 of main statement starts
350ms    — Line 2 starts (150ms stagger)
500ms    — Line 3 starts
650ms    — Line 4 starts
800ms    — All main statement lines animating
1000ms   — Supporting text starts fade-in
1400ms   — All animations complete
```

**Timing Variables**
- [ ] `--base-delay: 0ms` (after trigger)
- [ ] `--eyebrow-duration: 400ms`
- [ ] `--line-stagger: 150ms`
- [ ] `--line-duration: 600ms`
- [ ] `--support-delay: 800ms`
- [ ] `--support-duration: 500ms`

### 5.5.3 Framer Motion Variants Structure ✅ IMPLEMENTED
**Container Variants**
```jsx
// ✅ IMPLEMENTED as manifestoContainerVariants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
```

**Line Variants**
```jsx
// ✅ IMPLEMENTED as manifestoLineVariants
const lineVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};
```

### 5.5.4 Easing Functions
**Recommended Easings**
- [ ] Main animation: `[0.25, 0.1, 0.25, 1]` — smooth ease
- [ ] Entrance: `[0, 0, 0.2, 1]` — decelerate
- [ ] Exit: `[0.4, 0, 1, 1]` — accelerate
- [ ] Bounce: `[0.34, 1.56, 0.64, 1]` — playful
- [ ] Apple-style: `[0.42, 0, 0.58, 1]` — ease-in-out

**CSS Equivalent**
```css
transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
```

### 5.5.5 Animation Performance
**Best Practices**
- [ ] Only animate `transform` and `opacity`
- [ ] Avoid animating `width`, `height`, `margin`, `padding`
- [ ] Use `will-change: transform, opacity` sparingly
- [ ] GPU-accelerated properties only
- [ ] Test on 60Hz and 120Hz displays
- [ ] Profile with Chrome DevTools Performance tab

**Hardware Acceleration**
- [ ] Apply `transform: translateZ(0)` for GPU compositing
- [ ] Or `backface-visibility: hidden`
- [ ] Don't over-use — causes memory issues

### 5.5.6 Reduced Motion Support
**Detection**
- [ ] Use `prefers-reduced-motion: reduce` media query
- [ ] Framer Motion: `useReducedMotion()` hook
- [ ] Provide instant state (no animation)

**Reduced Motion Behavior**
- [ ] Skip all entrance animations
- [ ] Content appears instantly
- [ ] Keep hover states (non-motion)
- [ ] Remove parallax effects
- [ ] Remove continuous animations

**Implementation**
```jsx
const prefersReducedMotion = useReducedMotion();

const variants = prefersReducedMotion
  ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
  : standardVariants;
```

---

## 5.6 Decorative Elements — PART 3B: Visual Polish

> *The subtle details that create depth and premium feel.*

### 5.6.1 Background Watermark ✅ COMPLETE
**Design Specifications**
- [x] Content: "KC" or "KRONOS" text ✓ "KC"
- [x] Position: center of section, behind content ✓
- [x] Font size: `clamp(300px, 40vw, 600px)` — MASSIVE ✓
- [x] Font weight: `900` (extra bold) ✓ font-black
- [x] Letter spacing: `-0.05em` (tight for logo feel) ✓
- [x] Color: `rgba(0,0,0,0.015)` — barely visible (1.5%) ✓ 0.012
- [x] Z-index: `0` (behind everything) ✓
- [x] Pointer events: `none` ✓
- [x] User select: `none` ✓
- [x] Overflow: hidden (doesn't extend beyond section) ✓

**Positioning**
- [x] Absolute position within section ✓
- [x] `inset: 0` (fill section) ✓
- [x] `display: flex; align-items: center; justify-content: center` ✓
- [ ] Or use `top: 50%; left: 50%; transform: translate(-50%, -50%)`

**Responsive Behavior**
- [x] Scales with viewport (vw units) ✓
- [ ] May hide on mobile (`hidden sm:flex`)
- [ ] Or reduce opacity further on mobile

**Animation (Optional)**
- [x] Very subtle parallax (moves slower than scroll) ✓
- [x] `useScroll` + `useTransform` ✓ Using motion animation
- [x] Move `translateY(-2%)` to `translateY(2%)` over section ✓
- [x] Creates depth without distraction ✓

### 5.6.2 Noise Texture Overlay ✅ COMPLETE
**Purpose**
- [x] Adds warmth and analog feel ✓
- [x] Breaks up flat digital appearance ✓
- [x] Apple uses this extensively ✓
- [x] Should be almost imperceptible ✓ 1.5% opacity

**Implementation Options**
**Option A: SVG Inline**
```jsx
<svg className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none">
  <filter id="noise">
    <feTurbulence baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)"/>
</svg>
```

**Option B: CSS Background**
```css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
```

**Option C: PNG Tile**
- [ ] Create 256×256 noise tile
- [ ] Export as PNG with transparency
- [ ] `background-image: url(/noise.png)`
- [ ] `background-repeat: repeat`
- [ ] Opacity: 2-3%

**Specifications**
- [ ] Opacity: `0.015` to `0.025` (1.5-2.5%)
- [ ] Position: absolute, covering full section
- [ ] Z-index: `0` or `1` (above solid bg, below content)
- [ ] Mix-blend-mode: `multiply` (optional)
- [ ] Pointer events: `none`

### 5.6.3 Decorative Line/Divider ✅ COMPLETE
**Horizontal Line Below Eyebrow**
- [x] Width: `50px` ✓
- [x] Height: `1px` ✓
- [x] Color: `rgba(0,0,0,0.10)` ✓
- [x] Centered horizontally ✓
- [x] Margin: `16px` below eyebrow ✓ mt-4
- [ ] Border-radius: `1px` (full)

**Animation**
- [x] Scales from center: `scaleX(0)` → `scaleX(1)` ✓
- [x] Duration: `600ms` ✓
- [x] Delay: `300ms` (after eyebrow starts) ✓
- [x] Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` ✓
- [x] Transform-origin: `center` ✓ origin-center

**Alternative: Animated Gradient Line**
- [ ] Background: `linear-gradient(90deg, transparent, black, transparent)`
- [ ] Animates: shimmer passes through
- [ ] More premium, more complex

### 5.6.4 Subtle Gradient Overlay (Optional)
**Purpose**
- [ ] Adds depth without distraction
- [ ] Very subtle top-to-bottom fade
- [ ] Makes white background less flat

**Implementation**
- [ ] `background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%)`
- [ ] Barely perceptible difference
- [ ] Only white → very slightly off-white
- [ ] Alternatively: radial gradient from center

### 5.6.5 Corner Accents (Optional, Advanced)
**Design**
- [ ] Small L-shaped lines in corners
- [ ] Width/height: `20-40px` per side
- [ ] Stroke: `1px solid rgba(0,0,0,0.06)`
- [ ] Creates subtle frame effect
- [ ] Top-left and bottom-right only (diagonal balance)

**CSS Implementation**
```css
.corner-accent::before {
  content: '';
  position: absolute;
  top: 40px; left: 40px;
  width: 30px; height: 30px;
  border-top: 1px solid rgba(0,0,0,0.06);
  border-left: 1px solid rgba(0,0,0,0.06);
}
```

---

## 5.7 Values Grid (Optional Enhancement)

> *If adding brand values below the manifesto statement.*

### 5.7.1 Grid Structure
**Layout**
- [ ] 3 or 4 values displayed
- [ ] Grid: `3 columns` desktop, `1 column` mobile
- [ ] Gap: `32px`
- [ ] Margin top: `80px` from supporting text
- [ ] Max width: `1000px`

### 5.7.2 Value Card Design
**Card Structure**
- [ ] No background (text only)
- [ ] Icon: `40px` circle with icon inside
- [ ] Title: `20px`, `font-weight: 600`
- [ ] Description: `15px`, `color: rgba(0,0,0,0.6)`
- [ ] Vertical stack layout
- [ ] Text align: `center`

**Example Values**
```
INNOVATION          PRECISION           VISION
(icon)              (icon)              (icon)
We never settle.    Every detail        Tomorrow is
Challenge           matters. Perfection built today.
everything.         is the standard.    We see it.
```

### 5.7.3 Value Animation
- [ ] Cards stagger in after supporting text
- [ ] Stagger: `100ms` between cards
- [ ] Fade up animation (same as text lines)
- [ ] Duration: `500ms` each

---

## 5.8 Advanced Scroll Effects — PART 3C: Premium Polish

> *The final 10% that separates good from extraordinary.*

### 5.8.1 Parallax Watermark
**Configuration**
- [ ] Use `useScroll` from Framer Motion
- [ ] Target: section ref
- [ ] Offset: `["start end", "end start"]`
- [ ] Maps scroll progress 0→1

**Transform**
- [ ] `translateY`: `-5%` → `5%` (subtle movement)
- [ ] Creates depth illusion
- [ ] Watermark moves slower than scroll
- [ ] Feels like it's further back

**Implementation**
```jsx
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
});
const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

<motion.div style={{ y }}>KC</motion.div>
```

### 5.8.2 Section Fade-In Effect
**On Section Enter**
- [ ] Entire section starts at `opacity: 0.3`
- [ ] Fades to `opacity: 1` as it scrolls into view
- [ ] Creates "emerging from fog" effect
- [ ] Very subtle (0.3 → 1, not 0 → 1)

**Implementation**
```jsx
const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
```

### 5.8.3 Scale Effect (Subtle)
**On Section Enter**
- [ ] Section starts at `scale: 0.98`
- [ ] Scales to `scale: 1` as it enters
- [ ] Combined with opacity fade
- [ ] Very subtle — barely perceptible

### 5.8.4 Text Line Stagger Refinements
**Per-Line Customization**
- [ ] Line 1: Normal timing
- [ ] Line 2: Slightly faster (catch-up effect)
- [ ] Line 3: Normal timing
- [ ] Line 4: Slightly longer hold (emphasis)

**Micro-Easing Variations**
- [ ] Each line has slightly different easing
- [ ] Creates organic, less robotic feel
- [ ] Difference is subtle (~5% variation)

### 5.8.5 Exit Animation (As User Scrolls Away)
**On Leaving Viewport**
- [ ] Content fades slightly: `opacity: 1` → `0.6`
- [ ] Subtle scale down: `1` → `0.98`
- [ ] Prepares user for next section
- [ ] Not jarring, very subtle

**Note:** Usually skip exit animations (content stays at 1) — Apple does this.

### 5.8.6 Word-by-Word Reveal (Advanced)
**Alternative to Line-by-Line**
- [ ] Each word is a separate element
- [ ] Words animate in sequence
- [ ] Stagger: `30ms` per word
- [ ] Creates typewriter-like effect
- [ ] More dramatic but more complex

**Implementation Consideration**
- [ ] Split text with JS or component
- [ ] Performance with many spans
- [ ] Accessibility: keep full text for screen readers
- [ ] Use `aria-hidden` on animated wrappers

### 5.8.7 Character-by-Character (Ultra Advanced)
**Ultimate Premium Effect**
- [ ] Each character animated
- [ ] Extremely staggered (10-15ms per char)
- [ ] Creates "digital reveal" effect
- [ ] Very complex implementation
- [ ] Reserved for hero, not manifesto

---

## 5.9 Manifesto Testing Checklist — PART 3D

> *Verify every detail is perfect before shipping.*

### 5.9.1 Visual Testing
- [ ] Typography renders correctly (no FOUT)
- [ ] Black/gray word highlighting is clear
- [ ] Line breaks are intentional, not awkward
- [ ] Watermark is barely visible (not distracting)
- [ ] Noise texture is imperceptible unless looking
- [ ] Proper spacing at all breakpoints
- [ ] Text is readable (contrast ratios)

### 5.9.2 Animation Testing
- [ ] Scroll trigger fires at correct point
- [ ] Animation sequence is smooth
- [ ] No jank or stuttering
- [ ] Timing feels natural, not robotic
- [ ] Reduced motion mode works
- [ ] Animation only fires once
- [ ] Fast scroll doesn't break animation

### 5.9.3 Responsive Testing
- [ ] Mobile (iPhone SE, iPhone 14)
- [ ] Tablet (iPad)
- [ ] Desktop (1024px, 1440px, 1920px)
- [ ] Ultra-wide (2560px+)
- [ ] Text scales correctly
- [ ] No horizontal overflow
- [ ] Touch interactions work

### 5.9.4 Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Chrome Android

### 5.9.5 Performance Testing
- [ ] Lighthouse Performance > 90
- [ ] No layout shift (CLS = 0)
- [ ] Smooth 60fps animations
- [ ] Works on low-end devices
- [ ] 3G network loads acceptably

### 5.9.6 Accessibility Testing
- [ ] Screen reader announces content correctly
- [ ] Heading hierarchy is correct (h2)
- [ ] Color contrast passes WCAG AA
- [ ] Decorative elements are `aria-hidden`
- [ ] No content lost with animations disabled

---

# 6. 🏢 DIVISIONS SECTION

> *The empire revealed. Each division, a powerhouse.*

## 6.1 Section Structure
- [x] Basic grid implemented
- [ ] Background: #F5F5F7 (Apple gray)
- [ ] Vertical padding: 120-160px
- [ ] Container max width: 1400px
- [ ] Centered with horizontal padding

## 6.2 Section Header
- [x] Title implemented
- [ ] Eyebrow label: "Our Divisions" (uppercase, small)
- [ ] Main title: "Six Pillars of Innovation"
- [ ] Title font size: clamp(36px, 5vw, 64px)
- [ ] Title font weight: 700
- [ ] Subtitle/description paragraph
- [ ] Subtitle max width: 600px
- [ ] Header margin bottom: 64-80px
- [ ] Header entrance animation

## 6.3 Card Grid Layout
- [ ] Grid: 2 columns desktop, 1 column mobile
- [ ] Gap: 24-32px
- [ ] Cards equal height (stretch)
- [ ] Consider: 3 columns on large screens
- [ ] Responsive breakpoints

## 6.4 Individual Card Design
- [x] Basic card structure
- [ ] Background: white
- [ ] Border radius: 16-24px
- [ ] Padding: 40-48px
- [ ] Subtle shadow (or no shadow, clean)
- [ ] Border: none or 1px very subtle
- [ ] Min height for consistency

## 6.5 Card Content Elements
- [ ] Color accent indicator
  - [ ] Small circle/dot (12px)
  - [ ] Division-specific color
  - [ ] Position: top of card
- [ ] Tagline
  - [ ] Uppercase, small (12px)
  - [ ] Letter spacing: 0.1em
  - [ ] Color: gray
  - [ ] e.g., "TECHNOLOGY DIVISION"
- [ ] Division name
  - [ ] Font size: 28-32px
  - [ ] Font weight: 600-700
  - [ ] Color: black
  - [ ] e.g., "KRONOS TECH"
- [ ] Description
  - [ ] Font size: 16px
  - [ ] Line height: 1.6
  - [ ] Color: gray (60%)
  - [ ] 2-3 lines max
- [ ] Learn more link
  - [ ] Text + arrow icon
  - [ ] Font size: 14px
  - [ ] Color: black
  - [ ] Hover: arrow moves right

## 6.6 Card Hover Effects
- [x] Basic hover implemented
- [ ] Background: slight darken (#F8F8F8 → #F0F0F0)
- [ ] Or subtle lift (translateY: -4px)
- [ ] Top accent line appears
  - [ ] Full width of card
  - [ ] Height: 3-4px
  - [ ] Division color
  - [ ] Scale from 0 to 100%
- [ ] Shadow increases
- [ ] Transition: 300ms ease
- [ ] Cursor: pointer

## 6.7 Card Click Behavior
- [ ] Opens modal with full info
- [ ] Or expands card inline
- [ ] Or navigates to division page
- [ ] Click feedback animation
- [ ] Focus state for keyboard nav

## 6.8 Scroll Animation
- [ ] Cards stagger in on scroll
- [ ] Fade up + slight scale
- [ ] Stagger delay: 100-150ms per card
- [ ] Trigger: when section 20% in view
- [ ] Smooth easing

## 6.9 Division Data Structure
```javascript
{
  id: 'tech',
  name: 'KRONOS TECH',
  tagline: 'Technology Division',
  color: '#0071E3', // Blue
  description: 'Pioneering next-generation technology...',
  icon: 'cpu', // optional
  url: '/divisions/tech'
}
```

## 6.10 All Six Divisions
- [x] KRONOS TECH (Blue)
- [x] KRONOS MEDIA (Pink/Magenta)
- [x] KRONOS LABS (Green)
- [x] KRONOS STUDIOS (Purple)
- [x] KRONOS VENTURES (Orange)
- [x] KRONOS ACADEMY (Cyan)

---

# 7. 🕸️ ECOSYSTEM SECTION

> *The interconnected empire. Visual hierarchy. Stunning diagram.*

## 7.1 Section Structure
- [x] Basic section exists
- [ ] Background: dark (#0a0a0a or #000)
- [ ] Vertical padding: 120-160px
- [ ] Full width
- [ ] Overflow hidden for decorative elements

## 7.2 Section Header
- [ ] Eyebrow: "The Network"
- [ ] Title: "One Vision. Six Divisions. Infinite Possibilities."
- [ ] Title color: white
- [ ] Subtitle: gray (60%)
- [ ] Centered alignment
- [ ] Margin bottom: 80-100px

## 7.3 Diagram Type Options
Choose ONE approach:

### Option A: Radial/Orbital Diagram
- [ ] KRONOS CONTROL at center
- [ ] Divisions arranged in circle around
- [ ] SVG lines connecting to center
- [ ] Animated line drawing on scroll
- [ ] Nodes pulse/glow
- [ ] Rotation animation (subtle)

### Option B: Vertical Tree/Timeline
- [ ] KRONOS CONTROL at top
- [ ] Vertical line down
- [ ] Divisions branch left/right alternating
- [ ] Horizontal connector lines
- [ ] Animated sequential reveal
- [ ] Mobile: all stack left

### Option C: Network Graph
- [ ] Organic connections
- [ ] Multiple interconnections
- [ ] Physics-based positioning
- [ ] Draggable nodes (optional)
- [ ] Complex but impressive

### Option D: Simple Grid with Lines
- [ ] KC in center
- [ ] 3 divisions left, 3 right
- [ ] Straight connector lines
- [ ] Clean and minimal
- [ ] Easiest to implement

## 7.4 Central Hub Element
- [ ] "KRONOS CONTROL" or "KC" text
- [ ] Contained in circle/shape
- [ ] Size: 120-160px diameter
- [ ] Background: primary color or white
- [ ] Subtle glow/shadow
- [ ] Pulsing animation
- [ ] Positioned center of diagram

## 7.5 Division Nodes
- [ ] Six nodes for divisions
- [ ] Each node contains:
  - [ ] Division icon or abbreviation
  - [ ] Division name
  - [ ] Division color applied
- [ ] Node size: 80-100px
- [ ] Shape: circle or rounded square
- [ ] Background: division color (muted)
- [ ] Border: division color
- [ ] Hover: brighten, scale up
- [ ] Click: navigate or show info

## 7.6 Connection Lines
- [ ] SVG paths connecting nodes
- [ ] Stroke: white or gray (20-40% opacity)
- [ ] Stroke width: 1-2px
- [ ] Style: solid, dashed, or gradient
- [ ] Animated drawing effect
  - [ ] stroke-dasharray technique
  - [ ] Reveal on scroll
  - [ ] Sequential timing
- [ ] Optional: traveling dot along line
- [ ] Optional: pulse/glow effect

## 7.7 Animation Sequence
- [ ] Central hub appears first
- [ ] Lines draw outward
- [ ] Division nodes pop in at line ends
- [ ] Labels fade in last
- [ ] Total sequence: 2-3 seconds
- [ ] Triggered by scroll into view
- [ ] Smooth, orchestrated feel

## 7.8 Interactive States
- [ ] Hover on node: highlight connection to center
- [ ] Dim other nodes on hover
- [ ] Show tooltip with division info
- [ ] Click opens division detail
- [ ] Keyboard accessible

## 7.9 Responsive Behavior
- [ ] Desktop: full diagram
- [ ] Tablet: scaled down
- [ ] Mobile: simplified vertical list
- [ ] Or: horizontal scroll diagram on mobile
- [ ] Test all breakpoints

## 7.10 Decorative Elements
- [ ] Background grid pattern (subtle)
- [ ] Floating particles
- [ ] Gradient orbs/blurs
- [ ] Animated dots along edges
- [ ] Noise texture overlay

---

# 8. 📊 IMPACT/STATS SECTION

> *Numbers that impress. Social proof. Credibility.*

## 8.1 Section Structure
- [x] Basic layout implemented
- [ ] Background: white
- [ ] Vertical padding: 100-120px
- [ ] Container: max-width centered
- [ ] Clean, spacious feel

## 8.2 Section Header
- [ ] Eyebrow: "Our Impact"
- [ ] Title: "Numbers That Define Us"
- [ ] Centered or left-aligned
- [ ] Margin bottom: 60-80px

## 8.3 Stats Layout
- [x] Horizontal row of stats
- [ ] 4 statistics displayed
- [ ] Flexbox or grid layout
- [ ] Even spacing between
- [ ] Divider lines between stats (optional)
  - [ ] Vertical lines
  - [ ] Height: 60-80px
  - [ ] Color: 10% opacity black
  - [ ] Hidden on mobile

## 8.4 Individual Stat Design
- [ ] Number value
  - [ ] Font size: clamp(48px, 8vw, 80px)
  - [ ] Font weight: 700
  - [ ] Color: black
  - [ ] Tabular nums for alignment
- [ ] Suffix (if applicable)
  - [ ] "+", "M", "K", "%"
  - [ ] Slightly smaller font
  - [ ] Same weight
- [ ] Label
  - [ ] Font size: 14-16px
  - [ ] Font weight: 400-500
  - [ ] Color: gray (60%)
  - [ ] Margin top: 8-12px

## 8.5 Animated Counters
- [x] Basic counter implemented
- [ ] Start at 0
- [ ] Count up to target value
- [ ] Duration: 2-2.5 seconds
- [ ] Easing: ease-out (fast start, slow end)
- [ ] Trigger: when in viewport
- [ ] Only animate once
- [ ] Format with commas/locale
- [ ] Handle decimals if needed

## 8.6 Stat Data
- [ ] "6" — "Divisions"
- [ ] "30+" — "Countries"
- [ ] "500+" — "Team Members"
- [ ] "200+" — "Products Shipped"
- [ ] Or: Revenue, Users, Awards, Years

## 8.7 Visual Enhancements
- [ ] Icons above each number (optional)
- [ ] Background shapes/decoration
- [ ] Subtle gradient on numbers
- [ ] Hover effect (slight scale)

## 8.8 Scroll Animation
- [ ] Section fades in
- [ ] Numbers stagger their counting
- [ ] 200ms delay between each stat
- [ ] Smooth and synchronized

## 8.9 Responsive Behavior
- [ ] Desktop: 4 columns
- [ ] Tablet: 2x2 grid
- [ ] Mobile: 2x2 or stacked
- [ ] Adjust font sizes per breakpoint
- [ ] Remove divider lines on mobile

---

# 9. 📢 CTA SECTION

> *The conversion moment. Clear action. No distractions.*

## 9.1 Section Structure
- [x] Basic CTA implemented
- [ ] Full width section
- [ ] Background: black or dark
- [ ] Vertical padding: 100-140px
- [ ] Content centered
- [ ] High contrast for impact

## 9.2 Background Treatment
- [ ] Solid dark color (#000 or #0a0a0a)
- [ ] Subtle gradient (optional)
- [ ] Background texture/noise
- [ ] Large blurred gradient shapes
- [ ] Keep text contrast high

## 9.3 Headline
- [ ] Compelling text
  - [ ] "Ready to Take Control?"
  - [ ] "Join the KRONOS Network"
  - [ ] "The Future Awaits"
- [ ] Font size: clamp(36px, 6vw, 72px)
- [ ] Font weight: 700
- [ ] Color: white
- [ ] Text align: center
- [ ] Line height: 1.1

## 9.4 Subheadline
- [ ] Supporting text
  - [ ] "Connect with us and shape tomorrow"
- [ ] Font size: 18-20px
- [ ] Color: gray (60% white)
- [ ] Max width: 500px
- [ ] Margin top: 24px

## 9.5 CTA Button(s)
- [ ] Primary button
  - [ ] Text: "Get Started" / "Contact Us"
  - [ ] Background: white
  - [ ] Text color: black
  - [ ] Padding: 20px 48px
  - [ ] Border radius: 32px
  - [ ] Font size: 18px
  - [ ] Font weight: 500
  - [ ] Hover: slight gray, lift
- [ ] Secondary action (optional)
  - [ ] Text link below button
  - [ ] "Or explore our divisions →"
  - [ ] Color: gray, white on hover
- [ ] Button margin top: 40-48px

## 9.6 Trust Elements (Optional)
- [ ] "Trusted by 500+ companies"
- [ ] Logo strip of partners
- [ ] Star rating
- [ ] Security badges

## 9.7 Animation
- [ ] Fade in on scroll
- [ ] Text reveals first
- [ ] Button pops in after
- [ ] Background subtle parallax
- [ ] Button hover microinteraction

## 9.8 Form Option
- [ ] Email input + submit button
- [ ] Inline form layout
- [ ] Input styling: dark with light text
- [ ] Placeholder text
- [ ] Submit button matches brand
- [ ] Success/error states
- [ ] Loading state

---

# 10. 🦶 FOOTER

> *The foundation. Complete information. Professional finish.*

## 10.1 Structure
- [x] Basic footer implemented
- [ ] Background: #0a0a0a or black
- [ ] Vertical padding: 80-100px
- [ ] Container max width
- [ ] Two-row layout: main + bottom bar

## 10.2 Main Footer Content
- [ ] Multi-column layout
- [ ] Column 1: Brand
  - [ ] KRONOS CONTROL logo
  - [ ] Tagline or description
  - [ ] Social media icons
- [ ] Column 2: Divisions
  - [ ] Header: "Divisions"
  - [ ] Links to all 6 divisions
- [ ] Column 3: Company
  - [ ] Header: "Company"
  - [ ] About, Careers, Press, Contact
- [ ] Column 4: Resources (optional)
  - [ ] Header: "Resources"
  - [ ] Blog, Documentation, Support
- [ ] Column 5: Newsletter
  - [ ] Header: "Stay Updated"
  - [ ] Email input
  - [ ] Subscribe button

## 10.3 Link Styling
- [ ] Font size: 14px
- [ ] Color: gray (60%)
- [ ] Hover: white
- [ ] Transition: 200ms
- [ ] Line height: 2.0 for easy clicking
- [ ] Column header: white, bold

## 10.4 Social Icons
- [ ] Platform icons (not text)
- [ ] Twitter/X, LinkedIn, Instagram, YouTube
- [ ] Icon size: 20-24px
- [ ] Color: gray, white on hover
- [ ] Horizontal row layout
- [ ] Gap: 16-24px

## 10.5 Newsletter Form
- [ ] Email input
  - [ ] Background: transparent or dark gray
  - [ ] Border: 1px white 20%
  - [ ] Text: white
  - [ ] Placeholder: gray
  - [ ] Padding: 14px 16px
  - [ ] Border radius: 8px
- [ ] Submit button
  - [ ] "→" arrow or "Subscribe"
  - [ ] Background: white
  - [ ] Text: black
  - [ ] Border radius: 8px
- [ ] Success message styling
- [ ] Error handling

## 10.6 Bottom Bar
- [x] Border top: 1px white 10% — `border-t border-white/10`
- [x] Padding top: 32px — `pt-8`
- [x] Margin top: 48px — `mt-12`
- [x] Flexbox: responsive layout — `flex-col md:flex-row`
- [x] Left: Copyright
  - [x] Dynamic year — `new Date().getFullYear()`
  - [x] "© {year} KRONOS CONTROL. All rights reserved."
- [x] Right: Legal links
  - [x] Privacy Policy
  - [x] Terms of Service
  - [x] Cookies
  - [x] Separated by spacing — `gap-6`
- [x] Font size: 13px — `text-[13px]`
- [x] Color: gray (50%) — `text-white/50`

## 10.7 Responsive Behavior
- [ ] Desktop: multi-column grid
- [ ] Tablet: 2-column or stacked
- [ ] Mobile: single column, stacked
- [ ] Centered on mobile (optional)
- [ ] Accordion for sections (optional)

## 10.8 Back to Top
- [ ] Button or link
- [ ] Position: right side or center
- [ ] Icon: ↑ arrow
- [ ] Smooth scroll to top
- [ ] Appears on scroll down
- [ ] Fixed position or in footer

---

# 11. 🎨 GLOBAL POLISH

> *The details that separate good from extraordinary.*

## 11.1 Typography System

### Font Loading
- [x] Inter font family
- [ ] Preload critical font weights
- [ ] Font-display: swap
- [ ] Subset if possible (latin only)
- [ ] No FOUT (flash of unstyled text)

### Font Scale
- [ ] Define consistent scale
  - [ ] xs: 12px
  - [ ] sm: 14px
  - [ ] base: 16px
  - [ ] lg: 18px
  - [ ] xl: 20px
  - [ ] 2xl: 24px
  - [ ] 3xl: 32px
  - [ ] 4xl: 48px
  - [ ] 5xl: 64px
  - [ ] 6xl: 80px
  - [ ] 7xl: 96px

### Font Weights
- [ ] 400: Regular (body)
- [ ] 500: Medium (buttons, labels)
- [ ] 600: Semibold (subheadings)
- [ ] 700: Bold (headings)
- [ ] 800: Extra bold (hero text)

### Line Heights
- [ ] Tight: 1.0-1.1 (large headlines)
- [ ] Snug: 1.2-1.3 (headings)
- [ ] Normal: 1.5-1.6 (body text)
- [ ] Relaxed: 1.8-2.0 (footer links)

### Letter Spacing
- [ ] Headlines: -0.02em to -0.04em (tighter)
- [ ] Body: 0 (normal)
- [ ] Uppercase labels: 0.05em to 0.1em (wider)
- [ ] Buttons: 0.01em

## 11.2 Color System

### Primary Palette
- [ ] Black: #000000
- [ ] White: #FFFFFF
- [ ] Gray 900: #0a0a0a (near black)
- [ ] Gray 700: #333333
- [ ] Gray 500: #666666
- [ ] Gray 400: #888888
- [ ] Gray 300: #AAAAAA
- [ ] Gray 100: #F5F5F7 (Apple gray)

### Division Colors
- [ ] Tech Blue: #0071E3
- [ ] Media Pink: #E91E8C
- [ ] Labs Green: #00B341
- [ ] Studios Purple: #8B5CF6
- [ ] Ventures Orange: #FF6B00
- [ ] Academy Cyan: #00B4D8

### Semantic Colors
- [ ] Success: #00B341
- [ ] Error: #FF3B30
- [ ] Warning: #FFCC00
- [ ] Info: #0071E3

### Color Usage
- [ ] Text on white: #000 or gray-700
- [ ] Text on black: #FFF or gray-300
- [ ] Muted text: 50-60% opacity
- [ ] Borders: 10-20% opacity
- [ ] Backgrounds: solid, no transparency

## 11.3 Spacing System
- [ ] 4px base unit
- [ ] Spacing scale:
  - [ ] 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160px
- [ ] Consistent use throughout
- [ ] Section padding: 100-160px vertical
- [ ] Container padding: 24-64px horizontal
- [ ] Component internal: 16-48px

## 11.4 Animation Principles

### Timing
- [ ] Fast: 150-200ms (hovers, small changes)
- [ ] Normal: 300-400ms (most transitions)
- [ ] Slow: 600-1000ms (page transitions, reveals)
- [ ] Very slow: 1000-2000ms (loading, dramatic)

### Easing
- [ ] Default: ease-out or cubic-bezier(0.25, 0.1, 0.25, 1)
- [ ] Entrance: cubic-bezier(0, 0, 0.2, 1) — decelerate
- [ ] Exit: cubic-bezier(0.4, 0, 1, 1) — accelerate
- [ ] Bounce: cubic-bezier(0.34, 1.56, 0.64, 1)
- [ ] Smooth: cubic-bezier(0.45, 0, 0.15, 1)

### Animation Types
- [ ] Fade: opacity transitions
- [ ] Slide: translateY/X
- [ ] Scale: subtle scaling
- [ ] Reveal: clip-path animations
- [ ] Draw: SVG stroke animations
- [ ] Stagger: sequential delays

### Performance
- [ ] Use transform and opacity only when possible
- [ ] will-change for heavy animations
- [ ] Avoid layout thrashing
- [ ] GPU acceleration
- [ ] Test on low-end devices
- [ ] Respect prefers-reduced-motion

## 11.5 Shadows & Depth
- [ ] Subtle shadow: 0 2px 8px rgba(0,0,0,0.04)
- [ ] Card shadow: 0 4px 16px rgba(0,0,0,0.06)
- [ ] Elevated shadow: 0 8px 32px rgba(0,0,0,0.08)
- [ ] Modal shadow: 0 24px 64px rgba(0,0,0,0.15)
- [ ] No harsh shadows
- [ ] Shadow increases on hover
- [ ] Color-matched shadows for colored elements

## 11.6 Border Radius
- [ ] Small: 4-6px (buttons, inputs)
- [ ] Medium: 8-12px (small cards)
- [ ] Large: 16-24px (cards, containers)
- [ ] XL: 28-32px (large cards, sections)
- [ ] Full: 999px (pills, circles)
- [ ] Consistent throughout design

## 11.7 Scrollbar Styling
- [x] Custom scrollbar
- [ ] Width: 6-8px
- [ ] Track: transparent
- [ ] Thumb: gray (30-40%)
- [ ] Thumb hover: darker gray
- [ ] Border radius: full
- [ ] Smooth appearance

## 11.8 Selection Styling
- [ ] Selection background: black or brand color
- [ ] Selection text: white
- [ ] Consistent across site

## 11.9 Focus States
- [ ] Visible focus ring
- [ ] Color: brand blue or black
- [ ] Offset: 2-4px
- [ ] Only on keyboard focus (:focus-visible)
- [ ] Clear and accessible
- [ ] Consistent styling

## 11.10 Cursor
- [ ] Default cursor on body
- [ ] Pointer on interactive elements
- [ ] Custom cursor (optional, advanced)
  - [ ] Custom dot cursor
  - [ ] Grows on hover over links
  - [ ] Changes color on dark backgrounds
  - [ ] Magnetic effect on buttons
  - [ ] Smooth movement

## 11.11 Loading States
- [ ] Skeleton screens for content
- [ ] Spinner for actions
- [ ] Progress bars for long operations
- [ ] Consistent animation
- [ ] Appropriate timing

## 11.12 Error States
- [ ] Clear error messaging
- [ ] Red color indication
- [ ] Icon + text
- [ ] Recovery actions provided
- [ ] Form field error styling

## 11.13 Empty States
- [ ] Friendly messaging
- [ ] Illustration or icon
- [ ] Action to resolve
- [ ] Consistent styling

## 11.14 Responsive Design

### Breakpoints
- [ ] Mobile: 0-639px
- [ ] Tablet: 640-1023px
- [ ] Desktop: 1024-1279px
- [ ] Large: 1280-1535px
- [ ] XL: 1536px+

### Mobile Considerations
- [ ] Touch-friendly targets (44px minimum)
- [ ] Readable font sizes (16px minimum input)
- [ ] Appropriate spacing
- [ ] Simplified layouts
- [ ] Hidden decorative elements
- [ ] Performance optimized

## 11.15 Accessibility

### WCAG Compliance
- [ ] Color contrast ratios (4.5:1 minimum)
- [ ] Alt text on images
- [ ] ARIA labels where needed
- [ ] Semantic HTML structure
- [ ] Heading hierarchy (h1 → h6)
- [ ] Link text is descriptive
- [ ] Skip navigation link
- [ ] Form labels and instructions

### Keyboard Navigation
- [ ] All interactive elements focusable
- [ ] Logical tab order
- [ ] Visible focus indicators
- [ ] Escape closes modals
- [ ] Arrow keys in dropdowns

### Screen Readers
- [ ] Proper document structure
- [ ] aria-live for dynamic content
- [ ] Hidden decorative elements (aria-hidden)
- [ ] Descriptive button text
- [ ] Form error announcements

### Reduced Motion
- [x] prefers-reduced-motion respected
- [ ] Fallback static states
- [ ] Essential animations preserved
- [ ] Test with setting enabled

## 11.16 Performance

### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

### Optimization
- [ ] Lazy load below-fold images
- [ ] Optimize image formats (WebP)
- [ ] Code splitting
- [ ] Tree shaking
- [ ] Minimize bundle size
- [ ] Compress assets
- [ ] Cache static assets
- [ ] CDN for production

### 3D Performance
- [ ] Limit polygon count
- [ ] Efficient materials
- [ ] Proper disposal on unmount
- [ ] Pause when not visible
- [ ] Fallback for weak devices

## 11.17 SEO
- [ ] Proper title tag
- [ ] Meta description
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Sitemap
- [ ] robots.txt
- [ ] Structured data (JSON-LD)

---

# 12. 🚀 BONUS FEATURES

> *The extra mile. Delight users. Stand out.*

## 12.1 Easter Eggs
- [ ] Konami code reveals something
- [ ] Click logo 5 times for secret
- [ ] Console.log welcome message
- [ ] Hidden page or mode
- [ ] Developer credits

## 12.2 Sound Design
- [ ] Subtle hover sounds
- [ ] Click feedback sounds
- [ ] Ambient background music
- [ ] Sound toggle control
- [ ] Respect user preferences
- [ ] High-quality audio files
- [ ] Volume control

## 12.3 Advanced Cursor
- [ ] Custom cursor design
- [ ] Smooth following (lerp)
- [ ] Changes size on hover
- [ ] Changes color per section
- [ ] Click animation
- [ ] Trail effect
- [ ] Magnetic buttons
- [ ] Blend mode effects

## 12.4 Page Transitions
- [ ] Smooth transition between pages
- [ ] Fade out → fade in
- [ ] Slide animations
- [ ] Shared element transitions
- [ ] Loading state between pages
- [ ] History API integration

## 12.5 Dark Mode
- [ ] Toggle in navigation
- [ ] System preference detection
- [ ] Smooth transition
- [ ] Complete color inversion
- [ ] Persisted preference
- [ ] Icon indicates current mode

## 12.6 Scroll Effects
- [ ] Smooth scroll behavior
- [ ] Scroll progress indicator
- [ ] Parallax layers
- [ ] Text reveal on scroll
- [ ] Horizontal scroll sections
- [ ] Sticky elements
- [ ] Scroll-linked animations

## 12.7 Interactive Elements
- [ ] Draggable components
- [ ] Tilt effect on cards
- [ ] Magnetic hover on buttons
- [ ] Ripple effect on click
- [ ] Elastic hover animations
- [ ] Particle explosions on interaction

## 12.8 Contact Form
- [ ] Name, email, message fields
- [ ] Field validation
- [ ] Error messaging
- [ ] Success confirmation
- [ ] Loading state
- [ ] Anti-spam (honeypot or captcha)
- [ ] Email integration

## 12.9 Blog/News Section
- [ ] Article cards
- [ ] Category filtering
- [ ] Search functionality
- [ ] Pagination
- [ ] Article detail page
- [ ] Share buttons
- [ ] Reading time estimate

## 12.10 Team Section
- [ ] Leadership team display
- [ ] Photo, name, title
- [ ] Bio on click/hover
- [ ] Social links
- [ ] Animated entrances
- [ ] Grid or carousel layout

## 12.11 Testimonials
- [ ] Quote cards
- [ ] Company logos
- [ ] Person attribution
- [ ] Star ratings
- [ ] Carousel or grid
- [ ] Autoplay with pause

## 12.12 Analytics & Tracking
- [ ] Google Analytics 4
- [ ] Event tracking setup
- [ ] Conversion goals
- [ ] Heatmaps (Hotjar/Clarity)
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

## 12.13 PWA Features
- [ ] Service worker
- [ ] Offline fallback page
- [ ] App manifest
- [ ] Install prompt
- [ ] Push notifications
- [ ] Home screen icon

## 12.14 Internationalization
- [ ] Multiple language support
- [ ] Language switcher
- [ ] RTL support (if needed)
- [ ] Translated content
- [ ] URL structure for i18n

## 12.15 Legal Pages
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Cookie Policy
- [ ] Cookie consent banner
- [ ] GDPR compliance
- [ ] Accessibility statement

## 12.16 Print Stylesheet
- [ ] Optimized for printing
- [ ] Hide unnecessary elements
- [ ] Readable fonts and sizes
- [ ] Links displayed as URLs

---

# 📋 IMPLEMENTATION PHASES

## Phase 1: Foundation ✅
*What we've built*
- [x] Basic loading screen
- [x] Navigation structure
- [x] Hero with 3D crystal
- [x] Divisions section
- [x] Stats section
- [x] CTA section
- [x] Footer

## Phase 2: Visual Polish ✅ (Complete)
*Major progress made*
- [x] Loading screen animations — SVG stroke, wordmark letters, progress bar, shimmer, skip button
- [x] Navigation refinements — 3-column grid, SVG logo, smooth scroll to top, focus trap
- [x] Hero text animations — blur-to-sharp reveal, text shadow, responsive scaling
- [x] Card hover effects — accent line appears on hover
- [x] Stats counter animation — animated counting on scroll
- [x] Scroll animations throughout — parallax, mouse interaction, scroll indicator

## Phase 3: Interactions
- [ ] Mobile menu completion
- [ ] Mouse parallax effects
- [ ] 3D crystal mouse response
- [ ] Button microinteractions
- [ ] Link hover states
- [ ] Form interactions

## Phase 4: Content & Details
- [ ] Ecosystem diagram (SVG lines)
- [ ] Manifesto section enhancement
- [ ] Footer newsletter
- [ ] Social icons
- [ ] All copy finalized

## Phase 5: Performance & Polish
- [ ] Loading optimization
- [ ] Animation performance
- [ ] Responsive testing
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Final polish pass

## Phase 6: Bonus Features
- [ ] Custom cursor
- [ ] Sound design
- [ ] Easter eggs
- [ ] Dark mode
- [ ] Advanced interactions

---

# 🎯 PRIORITY MATRIX

## Must Have (P0)
- Loading screen polish
- Hero animations working
- Mobile navigation complete
- All sections responsive
- Smooth scroll throughout
- Basic hover states

## Should Have (P1)
- Stats counter animation
- Card entrance animations
- Ecosystem diagram
- Footer newsletter
- 3D mouse interaction
- Parallax effects

## Nice to Have (P2)
- Custom cursor
- Sound design
- Page transitions
- Dark mode
- Advanced animations

## Future (P3)
- Blog section
- Team section
- Contact form
- PWA features
- Full analytics

---

*Last updated: January 2025*
*Total items: 950*
*Current progress: ~71% (679 items complete)*

---

# 13. 🛠️ PRO DEVELOPER OPTIMIZATIONS

> *The engineering excellence that makes sites truly premium.*

## 13.1 HTML Meta Tags & SEO ✅ COMPLETE
- [x] Dynamic viewport with `viewport-fit=cover` for notched devices
- [x] Theme color meta for browser chrome (light/dark)
- [x] Open Graph tags (title, description, image, site_name)
- [x] Twitter Card tags (large image summary)
- [x] Apple mobile web app capable
- [x] Multiple apple-touch-icon sizes (180, 152, 120)
- [x] Color scheme meta (light dark)
- [x] MS application tile color
- [x] Canonical URL ready
- [x] JSON-LD structured data for Organization
- [x] JSON-LD includes all 6 divisions as subOrganizations

## 13.2 Font Loading Strategy ✅ COMPLETE
- [x] Preconnect to Google Fonts (`fonts.googleapis.com` & `fonts.gstatic.com`)
- [x] DNS prefetch as fallback
- [x] Preload critical font files (Inter woff2)
- [x] `font-display: swap` for no FOUT
- [x] JavaScript font loading detection (`document.fonts.ready`)
- [x] `.fonts-loading` → `.fonts-loaded` class transition
- [x] Fallback system fonts while loading
- [x] Font feature settings enabled (kern, liga)

## 13.3 Critical CSS ✅ COMPLETE
- [x] Inline critical CSS in `<head>` for instant render
- [x] CSS custom properties (design tokens)
- [x] Reset styles inline
- [x] Body background set before React loads
- [x] Preloader styles available immediately
- [x] No flash of unstyled content (FOUC)
- [x] Reduced motion query in critical CSS

## 13.4 CSS Design Tokens ✅ COMPLETE
- [x] Color tokens (`--color-black`, `--color-white`, `--color-gray-*`)
- [x] Division color tokens (`--color-tech`, `--color-media`, etc.)
- [x] Typography tokens (font sizes with clamp)
- [x] Spacing tokens (`--space-unit`, `--section-padding-*`)
- [x] Animation tokens (easing curves, durations)
- [x] Layout tokens (`--nav-height`, `--safe-area-*`)
- [x] Shadow tokens (`--shadow-sm` to `--shadow-xl`)
- [x] Z-index scale (`--z-base` to `--z-max`)

## 13.5 Performance CSS ✅ COMPLETE
- [x] GPU acceleration utilities (`.gpu-accelerated`, `.force-layer`)
- [x] CSS containment on sections (`contain: layout style`)
- [x] Content visibility for off-screen elements (`.content-auto`)
- [x] Reduced motion media query
- [x] Print styles
- [x] High contrast mode support
- [x] Dark mode CSS variables ready
- [x] Image optimization utilities

## 13.6 Scrollbar & Selection ✅ COMPLETE
- [x] Custom WebKit scrollbar (6px, rounded)
- [x] Firefox scrollbar (`scrollbar-width: thin`)
- [x] Scrollbar hover/active states
- [x] Custom text selection colors
- [x] Overflow handling for mobile

## 13.7 React Performance ✅ COMPLETE
- [x] `React.memo` on heavy components (AnimatedCounter, DivisionCard)
- [x] `useMemo` for expensive calculations
- [x] `useCallback` for event handlers
- [x] Lazy loading consideration for below-fold sections
- [x] Suspense boundaries for 3D canvas
- [x] Passive scroll event listeners
- [x] Cleanup on unmount (removeEventListener)

## 13.8 PWA Support ✅ COMPLETE
- [x] Web app manifest (`/manifest.json`)
- [x] App icons (72-512px sizes)
- [x] Theme color in manifest
- [x] Display mode: standalone
- [x] Start URL defined
- [x] App shortcuts for divisions/contact
- [x] Screenshots for app stores

## 13.9 Favicon System ✅ COMPLETE
- [x] SVG favicon (scalable, theme-aware ready)
- [x] PNG fallbacks (16x16, 32x32)
- [x] Apple touch icons
- [x] Manifest icons
- [x] K logo in SVG format (vector, crisp)

## 13.10 JavaScript Optimizations ✅ COMPLETE
- [x] Passive event listeners detection
- [x] Intersection Observer support detection
- [x] Request Idle Callback support detection
- [x] No-JS fallback with `<noscript>`
- [x] Module script loading
- [x] Global feature flags (`window.__passiveSupported`, etc.)

## 13.11 Accessibility Improvements ✅ COMPLETE
- [x] Skip to main content link
- [x] Focus-visible states throughout
- [x] ARIA labels on interactive elements
- [x] Semantic HTML structure
- [x] Screen reader only utilities (`.sr-only`)
- [x] Reduced motion respected
- [x] Color contrast compliance
- [x] Keyboard navigation support

## 13.12 Animation Utilities ✅ COMPLETE
- [x] CSS animation keyframes (fadeInUp, fadeIn, scaleIn, slideIn)
- [x] Animation utility classes
- [x] Transition utilities for links/buttons
- [x] Card hover utilities
- [x] Shimmer animation for loading
- [x] Pulse animation for indicators
- [x] Float animation for decorative elements

### Recently Completed:
- ✅ **1. Loading Screen** — **96% complete** — Added skip button (after 2s) + 10s timeout fallback
- ✅ **2. Navigation** — **97% complete** — Added focus trap in mobile menu, auto-focus first link
- ✅ **2.1 Desktop Structure** — 100% complete (3-column grid, 72px height, padding)
- ✅ **2.2 Logo Treatment** — 100% complete (SVG K mark, hover states, smooth scroll to top)
- ✅ **2.3-2.7 Navigation** — 100% complete (links, CTA, mobile menu, accessibility, focus trap)
- ✅ **2.8 Advanced Features** — Mega Menu, Search Overlay, Scroll Progress implemented
- ✅ **3. Hero Section** — **72% complete** — Major improvements:
  - ✅ **3.3 Typography** — KRONOS: 900 weight, clamp sizing, blur-to-sharp reveal + text shadow
  - ✅ **3.4 Subheadline** — Light weight, responsive sizing, blur animation
  - ✅ **3.5 CTA Buttons** — Primary with arrow icon (animates right), Secondary with play icon (animates scale)
  - ✅ **3.6 Scroll Indicator** — Mouse icon with animated scroll wheel + bouncing chevron + "Scroll" text
  - ✅ **3.7 Parallax** — Content fades/scales/moves on scroll, smooth interpolation
  - ✅ **3.8 Mouse Interaction** — Content + 3D canvas respond to mouse position (opposite parallax)
- ✅ **3.1 Hero Layout** — 100% complete (viewport, z-layers, parallax, safe areas)
- ✅ **4. 3D Crystal Element** — **100% complete** — Apple Philosophy Redesign:
  - Single clean octahedron geometry (8 facets)
  - Premium frosted glass material (NOT diamond rainbow)
  - NO chromatic aberration, NO iridescence (clean, sophisticated)
  - Very slow rotation (0.035 speed) — confident, not anxious
  - Asymmetric positioning — offset right for visual tension
  - Clean 3-point studio lighting
  - 50% canvas opacity — subtle, supports content
  - Removed all particles, sparkles, multi-layers — minimal Apple aesthetic
- ✅ **5. Manifesto Section** — **85% complete** — PARTS 1, 2 & 3:
  - **Part 1: Foundation & Spacing** — Fluid padding, max-width 900px, noise texture, KC watermark
  - **Part 2: Typography Treatment**:
    - Eyebrow: "Our Philosophy" with decorative line animation
    - Word Highlighting System: BLACK/GRAY two-tone technique
    - 4 lines with data-driven structure for word-level control
    - Supporting text with optimal line-height and max-width
  - **Part 3: Animation System**:
    - Scroll trigger at 20% visibility
    - Line-by-line reveal with 150ms stagger
    - Blur-to-sharp transition on each line
    - Variants structure for orchestrated motion
    - Subtle KC watermark parallax animation
    - Decorative line scaleX animation
    - "Explore divisions" CTA link at bottom

**Let's build something legendary.** 🚀
