import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import TextareaAutosize from 'react-textarea-autosize';
import { StyledForm, StyledWrapper } from './NewTweetForm.styles';
import CharactersNumberProgressbar from 'components/atoms/CharactersNumberProgressbar/CharactersNumberProgressbar';
import { useForm } from 'react-hook-form';

const NewTweetForm = (props) => {
  const { handleSubmit, register, watch } = useForm();
  const [contentLength, setContentLength] = useState(0);

  const submit = (data) => console.log(data);

  useEffect(() => {
    const subscription = watch(({ content }) => {
      setContentLength(content.length);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <StyledWrapper>
      <div className="profile-image-wrapper">
        <ProfileImageCircle />
      </div>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <TextareaAutosize {...register('content')} className="tweet-content" placeholder={`What's happening?`} />
        <div className="flex-bottom">
          <div className="circural-bar-wrapper">
            <CharactersNumberProgressbar number={contentLength} />
          </div>
          <CylinderButton bgColor="blue" textColor="white" type="submit">
            Tweet
          </CylinderButton>
        </div>
      </StyledForm>
    </StyledWrapper>
  );
};

NewTweetForm.propTypes = {};

export default NewTweetForm;
