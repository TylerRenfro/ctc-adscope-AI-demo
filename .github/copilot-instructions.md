# AdScope - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
AdScope is an intelligent ad campaign management platform that allows users to enable, pause, and adjust ad campaign budgets based on weather conditions, time of day, seasons, device type, and network speed.

## Tech Stack
- **Framework**: Next.js 14 with TypeScript and App Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with modern design patterns
- **Authentication**: NextAuth.js (planned)
- **Database**: PostgreSQL with Prisma (planned)

## Code Style Guidelines
- Use TypeScript for all new files
- Follow React functional components with hooks
- Use Tailwind CSS for styling with semantic class names
- Implement responsive design (mobile-first approach)
- Use proper TypeScript interfaces and types
- Follow Next.js App Router conventions

## Component Structure
- Components should be in `/src/components/`
- Use proper props interfaces
- Implement accessibility features (ARIA labels, semantic HTML)
- Create reusable UI components

## Naming Conventions
- Files: kebab-case (e.g., `landing-page.tsx`)
- Components: PascalCase (e.g., `LandingPage`)
- Variables/Functions: camelCase (e.g., `handleSubmit`)
- CSS Classes: Tailwind utility classes

## Focus Areas
- Landing page implementation matching Figma design
- Google Ads integration capabilities
- Weather API integration
- Device and network detection
- Responsive design for all screen sizes
