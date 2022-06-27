import { useState } from 'react';
import { useAuth } from 'providers/AuthProvider';
import { db } from 'firebase-config';
import { collection, where, query, getDocs } from 'firebase/firestore';

const useLogIn = () => {
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const { setIsAuthorised, setCurrentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async ({ email, password }) => {
    try {
      setIsError(false);
      setEmailError(null);
      setPasswordError(null);
      if (!email || !password) {
        if (!email && !password) {
          setEmailError(`This field can't be empty.`);
          return setPasswordError(`This field can't be empty.`);
        }
        if (!email) return setEmailError(`This field can't be empty.`);
        if (!password) return setPasswordError(`This field can't be empty.`);
      }

      setIsLoading(true);

      // Ref to collection
      const usersCollectionRef = collection(db, 'users');
      // Array of query arguments
      const queryArgs = [where('email', '==', email), where('password', '==', password)];
      // Query in variable
      const q = query(usersCollectionRef, ...queryArgs);
      // Query for data
      const querySnapshot = await getDocs(q);
      // Check if response is empty and then do stuff
      console.log(querySnapshot);
      if (!querySnapshot.empty) {
        setIsAuthorised(true);
        querySnapshot.forEach((doc) => {
          setCurrentUser(doc.data());
        });
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return { isError, emailError, passwordError, isLoading, handleSignIn };
};

export default useLogIn;
