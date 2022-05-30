import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './CylinderButton.styles';

const CylinderButton = ({ children, bgColor = 'white', textColor = 'black', ...props }) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor} {...props}>
      {children}
    </StyledButton>
  );
};

CylinderButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default CylinderButton;
