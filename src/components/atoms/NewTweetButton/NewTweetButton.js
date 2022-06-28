import React from 'react';
import PropTypes from 'prop-types';
import { ImQuill } from 'react-icons/im';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -4.5rem;
  right: 1rem;
  width: 3.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  cursor: default;
  background-color: ${({ theme }) => theme.colors.twBlue};
  color: ${({ theme }) => theme.colors.white};

  span.tweet-word {
    display: none;
    @media screen and (min-width: 1301px) {
      display: inline-block;
      font-size: ${({ theme }) => theme.fontSize.xm};
      font-weight: 700;
    }
  }
  .quill-icon {
    font-size: 1.5rem;
    @media screen and (min-width: 1301px) {
      display: none;
    }
  }
  @media screen and (min-width: 501px) {
    position: static;
    width: 3.125rem;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1301px) {
    width: 14rem;
    height: 3.125rem;
    border-radius: 1000rem;
    cursor: pointer;
    aspect-ratio: unset;
    &:hover {
      background-color: ${({ theme }) => theme.colors.twBlueHover};
    }
  }
`;

const NewTweetButton = ({ windowWidth }) => (
  <StyledButton>
    <span className="tweet-word">Tweet</span>
    <ImQuill className="quill-icon" />
  </StyledButton>
);

NewTweetButton.propTypes = {};

export default NewTweetButton;
