import { db } from 'firebase-config';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { useAuth } from 'providers/AuthProvider';
import { useState } from 'react';

const useSignUp = () => {
  const [step, setStep] = useState(1);
  const [canMoveNext, setCanMoveNext] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const usersCollectionRef = collection(db, 'users');
  const { setIsAuthorised, setCurrentUser } = useAuth();

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
      setCurrentUser(fetchedUser.data());
      console.log(fetchedUser.data());
      localStorage.setItem('token', fetchedUser.id);
    } catch (err) {
      console.log(err);
    }
  };

  return { handleSignUp, step, setStep, canMoveNext, setCanMoveNext, canSubmit, setCanSubmit };
};

export default useSignUp;
