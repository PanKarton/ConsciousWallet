import React from 'react';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { StyledForm } from './SignUpForm.styles';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();
  const { handleSignUp } = useAuth();

  const handleSignUpSubmit = (data) => {
    handleSignUp(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSignUpSubmit)}>
      <CredentialsInput {...register('login')} name="login" id="login" type="text" placeholder="Login" required />
      <CredentialsInput {...register('password')} name="password" id="password" type="password" placeholder="Password" required />
      <CredentialsInput {...register('passwordConfirmation')} name="passwordConfirmation" id="passwordConfirmation" type="password" placeholder="Password confirmation" required />
      <CredentialsInput {...register('email')} name="email" id="email" type="email" placeholder="Email" required />
      <CylinderButton type="submit" bgColor="blue" textColor="white">
        <strong>Sign up</strong>
      </CylinderButton>
    </StyledForm>
  );
};

export default SignUpForm;
