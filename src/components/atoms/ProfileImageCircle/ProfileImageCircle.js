import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './ProfileImageCircle.styles';

const ProfileImageCircle = ({ imgUrl = 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200/0_PUSS-IN-BOOTS.jpg', hasHoverShadow }) => (
  <StyledWrapper imgUrl={imgUrl} hasHoverShadow={hasHoverShadow}>
    <div className="image" />
  </StyledWrapper>
);

ProfileImageCircle.propTypes = {
  imgUrl: PropTypes.string,
  hasHoverShadow: PropTypes.bool,
};

export default ProfileImageCircle;
