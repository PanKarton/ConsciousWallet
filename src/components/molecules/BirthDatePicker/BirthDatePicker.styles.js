import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;

  padding-top: 1.25rem;
  .component-header {
    position: absolute;
    top: 0;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.textGray};
  }
  .selects-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .age-error {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.errorRed};
    margin-top: 0.25rem;
  }
`;
