import React from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import { AiOutlineHeart } from 'react-icons/ai';
import { StyledTweedWrapper } from './Tweet.styles';
import TweetStat from 'components/atoms/TweetStat/TweetStat';

const Tweet = ({ name, lastName, login, textContent, timeSincePublication, likesNum }) => {
  return (
    <StyledTweedWrapper>
      <div className="image-wrapper">
        <ProfileImageCircle />
      </div>
      <div className="content-wrapper">
        <div className="user-data">
          <span className="name">{`${name} ${lastName}`}</span>
          <span className="login">{`@${login}`}</span>
          <span className="time">{timeSincePublication}</span>
        </div>
        <div className="tweet-text-wrapper">
          <span className="tweet-text">{textContent}</span>
        </div>
        <div className="tweet-stats">
          <TweetStat number={22} stat={'likes'}>
            <AiOutlineHeart />
          </TweetStat>
        </div>
      </div>
    </StyledTweedWrapper>
  );
};

Tweet.propTypes = {};

export default Tweet;
