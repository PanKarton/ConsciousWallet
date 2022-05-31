import React from 'react';
import { BirdWrapper, WallWrapper } from './WallWithBirdImage.styles';
import leftBackground from 'assets/img/logo192.png';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';

const WallWithBirdImage = () => {
  return (
    <WallWrapper img={leftBackground}>
      <BirdWrapper>
        <BirdIcon />
      </BirdWrapper>
    </WallWrapper>
  );
};

export default WallWithBirdImage;
