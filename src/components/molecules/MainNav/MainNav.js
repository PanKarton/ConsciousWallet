import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BsBell, BsFillBellFill, BsPeople, BsPeopleFill, BsEnvelope, BsEnvelopeFill, BsPerson, BsPersonFill } from 'react-icons/bs';
import { useAuth } from 'providers/AuthProvider';
import { StyledNav, StyledNavList } from './MainNav.styles';

const MainNav = () => {
  const { currentUser } = useAuth();

  return (
    <StyledNav>
      <StyledNavList>
        <li>
          <NavLink exact to="home">
            <div className="icon-wrapper">
              <p>czesc</p>
              <AiOutlineHome className="active" />
              <AiFillHome className="passive" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="explore">
            <div className="icon-wrapper">
              <p>czesc</p>
              <BsBell className="active" />
              <BsFillBellFill className="passive" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={`${currentUser.login}/communities`}>
            <div className="icon-wrapper">
              <p>czesc</p>
              <BsPeople className="active" />
              <BsPeopleFill className="passive" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="notifications">
            <div className="icon-wrapper">
              <p>czesc</p>
              <BsEnvelope className="active" />
              <BsEnvelopeFill className="passive" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={`profile/${currentUser.login}`}>
            <div className="icon-wrapper">
              <p>czesc</p>
              <BsPerson className="active" />
              <BsPersonFill className="passive" />
            </div>
          </NavLink>
        </li>
      </StyledNavList>
    </StyledNav>
  );
};

export default MainNav;
