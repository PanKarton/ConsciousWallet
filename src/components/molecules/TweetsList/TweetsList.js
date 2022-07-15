import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Tweet/Tweet';
import styled from 'styled-components';

const Asd = styled.div`
  width: 100%;
`;

const TweetsList = (props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9];

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
