import React from 'react';
import { useSelector } from 'react-redux';
import ModalViewWrapper from 'components/molecules/ModalViewWrapper/ModalViewWrapper';
import styled from 'styled-components';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';

const ContentWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 700px) {
    width: 37.5rem;
    height: auto;
  }
`;

const SignInModalWrapper = () => {
  const isSignInModalOpenSlice = useSelector((store) => store.isSignInModalOpenSlice);

  return (
    <ModalViewWrapper isOpen={isSignInModalOpenSlice}>
      <ContentWrapper>
        <div>
          <h2>Log in on Twitter</h2>
          <form>
            <CredentialsInput name="login" id="login" type="text" placeholderText="Phone, email or username"></CredentialsInput>
            <CredentialsInput name="password" id="password" type="password" placeholderText="Password"></CredentialsInput>
            <CylinderButton type="submit" bgColor="blue" textColor="white">
              Log in
            </CylinderButton>
            <CylinderButton>Forgot Password?</CylinderButton>
          </form>
          <p>
            No accout yet? <a href="/">Sign up</a>
          </p>
        </div>
      </ContentWrapper>
    </ModalViewWrapper>
  );
};

export default SignInModalWrapper;
