import React from 'react';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';

export const StyledIcon = styled(GrClose)`
  cursor: pointer;
`;

const CloseIcon = ({ onClick }) => <StyledIcon onClick={onClick} />;

CloseIcon.propTypes = {
  onClick: PropTypes.func,
};

export default CloseIcon;
