# @coursenew/shared

Shared utilities and types for the coursenew monorepo.

## Features

- **Common Types**: Shared TypeScript interfaces and types
- **Utility Functions**: Date formatting, validation, and API response helpers
- **Reusable Logic**: Common functionality used across frontend and backend

## Usage

```typescript
import { ApiResponse, User, formatDate, isValidEmail } from '@coursenew/shared';

// Use shared types
const user: User = {
  id: '1',
  email: 'user@example.com',
  name: 'John Doe',
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Use utility functions
const formattedDate = formatDate(new Date());
const isValid = isValidEmail('user@example.com');

// Create API responses
const response: ApiResponse<User> = {
  success: true,
  data: user,
  message: 'User retrieved successfully',
};
```

## Available Exports

### Types

- `ApiResponse<T>` - Standard API response interface
- `User` - User entity interface

### Utilities

- `formatDate(date: Date)` - Format date for display
- `formatDateTime(date: Date)` - Format date and time for display
- `isValidEmail(email: string)` - Email validation
- `isValidPassword(password: string)` - Password validation
- `createApiResponse()` - Helper to create API responses

## Development

```bash
# Build the package
pnpm build

# Watch for changes
pnpm dev

# Run linting
pnpm lint

# Format code
pnpm format
```
