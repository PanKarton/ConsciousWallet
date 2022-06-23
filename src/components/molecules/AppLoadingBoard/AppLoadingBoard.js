import React from 'react';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';
import { StyledWrapper } from './AppLoadingBoard.styles';

const AppLoadingBoard = () => (
  <StyledWrapper className="board-wrapper">
    <div className="bird-wrapper">
      <BirdIcon />
    </div>
  </StyledWrapper>
);

export default AppLoadingBoard;
