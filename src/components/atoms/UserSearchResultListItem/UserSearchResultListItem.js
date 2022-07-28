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
        <span className="user-bio">Jestem Miriamcia i cos tam cos tam se pisze tralala </span>
      </div>
    </div>
  </StyledWrapper>
);
UserSearchResultListItem.propTypes = {};
export default UserSearchResultListItem;
