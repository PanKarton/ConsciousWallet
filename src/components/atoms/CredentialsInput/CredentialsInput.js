import React from 'react';
import { InputWrapper, StyledWrapper } from './CredentialsInput.styles';

const CredentialsInput = React.forwardRef(({ secondErrorMessage, isHalfWidth, name, id, placeholder, type = 'text', required, errorMessage, ...props }, ref) => (
  <StyledWrapper isHalfWidth={isHalfWidth}>
    <InputWrapper isError={errorMessage || secondErrorMessage ? true : false}>
      <label htmlFor={id} />
      <input name={name} id={id} type={type} placeholder={placeholder} required={required} ref={ref} {...props} />
    </InputWrapper>
    {errorMessage && <p>{errorMessage}</p>}
    {secondErrorMessage && <p>{secondErrorMessage}</p>}
  </StyledWrapper>
));

export default CredentialsInput;
