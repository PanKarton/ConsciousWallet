import React, { useEffect } from 'react';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import TextareaAutosize from 'react-textarea-autosize';
import { StyledForm, StyledWrapper } from './NewTweetForm.styles';
import CharactersNumberProgressbar from 'components/atoms/CharactersNumberProgressbar/CharactersNumberProgressbar';
import { useForm } from 'react-hook-form';
import useNewTweet from 'hooks/useNewTweet';

const NewTweetForm = () => {
  const { handleSubmit, register, watch } = useForm();
  const { canTweet, setCanTweet, contentLength, setContentLength, checkIfCanTweet, handleAddTwitter } = useNewTweet();

  useEffect(() => {
    const subscription = watch(({ content }) => {
      setContentLength(content.length);
      checkIfCanTweet(content.length);
    });

    return () => subscription.unsubscribe();
  }, [watch, setCanTweet, setContentLength, checkIfCanTweet]);

  return (
    <StyledWrapper>
      <div className="profile-image-wrapper">
        <ProfileImageCircle />
      </div>
      <StyledForm onSubmit={handleSubmit(handleAddTwitter)}>
        <TextareaAutosize {...register('content')} className="tweet-content" placeholder={`What's happening?`} />
        <div className="flex-bottom">
          <div className="circural-bar-wrapper">
            <CharactersNumberProgressbar number={contentLength} />
          </div>
          <CylinderButton bgColor="blue" textColor="white" type="submit" disabled={!canTweet}>
            Tweet
          </CylinderButton>
        </div>
      </StyledForm>
    </StyledWrapper>
  );
};

// NewTweetForm.propTypes = {};

export default NewTweetForm;
