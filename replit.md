# replit.md

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend), featuring a sophisticated ERP/business management system with AI capabilities. The application follows a monorepo structure with shared TypeScript types and database schemas.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**January 18, 2025 - Arabic Translation Migration Completed**
- Successfully migrated from Lovable to Replit with full Arabic RTL support
- Implemented comprehensive translation system with LanguageContext
- Fixed critical ValueSection component errors with proper array handling
- Added complete Arabic translations for all major components
- Updated navigation, hero, value sections, platform capabilities, ERP solutions, and contact forms
- Language switching now works perfectly between English and Arabic
- All UI elements properly display Arabic text with RTL layout
- Project now fully supports bilingual operation as required

**January 21, 2025 - Navbar Redesign and Font System Implementation Completed**
- Completely redesigned navbar with modern, responsive design addressing all usability issues
- Fixed responsive breakpoints and element overflow issues on smaller screens
- Implemented slide-out mobile menu with proper backdrop and close functionality
- Added clear close button and improved mobile menu UX with proper RTL support
- Applied new font system: Brockmann for headings, Inter for body text with Arabic font fallbacks
- Fixed all TypeScript errors and implemented language-aware font switching
- Enhanced navbar with modern glassmorphism background and smooth transitions
- Improved mobile menu positioning and backdrop blur effects for polished appearance

**January 21, 2025 - Professional Dialog System Enhancement Completed**
- Completely redesigned all dialog components (Dialog, AlertDialog, Sheet) with modern professional styling
- Enhanced DialogContent with glassmorphism effects, backdrop blur, and gradient overlays for premium appearance
- Upgraded DetailModal with gradient sections, improved typography hierarchy, and interactive hover effects
- Added professional close buttons with hover animations and better visual feedback
- Implemented consistent design language across all dialog types with rounded corners and sophisticated shadows
- Enhanced spacing, color schemes, and visual hierarchy for better user experience
- Applied responsive design principles and proper Arabic RTL support throughout dialog system

**January 21, 2025 - Arabic Platform Capabilities Translation Fixed**
- Fixed missing Arabic translations in Platform Capabilities dialog content
- Added complete Arabic translations for all platform features (Core Modules, AI Features, Integration Hub, Mobile Cloud)
- Updated PlatformCapabilities component to use translation keys instead of hardcoded English text
- Resolved TypeScript type casting errors for array vs string translations
- Arabic users now see fully translated content when clicking "اعرف المزيد" buttons
- Maintained proper RTL layout and Arabic typography throughout the dialog system

**January 20, 2025 - Project Migration to Replit Completed**
- Successfully migrated from Replit Agent to standard Replit environment
- Fixed Arabic RTL layout issues in Implementation Process section
- Updated LanguageContext to properly handle array translations for deliverables
- Improved Arabic implementation cards layout to match English design with proper RTL order
- Swapped position of main content and deliverables in Arabic layout as requested
- All TypeScript errors resolved and application running smoothly
- Maintained clean architecture with client/server separation and security best practices

**January 18, 2025 - Enhanced Arabic UI Design**
- Implemented GraphikArabic as primary Arabic font with proper typography
- Created improved RTL layout for Implementation Timeline cards in Arabic mode
- Added conditional layout rendering for Arabic vs English layouts
- Enhanced Arabic cards with better spacing, visual hierarchy, and organization
- Important content (title, duration, description) now properly positioned on right side
- Secondary content (deliverables) styled with background containers on left side
- Improved Arabic typography with enhanced line-height and letter-spacing
- Removed duplicate translation keys causing console errors

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: React Router for client-side navigation
- **Internationalization**: Custom language context supporting English and Arabic with RTL support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development Setup**: Hot module replacement with Vite integration
- **API Design**: RESTful API with /api prefix for all endpoints

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Vite build for frontend, esbuild for backend
- **TypeScript**: Strict configuration with path aliases
- **Deployment**: Single node process serving both frontend and API

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared schema definition in `/shared/schema.ts`
- **Users Table**: Basic user management with username/password authentication
- **Migrations**: Located in `/migrations` directory

### Frontend Components
- **Design System**: Custom Tailwind configuration with pulse color scheme
- **UI Components**: Comprehensive shadcn/ui component library
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: CSS animations and transitions with intersection observer
- **Email Integration**: EmailJS for contact form functionality

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management in `/server/routes.ts`
- **Error Handling**: Global error middleware with structured responses
- **Logging**: Custom logging system with request/response tracking

## Data Flow

### Client-Server Communication
1. React components make API calls through React Query
2. Express server handles requests with JSON middleware
3. Storage layer abstracts database operations
4. Responses are logged and returned as JSON

### Database Operations
1. Drizzle ORM provides type-safe database queries
2. Shared schema ensures consistency between frontend and backend
3. Connection pooling handled by Neon Database serverless driver

### State Management
1. React Query manages server state with caching
2. Local component state for UI interactions
3. Context API for global state (language, theme)

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React Router, React Query
- **Database**: Drizzle ORM, Neon Database, PostgreSQL
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Build Tools**: Vite, esbuild, TypeScript
- **Email Service**: EmailJS for contact functionality

### Development Tools
- **Replit Integration**: Custom plugins for development environment
- **Hot Reload**: Vite HMR with Express integration
- **Type Safety**: Shared TypeScript types and Zod validation

## Deployment Strategy

### Development Environment
- Single command startup with `npm run dev`
- Vite dev server proxies to Express backend
- Hot module replacement for both frontend and backend changes
- Environment variables for database connection

### Production Build
- Frontend builds to `/dist/public` directory
- Backend bundles to `/dist/index.js`
- Static file serving from Express
- Single node process deployment

### Database Setup
- PostgreSQL database required (Neon Database recommended)
- DATABASE_URL environment variable must be set
- Drizzle migrations handle schema updates
- Push schema changes with `npm run db:push`

### Key Configuration Files
- `drizzle.config.ts`: Database configuration and migrations
- `vite.config.ts`: Frontend build configuration with aliases
- `tsconfig.json`: TypeScript configuration with path mapping
- `tailwind.config.ts`: Design system configuration

The application is designed for rapid deployment on platforms like Replit, with environment-specific configurations and graceful fallbacks for missing assets or services.