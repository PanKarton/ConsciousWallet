import React from 'react';
import PropTypes from 'prop-types';
import { ImQuill } from 'react-icons/im';
import styled from 'styled-components';

const StyledButton = styled.button``;

const NewTweetButton = ({ windowWidth }) => <StyledButton>{windowWidth > 1300 ? <p>Tweet</p> : <ImQuill />}</StyledButton>;

NewTweetButton.propTypes = {};

export default NewTweetButton;
