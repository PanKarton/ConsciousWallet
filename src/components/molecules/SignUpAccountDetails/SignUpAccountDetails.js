import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import useSignUpValidation from 'hooks/useSignUpValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadingWrapper, StyledWrapper } from './SignUpAccountDetails.styles';

const SignUpAccountDetails = ({ register, watch, setStep, canMoveNext, setCanMoveNext }) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordsMatchError, setPasswordMatchError] = useState('');
  const [emailError, setEmailError] = useState('');
  const { getLoginError, getPasswordError, getPasswordMatchError, getEmailError } = useSignUpValidation();

  useEffect(() => {
    setStep(1);
    const subscription = watch(({ login, password, passwordConfirmation, email }) => {
      const newLoginError = getLoginError(login);
      const newPasswordError = getPasswordError(password);
      const newPasswordMatchError = getPasswordMatchError(password, passwordConfirmation);
      const newEmailError = getEmailError(email);

      // Check has no werid characters and set error or ''
      setLoginError(newLoginError);

      // Check if password is str0nk and set error or ''
      setPasswordError(newPasswordError);

      // Check if passwords are the same and set error or ''
      setPasswordMatchError(newPasswordMatchError);

      // Check if email is valid and set error or ''
      setEmailError(newEmailError);

      // Check if all inputs have valid content
      if (newLoginError || newPasswordError || newPasswordError || newEmailError) return setCanMoveNext(false);
      // Check if all inputs contain value
      if (!login || !password || !passwordConfirmation || !email) return setCanMoveNext(false);

      setCanMoveNext(true);
    });

    return () => subscription.unsubscribe();
  }, [setCanMoveNext, watch, getLoginError, getPasswordError, getPasswordMatchError, getEmailError, emailError, loginError, passwordError, passwordsMatchError]);

  const handleNextStep = () => {
    if (!canMoveNext) return;
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
