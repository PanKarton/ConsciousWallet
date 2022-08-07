import React from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from '../ProfileImageCircle/ProfileImageCircle';
import { StyledWrapper } from './PageTopHeader.styles';
import { useAuth } from 'providers/AuthProvider';

const PageTopHeader = ({ children }) => {
  const {
    currentUser: {
      name: { first, last },
      imageBackgroundColor,
    },
  } = useAuth();

  return (
    <StyledWrapper>
      <div className="image-wrapper">
        <ProfileImageCircle firstName={first} lastName={last} imageBackgroundColor={imageBackgroundColor} />
      </div>
      <h2 className="page-header">
        <strong>{children}</strong>
      </h2>
    </StyledWrapper>
  );
};

PageTopHeader.propTypes = {
  children: PropTypes.string,
};

export default PageTopHeader;
