import React, { useEffect } from 'react';
import Tweet from '../Tweet/Tweet';
import styled from 'styled-components';
import useHomeTweetList from 'hooks/useHomeTweetList';

const StyledTweetsList = styled.ul`
  width: 100%;
`;

const TweetsList = (props) => {
  const { tweets, initiateTweetList } = useHomeTweetList();

  useEffect(() => {
    // Attach listener
    const unsubscribe = initiateTweetList();
    // Detach listener after demount
    return () => unsubscribe();
  }, [initiateTweetList]);

  return (
    <StyledTweetsList>
      {tweets.map(({ content, publicationDate, likes, id, authorId }) => (
        <li key={id}>
          <Tweet textContent={content} id={id} authorId={authorId} timeSincePublication={publicationDate} likesNum={likes} />
        </li>
      ))}
    </StyledTweetsList>
  );
};

TweetsList.propTypes = {};

export default TweetsList;
