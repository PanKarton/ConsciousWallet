import React from 'react';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const UnauthenticatedAppWrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

const LeftImageWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.twBlue};
`;

// Trzeba ustawic stałą szerokosc na tego dziada, a cos sie nie słucha
const SignInSignUpWrapper = styled.div`
  width: max;
  border: 1px solid red;
  height: 100vh;
`;

const UnauthenticatedApp = () => {
  const theme = useTheme();

  return (
    <UnauthenticatedAppWrapper>
      <LeftImageWrapper></LeftImageWrapper>
      <SignInSignUpWrapper>
        <FaTwitter color={theme.colors.twBlue} />
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
      </SignInSignUpWrapper>
    </UnauthenticatedAppWrapper>
  );
};

export default UnauthenticatedApp;
