import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

export const StyledIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const CloseIcon = ({ onClick }) => <StyledIcon onClick={onClick} />;

CloseIcon.propTypes = {
  onClick: PropTypes.func,
};

export default CloseIcon;
