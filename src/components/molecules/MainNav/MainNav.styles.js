import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  a {
    color: black;
    svg {
      height: 26.25px;
      width: 26.25px;
    }
  }
`;
export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  li {
    flex-basis: 20%;
  }
  @media screen and (min-width: 501px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 1rem;
    li {
      flex-basis: auto;
    }
  }
`;
