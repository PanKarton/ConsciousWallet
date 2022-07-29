import React from 'react';
import ModalViewWrapper from '../ModalViewWrapper/ModalViewWrapper';
import { useDispatch, useSelector } from 'react-redux';
import NewTweetForm from '../NewTweetForm/NewTweetForm';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledWrapper } from './NewTweetModal.styles';
import { handleNewTweetModalClose } from 'store/slices/isNewTweetModalOpenSlice';

const NewTweetModal = () => {
  const isNewTweetModalOpenSlice = useSelector((store) => store.isNewTweetModalOpenSlice);
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(handleNewTweetModalClose());

  return (
    <ModalViewWrapper isOpen={isNewTweetModalOpenSlice} onRequestClose={handleCloseModal}>
      <StyledWrapper>
        <div className="exit-icon-wrapper">
          <CloseIcon className="desktop-icon" onClick={handleCloseModal} />
          <HiArrowLeft className="mobile-icon" onClick={handleCloseModal} />
        </div>
        <NewTweetForm />
      </StyledWrapper>
    </ModalViewWrapper>
  );
};

export default NewTweetModal;
