# Design Guidelines: Casa di Franco e Simona - Seaside Apartment Showcase

## Design Approach
**Reference-Based**: Inspired by premium vacation rental platforms (Airbnb, Booking.com) with Italian coastal elegance. Focus on photography-first experience with sophisticated, calming aesthetic that evokes Mediterranean seaside living.

## Color Palette (Sea-Inspired Modern)
- **Primary Blues**: Deep ocean blue (#0A3D62), Mediterranean azure (#2E86AB), soft turquoise (#48ACB8)
- **Accents**: Sandy beige (#F4EBD9), crisp white (#FFFFFF), subtle coral (#FF8B6A) for CTAs
- **Neutrals**: Charcoal gray (#2C3E50) for text, light gray (#F8F9FA) backgrounds
- **Gradients**: Ocean-inspired gradient overlays (deep blue to turquoise) for hero section text readability

## Typography
- **Headings**: Playfair Display (serif, elegant) - Hero: 3.5rem (desktop) / 2rem (mobile), Section titles: 2.5rem
- **Body**: Inter or Poppins (sans-serif, clean) - 1.125rem for descriptions, 1rem for details
- **Accents**: Light italic for welcoming messages, medium weight for service labels

## Layout System
**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm (p-8, mb-12, py-16, etc.)

## Core Sections

### 1. Hero Section (Full Viewport)
- **Image**: WhatsApp Image 2025-11-25 at 19.34.37.jpeg fills entire viewport (100vh, 100vw)
- **Overlay**: Subtle gradient (top-to-bottom, dark blue to transparent) for text legibility
- **Title**: "Benvenuto, ti presentiamo la casa di Franco e Simona" - centered, white text with subtle drop shadow
- **Scroll behavior**: Hero image shrinks to 50vh as user scrolls, becoming sticky header with property name

### 2. About & Gallery Section (Two-Column Desktop)
- **Left Column** (40% width): 
  - Property description: 4-5 lines, justified text, generous line-height (1.8)
  - Elegant paragraph spacing
- **Right Column** (60% width):
  - Horizontal scrolling photo carousel with 3 visible thumbnails
  - Smooth snap-scroll, rounded corners (rounded-lg)
  - Click any photo to open full-screen lightbox

### 3. Full Photo Gallery Grid
- **Layout**: Masonry-style grid, 3 columns desktop / 2 tablet / 1 mobile
- **Images**: Varying heights for visual interest, all clickable for lightbox
- **Lightbox**: Full-screen modal with navigation arrows, close button (X), image counter (1/12)
- **Thumbnails**: Soft shadow on hover, scale transform (1.02)

### 4. Services & Amenities Section
- **Grid**: 3 columns desktop / 2 tablet / 1 mobile, centered alignment
- **Icons**: Black and white line icons (2.5rem size) from Heroicons or Font Awesome
- **Services List**:
  - Smart TV (tv icon)
  - Aria Condizionata (snowflake)
  - Ventilatore (wind)
  - Wi-Fi (wifi)
  - Garage (car)
  - Biciclette (bicycle)
  - Accesso Spiaggia + Ombrelloni (umbrella-beach)
  - Microonde (microwave)
  - Macchina del Caffè (coffee)
- **Style**: Icon above label, vertical card layout with subtle border, hover: soft background fill

### 5. Contact Footer
- **Layout**: Centered content block with subtle wave SVG decoration at top
- **Elements**:
  - Email and phone prominently displayed with icons
  - "Torna Su" button: rounded, ocean blue background, white text, fixed position bottom-right on scroll
- **Background**: Light gray with subtle texture

## Component Specifications

**Buttons**:
- Primary CTA: Ocean blue background with white text, rounded-full, px-8 py-4
- Back-to-top: Circular FAB (56x56px), ocean blue, white arrow icon, blur backdrop when over images

**Cards/Containers**:
- Soft shadows (shadow-lg for elevation)
- Rounded corners (rounded-xl for main containers, rounded-lg for cards)
- Ample padding (p-8 for desktop, p-6 mobile)

**Images**:
- All photos: object-cover, rounded corners, optimized lazy loading
- Aspect ratios: Hero (16:9), Gallery (4:3 or natural), Thumbnails (square)

## Responsive Behavior
- **Desktop (1024px+)**: Full multi-column layouts, larger hero
- **Tablet (768-1023px)**: 2-column grids, medium hero
- **Mobile (<768px)**: Single column stack, smaller hero (70vh), touch-optimized gallery swipe

## Images Section
- **Hero Image**: Full-screen background (WhatsApp Image 2025-11-25 at 19.34.37.jpeg) - should showcase the sea view prominently
- **Gallery Images**: All photos from provided zip folder, display beach views, interior shots, amenities
- **Placement**: Create `/public/images/` folder, name systematically (hero.jpg, gallery-1.jpg, gallery-2.jpg, etc.)

## Animation Guidelines
- **Minimal, purposeful**: Smooth scroll behavior, subtle fade-ins on section entry
- **Hero shrink**: CSS transform on scroll (smooth transition over 200px scroll distance)
- **Gallery**: Gentle scale on hover (transform: scale(1.02), 0.3s ease)
- **Back-to-top**: Fade in after 300px scroll

**Avoid**: Excessive parallax, distracting carousel auto-play, flashy transitions