import React from 'react';
import { InputWrapper, StyledWrapper } from './CredentialsInput.styles';
import PropTypes from 'prop-types';

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

CredentialsInput.propTypes = {
  secondErrorMessage: PropTypes.string,
  isHalfWidth: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default CredentialsInput;
