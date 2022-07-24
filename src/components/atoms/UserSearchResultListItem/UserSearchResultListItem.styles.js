import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 5.25rem;
  height: 1px;
  padding: 0.75rem 1rem;
  .flex-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 100%;
    .image-wrapper {
      flex-basis: 3.75rem;
    }
    .user-data {
      height: 3.75rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 0.125rem;
      font-size: ${({ theme }) => theme.fontSize.m};
      .user-name {
        margin-bottom: auto;
      }
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.whiteBrightHover};
    cursor: pointer;
  }
`;
