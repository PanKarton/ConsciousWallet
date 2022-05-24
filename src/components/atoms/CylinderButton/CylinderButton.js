import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './CylinderButton.styles';

const CylinderButton = ({ text }) => {
  return <Button>{text}</Button>;
};

CylinderButton.propTypes = {};

export default CylinderButton;
