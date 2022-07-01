import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink } from './MainNavLinkButton.styles';

const MainNavLinkButton = ({ to, children, word, windowWidth }) => (
  <StyledNavLink exact="true" to={to}>
    <div className="icon-wrapper">{children}</div>
    {windowWidth < 1301 ? null : <span className="word">{word}</span>}
  </StyledNavLink>
);

MainNavLinkButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.array,
  word: PropTypes.string,
  windowWidth: PropTypes.number,
};

export default MainNavLinkButton;
