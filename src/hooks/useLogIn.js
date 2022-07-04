import { useState } from 'react';
import { useAuth } from 'providers/AuthProvider';
import useFirebaseFirestore from './useFirebaseFirestore';
import { useDispatch } from 'react-redux';
import { handleSignInModalClose } from 'store/slices/isSignInModalOpenSlice';

const useLogIn = () => {
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const { setIsAuthorised, setCurrentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(handleSignInModalClose());

  const { fetchUserByEmailAndPassword } = useFirebaseFirestore();

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
      const querySnapshot = await fetchUserByEmailAndPassword(email, password);
      // Check if response is empty and then do stuff
      if (!querySnapshot.empty) {
        setIsAuthorised(true);
        querySnapshot.forEach((doc) => {
          localStorage.setItem('token', doc.id);
          setCurrentUser(doc.data());
        });
      } else {
        setIsError(true);
      }
      // close modal, without it it is still open after logout
      handleCloseModal();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return { isError, emailError, passwordError, isLoading, handleSignIn };
};

export default useLogIn;
