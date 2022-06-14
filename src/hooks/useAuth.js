import React, { useContext, useState } from 'react';
import { db } from 'firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);

  const usersCollectionRef = collection(db, 'users');

  const handleSignUp = async (data) => {
    try {
      Object.keys(data).forEach((key) => (data[key] = data[key].trim()));
      const { birthDay, birthMonth, birthYear, name, surname, gender, optionalGender, pronoun, ...rest } = data;
      const refactredUserData = {
        birth: {
          day: birthDay,
          month: birthMonth,
          year: birthYear,
        },
        name: {
          first: name,
          last: surname,
        },
        gender: {
          type: gender,
          optional: optionalGender,
          pronoun,
        },
        ...rest,
      };
      const user = await addDoc(usersCollectionRef, refactredUserData);
      setcurrentUser(refactredUserData);
      console.log('New user: ', user);
    } catch (err) {
      console.log(err);
    }
  };

  const isEmailAvaliable = async (email) => {
    try {
      const docs = await getDocs(usersCollectionRef, 'users');
      let isAvaliable = true;
      docs.forEach((doc) => {
        if (doc.data().email === email) isAvaliable = false;
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
