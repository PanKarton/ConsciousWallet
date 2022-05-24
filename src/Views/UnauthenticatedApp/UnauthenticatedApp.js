import React from 'react';

import { FaTwitter } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import leftBackground from 'assets/img/logo192.png';
import { ContentWrapper, LeftImageWrapper, SignInSignUpWrapper, SignInWrapper, UnauthenticatedAppWrapper } from './UnauthenticatedApp.styles';
import SignUpButtons from 'components/molecules/SignUpButtons/SignUpButtons';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';

const UnauthenticatedApp = () => {
  const theme = useTheme();

  // TRZENA TEGO JEBANEGO PTAKA JAKOŚ ZROBIĆ, ZEBY SIE POWIĘKSZAŁ I ZMNIEJSZAŁ ŚMIEĆ

  return (
    <UnauthenticatedAppWrapper>
      <LeftImageWrapper img={leftBackground}>
        <FaTwitter color={theme.colors.white} height="100%" width="100%" />
      </LeftImageWrapper>
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
