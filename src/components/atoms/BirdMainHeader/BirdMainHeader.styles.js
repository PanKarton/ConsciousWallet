import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.h1`
  display: none;
  @media screen and (min-width: 501px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
  }
  @media screen and (min-width: 1301px) {
    width: calc(1.25rem + 50px);
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: none;
  width: 50px;
  border-radius: 9999px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.twBlueLighter};
  }
  svg {
    color: ${({ theme }) => theme.colors.twBlue};
    cursor: pointer;
  }
  @media screen and (min-width: 501px) {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      height: 50px;
      width: 30px;
    }
  }
`;
