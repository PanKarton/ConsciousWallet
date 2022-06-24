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

  header {
    background-color: royalblue;
    flex-basis: 3.375rem;
    width: 100%;
    @media screen and (min-width: 500px) {
      height: 100vh;
    }
    @media screen and (min-width: 501px) and (max-width: 1300px) {
      flex-basis: 4rem;
      padding-inline: 0.75rem;
    }
    @media screen and (min-width: 1301px) {
      flex-basis: 251px;
      padding-inline: 0.75rem;
    }
  }

  main {
    flex-basis: 100%;
    width: 100%;
    background-color: wheat;
    @media screen and (min-width: 500px) {
      flex-basis: min(100%, 600px);
      height: 100vh;
    }
    @media screen and (min-width: 1000px) {
      flex-basis: min(100%, 990px);
    }
  }
`;
