import styled from 'styled-components';

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
