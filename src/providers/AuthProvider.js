import useFirebaseFirestore from 'hooks/useFirebaseFirestore';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthorised, setIsAuthorised] = useState(null);
  const { getUserDocById, logOut } = useFirebaseFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    // Exit func when currentUser exists
    if (currentUser) return;
    // if there is token in localstorage, then set currentUser
    (async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return setIsAuthorised(false);
        }
        // If there is token, fetch user and update currentUser
        const fetchedUser = await getUserDocById(token);
        // Return if there is something wrong with data
        if (!fetchedUser) return;
        setCurrentUser(fetchedUser);
        setIsAuthorised(true);
        navigate('/home');
      } catch (err) {
        console.log('AuthProvider useEffect error: ', err);
      }
    })();
  }, [currentUser, getUserDocById, navigate]);

  const handleLogOut = () => {
    logOut();
    setIsAuthorised(false);
    setCurrentUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };

  return <AuthContext.Provider value={{ currentUser, setCurrentUser, setIsAuthorised, isAuthorised, handleLogOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (Object.keys(auth).length === 0) throw Error('useAuth is supposed to be used inside AuthContext.Provider');

  return auth;
};
