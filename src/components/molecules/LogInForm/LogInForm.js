import React, { useState } from 'react';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { StyledForm } from './LogInForm.styles';
import { useForm } from 'react-hook-form';
import { db } from 'firebase-config';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';

const LogInForm = () => {
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleSignIn = async ({ email, password }) => {
    try {
      const usersCollectionRef = collection(db, 'users');
      const docRef = doc(usersCollectionRef, 'email', '==', email);
      const userCredential = await getDoc(docRef);
      console.log(userCredential);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSignIn)}>
      <CredentialsInput {...register('email')} id="email" type="text" placeholder="Email" required />
      <CredentialsInput {...register('password')} id="password" type="password" placeholder="Password" required />
      {isError && <p className="wrong-credentials-error">Invalid login or password.</p>}
      <CylinderButton type="submit" bgColor="blue" textColor="white">
        Log in
      </CylinderButton>
    </StyledForm>
  );
};

export default LogInForm;
