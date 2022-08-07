import React from 'react';
import PropTypes from 'prop-types';
import { StyledUserWrapper } from './UserSuggestionItem.styles';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';

const UserSuggestionItem = ({
  user: {
    imageBackgroundColor,
    login,
    id,
    imgUrl,
    name: { first, last },
  },
}) => (
  <StyledUserWrapper>
    <div className="r-flex">
      <div className="img-wrapper">
        <ProfileImageCircle imgUrl={imgUrl} hasHoverShadow firstName={first} lastName={last} imageBackgroundColor={imageBackgroundColor} />
      </div>
      <div className="data-wrapper">
        <div className="user-data">
          <span className="user-name">
            <strong>{`${first} ${last}`}</strong>
          </span>
          <span className="user-login">{`@${login}`}</span>
        </div>
        <div className="follow-button-wrapper">
          <CylinderButton bgColor="black" textColor="white">
            Follow
          </CylinderButton>
        </div>
      </div>
    </div>
  </StyledUserWrapper>
);

UserSuggestionItem.propTypes = {
  user: PropTypes.shape({
    imageBackgroundColor: PropTypes.number,
    login: PropTypes.string,
    id: PropTypes.string,
    imgUrl: PropTypes.string,
    name: PropTypes.shape({ first: PropTypes.string, last: PropTypes.string }),
  }),
};

export default UserSuggestionItem;
