import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from './MainSidebarNav.styles';

const MainSidebarNav = (props) => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <Link to="/">Terms of Service</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/">Cookie Policy</Link>
        </li>
        <li>
          <Link to="/">Accessibility</Link>
        </li>
        <li>
          <Link to="/">Ads info</Link>
        </li>
        <li>
          <Link to="/">&copy; 2022 Twitter, Inc.</Link>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default MainSidebarNav;
