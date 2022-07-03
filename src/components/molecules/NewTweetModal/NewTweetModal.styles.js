import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  height: 100vh;
  width: 100vw;
  .exit-icon-wrapper {
    position: absolute;
    left: 1rem;
    top: 1rem;
    .desktop-icon {
      display: none;
    }
    .mobile-icon {
      display: block;
    }
    @media screen and (min-width: 701px) {
      .desktop-icon {
        display: block;
      }
      .mobile-icon {
        display: none;
      }
    }
  }
  @media screen and (min-width: 701px) {
    position: absolute;
    left: 50%;
    top: -45vh;
    transform: translateX(-50%);
    width: 37.5rem;
    height: auto;
    border-radius: 1rem;
  }
`;
