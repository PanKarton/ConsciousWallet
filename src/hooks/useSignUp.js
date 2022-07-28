import { useAuth } from 'providers/AuthProvider';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from './useFirebase';

const useSignUp = () => {
  const [step, setStep] = useState(1);
  const [canMoveNext, setCanMoveNext] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const navigate = useNavigate();
  const { setIsAuthorised, setCurrentUser } = useAuth();
  const { customCreateUserWithEmailAndPassword, setUserDoc } = useFirebase();

  const handleSignUp = useCallback(
    async (data) => {
      try {
        setIsAuthorised(true);
        // Remove spaces and tabs in case there is any
        Object.keys(data).forEach((key) => {
          if (typeof data[key] === 'string') {
            data[key] = data[key].trim();
          }
        });
        const { login, birthDay, birthMonth, birthYear, name, surname, gender, optionalGender, pronoun, ...rest } = data;
        const refactoredUserData = {
          login,
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
          imageBackgroundColor: Math.floor(Math.random() * 360),
        };
        const userId = await customCreateUserWithEmailAndPassword(rest.email, rest.password);
        await setUserDoc(userId, refactoredUserData);
        setCurrentUser({ userId, ...refactoredUserData });
        navigate('/home');
        localStorage.setItem('token', userId);
      } catch (err) {
        console.log(err);
      }
    },
    [customCreateUserWithEmailAndPassword, navigate, setCurrentUser, setIsAuthorised, setUserDoc],
  );

  return { handleSignUp, step, setStep, canMoveNext, setCanMoveNext, canSubmit, setCanSubmit };
};

export default useSignUp;
