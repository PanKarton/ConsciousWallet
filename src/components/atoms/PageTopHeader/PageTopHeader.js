import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProfileImageCircle from '../ProfileImageCircle/ProfileImageCircle';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteBlurredTransparent};
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 1rem;
  padding-block: 1rem;
  & > .image-wrapper {
    height: 100%;
    width: 2rem;
    @media screen and (min-width: 501px) {
      display: none;
    }
  }
  & > h2.page-header {
    font-size: ${({ theme }) => theme.fontSize.xm};
    color: ${({ theme }) => theme.colors.black};
    @media screen and (min-width: 501px) {
      font-size: ${({ theme }) => theme.fontSize.xxm};
    }
  }
`;

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

PageTopHeader.propTypes = {};

export default PageTopHeader;
