import styled from 'styled-components';
export const UnauthenticatedAppWrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

export const LeftImageWrapper = styled.div`
  /* height: 100%; */
  /* width: 100%; */
  /* background-image: url(${(props) => props.img}); */
  /* background-position: center center; */
`;

export const SignInSignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
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
