import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  .welcome-heading {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  .message {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.textGray};
  }
  .bird-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: static;
      color: ${({ theme }) => theme.colors.twBlue};
      font-size: 4rem;
    }
  }
  button {
    margin-top: 2rem;
  }
`;
