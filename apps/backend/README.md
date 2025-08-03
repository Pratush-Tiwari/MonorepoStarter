# Backend API

Node.js + Express TypeScript backend for the full-stack monorepo.

## Features

- **Express.js** with TypeScript
- **Security middleware** (Helmet, CORS)
- **Logging** with Morgan
- **Environment configuration** with dotenv
- **Shared utilities** from `@coursenew/shared` package
- **RESTful API** with proper error handling
- **Type safety** throughout the application

## API Endpoints

### Health Check

- `GET /api/health` - Server health status

### Users API

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Format code
pnpm format

# Type checking
pnpm type-check
```

## Environment Variables

Copy `env.example` to `.env` and configure:

```env
PORT=5001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
LOG_LEVEL=info
```

## API Response Format

All API responses follow the shared `ApiResponse` format:

```typescript
{
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
```

## Shared Package Integration

The backend uses utilities from `@coursenew/shared`:

- `createApiResponse()` - Standardized API responses
- `isValidEmail()` - Email validation
- `formatDate()` - Date formatting
- `User` type - User entity interface
