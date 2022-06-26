import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';
import { FiBell } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from 'providers/AuthProvider';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 100%;
  a {
    color: black;
    svg {
      height: 26.25px;
      width: 26.25px;
    }
  }
`;
const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  li {
    /* border: 1px solid red; */
    flex-basis: 20%;
    a {
      display: block;
      width: 100%;
      height: 100%;
      /* background-color: wheat; */
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

const MainNav = () => {
  const { currentUser } = useAuth();

  return (
    <StyledNav>
      <StyledNavList>
        <li>
          <NavLink to="home">
            <BiHomeCircle />
          </NavLink>
        </li>
        <li>
          <NavLink to="explore">
            <FiBell />
          </NavLink>
        </li>
        <li>
          <NavLink to={`${currentUser.login}/communities`}>
            <FaUserFriends />
          </NavLink>
        </li>
        <li>
          <NavLink to="notifications">
            <FiBell />
          </NavLink>
        </li>
        <li>
          <NavLink to={`${currentUser.login}`}>
            <CgProfile />
          </NavLink>
        </li>
      </StyledNavList>
    </StyledNav>
  );
};

export default MainNav;
