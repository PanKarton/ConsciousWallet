import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './CylinderButton.styles';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const CylinderButton = ({ children, bgColor = 'white', textColor = 'black', disabled, isLoading, ...props }) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor} disabled={disabled} {...props}>
      {isLoading ? <AiOutlineLoading3Quarters className="loading-icon" /> : children}
    </StyledButton>
  );
};

CylinderButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default CylinderButton;
