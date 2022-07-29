import React from 'react';
import PropTypes from 'prop-types';
import { Initials, StyledWrapper } from './ProfileImageCircle.styles';

const ProfileImageCircle = ({ imgUrl, hasHoverShadow, firstName, lastName, imageBackgroundColor }) => {
  const initials = `${firstName?.charAt(0).toUpperCase()}${lastName?.charAt(0).toUpperCase()}`;
  return (
    <StyledWrapper imgUrl={imgUrl} hasHoverShadow={hasHoverShadow}>
      {imgUrl ? (
        <div className="image" />
      ) : (
        <Initials backgroundColor={imageBackgroundColor}>
          <span className="initials-span">{initials}</span>
        </Initials>
      )}
    </StyledWrapper>
  );
};

ProfileImageCircle.propTypes = {
  imgUrl: PropTypes.string,
  hasHoverShadow: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  imageBackgroundColor: PropTypes.number,
};

export default ProfileImageCircle;
