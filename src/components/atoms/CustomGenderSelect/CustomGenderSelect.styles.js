import styled from 'styled-components';

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
