import React from 'react';
import { StyledInput } from './CredentialsInput.styles';

const CredentialsInput = ({ name, id, placeholder, type = 'text' }) => (
  <StyledInput>
    <label htmlFor={id} />
    <input name={name} id={id} type={type} placeholder={placeholder} />
  </StyledInput>
);

export default CredentialsInput;
