import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding-inline: 1rem;
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  .profile-image-wrapper {
    flex-basis: 3rem;
  }
`;

export const StyledForm = styled.form`
  flex-basis: 100%;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  .tweet-content {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
    width: 100%;
    border-top: none;
    border-inline: none;
    resize: none;
    max-height: 20rem;
    min-height: 4rem;
    font-size: ${({ theme }) => theme.fontSize.xxm};
    color: ${({ theme }) => theme.colors.textGray};
    &:focus {
      outline: none;
    }
  }
  .flex-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .circural-bar-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 2.1875rem;
      /* .CircularProgressbar .CircularProgressbar-text {
        font-size: 1rem;
      } */
      &::after {
        position: absolute;
        content: '';
        height: 100%;
        right: -0.375rem;
        border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
      }
    }
  }
  button {
    width: 74px;
    padding: 0.5rem 0.75rem;
  }
`;
