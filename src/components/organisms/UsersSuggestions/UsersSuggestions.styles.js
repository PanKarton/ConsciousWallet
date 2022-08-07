import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgcLightGray};
  width: 100%;
  border-radius: 1rem;

  h2 {
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.xmm};
  }
  .suggestions-list-wrapper {
    min-height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      width: 100%;
    }
  }

  .show-more-button-wrapper {
    .show-more-button {
      padding: 1rem;
      width: 100%;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${({ theme }) => theme.colors.twBlue};
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      span {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.whiteHover};
      }
    }
  }
`;
