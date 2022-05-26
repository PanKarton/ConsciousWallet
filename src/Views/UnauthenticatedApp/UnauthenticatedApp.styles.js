import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';

export const UnauthenticatedAppWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  @media screen and (min-width: 1001px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 95vh;
  }
`;

export const LeftBlueImageWrapper = styled.div`
  height: 24rem;
  width: 100%;
  background-image: url(${(props) => props.img});
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${FaTwitter} {
    font-size: 100px;
  }
  @media screen and (min-width: 1001px) {
    height: 100%;
  }
`;

export const BirdWrapper = styled.div`
  padding: 1rem;
  width: min(100%, 22rem);
`;

export const SignInSignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media screen and (min-width: 1001px) {
    justify-content: flex-start;
    min-width: 50rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(3rem, 9vw, 4rem);
  width: min(100%, 37.5rem);
  padding: 2.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (min-width: 501px) {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
  }
`;

export const SignInWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xm};
    margin-bottom: 1rem;
  }
`;
