import React from 'react';
import { MainContentWrapper, UnauthenticatedAppWrapper } from './UnauthenticatedApp.styles';
import UnauthenticatedNav from 'components/molecules/SignUpButtons/UnauthenticatedNav/UnauthenticatedNav';
import UnauthenticatedAppView from 'components/organisms/UnauthenticatedAppView/UnauthenticatedAppView';
import WallWithBirdImage from 'components/molecules/WallWithBirdImage/WallWithBirdImage';

import SignUpModalWrapper from 'components/organisms/SignUpModalWrapper/SignUpModalWrapper';
import SignInModalWrapper from 'components/organisms/SignInModalWrapper/SignInModalWrapper';
import { useSelector } from 'react-redux';

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
      {isSignUpModalOpenSlice && <SignUpModalWrapper />}
      {isSignInModalOpenSlice && <SignInModalWrapper />}
    </UnauthenticatedAppWrapper>
  );
};

export default UnauthenticatedApp;
