import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import { AiOutlineHeart } from 'react-icons/ai';
import { StyledTweedWrapper } from './Tweet.styles';
import TweetStat from 'components/atoms/TweetStat/TweetStat';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import useTweetPost from 'hooks/useTweetPost';

const Tweet = ({ authorId, id, textContent, timeSincePublication, likesNum }) => {
  const { authorData, initiateTweetPost, refactorPostDate, loadingDeleteIcon, handleDeleteTweet } = useTweetPost();

  useEffect(() => {
    initiateTweetPost(authorId);
  }, [initiateTweetPost, authorId]);

  return (
    <StyledTweedWrapper>
      <div className="image-wrapper">
        <ProfileImageCircle hasHoverShadow />
      </div>
      <div className="content-wrapper">
        <div className="user-data">
          <span className="name">{authorData ? `${authorData.name.first} ${authorData.name.last}` : 'Loading...'}</span>
          <span className="login">{authorData ? `@${authorData.login}` : 'Loading...'}</span>
          <div className="space-dot" />
          <span className="time">{refactorPostDate(timeSincePublication)}</span>
        </div>
        <div className="tweet-text-wrapper">
          <span className="tweet-text">{textContent}</span>
        </div>
        <div className="tweet-stats">
          <TweetStat number={likesNum} stat={'likes'}>
            <AiOutlineHeart />
          </TweetStat>
        </div>
      </div>
      <div className="delete-icon-wrapper">{loadingDeleteIcon ? <AiOutlineLoading3Quarters className="loading-icon" /> : <CloseIcon onClick={() => handleDeleteTweet(id, authorData.id)} />}</div>
    </StyledTweedWrapper>
  );
};

Tweet.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  login: PropTypes.string,
  textContent: PropTypes.string,
  // timeSincePublication: PropTypes.string,
  likesNum: PropTypes.number,
};

export default Tweet;
