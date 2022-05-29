import React from 'react';
import { MainContentWrapper, UnauthenticatedAppWrapper } from './UnauthenticatedApp.styles';
import UnauthenticatedNav from 'components/molecules/SignUpButtons/UnauthenticatedNav/UnauthenticatedNav';
import UnauthenticatedAppView from 'components/organisms/UnauthenticatedAppView/UnauthenticatedAppView';
import WallWithBirdImage from 'components/molecules/WallWithBirdImage/WallWithBirdImage';

const UnauthenticatedApp = () => {
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
