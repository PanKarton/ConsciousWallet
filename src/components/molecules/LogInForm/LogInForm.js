import React from 'react';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { StyledForm } from './LogInForm.styles';

const LogInForm = () => (
  <StyledForm>
    <CredentialsInput name="login" id="login" type="text" placeholder="Phone, email or username" />
    <CredentialsInput name="password" id="password" type="password" placeholder="Password" />
    <CylinderButton type="submit" bgColor="blue" textColor="white">
      Log in
    </CylinderButton>
  </StyledForm>
);

export default LogInForm;
