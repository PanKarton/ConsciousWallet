import React, { useState } from 'react';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { StyledForm } from './LogInForm.styles';
import { useForm } from 'react-hook-form';
import { db } from 'firebase-config';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { useAuth } from 'providers/AuthProvider';

const LogInForm = () => {
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const { register, handleSubmit } = useForm();
  const { setIsAuthorised, setCurrentUser } = useAuth();

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

      // Ref to collection
      const usersCollectionRef = collection(db, 'users');
      // Array of query arguments
      const queryArgs = [where('email', '==', email), where('password', '==', password)];
      // Query in variable
      const q = query(usersCollectionRef, ...queryArgs);
      // Query for data
      const querySnapshot = await getDocs(q);
      // Check if response is empty and then do stuff
      if (!querySnapshot.empty) {
        setIsAuthorised(true);
        querySnapshot.forEach((doc) => {
          setCurrentUser(doc.data());
        });
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSignIn)}>
      <CredentialsInput {...register('email')} id="email" type="text" placeholder="Email" errorMessage={emailError} />
      <CredentialsInput {...register('password')} id="password" type="password" placeholder="Password" errorMessage={passwordError} />
      {isError && <p className="wrong-credentials-error">Invalid login or password.</p>}
      <CylinderButton type="submit" bgColor="blue" textColor="white">
        Log in
      </CylinderButton>
    </StyledForm>
  );
};

export default LogInForm;
