import React, { useContext, useState } from 'react';
import { db } from 'firebase-config';
import { addDoc, collection } from '@firebase/firestore';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);

  const usersCollectionRef = collection(db, 'users');

  const handleSignUp = async ({ login, password, passwordConfirmation, email }) => {
    if (password !== passwordConfirmation) return console.log(`wrr`);
    await addDoc(usersCollectionRef, {
      login,
      password,
      email,
      xd: 'xd',
    });
  };

  return <AuthContext.Provider value={{ currentUser, handleSignUp }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (Object.keys(auth).length === 0) throw Error('useAuth is supposed to be used inside AuthContext.Provider');

  return auth;
};
