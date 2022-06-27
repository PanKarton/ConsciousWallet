import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: default;
  .icon-wrapper {
    padding: 0.75rem;
  }
  & .active {
    display: block;
  }
  &.active .active {
    display: none;
  }
  & .passive {
    display: none;
  }
  &.active .passive {
    display: block;
  }

  & > .word {
    padding-left: 0.75rem;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xxm};
    color: ${({ theme }) => theme.colors.black};
  }
  &.active > .word {
    font-weight: 700;
  }
`;

const MainNavLinkButton = ({ to, children, word, windowWidth }) => (
  <StyledNavLink exact="true" to={to}>
    <div className="icon-wrapper">{children}</div>
    {windowWidth < 1300 ? null : <span className="word">{word}</span>}
  </StyledNavLink>
);

MainNavLinkButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.array,
  word: PropTypes.string,
  windowWidth: PropTypes.number,
};

export default MainNavLinkButton;
