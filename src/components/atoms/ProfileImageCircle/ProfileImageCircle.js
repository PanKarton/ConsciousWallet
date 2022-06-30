import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 1000rem;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProfileImageCircle = ({ imgUrl = 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200/0_PUSS-IN-BOOTS.jpg' }) => <StyledWrapper imgUrl={imgUrl} />;

ProfileImageCircle.propTypes = {
  imgUrl: PropTypes.string,
};

export default ProfileImageCircle;
