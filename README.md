# Full-Stack TypeScript Monorepo

A modern full-stack TypeScript monorepo built with React, Node.js, Express, and Turborepo.

## 🏗️ Project Structure

```
coursenew/
├── apps/
│   ├── frontend/     # React + TypeScript frontend (Vite)
│   └── backend/      # Node.js + Express TypeScript backend
├── packages/
│   └── shared/       # Shared utilities and types
├── package.json
├── turbo.json
└── README.md
```

## 🚀 Tech Stack

- **Package Manager**: pnpm
- **Monorepo Tool**: Turborepo
- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Code Quality**: ESLint + Prettier (with real-time formatting warnings)
- **Language**: TypeScript

## 📦 Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

## 🛠️ Setup

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Start development servers**:

   ```bash
   pnpm dev
   ```

3. **Access the applications**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001
   - Health Check: http://localhost:5001/api/health

## 📜 Available Scripts

### Root Commands

#### Development

- `pnpm dev` - Start development servers for all apps (frontend on port 3000, backend on port 5001)
- `pnpm dev --filter frontend` - Start only frontend development server
- `pnpm dev --filter backend` - Start only backend development server

#### Building

- `pnpm build` - Build all packages and apps
- `pnpm build --filter frontend` - Build only frontend
- `pnpm build --filter backend` - Build only backend
- `pnpm build --filter @coursenew/shared` - Build only shared package

#### Code Quality

- `pnpm lint` - Run ESLint on all packages and apps
- `pnpm lint --fix` - Run ESLint and auto-fix issues
- `pnpm lint --filter frontend` - Lint only frontend
- `pnpm lint --filter backend` - Lint only backend
- `pnpm lint --filter @coursenew/shared` - Lint only shared package

#### Formatting

- `pnpm format` - Run Prettier on all packages and apps
- `pnpm format --check` - Check formatting without making changes
- `pnpm format --filter frontend` - Format only frontend
- `pnpm format --filter backend` - Format only backend
- `pnpm format --filter @coursenew/shared` - Format only shared package

#### Type Checking

- `pnpm type-check` - Run TypeScript type checking across all packages
- `pnpm type-check --filter frontend` - Type-check only frontend
- `pnpm type-check --filter backend` - Type-check only backend
- `pnpm type-check --filter @coursenew/shared` - Type-check only shared package

#### Testing

- `pnpm test` - Run tests across all packages and apps
- `pnpm test --filter frontend` - Test only frontend
- `pnpm test --filter backend` - Test only backend

#### Cleanup

- `pnpm clean` - Clean build artifacts from all packages
- `pnpm clean --filter frontend` - Clean only frontend build artifacts
- `pnpm clean --filter backend` - Clean only backend build artifacts
- `pnpm clean --filter @coursenew/shared` - Clean only shared package build artifacts

### Combined Quality Check Commands

#### Quick Checks

- `pnpm check` - Build + Lint + Format (recommended for quick checks)
- `pnpm check:all` - Build + Lint + Format + Type-check (comprehensive check)

#### Manual Command Chaining

```bash
# Chain commands (stops on failure)
pnpm build && pnpm lint && pnpm format

# Run all commands regardless of failures
pnpm build; pnpm lint; pnpm format

# Comprehensive check with manual chaining
pnpm build && pnpm lint --fix && pnpm format && pnpm type-check
```

### Individual App Commands

#### Frontend (React + Vite)

```bash
cd apps/frontend
pnpm dev          # Start development server (port 3000)
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm lint --fix   # Run ESLint with auto-fix
pnpm format       # Run Prettier
pnpm type-check   # Run TypeScript type checking
```

#### Backend (Node.js + Express)

```bash
cd apps/backend
pnpm dev          # Start development server with nodemon (port 5001)
pnpm build        # Build TypeScript to JavaScript
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint --fix   # Run ESLint with auto-fix
pnpm format       # Run Prettier
pnpm type-check   # Run TypeScript type checking
```

#### Shared Package

```bash
cd packages/shared
pnpm build        # Build TypeScript to JavaScript
pnpm dev          # Watch mode for development
pnpm lint         # Run ESLint
pnpm lint --fix   # Run ESLint with auto-fix
pnpm format       # Run Prettier
pnpm type-check   # Run TypeScript type checking
```

### ESLint Commands

#### Root Level

```bash
# Lint all packages
npx eslint .

# Lint specific directories
npx eslint apps/frontend/src
npx eslint apps/backend/src
npx eslint packages/shared/src

# Lint with auto-fix
npx eslint . --fix

# Lint specific file types
npx eslint "**/*.{ts,tsx}"
npx eslint "**/*.ts"
```

#### Individual Packages

```bash
# Frontend linting
cd apps/frontend
npx eslint src --ext .ts,.tsx
npx eslint src --ext .ts,.tsx --fix

# Backend linting
cd apps/backend
npx eslint src --ext .ts
npx eslint src --ext .ts --fix

# Shared package linting
cd packages/shared
npx eslint src --ext .ts,.tsx
npx eslint src --ext .ts,.tsx --fix
```

### Prettier Commands

#### Root Level

```bash
# Format all files
npx prettier --write .

# Check formatting without changes
npx prettier --check .

# Format specific file types
npx prettier --write "**/*.{ts,tsx,js,jsx,json,md}"
npx prettier --check "**/*.{ts,tsx,js,jsx,json,md}"
```

#### Individual Packages

```bash
# Frontend formatting
cd apps/frontend
npx prettier --write "src/**/*.{ts,tsx}"
npx prettier --check "src/**/*.{ts,tsx}"

# Backend formatting
cd apps/backend
npx prettier --write "src/**/*.ts"
npx prettier --check "src/**/*.ts"

# Shared package formatting
cd packages/shared
npx prettier --write "src/**/*.{ts,tsx}"
npx prettier --check "src/**/*.{ts,tsx}"
```

### TypeScript Commands

#### Root Level

```bash
# Type check all packages
npx tsc --noEmit

# Type check with build info
npx tsc --build
```

#### Individual Packages

```bash
# Frontend type checking
cd apps/frontend
npx tsc --noEmit

# Backend type checking
cd apps/backend
npx tsc --noEmit

# Shared package type checking
cd packages/shared
npx tsc --noEmit
```

## 🔧 Development

This monorepo uses Turborepo for efficient builds and development workflows. Each app and package can be developed independently while sharing common dependencies and tooling.

### Editor Integration

The ESLint configuration includes Prettier integration, which means:

- **Yellow line warnings** will appear in your editor for formatting issues
- **Auto-fix** formatting issues with `pnpm lint --fix`
- **Real-time feedback** on code style violations
- **Consistent formatting** across the entire monorepo

## 📁 Workspace Structure

- **apps/**: Contains the main applications
- **packages/**: Contains shared libraries and utilities
- **Root config**: ESLint, Prettier, and TypeScript configurations are shared across the monorepo

## 🚀 Testing the Full-Stack Application

### Backend API Testing

```bash
# Health check
curl http://localhost:5001/api/health

# Get all users
curl http://localhost:5001/api/users

# Get specific user
curl http://localhost:5001/api/users/1

# Create a new user
curl -X POST http://localhost:5001/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"New User","email":"newuser@example.com"}'
```

### Frontend Features

- React + TypeScript with Vite
- Shared utilities integration
- Email validation demo
- Date formatting demo
- API response formatting demo

## 🎉 Complete Setup

✅ **Monorepo Foundation** - pnpm + Turborepo  
✅ **Shared Configuration** - ESLint + Prettier + TypeScript  
✅ **Shared Package** - Common utilities and types  
✅ **Frontend** - React + TypeScript + Vite  
✅ **Backend** - Node.js + Express + TypeScript  
✅ **Full Integration** - Shared utilities across all packages
