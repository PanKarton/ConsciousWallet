import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 4rem;
  @media screen and (min-width: 501px) {
    width: 4.5rem;
  }
  .icon-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg {
      position: relative;
      z-index: 1000;
      transition: color 0.25s;
    }
    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: ${({ theme, stat }) => {
        if (stat === 'likes') return theme.colors.twBlueLighter;
      }};
      z-index: 100;
      opacity: 0;
      transition: opacity 0.125s;
    }
  }
  .number-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .number {
      color: ${({ theme }) => theme.colors.textGray};
      font-size: ${({ theme }) => theme.fontSize.m};
      transition: color 0.125s;
      font-weight: 400;
    }
  }
  &:hover > .icon-wrapper::after {
    opacity: 1;
  }
  &:hover .number {
    color: ${({ theme }) => theme.colors.twBlue};
  }
  &:hover > .icon-wrapper > svg {
    color: ${({ theme }) => theme.colors.twBlue};
  }
`;

const TweetStat = ({ children, number, stat }) => (
  <StyledWrapper stat={stat}>
    <div className="icon-wrapper">{children}</div>
    <div className="number-wrapper">
      <span className="number">{number}</span>
    </div>
  </StyledWrapper>
);

TweetStat.propTypes = {};

export default TweetStat;
