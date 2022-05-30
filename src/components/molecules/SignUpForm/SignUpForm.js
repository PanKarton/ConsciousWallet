import React from 'react';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  button {
    margin-top: 2rem;
  }
`;

const SignUpForm = () => {
  return (
    <StyledForm>
      <CredentialsInput name="login" id="login" type="text" placeholder="Login..." required />
      <CredentialsInput name="password" id="password" type="password" placeholder="Password..." required />
      <CredentialsInput name="passwordConfirmation" id="passwordConfirmation" type="password" placeholder="Password confirmation..." required />
      <CredentialsInput name="email" id="email" type="email" placeholder="Email..." required />
      <CylinderButton type="submit" bgColor="blue" textColor="white">
        <strong>Sign up</strong>
      </CylinderButton>
    </StyledForm>
  );
};

export default SignUpForm;
