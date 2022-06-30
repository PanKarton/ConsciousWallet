import React from 'react';
import PropTypes from 'prop-types';
import ModalViewWrapper from '../ModalViewWrapper/ModalViewWrapper';
import { useSelector } from 'react-redux';
import ProfileImageCircle from 'components/atoms/ProfileImageCircle/ProfileImageCircle';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';

const NewTweetModal = (props) => {
  const isNewTweetModalOpenSlice = useSelector((store) => store.isNewTweetModalOpenSlice);

  return (
    <ModalViewWrapper isOpen={isNewTweetModalOpenSlice}>
      <div className="wrapper">
        <div className="exit-icon-wrapper">{`<-`}</div>
        <div className="new-tweet-form">
          <div className="profile-image-wrapper">
            <ProfileImageCircle />
          </div>
          <input type="text" placeholder={`What's happening?`} />
          <CylinderButton bgColor="blue" textColor="white">
            <strong>Tweet</strong>
          </CylinderButton>
        </div>
      </div>
    </ModalViewWrapper>
  );
};

NewTweetModal.propTypes = {};

export default NewTweetModal;
