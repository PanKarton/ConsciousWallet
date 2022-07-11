import { useCallback, useState } from 'react';
import { useAuth } from 'providers/AuthProvider';
import useFirebaseFirestore from './useFirebaseFirestore';
import { useDispatch } from 'react-redux';
import { handleSignInModalClose } from 'store/slices/isSignInModalOpenSlice';
import { useNavigate } from 'react-router-dom';

const useLogIn = () => {
  const [finalErrorMessage, setFinalErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const { setIsAuthorised, setCurrentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { customSignInWithLoginAndPassword, getUserDocById } = useFirebaseFirestore();

  const handleCloseModal = useCallback(() => dispatch(handleSignInModalClose()), [dispatch]);

  const handleSignIn = useCallback(
    async ({ email, password }) => {
      try {
        setFinalErrorMessage(false);
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
        const response = await customSignInWithLoginAndPassword(email, password);
        if (response.name === 'FirebaseError') {
          if (response.code === 'auth/invalid-email') {
            setFinalErrorMessage('Invalid login or password.');
          } else if (response.code === 'auth/network-request-failed') {
            setFinalErrorMessage('Please check your internet connection.');
          }
        } else {
          const userDocument = await getUserDocById(response);
          setCurrentUser(userDocument);
          setIsAuthorised(true);
          navigate('home');
          // close modal, without it it is still open after logout
          handleCloseModal();
        }
        // console.log(userDocument);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    },
    [customSignInWithLoginAndPassword, getUserDocById, handleCloseModal, setCurrentUser, setIsAuthorised, navigate],
  );

  return { finalErrorMessage, emailError, passwordError, isLoading, handleSignIn };
};

export default useLogIn;
