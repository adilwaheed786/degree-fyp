import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Other authentication-related logic

  const login = () => {
    // Perform login logic and set isAuthenticated and isAdmin values
    setIsAuthenticated(true);
    
    setIsAdmin(true); // Set this based on the user's role or privileges
    
  };

  const logout = () => {
    // Perform logout logic and reset isAuthenticated and isAdmin values
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
