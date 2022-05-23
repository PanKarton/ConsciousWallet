import React from 'react';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import leftBackground from 'assets/img/logo192.png';

const UnauthenticatedAppWrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

const LeftImageWrapper = styled.div`
  /* height: 100%; */
  /* width: 100%; */
  /* background-image: url(${(props) => props.img}); */
  /* background-position: center center; */
`;

const SignInSignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: min(100%, 35rem);
  padding: 2.25rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (min-width: 501px) {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    @media screen and (min-width: 501px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

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
          <div>
            <button>Sign up with Google</button>
            <button>
              <strong>Sign up with Apple</strong>
            </button>
            <p>or</p>
            <button>
              <strong>Sign up phone or email</strong>
            </button>
            <p>
              By signing up, you agree to the
              <a href="/">Terms of Service</a>
              and
              <a href="/">Privacy Policy</a>, including
              <a href="/">Cookie Use</a>.
            </p>
          </div>
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
