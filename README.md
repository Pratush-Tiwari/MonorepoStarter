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
- **Code Quality**: ESLint + Prettier
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

### Root Level (Monorepo)

- `pnpm build` - Build all packages and apps
- `pnpm dev` - Start development servers for all apps
- `pnpm lint` - Run linting across all packages
- `pnpm format` - Format code across all packages
- `pnpm test` - Run tests across all packages
- `pnpm clean` - Clean build artifacts
- `pnpm type-check` - Run TypeScript type checking

### Quality Check Commands

- `pnpm check` - Build + Lint + Format (recommended for quick checks)
- `pnpm check:all` - Build + Lint + Format + Type-check (comprehensive check)

### Running Multiple Commands

You can also chain commands manually:

```bash
# Chain commands (stops on failure)
pnpm build && pnpm lint && pnpm format

# Run all commands regardless of failures
pnpm build; pnpm lint; pnpm format
```

### Individual Apps

- `pnpm --filter frontend dev` - Start frontend dev server
- `pnpm --filter backend dev` - Start backend dev server
- `pnpm --filter frontend build` - Build frontend
- `pnpm --filter backend build` - Build backend

## 🔧 Development

This monorepo uses Turborepo for efficient builds and development workflows. Each app and package can be developed independently while sharing common dependencies and tooling.

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
