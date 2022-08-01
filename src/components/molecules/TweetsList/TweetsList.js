import React from 'react';
import Tweet from '../Tweet/Tweet';
import styled from 'styled-components';
import useHomeTweetList from 'hooks/useHomeTweetList';
import LoadingCircle from 'components/atoms/LoadingCircle/LoadingCircle';

const StyledTweetsList = styled.ul`
  width: 100%;
`;

const TweetsList = () => {
  const { tweets } = useHomeTweetList();

  return tweets ? (
    <StyledTweetsList>
      {tweets.map(({ content, publicationDate, likes, id, authorId }) => (
        <li key={id}>
          <Tweet textContent={content} id={id} authorId={authorId} timeSincePublication={publicationDate} likesNum={likes} />
        </li>
      ))}
    </StyledTweetsList>
  ) : (
    <LoadingCircle />
  );
};

export default TweetsList;
