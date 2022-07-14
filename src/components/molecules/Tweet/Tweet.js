import React from 'react';
import PropTypes from 'prop-types';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import { AiOutlineHeart } from 'react-icons/ai';

const Tweet = ({ name, lastName, login, textContent, timeSincePublication, likesNum }) => {
  return (
    <div>
      <ProfileImageCircle />
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
          <div className="likes-wrapper">
            <AiOutlineHeart />
            <span className="likes">{likesNum}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {};

export default Tweet;
