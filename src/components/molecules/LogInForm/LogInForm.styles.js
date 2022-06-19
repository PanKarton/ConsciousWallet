import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  p.wrong-credentials-error {
    width: 100%;
    color: ${({ theme }) => theme.colors.errorRed};
    font-size: ${({ theme }) => theme.fontSize.s};
    text-align: left;
    margin-top: -0.25rem;
  }
  button {
    margin-top: 1.5rem;
  }
`;
