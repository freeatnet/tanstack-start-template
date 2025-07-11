# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TanStack Start template - a modern full-stack React application using:
- TanStack Start for SSR/SSG with React Server Components support
- TanStack Router for file-based, type-safe routing
- React 19 with TypeScript (strict mode)
- Tailwind CSS v4 with Vite plugin
- T3 Env for type-safe environment variables

## Essential Commands

```bash
# Development
pnpm dev              # Start dev server on port 3000 (or PORT env)

# Code Quality
pnpm lint:fix:all     # Run ESLint and auto-fix ESLint issues
pnpm format:fix:all   # Format all files with Prettier

# Production
pnpm build            # Build for production with type checking
pnpm start            # Run production server
```

## Architecture

### Routing System
Routes are defined in `src/routes/` using file-based routing:
- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Home page route
- Routes auto-generate to `src/routeTree.gen.ts` (never edit this file)

### Environment Variables
Configured in `src/env.ts` using T3 Env with Zod validation:
- Server variables: Direct access
- Client variables: Must use `VITE_` prefix
- All variables are type-safe and validated at runtime

### Styling
- Tailwind CSS v4 configured via Vite plugin
- Global styles in `src/styles/app.css` imported with `?url` in root route
- Dark mode support built-in

### Path Aliases
- `~/` maps to `./src/` - use for all imports within src directory

## Development Guidelines

1. **Route Creation**: Add new pages in `src/routes/` - the router will auto-detect them
2. **Type Safety**: TypeScript strict mode is enabled with `noUncheckedIndexedAccess`
3. **Formatting**: Always run `pnpm format:fix:all` before committing
4. **Environment Variables**: Add new env vars to `src/env.ts` with proper validation
