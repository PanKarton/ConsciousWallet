import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './CylinderButton.styles';

const CylinderButton = ({ children, bgColor = 'white', textColor = 'black', ...props }) => {
  return (
    <Button bgColor={bgColor} textColor={textColor} {...props}>
      {children}
    </Button>
  );
};

CylinderButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default CylinderButton;
