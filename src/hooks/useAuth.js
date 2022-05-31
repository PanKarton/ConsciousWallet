import React, { useContext, useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user);

  const handleSignUp = (userData) => {
    setUser(userData);
  };

  return <AuthContext.Provider value={{ user, handleSignUp }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (Object.keys(auth).length === 0) throw Error('useAuth is supposed to be used inside AuthContext.Provider');

  return auth;
};
