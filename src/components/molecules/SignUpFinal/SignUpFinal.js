import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';

import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';
import { useNavigate } from 'react-router-dom';
import { StyledWrapper } from './SignUpFinal.styles';

const SignUpFinal = ({ canMoveNext, setStep }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Move to step 1/2 if refreshed on step 2/2
    if (!canMoveNext) navigate('/signup');
    setStep(3);
  }, [canMoveNext, navigate, setStep]);

  return (
    <StyledWrapper>
      <div className="bird-wrapper">
        <BirdIcon />
      </div>
      <h2 className="welcome-heading">Welcome to Twitter-copy!</h2>
      <p className="message">Make your first awesome tweet and connect with people all over the world!</p>
      <CylinderButton bgColor="blue" textColor="white" type="submit">
        Get Started
      </CylinderButton>
    </StyledWrapper>
  );
};

SignUpFinal.propTypes = {
  canMoveNext: PropTypes.bool,
  setStep: PropTypes.func,
};

export default SignUpFinal;
