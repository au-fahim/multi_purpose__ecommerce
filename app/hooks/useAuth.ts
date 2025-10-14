// app/hooks/useAuth.ts
"use client";

import { useState } from 'react';

interface User {
  name: string;
  email: string;
  // Add other user properties as needed
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>({ name: 'Guest', email: '' }); // Mock user
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Mock auth status

  // In a real app, you would have login/logout functions
  // that interact with your authentication provider.

  return {
    user,
    isAuthenticated,
  };
};

export default useAuth;
