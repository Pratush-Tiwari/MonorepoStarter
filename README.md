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

## 1. Starting the Project

### Step-by-Step Guide

1. **Install all dependencies**:

   ```bash
   pnpm install
   ```

2. **Start both frontend and backend**:

   ```bash
   pnpm dev
   ```

3. **Access the applications**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001
   - Health Check: http://localhost:5001/

### Alternative: Start Individual Apps

```bash
# Install dependencies for specific app only
pnpm install --filter frontend
pnpm install --filter backend

# Start individual apps
pnpm dev --filter frontend    # Start only frontend
pnpm dev --filter backend     # Start only backend
```

## 2. Combined Commands (from root)

```bash
# Start both frontend and backend
pnpm dev ✅

# Build all packages and apps
pnpm build ✅

# Run linting across all packages
pnpm lint ✅

# Run linting with auto-fix
pnpm lint --fix # Run linting with auto-fix this is not working❌ (use individual app commands instead)

# Run formatting across all packages
pnpm format ✅

# Type checking across all packages
pnpm type-check ✅

# Quick quality check (build + lint + format)
pnpm check ✅
```

## 3. Frontend Individual Commands

```bash
cd apps/frontend

pnpm dev          # Start development server (port 3000) ✅
pnpm build        # Build for production ✅
pnpm preview      # Preview production build ✅
pnpm lint         # Run ESLint ✅
pnpm lint --fix   # Run ESLint with auto-fix ✅
pnpm format       # Run Prettier ✅
pnpm type-check   # Run TypeScript type checking ✅
```

## 4. Backend Individual Commands

```bash
cd apps/backend

pnpm dev          # Start development server with nodemon (port 5001) ✅
pnpm build        # Build TypeScript to JavaScript ✅
pnpm start        # Start production server ✅
pnpm lint         # Run ESLint ✅
pnpm lint --fix   # Run ESLint with auto-fix ✅
pnpm format       # Run Prettier ✅
pnpm type-check   # Run TypeScript type checking ✅
```

## 🔧 Development

This monorepo uses Turborepo for efficient builds and development workflows. Each app and package can be developed independently while sharing common dependencies and tooling.

### Editor Integration

The ESLint configuration includes Prettier integration, which means:

- **Yellow line warnings** will appear in your editor for formatting issues
- **Auto-fix** formatting issues with `pnpm lint --fix`
- **Real-time feedback** on code style violations
- **Consistent formatting** across the entire monorepo

## 🚀 Testing the Full-Stack Application

### Backend API Testing

```bash
# Health check
curl http://localhost:5001/

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
