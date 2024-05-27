import { useContext, createContext, useState, useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticatedTrue: () => {},
  setAuthenticatedFalse: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function setAuthenticatedFalse() {
    setIsAuthenticated(false);
  }
  function setAuthenticatedTrue() {
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticatedFalse, setAuthenticatedTrue }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
