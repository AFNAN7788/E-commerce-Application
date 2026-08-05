import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const session = localStorage.getItem("btm-session");
    return session ? JSON.parse(session) : null;
  });

  const signup = (username, email, password) => {
    const newUser = { username, email, password };

    localStorage.setItem("btm-user", JSON.stringify(newUser));
  };

  const signin = (email, password) => {
    const registeredUser = JSON.parse(localStorage.getItem("btm-user"));

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      localStorage.setItem("btm-session", JSON.stringify(registeredUser));
      setUser(registeredUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("btm-session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
