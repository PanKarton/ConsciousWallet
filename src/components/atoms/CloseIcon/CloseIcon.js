import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './CloseIcon.styles';

const CloseIcon = ({ onClick, className }) => <StyledIcon onClick={onClick} className={className} />;

CloseIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CloseIcon;
