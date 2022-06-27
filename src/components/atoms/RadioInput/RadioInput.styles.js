import styled from 'styled-components';

export const StyledWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 0.5rem;
  padding-block: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
  width: 100%;
`;
