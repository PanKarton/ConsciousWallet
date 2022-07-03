import useFirebaseFirestore from 'hooks/useFirebaseFirestore';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthorised, setIsAuthorised] = useState(null);
  const { fetchUserById } = useFirebaseFirestore();

  useEffect(() => {
    // if there is token in localstorage, then set currentUser
    (async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        // If there is token, fetch user and update currentUser
        const fetchedUser = await fetchUserById(token);
        const userData = fetchedUser.data();
        if (!userData) return;
        setCurrentUser(fetchedUser.data());
        setIsAuthorised(true);
      } catch (err) {
        console.log('AuthProvider useEffect error: ', err);
      }
    })();
  }, []);

  return <AuthContext.Provider value={{ currentUser, setCurrentUser, setIsAuthorised, isAuthorised }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (Object.keys(auth).length === 0) throw Error('useAuth is supposed to be used inside AuthContext.Provider');

  return auth;
};
