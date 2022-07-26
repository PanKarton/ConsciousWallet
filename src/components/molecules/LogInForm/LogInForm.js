import React, { useRef } from 'react';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { StyledForm } from './LogInForm.styles';
import { useForm } from 'react-hook-form';
import useLogIn from 'hooks/useLogIn';

const LogInForm = () => {
  const { register, handleSubmit } = useForm();
  const { finalErrorMessage, emailError, passwordError, handleSignIn, isLoading } = useLogIn();

  return (
    <StyledForm onSubmit={handleSubmit(handleSignIn)}>
      <CredentialsInput {...register('email')} id="email" type="text" placeholder="Email" errorMessage={emailError} />
      <CredentialsInput {...register('password')} id="password" type="password" placeholder="Password" errorMessage={passwordError} />
      {finalErrorMessage && <p className="wrong-credentials-error">{finalErrorMessage}</p>}
      <CylinderButton type="submit" bgColor="blue" textColor="white" isLoading={isLoading}>
        Log in
      </CylinderButton>
    </StyledForm>
  );
};

export default LogInForm;
