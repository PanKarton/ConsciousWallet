import { db } from 'firebase-config';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const [isAuthorised, setIsAuthorised] = useState(false);

  const usersCollectionRef = collection(db, 'users');

  const handleSignUp = async (data) => {
    try {
      setIsAuthorised(true);
      // Remove spaces and tabs in case there is any
      Object.keys(data).forEach((key) => {
        if (typeof data[key] === 'string') {
          data[key] = data[key].trim();
        }
      });
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
      const docRef = doc(usersCollectionRef, user.id);
      const fetchedUser = await getDoc(docRef);
      setcurrentUser(fetchedUser.data());
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthContext.Provider value={{ currentUser, handleSignUp, isAuthorised }}>{children}</AuthContext.Provider>;
};
