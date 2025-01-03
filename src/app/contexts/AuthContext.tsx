import { User } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextProps {
  user: User | null;
  setAuth: (authUser: User | null) => void;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  function setAuth(authUser: User | null) {
    setUser(authUser);
  }
  return (
    <AuthContext.Provider value={{ user, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
