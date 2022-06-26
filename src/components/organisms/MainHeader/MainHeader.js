import React, { useEffect, useState } from 'react';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';
import styled from 'styled-components';
import MainNav from 'components/molecules/MainNav/MainNav';

const StyledHeader = styled.header`
  flex-basis: 3.375rem;
  width: 100%;
  position: relative;

  @media screen and (min-width: 500px) {
    height: 100vh;
  }
  @media screen and (min-width: 501px) and (max-width: 1300px) {
    flex-basis: 4rem;
    padding-inline: 0.75rem;
  }
  @media screen and (min-width: 1301px) {
    flex-basis: 251px;
    padding-inline: 0.75rem;
  }

  .app-nav-wrapper {
    border: 1px solid red;
    height: 100%;

    .bird-wrapper {
      display: none;
      svg {
        color: ${({ theme }) => theme.colors.twBlue};
      }
      @media screen and (min-width: 501px) {
        display: block;
      }
    }
  }

  .add-tweet-button {
    position: absolute;
    right: 1rem;
    top: -2rem;
  }
`;

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
        <MainNav />
        <div className="add-tweet-button">ADD</div>
      </div>
      {windowWidth > 500 ? <div className="logout-wrapper">Log out</div> : null}
    </StyledHeader>
  );
};

MainHeader.propTypes = {};

export default MainHeader;
