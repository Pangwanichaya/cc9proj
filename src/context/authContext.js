import { createContext, useState } from "react";
import { user as initailUser } from "../server/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(initailUser);
  const role = !user?.role ? "GUEST" : user.role === "USER" ? "USER" : "ADMIN";
  return (
    <AuthContext.Provider value={{ user, setUser, role }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
