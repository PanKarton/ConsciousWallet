import React from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import TextareaAutosize from 'react-textarea-autosize';
import { StyledForm, StyledWrapper } from './NewTweetForm.styles';

const NewTweetForm = (props) => (
  <StyledWrapper>
    <div className="profile-image-wrapper">
      <ProfileImageCircle />
    </div>
    <StyledForm>
      <TextareaAutosize className="tweet-content" placeholder={`What's happening?`} />
      <CylinderButton bgColor="blue" textColor="white" type="submit">
        Tweet
      </CylinderButton>
    </StyledForm>
  </StyledWrapper>
);

NewTweetForm.propTypes = {};

export default NewTweetForm;
