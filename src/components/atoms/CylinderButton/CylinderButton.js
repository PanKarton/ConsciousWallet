import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './CylinderButton.styles';

const CylinderButton = ({ children, bgColor = 'white', textColor = 'black' }) => {
  return (
    <Button bgColor={bgColor} textColor={textColor}>
      {children}
    </Button>
  );
};

CylinderButton.propTypes = {};

export default CylinderButton;
