import React, { useEffect } from 'react';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import TextareaAutosize from 'react-textarea-autosize';
import { StyledForm, StyledWrapper } from './NewTweetForm.styles';
import CharactersNumberProgressbar from 'components/atoms/CharactersNumberProgressbar/CharactersNumberProgressbar';
import { useForm } from 'react-hook-form';
import useNewTweet from 'hooks/useNewTweet';
import { useAuth } from 'providers/AuthProvider';

const NewTweetForm = () => {
  const { handleSubmit, register, watch } = useForm();
  const { isButtonLoading, canTweet, setCanTweet, contentLength, setContentLength, checkIfCanTweet, handleAddTwitter, tweetContent, setTweetContent } = useNewTweet();
  const {
    currentUser: {
      name: { first, last },
      imageBackgroundColor,
    },
  } = useAuth();

  useEffect(() => {
    const subscription = watch(({ content }) => {
      setTweetContent(content);
      setContentLength(content.length);
      checkIfCanTweet(content.length);
    });

    return () => subscription.unsubscribe();
  }, [watch, setCanTweet, setContentLength, checkIfCanTweet, setTweetContent]);

  return (
    <StyledWrapper>
      <div className="profile-image-wrapper">
        <ProfileImageCircle firstName={first} lastName={last} imageBackgroundColor={imageBackgroundColor} />
      </div>
      <StyledForm onSubmit={handleSubmit(handleAddTwitter)}>
        <TextareaAutosize {...register('content')} className="tweet-content" placeholder={`What's happening?`} value={tweetContent} />
        <div className="flex-bottom">
          <div className="circural-bar-wrapper">{contentLength === 0 ? null : <CharactersNumberProgressbar number={contentLength} />}</div>
          <CylinderButton bgColor="blue" textColor="white" type="submit" disabled={!canTweet} isLoading={isButtonLoading}>
            Tweet
          </CylinderButton>
        </div>
      </StyledForm>
    </StyledWrapper>
  );
};

export default NewTweetForm;
