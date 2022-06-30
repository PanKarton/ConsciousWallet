import React from 'react';
import { ImQuill } from 'react-icons/im';
import { StyledButton } from './NewTweetButton.styles';

const NewTweetButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <span className="tweet-word">Tweet</span>
    <ImQuill className="quill-icon" />
  </StyledButton>
);

export default NewTweetButton;
