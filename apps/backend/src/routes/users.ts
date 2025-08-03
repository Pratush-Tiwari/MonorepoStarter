import express from 'express';
import { createApiResponse, isValidEmail, formatDate } from '@coursenew/shared';
import type { ApiResponse, User } from '@coursenew/shared';

const router: express.Router = express.Router();

// Mock user data
const mockUsers: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-16'),
  },
  {
    id: '3',
    email: 'bob.wilson@example.com',
    name: 'Bob Wilson',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-17'),
  },
];

// GET /api/users - Get all users
router.get('/', (req, res) => {
  const response: ApiResponse<User[]> = createApiResponse(
    true,
    mockUsers,
    undefined,
    'Users retrieved successfully'
  );
  res.json(response);
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = mockUsers.find(u => u.id === id);

  if (!user) {
    const response: ApiResponse = createApiResponse(
      false,
      undefined,
      'User not found',
      'No user found with the specified ID'
    );
    return res.status(404).json(response);
  }

  const response: ApiResponse<User> = createApiResponse(
    true,
    user,
    undefined,
    'User retrieved successfully'
  );
  res.json(response);
});

// POST /api/users - Create a new user
router.post('/', (req, res) => {
  const { email, name } = req.body;

  // Validation using shared utilities
  if (!email || !name) {
    const response: ApiResponse = createApiResponse(
      false,
      undefined,
      'Missing required fields',
      'Email and name are required'
    );
    return res.status(400).json(response);
  }

  if (!isValidEmail(email)) {
    const response: ApiResponse = createApiResponse(
      false,
      undefined,
      'Invalid email format',
      'Please provide a valid email address'
    );
    return res.status(400).json(response);
  }

  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    const response: ApiResponse = createApiResponse(
      false,
      undefined,
      'User already exists',
      'A user with this email already exists'
    );
    return res.status(409).json(response);
  }

  // Create new user
  const newUser: User = {
    id: (mockUsers.length + 1).toString(),
    email,
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  mockUsers.push(newUser);

  const response: ApiResponse<User> = createApiResponse(
    true,
    newUser,
    undefined,
    'User created successfully'
  );
  res.status(201).json(response);
});

// PUT /api/users/:id - Update user
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  const userIndex = mockUsers.findIndex(u => u.id === id);
  if (userIndex === -1) {
    const response: ApiResponse = createApiResponse(
      false,
      undefined,
      'User not found',
      'No user found with the specified ID'
    );
    return res.status(404).json(response);
  }

  // Validation
  if (email && !isValidEmail(email)) {
    const response: ApiResponse = createApiResponse(
      false,
      undefined,
      'Invalid email format',
      'Please provide a valid email address'
    );
    return res.status(400).json(response);
  }

  // Update user
  const updatedUser: User = {
    ...mockUsers[userIndex],
    ...(email && { email }),
    ...(name && { name }),
    updatedAt: new Date(),
  };

  mockUsers[userIndex] = updatedUser;

  const response: ApiResponse<User> = createApiResponse(
    true,
    updatedUser,
    undefined,
    'User updated successfully'
  );
  res.json(response);
});

// DELETE /api/users/:id - Delete user
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = mockUsers.findIndex(u => u.id === id);

  if (userIndex === -1) {
    const response: ApiResponse = createApiResponse(
      false,
      undefined,
      'User not found',
      'No user found with the specified ID'
    );
    return res.status(404).json(response);
  }

  const deletedUser = mockUsers.splice(userIndex, 1)[0];

  const response: ApiResponse<{ deletedUser: User; deletedAt: string }> =
    createApiResponse(
      true,
      {
        deletedUser,
        deletedAt: formatDate(new Date()),
      },
      undefined,
      'User deleted successfully'
    );
  res.json(response);
});

export default router;
