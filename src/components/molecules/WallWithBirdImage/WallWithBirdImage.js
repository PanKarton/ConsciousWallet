import React from 'react';
import { BirdWrapper, WallWrapper } from './WallWithBirdImage.styles';
import { FaTwitter } from 'react-icons/fa';
import leftBackground from 'assets/img/logo192.png';
import { useTheme } from 'styled-components';

const WallWithBirdImage = () => {
  const theme = useTheme();

  return (
    <WallWrapper img={leftBackground}>
      <BirdWrapper>
        <FaTwitter color={theme.colors.white} style={{ width: '100%', height: '100%' }} />
      </BirdWrapper>
    </WallWrapper>
  );
};

export default WallWithBirdImage;
