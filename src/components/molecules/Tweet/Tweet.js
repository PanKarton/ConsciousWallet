import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import { AiOutlineHeart } from 'react-icons/ai';
import { StyledTweetWrapper } from './Tweet.styles';
import TweetStat from 'components/atoms/TweetStat/TweetStat';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import useTweetPost from 'hooks/useTweetPost';
import { useAuth } from 'providers/AuthProvider';
import LoadingCircle from 'components/atoms/LoadingCircle/LoadingCircle';

const Tweet = ({ authorId, id, textContent, timeSincePublication, likesNum }) => {
  const { authorData, initiateTweetPost, refactorPostDate, loadingDeleteIcon, handleDeleteTweet } = useTweetPost();
  const { currentUser } = useAuth();

  useEffect(() => {
    initiateTweetPost(authorId);
  }, [initiateTweetPost, authorId]);

  return (
    <StyledTweetWrapper>
      {!authorData ? (
        <LoadingCircle />
      ) : (
        <>
          <div className="image-wrapper">
            <ProfileImageCircle hasHoverShadow firstName={authorData.name.first} lastName={authorData.name.last} imageBackgroundColor={authorData.imageBackgroundColor} />
          </div>
          <div className="content-wrapper">
            <div className="user-data">
              <span className="name">{`${authorData.name.first} ${authorData.name.last}`}</span>
              <span className="login">{`@${authorData.login}`}</span>
              <div className="space-dot" />
              <span className="time">{refactorPostDate(timeSincePublication)}</span>
              {authorId === currentUser.id ? (
                <div className="delete-icon-wrapper">
                  {loadingDeleteIcon ? <AiOutlineLoading3Quarters className="loading-icon" /> : <CloseIcon onClick={() => handleDeleteTweet(id, authorData.id)} />}
                </div>
              ) : null}
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
        </>
      )}
    </StyledTweetWrapper>
  );
};

Tweet.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  login: PropTypes.string,
  textContent: PropTypes.string,
  timeSincePublication: PropTypes.number,
  likesNum: PropTypes.number,
};

export default Tweet;
