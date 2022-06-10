import React from 'react';
import PropTypes from 'prop-types';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import styled from 'styled-components';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';

const StyledWrapper = styled.div`
  border: 1px solid red;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bird-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: static;
      color: ${({ theme }) => theme.colors.twBlue};
      font-size: 4rem;
    }
  }
`;

const SignUpFinal = (props) => (
  <StyledWrapper>
    <div className="bird-wrapper">
      <BirdIcon />
    </div>
    <p></p>
    <CylinderButton>Get Started</CylinderButton>
  </StyledWrapper>
);

SignUpFinal.propTypes = {};

export default SignUpFinal;
