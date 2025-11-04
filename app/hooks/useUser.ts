// app/hooks/useUser.ts
"use client";

import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  phone?: string;
}

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    const storedCurrentUser = localStorage.getItem('currentUser');
    if (storedCurrentUser) {
      setCurrentUser(JSON.parse(storedCurrentUser));
      setIsAuthenticated(true);
    }
  }, []);

  const addUser = (userData: User) => {
    const newUsers = [...users, userData];
    localStorage.setItem('users', JSON.stringify(newUsers));
    setUsers(newUsers);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const loginUser = (user: User) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
    setIsAuthenticated(true);
  }

  const logoutUser = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return {
    users,
    currentUser,
    isAuthenticated,
    addUser,
    loginUser,
    logoutUser,
  };
};

export default useUser;
