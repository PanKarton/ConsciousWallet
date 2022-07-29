import React from 'react';
import { PropTypes } from 'prop-types';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BsBell, BsFillBellFill, BsPeople, BsPeopleFill, BsEnvelope, BsEnvelopeFill, BsPerson, BsPersonFill } from 'react-icons/bs';
import { useAuth } from 'providers/AuthProvider';
import { StyledNav, StyledNavList } from './MainNav.styles';
import MainNavLinkButton from 'components/atoms/MainNavLinkButton/MainNavLinkButton';

const MainNav = ({ windowWidth }) => {
  const { currentUser } = useAuth();

  return (
    <StyledNav>
      <StyledNavList>
        <li>
          <MainNavLinkButton to="home" word="Home" windowWidth={windowWidth}>
            <AiOutlineHome className="active" />
            <AiFillHome className="passive" />
          </MainNavLinkButton>
        </li>
        <li>
          <MainNavLinkButton to="notifications" word="Notifications" windowWidth={windowWidth}>
            <BsBell className="active" />
            <BsFillBellFill className="passive" />
          </MainNavLinkButton>
        </li>
        <li>
          <MainNavLinkButton to={`${currentUser.login}/communities`} word="Communities" windowWidth={windowWidth}>
            <BsPeople className="active" />
            <BsPeopleFill className="passive" />
          </MainNavLinkButton>
        </li>
        <li>
          <MainNavLinkButton to="messages" word="Messages" windowWidth={windowWidth}>
            <BsEnvelope className="active" />
            <BsEnvelopeFill className="passive" />
          </MainNavLinkButton>
        </li>
        <li>
          <MainNavLinkButton to={`profile/${currentUser.login}`} word="Profile" windowWidth={windowWidth}>
            <BsPerson className="active" />
            <BsPersonFill className="passive" />
          </MainNavLinkButton>
        </li>
      </StyledNavList>
    </StyledNav>
  );
};

MainNav.propTypes = {
  windowWidth: PropTypes.number,
};

export default MainNav;
