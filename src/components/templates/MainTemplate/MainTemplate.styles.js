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
