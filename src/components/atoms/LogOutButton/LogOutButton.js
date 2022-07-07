import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import ProfileImageCircle from '../ProfileImageCircle/ProfileImageCircle';
import { StyledButton } from './LogOutButton.styles';

const LogOutButton = () => {
  return (
    <StyledButton to="logout">
      <div className="profile-wrapper">
        <div className="profile-image-wrapper">
          <ProfileImageCircle />
        </div>
        <div className="profile-info-wrapper">
          <span className="name">Arek Piersiak</span>
          <span className="login">@PanKarton</span>
        </div>
      </div>
      <div className="icon-wrapper">
        <BiLogOut className="logout-icon" />
      </div>
    </StyledButton>
  );
};

export default LogOutButton;
