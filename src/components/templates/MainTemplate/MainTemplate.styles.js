import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }

  main {
    flex-basis: 100%;
    width: 100%;
    @media screen and (min-width: 500px) {
      flex-basis: min(100%, 600px);
      height: 100vh;
    }
    @media screen and (min-width: 1000px) {
      flex-basis: min(100%, 990px);
    }
  }
`;

export const StyledLayoutWrapper = styled.section`
  height: calc(100vh - 3.125rem);
  display: flex;
  justify-content: flex-start;
  gap: 2.5rem;
  @media screen and (min-width: 501px) {
    height: 100vh;
  }
  & > .left {
    width: min(600px, 100%);
    min-height: 100%;
    border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
  & > .right {
    display: none;
    @media screen and (min-width: 1001px) {
      display: block;
      width: 290px;
    }
    @media screen and (min-width: 1101px) {
      width: 350px;
    }
  }
`;
