import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './RadioInput.styles';

const RadioInput = React.forwardRef(({ name, id, labelText, ...props }, ref) => (
  <StyledWrapper>
    <label htmlFor={id}>{labelText}</label>
    <input type="radio" id={id} name={name} {...props} ref={ref} />
  </StyledWrapper>
));

RadioInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
};

export default RadioInput;
