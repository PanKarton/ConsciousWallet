import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.textGray};
  }

  .radio-inputs-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`;
