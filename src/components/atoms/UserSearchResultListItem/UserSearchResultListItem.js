import React from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from '../ProfileImageCircle/ProfileImageCircle';
import { StyledWrapper } from './UserSearchResultListItem.styles';
const UserSearchResultListItem = ({
  user: {
    login,
    name: { first, last },
    imageBackgroundColor,
    imgUrl,
    userBio = 'No bio provided.',
  },
}) => (
  <StyledWrapper>
    <div className="flex-container">
      <div className="image-wrapper">
        <ProfileImageCircle imgUrl={imgUrl} lastName={last} firstName={first} imageBackgroundColor={imageBackgroundColor} />
      </div>
      <div className="user-data">
        <span className="user-name">
          <strong>{`${first} ${last}`}</strong>
        </span>
        <span className="user-login">{`@${login}`}</span>
        <span className="user-bio">{userBio}</span>
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
    imageBackgroundColor: PropTypes.string,
    imgUrl: PropTypes.string,
    userBio: PropTypes.string,
  }),
};
export default UserSearchResultListItem;
