import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './TweetStat.styles';

const TweetStat = ({ children, number, stat }) => (
  <StyledWrapper stat={stat}>
    <div className="icon-wrapper">{children}</div>
    <div className="number-wrapper">
      <span className="number">{number}</span>
    </div>
  </StyledWrapper>
);

TweetStat.propTypes = {
  children: PropTypes.element,
  number: PropTypes.number,
  stat: PropTypes.string,
};

export default TweetStat;
