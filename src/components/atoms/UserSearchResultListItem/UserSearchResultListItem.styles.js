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
      flex-basis: 3.5rem;
    }
    .user-data {
      height: 3.75rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 0.125rem;
      font-size: ${({ theme }) => theme.fontSize.m};
      @media screen and (min-width: 501px) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
      padding-block: 0.25rem;
      font-size: ${({ theme }) => theme.fontSize.s};
      @media screen and (min-width: 1101px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding-block: 0;
      }
      .user-name {
        margin-bottom: auto;
      }
      .user-bio {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 10rem;
        @media screen and (min-width: 1101px) {
          max-width: 14rem;
        }
      }
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.whiteBrightHover};
    cursor: pointer;
  }
`;
