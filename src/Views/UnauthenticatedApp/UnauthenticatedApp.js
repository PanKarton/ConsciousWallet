import React from 'react';
import { MainContentWrapper, UnauthenticatedAppWrapper } from './UnauthenticatedApp.styles';
import UnauthenticatedNav from 'components/molecules/SignUpButtons/UnauthenticatedNav/UnauthenticatedNav';
import UnauthenticatedAppView from 'components/organisms/UnauthenticatedAppView/UnauthenticatedAppView';
import WallWithBirdImage from 'components/molecules/WallWithBirdImage/WallWithBirdImage';
import { useSelector } from 'react-redux';
import ModalWrapper from 'components/atoms/ModalWrapper/ModalWrapper';

const UnauthenticatedApp = () => {
  const isSignInModalOpenSlice = useSelector((store) => store.isSignInModalOpenSlice);
  const isSignUpModalOpenSlice = useSelector((store) => store.isSignUpModalOpenSlice);

  return (
    <UnauthenticatedAppWrapper>
      <MainContentWrapper>
        <WallWithBirdImage />
        <UnauthenticatedAppView />
      </MainContentWrapper>
      <UnauthenticatedNav />
      {isSignInModalOpenSlice && <ModalWrapper>SIGN IN MOODAL</ModalWrapper>}
      {isSignUpModalOpenSlice && <ModalWrapper>SIGN UP MOODAL</ModalWrapper>}
    </UnauthenticatedAppWrapper>
  );
};

export default UnauthenticatedApp;
