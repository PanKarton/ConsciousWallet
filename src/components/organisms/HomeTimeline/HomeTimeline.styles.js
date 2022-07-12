import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: calc(100vh - 3.125rem);
  position: relative;
  overflow-y: auto;
  .new-tweet-form-wrapper {
    display: none;
    @media screen and (min-width: 501px) {
      display: block;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
      margin-bottom: 1rem;
      & > div {
        padding-top: 1rem;
      }
    }
  }
  @media screen and (min-width: 501px) {
    height: 100vh;
  }
`;
