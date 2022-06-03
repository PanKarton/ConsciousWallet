import UnauthenticatedNav from 'components/molecules/SignUpButtons/UnauthenticatedNav/UnauthenticatedNav';
import WallWithBirdImage from 'components/molecules/WallWithBirdImage/WallWithBirdImage';
import UnauthenticatedAppView from 'components/organisms/UnauthenticatedAppView/UnauthenticatedAppView';
import React from 'react';
import { MainContentWrapper, UnauthenticatedAppWrapper } from './UnauthenticatedAppMain.styles';

const UnauthenticatedAppMain = (props) => (
  <UnauthenticatedAppWrapper>
    <MainContentWrapper>
      <WallWithBirdImage />
      <UnauthenticatedAppView />
    </MainContentWrapper>
    <UnauthenticatedNav />
  </UnauthenticatedAppWrapper>
);

export default UnauthenticatedAppMain;
