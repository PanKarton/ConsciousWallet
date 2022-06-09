import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './Select.styles';

const Select = React.forwardRef(({ array, ...props }, ref) => (
  <StyledSelect {...props} ref={ref}>
    {array.map((element, index) => {
      // If array is made of strings, then use index as value
      const isElementString = typeof element === 'string' || element instanceof String ? true : false;

      return (
        <option key={index} value={isElementString ? index : element}>
          {element}
        </option>
      );
    })}
  </StyledSelect>
));

Select.propTypes = {
  array: PropTypes.array,
};

export default Select;
