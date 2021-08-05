import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext(false);

// my custom hook
export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user, !!user);
    setIsAuth(!!user);
  }, [isAuth]);

  const login = (dataCredentials) => {
    const { username, password } = dataCredentials;
    localStorage.setItem("user", JSON.stringify({ username, password }));
    // Your Axios call
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
