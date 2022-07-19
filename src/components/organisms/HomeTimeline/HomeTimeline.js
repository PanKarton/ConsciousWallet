import PageTopHeader from 'components/atoms/PageTopHeader/PageTopHeader';
import NewTweetForm from 'components/molecules/NewTweetForm/NewTweetForm';
import TweetsList from 'components/molecules/TweetsList/TweetsList';
import React from 'react';
import { StyledWrapper } from './HomeTimeline.styles';

const HomeTimeline = (props) => {
  return (
    <StyledWrapper>
      <PageTopHeader>Home</PageTopHeader>
      <div className="new-tweet-form-wrapper">
        <NewTweetForm />
      </div>
      <TweetsList />
    </StyledWrapper>
  );
};

HomeTimeline.propTypes = {};

export default HomeTimeline;
