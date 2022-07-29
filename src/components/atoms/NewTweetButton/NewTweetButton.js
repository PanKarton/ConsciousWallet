import PropTypes from 'prop-types';
import React from 'react';
import { ImQuill } from 'react-icons/im';
import { StyledButton } from './NewTweetButton.styles';

const NewTweetButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <span className="tweet-word">Tweet</span>
    <ImQuill className="quill-icon" />
  </StyledButton>
);

NewTweetButton.propTypes = {
  onClick: PropTypes.func,
};

export default NewTweetButton;
