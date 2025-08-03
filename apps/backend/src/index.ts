import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { createApiResponse } from '@coursenew/shared/utils/index';
import type { ApiResponse } from '@coursenew/shared/types/index';

// Load environment variables
dotenv.config();

const app: express.Application = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root endpoint
app.get('/', (req, res) => {
  const response: ApiResponse<{ message: string; version: string }> =
    createApiResponse(
      true,
      {
        message: 'Welcome to the Full-Stack TypeScript Monorepo API',
        version: '1.0.0',
      },
      undefined,
      'API is running'
    );
  res.json(response);
});

// 404 handler
app.use('*', (req, res) => {
  const response: ApiResponse = createApiResponse(
    false,
    undefined,
    'Route not found',
    'The requested route does not exist'
  );
  res.status(404).json(response);
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error('Error:', err);
    const response: ApiResponse = createApiResponse(
      false,
      undefined,
      err.message || 'Internal server error',
      'An error occurred while processing your request'
    );
    res.status(500).json(response);
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Root endpoint: http://localhost:${PORT}/`);
});

export default app;
