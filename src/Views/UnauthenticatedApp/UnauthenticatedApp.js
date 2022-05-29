import React, { useState } from 'react';
import { MainContentWrapper, UnauthenticatedAppWrapper } from './UnauthenticatedApp.styles';
import UnauthenticatedNav from 'components/molecules/SignUpButtons/UnauthenticatedNav/UnauthenticatedNav';
import UnauthenticatedAppView from 'components/organisms/UnauthenticatedAppView/UnauthenticatedAppView';
import WallWithBirdImage from 'components/molecules/WallWithBirdImage/WallWithBirdImage';
import Modal from 'react-modal';

const UnauthenticatedApp = () => {
  const [isSignInModalOpen, isIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, isIsSignUpModalOpen] = useState(false);

  return (
    <UnauthenticatedAppWrapper>
      <MainContentWrapper>
        <WallWithBirdImage />
        <UnauthenticatedAppView />
      </MainContentWrapper>
      <UnauthenticatedNav />
    </UnauthenticatedAppWrapper>
  );
};

export default UnauthenticatedApp;
