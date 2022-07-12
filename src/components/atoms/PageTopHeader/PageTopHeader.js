import React from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from '../ProfileImageCircle/ProfileImageCircle';
import { StyledWrapper } from './PageTopHeader.styles';

const PageTopHeader = ({ children }) => (
  <StyledWrapper>
    <div className="image-wrapper">
      <ProfileImageCircle />
    </div>
    <h2 className="page-header">
      <strong>{children}</strong>
    </h2>
  </StyledWrapper>
);

PageTopHeader.propTypes = {
  children: PropTypes.string,
};

export default PageTopHeader;
