import React from 'react';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';

export const StyledIcon = styled(GrClose)`
  cursor: pointer;
`;

const CloseIcon = ({ onClick, className }) => <StyledIcon onClick={onClick} className={className} />;

CloseIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CloseIcon;
