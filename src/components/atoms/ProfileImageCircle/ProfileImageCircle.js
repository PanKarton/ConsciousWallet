import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './ProfileImageCircle.styles';

const ProfileImageCircle = ({ imgUrl = 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200/0_PUSS-IN-BOOTS.jpg' }) => <StyledWrapper imgUrl={imgUrl} />;

ProfileImageCircle.propTypes = {
  imgUrl: PropTypes.string,
};

export default ProfileImageCircle;
