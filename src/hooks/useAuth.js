import React, { useContext, useState } from 'react';
import { db } from 'firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);

  const usersCollectionRef = collection(db, 'users');

  const handleSignUp = async (data) => {
    try {
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
      // TRZEBA ZROBIC REFAKTOR PRZEJSCIA DO ZAUTORYZOWWANEJ APKI, GDZIE NAJPIERW JEST PRZEJSCIE, POTEM LOADING
      // A NA KONCU JAK DANE SIE ZAŁADUJĄ TO POJAWI SIE APKA, A TERAZ BD DANE PO PROSTU OD RAZU WCIŚNIĘTE I NIE ZROBI SB UPDATE
      setcurrentUser(user.id);
      console.log('New user: ', user, user.id);
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthContext.Provider value={{ currentUser, handleSignUp }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (Object.keys(auth).length === 0) throw Error('useAuth is supposed to be used inside AuthContext.Provider');

  return auth;
};
