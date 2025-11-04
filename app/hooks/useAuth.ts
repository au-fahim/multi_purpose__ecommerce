// app/hooks/useAuth.ts
"use client";

import useUser from './useUser';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const { users, currentUser, isAuthenticated, addUser, loginUser, logoutUser } = useUser();
  const router = useRouter();

  const login = (emailOrPhone: string, password_token: string) => {
    // In a real app, you would verify the password_token as well
    const user = users.find(u => u.email === emailOrPhone || u.phone === emailOrPhone);
    if (user) {
      loginUser(user);
    } else {
      // Handle invalid credentials
      router.push('/signup');
    }
  };

  const signup = (name: string, email: string, phone: string, password_token: string) => {
    // In a real app, you would also handle password hashing
    const newUser = { name, email, phone };
    addUser(newUser);
  };

  const logout = () => {
    logoutUser();
  };

  return {
    user: currentUser,
    isAuthenticated,
    login,
    signup,
    logout,
  };
};

export default useAuth;
