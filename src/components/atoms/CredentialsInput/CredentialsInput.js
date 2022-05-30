import React from 'react';
import { StyledInput } from './CredentialsInput.styles';

const CredentialsInput = ({ name, id, placeholder, type = 'text', required }) => (
  <StyledInput>
    <label htmlFor={id} />
    <input name={name} id={id} type={type} placeholder={placeholder} required={required} />
  </StyledInput>
);

export default CredentialsInput;
