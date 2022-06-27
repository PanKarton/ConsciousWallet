import React, { useEffect, useState } from 'react';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';
import MainNav from 'components/molecules/MainNav/MainNav';
import { StyledHeader } from './MainHeader.styles';

const MainHeader = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, [setWindowWidth]);

  return (
    <StyledHeader>
      <div className="app-nav-wrapper">
        <div className="bird-wrapper">
          <BirdIcon />
        </div>
        <MainNav windowWidth={windowWidth} />
        <div className="add-tweet-button">ADD</div>
      </div>
      {windowWidth > 500 ? <div className="logout-wrapper">Log out</div> : null}
    </StyledHeader>
  );
};

MainHeader.propTypes = {};

export default MainHeader;
