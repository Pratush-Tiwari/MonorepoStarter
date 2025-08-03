import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { formatDate, isValidEmail, createApiResponse } from '@coursenew/shared';
import type { User } from '@coursenew/shared';

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState<boolean | null>(null);

  // Example user data using shared types
  const exampleUser: User = {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Example API response using shared utilities
  const exampleResponse = createApiResponse(
    true,
    exampleUser,
    undefined,
    'User retrieved successfully'
  );

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value ? isValidEmail(value) : null);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Monorepo</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Demo of shared utilities */}
      <div className="shared-demo">
        <h2>Shared Package Demo</h2>

        <div className="demo-section">
          <h3>Date Formatting</h3>
          <p>Current date: {formatDate(new Date())}</p>
        </div>

        <div className="demo-section">
          <h3>Email Validation</h3>
          <input
            type="email"
            placeholder="Enter email to validate"
            value={email}
            onChange={handleEmailChange}
            className={
              emailValid === null ? '' : emailValid ? 'valid' : 'invalid'
            }
          />
          {emailValid !== null && (
            <p className={emailValid ? 'valid-text' : 'invalid-text'}>
              {emailValid ? '✓ Valid email' : '✗ Invalid email'}
            </p>
          )}
        </div>

        <div className="demo-section">
          <h3>Shared Types & API Response</h3>
          <pre>{JSON.stringify(exampleResponse, null, 2)}</pre>
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
