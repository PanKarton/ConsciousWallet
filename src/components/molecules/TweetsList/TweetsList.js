import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Tweet/Tweet';
import styled from 'styled-components';
import useFirebaseFirestore from 'hooks/useFirebaseFirestore';

const Asd = styled.div`
  width: 100%;
`;

const TweetsList = (props) => {
  const [tweets, setTweets] = useState([]);
  const { getXLastTweets, listenForCollectionGroupChanges } = useFirebaseFirestore();

  useEffect(() => {
    // Attach listener
    const unsubscribe = listenForCollectionGroupChanges(setTweets);
    (async () => {
      try {
        const tweetsResponse = await getXLastTweets(10);
        setTweets(tweetsResponse);
      } catch (err) {
        console.log('TweetsList useEffect error:', err);
      }
    })();
    // Detach listener after demount
    return () => unsubscribe();
  }, [getXLastTweets, listenForCollectionGroupChanges]);

  return (
    <Asd>
      {tweets.map(({ content, publicationDate, likes, id }) => (
        <Tweet key={id} textContent={content} timeSincePublication={publicationDate} likesNum={likes} />
      ))}
    </Asd>
  );
};

TweetsList.propTypes = {};

export default TweetsList;
