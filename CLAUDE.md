# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FixPro Teknik Servis is a Nuxt 3 application built with TypeScript for technical service tracking. The application allows users to track service requests using service codes and provides detailed information about service progress and costs.

## Key Architecture

### Technology Stack
- **Framework**: Nuxt 3 with TypeScript
- **Styling**: TailwindCSS with custom design system
- **State Management**: Pinia for service data caching
- **UI Components**: Shadcn/ui components with custom styling
- **Form Handling**: Vee-validate with Zod validation
- **Icons**: Lucide Vue Next and Nuxt Icon
- **Package Manager**: PNPM

### Project Structure
- `pages/`: Contains the main application pages (index, detay, kayit)
- `components/`: UI components organized by type
  - `sections/`: Page-specific sections (HeroSection, SearchForm, etc.)
  - `shared/`: Reusable components (AppNavbar, Brand, Logo)
  - `ui/`: Shadcn/ui components (Button, Input, Table, etc.)
- `stores/`: Pinia stores for state management
- `server/tasks/`: Scheduled tasks (shield cleanup)
- `lib/`: Utility functions and helpers

### Core Features
1. **Service Tracking**: Users can search for services using service codes
2. **Service Details**: Detailed view showing service progress, timeline, and costs
3. **API Integration**: Proxy configuration routes `/api/**` to external service
4. **Data Caching**: Pinia store caches service data for 5 minutes
5. **Rate Limiting**: nuxt-api-shield provides API protection

### State Management
- `stores/servis.ts`: Manages service data with 5-minute cache expiry
- Cache keys are service codes, data includes timestamp for expiry logic
- Store methods: `setData()`, `getData()`, `clearData()`

### API Integration
- All `/api/**` requests are proxied to external service via `nuxt.config.ts`
- No server-side API routes needed - direct proxy to backend service
- Environment variable `API_SERVICE_URL` configures backend service URL

## Development Commands

### Setup
```bash
pnpm install
```

### Development
```bash
pnpm dev
```

### Build & Production
```bash
pnpm build
pnpm preview
```

### Linting
```bash
pnpm lint
```

### Deployment
```bash
pnpm deploy        # Deploy to alialaca/servis
pnpm deploy:hetzner # Deploy to hetzner/fx-servis-takip-ui
```

## Key Configuration

### Environment Variables
- `API_SERVICE_URL`: Backend service URL (default: http://localhost:7254)

### Styling System
- Custom colors defined in tailwind.config.js
- Font: DM Sans loaded from Google Fonts
- Responsive design with mobile-first approach

### Rate Limiting
- Max 12 requests per 108 seconds
- 1 hour ban after limit exceeded
- Memory storage for rate limiting data

## Important Notes

- Service codes are 8 characters max, alphanumeric only
- Service data is cached in Pinia store for 5 minutes
- API requests are proxied to external service
- Scheduled task runs every 15 minutes to clean shield data
- Templates use Pug syntax for cleaner markup
- The application uses Turkish language for UI text