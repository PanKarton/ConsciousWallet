import React from 'react';
import { StyledWrapper } from './CredentialsInput.styles';

const CredentialsInput = React.forwardRef(({ name, id, placeholder, type = 'text', required, ...props }, ref) => (
  <StyledWrapper>
    <label htmlFor={id} />
    <input name={name} id={id} type={type} placeholder={placeholder} required={required} ref={ref} {...props} />
  </StyledWrapper>
));

export default CredentialsInput;
