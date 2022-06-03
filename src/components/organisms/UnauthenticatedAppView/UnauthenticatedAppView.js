import React from 'react';
import SignUpButtons from 'components/molecules/SignUpButtons/SignUpButtons/SignUpButtons';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { ContentWrapper, SignInWrapper, SignInSignUpWrapper } from './UnauthenticatedAppView.styles';
import { useDispatch } from 'react-redux';
import { handleSignInModalOpen } from 'store/slices/isSignInModalOpenSlice';
import SignInModalWrapper from 'components/organisms/SignInModal/SignInModal';
import { useSelector } from 'react-redux';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';

const UnauthenticatedAppView = () => {
  const dispatch = useDispatch();
  const isSignInModalOpenSlice = useSelector((store) => store.isSignInModalOpenSlice);

  const openSignInModal = () => dispatch(handleSignInModalOpen());

  return (
    <SignInSignUpWrapper>
      <ContentWrapper>
        <BirdIcon />
        <h1>The latest news from the world</h1>
        <SignUpButtons />
        <SignInWrapper>
          <h3>Already have an account?</h3>
          <CylinderButton textColor="blue" onClick={openSignInModal}>
            <strong>Sign in</strong>
          </CylinderButton>
        </SignInWrapper>
      </ContentWrapper>
      {isSignInModalOpenSlice && <SignInModalWrapper />}
    </SignInSignUpWrapper>
  );
};

export default UnauthenticatedAppView;
