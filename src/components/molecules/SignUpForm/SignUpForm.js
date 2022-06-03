import React, { useEffect, useState } from 'react';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { StyledForm } from './SignUpForm.styles';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import useSignUpValidation from 'hooks/useSignUpValidation';

const SignUpForm = () => {
  const { register, handleSubmit, watch } = useForm();
  // hook walidujący rzeczy
  const validation = useSignUpValidation();
  const { handleSignUp } = useAuth();
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [passwordConfError, setPasswordConfError] = useState('');
  // const [emailError, setEmailError] = useState('');

  // TRZEBA DODAC DYNAMICZNA WALIDACJE
  // LOGIN - ZAKAZANE ZNAKI NIETYPOWE
  // HASŁO :1 DUZA LITERA, 1 MALA, 1 CYFRA, 1 SPECJALNY ZNAK, HASŁA MUSZA SIE ZGADZAC
  // EMAIL: SCHEMAT EMAILA

  useEffect(() => {
    const subscription = watch((data) => {
      const loginPattern = /^[A-Za-z0-9]+$/;
      loginPattern.test(data.login) ? setLoginError('') : setLoginError(`Your login should not contain any special characters eg. [! , @ , # , $ , % , ^ , & , * , ( , ) , / , \\ , . , ]`);
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
      passwordPattern.test(data.password)
        ? setPasswordError('')
        : setPasswordError(
            `Sorry, that password is not strong enough. Passwords must be at least 8 characters long, contain at least: one small and capital letter, one number and one special character of [@$!%*?&]`,
          );
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const handleSignUpSubmit = (data) => {
    handleSignUp(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSignUpSubmit)}>
      <CredentialsInput {...register('login')} name="login" id="login" type="text" placeholder="Login" errorMessage={loginError} required />
      <CredentialsInput {...register('password')} name="password" id="password" type="password" placeholder="Password" errorMessage={passwordError} required />
      <CredentialsInput {...register('passwordConfirmation')} name="passwordConfirmation" id="passwordConfirmation" type="password" placeholder="Password confirmation" required />
      <CredentialsInput {...register('email')} name="email" id="email" type="email" placeholder="Email" required />
      <CylinderButton type="submit" bgColor="blue" textColor="white">
        <strong>Sign up</strong>
      </CylinderButton>
    </StyledForm>
  );
};

export default SignUpForm;
