import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
  button {
    margin-top: 0.5rem;
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
