import React from 'react';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';
import { StyledHeader, StyledNavLink } from './BirdMainHeader.styles';

const BirdMainHeader = () => (
  <StyledHeader>
    <StyledNavLink to="home">
      <BirdIcon />
    </StyledNavLink>
  </StyledHeader>
);

export default BirdMainHeader;
