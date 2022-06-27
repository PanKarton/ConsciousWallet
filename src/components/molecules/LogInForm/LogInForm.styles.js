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
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.errorRed};
    text-align: left;
    margin-top: -0.25rem;
  }
`;
