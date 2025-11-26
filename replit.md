# Casa di Franco e Simona - Beachfront Apartment Showcase

## Overview

This is a photography-first vacation rental showcase website for "Casa di Franco e Simona," a beachfront apartment in Italy. The application presents a premium, modern single-page experience inspired by platforms like Airbnb and Booking.com, featuring a full-viewport hero image, interactive photo galleries with lightbox functionality, and detailed property information with amenities. The design emphasizes Italian coastal elegance with sea-inspired colors, smooth animations, and responsive layouts optimized for both desktop and mobile viewing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (home page and 404 fallback)
- **React Query** (@tanstack/react-query) for server state management with custom query functions

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom color system (sea-inspired palette)
- **CVA** (class-variance-authority) for type-safe component variants
- **Framer Motion** for scroll animations, hero section transforms, and interactive effects
- Component structure follows the "New York" style from shadcn with custom theming

**Design System**
- Custom color palette with HSL-based CSS variables for light/dark mode support
- Sea-inspired theme: deep ocean blue (#0A3D62), Mediterranean azure (#2E86AB), soft turquoise (#48ACB8)
- Typography system using Google Fonts (Architects Daughter, DM Sans, Fira Code, Geist Mono, Playfair Display, Inter/Poppins)
- Responsive spacing system based on Tailwind's 4-unit scale
- Custom border radius values: 9px (lg), 6px (md), 3px (sm)

**State Management**
- React Query for async data fetching with custom configuration (no window focus refetch, infinite stale time)
- Local component state using React hooks (useState, useEffect)
- Custom hooks: `use-mobile` for responsive breakpoints, `use-toast` for notifications

**Animations & Interactions**
- Framer Motion `useScroll` and `useTransform` for parallax hero section (shrinks from 100vh to 50vh on scroll)
- Lightbox modal for full-screen image viewing with keyboard navigation
- Hover effects using Tailwind utilities (scale transforms, shadow elevations)
- Smooth scroll snap behavior for horizontal photo carousel

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the Node.js server
- Dual-mode setup: development server (`index-dev.ts`) with Vite middleware, production server (`index-prod.ts`) serving static assets
- Custom logging middleware tracking request duration and JSON responses
- Route registration system in `routes.ts` (currently minimal, supports future API expansion)

**Development Environment**
- Vite middleware integration for HMR during development
- Custom error overlay plugin (@replit/vite-plugin-runtime-error-modal)
- Replit-specific plugins for cartographer and dev banner in development mode
- File watching with automatic template reloading

**Data Layer Interface**
- Abstract storage interface (`IStorage`) in `storage.ts` defining CRUD methods
- In-memory storage implementation (`MemStorage`) using Map for user data
- UUID generation for user IDs using Node's crypto module
- Designed for easy migration to database-backed storage

### Database Schema

**ORM & Migration System**
- **Drizzle ORM** configured for PostgreSQL dialect (though not yet actively used)
- **Drizzle Kit** for schema migrations with output to `./migrations` directory
- **Neon Database** serverless driver (@neondatabase/serverless) specified in dependencies

**Current Schema** (defined but minimal usage)
- `users` table with UUID primary key (auto-generated via `gen_random_uuid()`)
- Fields: id (varchar PK), username (text, unique, not null), password (text, not null)
- Zod validation schemas generated from Drizzle schema for type-safe inserts

**Design Pattern**
- Schema-first approach using `drizzle-zod` to derive TypeScript types and validation
- Ready for PostgreSQL connection via `DATABASE_URL` environment variable
- Storage abstraction allows swapping between in-memory and database implementations

### External Dependencies

**UI Component Libraries**
- **Radix UI** (26+ primitive components): accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, toggle-group, tooltip
- **Embla Carousel** for touch-friendly image carousels
- **Lucide React** for SVG icon system (Tv, Snowflake, Wind, Wifi, Car, Bike, UmbrellaIcon, etc.)
- **cmdk** for command palette functionality
- **vaul** for drawer components

**Styling & Utilities**
- **Tailwind CSS** with PostCSS and Autoprefixer
- **clsx** and **tailwind-merge** for conditional class merging
- **class-variance-authority** for component variant management
- **date-fns** for date formatting and manipulation

**Development Tools**
- **TypeScript** with strict mode enabled
- **ESBuild** for production server bundling
- **tsx** for TypeScript execution in development
- **Vite** with React plugin and custom Replit plugins

**Database & Session Management** (configured but not actively used)
- **@neondatabase/serverless** for PostgreSQL connection
- **connect-pg-simple** for PostgreSQL session store
- **drizzle-orm** and **drizzle-kit** for ORM and migrations

**State Management**
- **React Hook Form** with **@hookform/resolvers** for form validation
- **Zod** for runtime schema validation

**Asset Management**
- Generated images stored in `attached_assets/generated_images/` directory
- Vite alias `@assets` for easy image imports
- Images: hero_beachfront_balcony_view.png, living_room_sea_view.png, bedroom_ocean_view.png, beach_with_umbrellas.png, modern_kitchen_interior.png, bathroom_modern_design.png, terrace_sunset_view.png, bicycles_beach_lifestyle.png