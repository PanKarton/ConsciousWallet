import React from 'react';
import PropTypes from 'prop-types';
import { BiLogOut } from 'react-icons/bi';
import styled from 'styled-components';
import ProfileImageCircle from '../ProfileImageCircle/ProfileImageCircle';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0.75rem;
  right: 1rem;
  .profile-wrapper {
    display: none;
    @media screen and (min-width: 1301px) {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .profile-image-wrapper {
        width: 2.5rem;
      }
      .profile-info-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem;
        font-size: ${({ theme }) => theme.fontSize.m};
        .name {
          color: ${({ theme }) => theme.colors.black};
          font-weight: 700;
        }
        .login {
          color: ${({ theme }) => theme.colors.textGray};
        }
      }
    }
  }
  .logout-icon {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSize.xl};
    &:hover {
      color: ${({ theme }) => theme.colors.redDarkHover};
    }
  }

  @media screen and (min-width: 501px) {
    position: absolute;
    bottom: 1rem;
    top: auto;
    right: 50%;
    transform: translateX(50%);
  }
  @media screen and (min-width: 1301px) {
    padding: 0.75rem;
    width: 15.5rem;
    height: 4rem;
    border-radius: 1000rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.whiteHover};
    }
  }
`;

const LogOutButton = (props) => (
  <StyledWrapper>
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
  </StyledWrapper>
);

LogOutButton.propTypes = {};

export default LogOutButton;
