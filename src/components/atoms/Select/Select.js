import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './Select.styles';

const Select = React.forwardRef(({ array, ...props }, ref) => (
  <StyledSelect {...props} ref={ref}>
    {array.map((element, index) => (
      <option key={index} value={element}>
        {element}
      </option>
    ))}
  </StyledSelect>
));

Select.propTypes = {
  array: PropTypes.array,
};

export default Select;
