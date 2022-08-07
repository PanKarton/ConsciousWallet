import styled from 'styled-components';

export const StyledFooter = styled.footer`
  font-size: ${({ theme }) => theme.fontSize.s};
  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 0.5rem;
    a {
      color: ${({ theme }) => theme.colors.textGray};
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
