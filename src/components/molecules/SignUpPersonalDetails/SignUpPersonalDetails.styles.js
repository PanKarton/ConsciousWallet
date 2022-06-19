import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
  button {
    margin-top: 1rem;
  }
  .name-surname-wrapper {
    .inputs-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: ${({ theme }) => theme.colors.errorRed};
      margin-top: 0.25rem;
    }
  }
  .disclaimer {
    color: ${({ theme }) => theme.colors.textGray};
    font-size: ${({ theme }) => theme.fontSize.xs};
    a {
      color: ${({ theme }) => theme.colors.twBlue};
    }
  }
  .buttons-wrapper {
    width: 100%;
    .error-message {
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: ${({ theme }) => theme.colors.errorRed};
      margin-bottom: 0.5rem;
    }
    .buttons-flex-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      button {
        margin-top: 0;
      }
    }
  }
`;

export const HeadingWrapper = styled.div`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textGray};
  h2 {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    @media screen and (min-width: 500px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
