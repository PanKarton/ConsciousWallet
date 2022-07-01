import React from 'react';
import PropTypes from 'prop-types';
import ModalViewWrapper from '../ModalViewWrapper/ModalViewWrapper';
import { useSelector } from 'react-redux';
import NewTweetForm from '../NewTweetForm/NewTweetForm';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledWrapper } from './NewTweetModal.styles';

const NewTweetModal = (props) => {
  const isNewTweetModalOpenSlice = useSelector((store) => store.isNewTweetModalOpenSlice);

  return (
    <ModalViewWrapper isOpen={isNewTweetModalOpenSlice}>
      <StyledWrapper>
        <div className="exit-icon-wrapper">
          <CloseIcon className="desktop-icon" />
          <HiArrowLeft className="mobile-icon" />
        </div>
        <NewTweetForm />
      </StyledWrapper>
    </ModalViewWrapper>
  );
};

NewTweetModal.propTypes = {};

export default NewTweetModal;
