import React, { useContext, useState } from 'react';
import { db } from 'firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);

  const usersCollectionRef = collection(db, 'users');

  const handleSignUp = async (data) => {
    try {
      data.keys((key) => (data[key] = data[key].trim()));
      const user = await addDoc(usersCollectionRef, data);
      setcurrentUser(data);
      console.log('New user: ', user);
    } catch (err) {
      console.log(err);
    }
  };

  const isEmailAvaliable = async (email) => {
    try {
      const docs = await getDocs(usersCollectionRef, 'users');
      let isAvaliable = false;
      docs.forEach((doc) => {
        if (doc.data().email === email) isAvaliable = true;
      });
      return isAvaliable;
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthContext.Provider value={{ currentUser, handleSignUp, isEmailAvaliable }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (Object.keys(auth).length === 0) throw Error('useAuth is supposed to be used inside AuthContext.Provider');

  return auth;
};
