import React from 'react';

import { FaTwitter } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import leftBackground from 'assets/img/logo192.png';
import { BirdWrapper, ContentWrapper, LeftBlueImageWrapper, SignInSignUpWrapper, SignInWrapper, UnauthenticatedAppWrapper } from './UnauthenticatedApp.styles';
import SignUpButtons from 'components/molecules/SignUpButtons/SignUpButtons';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';

const UnauthenticatedApp = () => {
  const theme = useTheme();

  // TRZENA TEGO JEBANEGO PTAKA JAKOŚ ZROBIĆ, ZEBY SIE POWIĘKSZAŁ I ZMNIEJSZAŁ ŚMIEĆ

  return (
    <UnauthenticatedAppWrapper>
      <LeftBlueImageWrapper img={leftBackground}>
        <BirdWrapper>
          <FaTwitter color={theme.colors.white} style={{ width: '100%', height: '100%' }} />
        </BirdWrapper>
      </LeftBlueImageWrapper>
      <SignInSignUpWrapper>
        <ContentWrapper>
          <FaTwitter color={theme.colors.twBlue} size={42} />
          <h1>The latest news from the world</h1>
          <SignUpButtons />
          <SignInWrapper>
            <h3>Already have an account?</h3>
            <CylinderButton textColor="blue">
              <strong>Sign in</strong>
            </CylinderButton>
          </SignInWrapper>
        </ContentWrapper>
      </SignInSignUpWrapper>
    </UnauthenticatedAppWrapper>
  );
};

export default UnauthenticatedApp;
