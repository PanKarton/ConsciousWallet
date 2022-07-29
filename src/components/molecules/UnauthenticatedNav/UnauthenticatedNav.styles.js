import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1001px) {
    top: 95vh;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
  column-gap: 1rem;
  li {
    a {
      span {
        color: ${({ theme }) => theme.colors.textGray};
        font-size: ${({ theme }) => theme.fontSize.xs};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
