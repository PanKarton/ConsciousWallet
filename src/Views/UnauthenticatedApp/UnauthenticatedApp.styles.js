import styled from 'styled-components';

export const UnauthenticatedAppWrapper = styled.section`
  position: relative;
  @media screen and (min-width: 1001px) {
    min-height: 95vh;
  }
`;

export const MainContentWrapper = styled.div`
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
