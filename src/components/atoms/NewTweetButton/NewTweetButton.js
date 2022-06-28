import React from 'react';
import { ImQuill } from 'react-icons/im';
import { StyledButton } from './NewTweetButton.styles';

const NewTweetButton = () => (
  <StyledButton>
    <span className="tweet-word">Tweet</span>
    <ImQuill className="quill-icon" />
  </StyledButton>
);

export default NewTweetButton;
