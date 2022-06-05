import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import useSignUpValidation from 'hooks/useSignUpValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadingWrapper, StyledWrapper } from './SignUpAccountDetails.styles';

const SignUpAccountDetails = ({ register, setNextStep, watch }) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordsMatchError, setPasswordMatchError] = useState('');
  const [emailError, setEmailError] = useState('');
  const { getLoginError, getPasswordError, getPasswordMatchError, getEmailError } = useSignUpValidation();

  useEffect(() => {
    const subscription = watch(({ login, password, passwordConfirmation, email }) => {
      // Check has no werid characters and set error or ''
      setLoginError(getLoginError(login));

      // Check if password is str0nk and set error or ''
      setPasswordError(getPasswordError(password));

      // Check if passwords are the same and set error or ''
      setPasswordMatchError(getPasswordMatchError(password, passwordConfirmation));

      // Check if email is valid and set error or ''
      setEmailError(getEmailError(email));
    });

    return () => subscription.unsubscribe();
  }, [watch, getLoginError, getPasswordError, getPasswordMatchError, getEmailError]);

  const handleNextStep = (data) => {
    console.log(data);
    if (loginError || passwordsMatchError || emailError) return;
    setNextStep();
    navigate('/signup/personals');
  };

  return (
    <StyledWrapper>
      <HeadingWrapper>
        <h2>Sign Up! </h2>
        <p>It's quick and easy.</p>
      </HeadingWrapper>
      <CredentialsInput {...register('login')} id="login" type="text" placeholder="Login" required errorMessage={loginError} />
      <CredentialsInput {...register('password')} id="password" type="password" placeholder="Password" required errorMessage={passwordError} />
      <CredentialsInput {...register('passwordConfirmation')} id="passwordConfirmation" type="password" placeholder="Password confirmation" required errorMessage={passwordsMatchError} />
      <CredentialsInput {...register('email')} id="email" type="email" placeholder="Email" required errorMessage={emailError} />
      <CylinderButton type="button" bgColor="blue" textColor="white" onClick={handleNextStep}>
        Next
      </CylinderButton>
    </StyledWrapper>
  );
};

export default SignUpAccountDetails;
