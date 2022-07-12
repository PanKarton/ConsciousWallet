import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  & > h2.page-header {
    font-size: ${({ theme }) => theme.fontSize.xxm};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const PageTopHeader = ({ children }) => (
  <StyledWrapper>
    <h2 className="page-header">
      <strong>{children}</strong>
    </h2>
  </StyledWrapper>
);

PageTopHeader.propTypes = {};

export default PageTopHeader;
