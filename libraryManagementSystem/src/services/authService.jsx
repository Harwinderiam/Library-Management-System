// src/services/authService.js

import { createContext, useContext, useState } from 'react';
const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Replace with your actual user state
  const [isAdmin, setIsAdmin] = useState(false); // Flag to determine admin status

  // Function to set user and determine admin status
  const login = (userData) => {
    setUser(userData);
    setIsAdmin(userData.role === 'admin'); // Example: Check if user role is admin
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
