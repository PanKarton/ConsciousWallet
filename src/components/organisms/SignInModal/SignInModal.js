import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalViewWrapper from 'components/molecules/ModalViewWrapper/ModalViewWrapper';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import LogInForm from 'components/molecules/LogInForm/LogInForm';
import { handleSignInModalClose } from 'store/slices/isSignInModalOpenSlice';
import { ContentWrapper, SignUpSuggestion, StyledHeader } from './SignInModal.styles';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';

const SignInModalWrapper = () => {
  const isSignInModalOpenSlice = useSelector((store) => store.isSignInModalOpenSlice);
  const dispatch = useDispatch();

  const closeModal = () => dispatch(handleSignInModalClose());

  return (
    <ModalViewWrapper isOpen={isSignInModalOpenSlice}>
      <ContentWrapper>
        <CloseIcon onClick={closeModal} />
        <BirdIcon />
        <div className="max-width-wrapper">
          <StyledHeader>Log in on Twitter</StyledHeader>
          <LogInForm />
          <CylinderButton>Forgot Password?</CylinderButton>
          <SignUpSuggestion>
            No accout yet? <a href="/">Sign up</a>
          </SignUpSuggestion>
        </div>
      </ContentWrapper>
    </ModalViewWrapper>
  );
};

export default SignInModalWrapper;
