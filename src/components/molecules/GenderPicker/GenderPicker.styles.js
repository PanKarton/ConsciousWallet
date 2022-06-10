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

export const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 0.25rem;
  padding-inline: 0.5rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.25rem;
  height: 2.25rem;
  cursor: pointer;
  width: 100%;
`;
