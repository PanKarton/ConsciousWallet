import styled from 'styled-components';

export const StyledHeader = styled.header`
  flex-basis: 3.375rem;
  width: 100%;
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};

  @media screen and (min-width: 500px) {
    height: 100vh;
    padding-top: 0.5rem;
    border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
  @media screen and (min-width: 501px) and (max-width: 1300px) {
    flex-basis: 4rem;
    padding-inline: 0.5rem;
  }
  @media screen and (min-width: 1301px) {
    flex-basis: 267px;
    padding-inline: 0.75rem;
  }

  .app-nav-wrapper {
    height: 100%;
    .bird-wrapper {
      display: none;
      svg {
        color: ${({ theme }) => theme.colors.twBlue};
        cursor: pointer;
      }
      @media screen and (min-width: 501px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 0.75rem;
        svg {
          height: 50px;
          width: 30px;
        }
      }
    }
  }
`;
