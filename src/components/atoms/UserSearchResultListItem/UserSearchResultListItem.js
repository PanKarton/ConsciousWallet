import React from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from '../ProfileImageCircle/ProfileImageCircle';
import { StyledWrapper } from './UserSearchResultListItem.styles';

const UserSearchResultListItem = ({ user: { login, firstName, lastName, imageBackgroundColor, imgUrl, userBio } }) => (
  <StyledWrapper>
    <div className="flex-container">
      <div className="image-wrapper">
        <ProfileImageCircle imgUrl={imgUrl} lastName={lastName} firstName={firstName} imageBackgroundColor={imageBackgroundColor} />
      </div>
      <div className="user-data">
        <span className="user-name">
          <strong>{`${firstName} ${lastName}`}</strong>
        </span>
        <span className="user-login">{`@${login}`}</span>
        <span className="user-bio">{userBio || 'No bio provided'}</span>
      </div>
    </div>
  </StyledWrapper>
);

UserSearchResultListItem.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    imageBackgroundColor: PropTypes.number,
    imgUrl: PropTypes.string,
    userBio: PropTypes.string,
  }),
};

export default UserSearchResultListItem;
