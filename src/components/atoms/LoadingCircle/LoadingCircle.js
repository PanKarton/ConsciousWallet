import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { StyledWrapper } from './LoadingCircle.styles';

const LoadingCircle = () => (
  <StyledWrapper>
    <div className="icon-wrapper">
      <AiOutlineLoading3Quarters className="icon" />
    </div>
  </StyledWrapper>
);

export default LoadingCircle;
