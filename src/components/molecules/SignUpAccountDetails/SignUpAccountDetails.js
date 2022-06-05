import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadingWrapper, StyledWrapper } from './SignUpAccountDetails.styles';

const SignUpAccountDetails = ({ register, setNextStep }) => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    setNextStep();
    navigate('/signup/personals');
  };

  return (
    <StyledWrapper>
      <HeadingWrapper>
        <h2>Sign Up! </h2>
        <p>It's quick and easy.</p>
      </HeadingWrapper>
      <CredentialsInput {...register('login')} id="login" type="text" placeholder="Login" required />
      <CredentialsInput {...register('password')} id="password" type="password" placeholder="Password" required />
      <CredentialsInput {...register('passwordConfirmation')} id="passwordConfirmation" type="password" placeholder="Password confirmation" required />
      <CredentialsInput {...register('email')} id="email" type="email" placeholder="Email" required />
      <CylinderButton bgColor="blue" textColor="white" onClick={handleNextStep}>
        Next
      </CylinderButton>
    </StyledWrapper>
  );
};

export default SignUpAccountDetails;
