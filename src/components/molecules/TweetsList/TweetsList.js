import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Tweet/Tweet';
import styled from 'styled-components';
import useFirebaseFirestore from 'hooks/useFirebaseFirestore';

const Asd = styled.div`
  width: 100%;
`;

const TweetsList = (props) => {
  const arr = [];
  const { getXLastTweets } = useFirebaseFirestore();

  useEffect(() => {
    getXLastTweets(2);
  }, [getXLastTweets]);

  return (
    <Asd>
      {arr.map((el) => (
        <Tweet />
      ))}
    </Asd>
  );
};

TweetsList.propTypes = {};

export default TweetsList;
