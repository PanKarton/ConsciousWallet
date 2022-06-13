import React from 'react';
import { InputWrapper, StyledWrapper } from './CredentialsInput.styles';

const CredentialsInput = React.forwardRef(({ secondeErrorMessage, isHalfWidth, name, id, placeholder, type = 'text', required, errorMessage, ...props }, ref) => (
  <StyledWrapper isHalfWidth={isHalfWidth}>
    <InputWrapper>
      <label htmlFor={id} />
      <input name={name} id={id} type={type} placeholder={placeholder} required={required} ref={ref} {...props} />
    </InputWrapper>
    {errorMessage && <p>{errorMessage}</p>}
    {secondeErrorMessage && <p>{secondeErrorMessage}</p>}
  </StyledWrapper>
));

export default CredentialsInput;
