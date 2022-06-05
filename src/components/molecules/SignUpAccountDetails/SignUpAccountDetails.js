import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpAccountDetails = ({ register }) => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate('/signup/personals');
  };

  return (
    <>
      <h2>Let's </h2>
      <CredentialsInput {...register('login')} name="login" id="login" type="text" placeholder="Login" required />
      <CredentialsInput {...register('password')} name="password" id="password" type="password" placeholder="Password" required />
      <CredentialsInput {...register('passwordConfirmation')} name="passwordConfirmation" id="passwordConfirmation" type="password" placeholder="Password confirmation" required />
      <CredentialsInput {...register('email')} name="email" id="email" type="email" placeholder="Email" required />
      <button onClick={handleNextStep}>Next</button>
    </>
  );
};

export default SignUpAccountDetails;
