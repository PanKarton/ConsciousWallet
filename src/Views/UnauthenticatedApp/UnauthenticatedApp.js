import React from 'react';

import { FaTwitter } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import leftBackground from 'assets/img/logo192.png';
import { ContentWrapper, LeftImageWrapper, SignInSignUpWrapper, UnauthenticatedAppWrapper } from './UnauthenticatedApp.styles';
import SignUpButtons from 'components/molecules/SignUpButtons/SignUpButtons';

// STYLUJEMY DALEJ NIEAUTORYZOWANĄ APKE

const UnauthenticatedApp = () => {
  const theme = useTheme();

  return (
    <UnauthenticatedAppWrapper>
      <LeftImageWrapper img={leftBackground}></LeftImageWrapper>
      <SignInSignUpWrapper>
        <ContentWrapper>
          <FaTwitter color={theme.colors.twBlue} size={42} />
          <h1>The latest news from the world</h1>
          <h2>Join Twitter today.</h2>
          <SignUpButtons />
          <h3>Already have an account?</h3>
          <button>
            <strong>Sign in</strong>
          </button>
        </ContentWrapper>
      </SignInSignUpWrapper>
    </UnauthenticatedAppWrapper>
  );
};

export default UnauthenticatedApp;
