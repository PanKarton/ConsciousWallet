import styled from 'styled-components';

export const StyledUserWrapper = styled.div`
  padding: 0.75rem 1rem;
  height: 4.5rem;
  transition: background-color 0.125s ease-in-out;
  .r-flex {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    height: 100%;
    .img-wrapper {
      flex-basis: 3.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .data-wrapper {
      flex-basis: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .user-data {
        font-size: ${({ theme }) => theme.fontSize.m};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        .user-name {
          color: ${({ theme }) => theme.colors.black};
        }
        .user-login {
          color: ${({ theme }) => theme.colors.textGray};
        }
      }
      .follow-button-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.whiteHover};
  }
`;
