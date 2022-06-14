import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import useSignUpValidation from 'hooks/useSignUpValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadingWrapper, StyledWrapper } from './SignUpAccountDetails.styles';
// import debounce from 'lodash.debounce';
import { useAuth } from 'hooks/useAuth';

const SignUpAccountDetails = ({ register, watch, setStep, canMoveNext, setCanMoveNext }) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordsMatchError, setPasswordMatchError] = useState('');
  const [validationEmailError, setValidationEmailError] = useState('');
  const [emailAvailabilityError, setEmailAvailabilityError] = useState('');
  const { getLoginError, getPasswordError, getPasswordMatchError, getEmailError } = useSignUpValidation();
  const { isEmailAvaliable } = useAuth();

  useEffect(() => {
    setStep(1);
    const subscription = watch(async ({ login, password, passwordConfirmation, email }) => {
      const checkEmailAvailability = async (email) => {
        const isAvaliable = await isEmailAvaliable(email);
        console.log(isAvaliable);
        const error = isAvaliable ? null : 'Email already used by sameone else.';
        return error;
      };

      const newLoginError = login ? getLoginError(login) : null;
      const newPasswordError = password ? getPasswordError(password) : null;
      const newPasswordMatchError = passwordConfirmation ? getPasswordMatchError(password, passwordConfirmation) : null;
      const newEmailError = email ? getEmailError(email) : null;
      const newEmailAvailabilityError = email && !newEmailError ? await checkEmailAvailability(email) : null;

      // Check has no werid characters and set error or ''
      setLoginError(newLoginError);

      // Check if password is str0nk and set error or ''
      setPasswordError(newPasswordError);

      // Check if passwords are the same and set error or ''
      setPasswordMatchError(newPasswordMatchError);

      // Check if email is valid and set error or ''
      setValidationEmailError(newEmailError);

      // Check if email is taken and set error or ''
      setEmailAvailabilityError(newEmailAvailabilityError);

      // Check if all inputs have valid content
      if (newLoginError || newPasswordError || newPasswordError || newEmailError || newEmailAvailabilityError) return setCanMoveNext(false);
      // Check if all inputs contain value
      if (!login || !password || !passwordConfirmation || !email) return setCanMoveNext(false);

      setCanMoveNext(true);
    });

    return () => subscription.unsubscribe();
  }, [
    isEmailAvaliable,
    setStep,
    setCanMoveNext,
    watch,
    getLoginError,
    getPasswordError,
    getPasswordMatchError,
    getEmailError,
    validationEmailError,
    loginError,
    passwordError,
    passwordsMatchError,
    emailAvailabilityError,
  ]);

  const handleNextStep = () => {
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
      <CredentialsInput {...register('email')} id="email" type="email" placeholder="Email" required errorMessage={validationEmailError} secondErrorMessage={emailAvailabilityError} />
      <CylinderButton disabled={!canMoveNext} type="button" bgColor="blue" textColor="white" onClick={handleNextStep}>
        Next
      </CylinderButton>
    </StyledWrapper>
  );
};

export default SignUpAccountDetails;
