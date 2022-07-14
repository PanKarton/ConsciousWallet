import styled from 'styled-components';

export const StyledTweedWrapper = styled.section`
  border-block: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  gap: 0.75rem;
  min-height: 6.125rem;
  padding-block: 0.75rem;
  padding-inline: 1rem;
  cursor: pointer;
  transition: background-color 0.25s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.whiteBrightHover};
  }
  .image-wrapper {
    width: 3rem;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.125rem;
    .user-data {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.75rem;
      font-size: ${({ theme }) => theme.fontSize.m};
      .name {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.black};
      }
      .login,
      .time {
        color: ${({ theme }) => theme.colors.textGray};
      }
      .login {
        position: relative;
        &::after {
          position: absolute;
          content: '';
          top: 50%;
          right: -0.5rem;
          height: 3px;
          width: 3px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.textGray};
        }
      }
      .tweet-text-wrapper {
        .tweet-text {
          color: ${({ theme }) => theme.colors.black};
          font-size: ${({ theme }) => theme.fontSize.m};
        }
      }
    }
    .tweet-stats {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;
