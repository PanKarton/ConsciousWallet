import React, { useState } from 'react';
import { useContext } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthorised, setIsAuthorised] = useState(false);

  return <AuthContext.Provider value={{ currentUser, setCurrentUser, setIsAuthorised, isAuthorised }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (Object.keys(auth).length === 0) throw Error('useAuth is supposed to be used inside AuthContext.Provider');

  return auth;
};
