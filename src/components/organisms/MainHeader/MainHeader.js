import React, { useEffect, useState } from 'react';
import MainNav from 'components/molecules/MainNav/MainNav';
import { StyledHeader } from './MainHeader.styles';
import NewTweetButton from 'components/atoms/NewTweetButton/NewTweetButton';
import LogOutButton from 'components/atoms/LogOutButton/LogOutButton';
import { useDispatch } from 'react-redux';
import { handleNewTweetModalOpen } from 'store/slices/isNewTweetModalOpenSlice';
import BirdMainHeader from 'components/atoms/BirdMainHeader/BirdMainHeader';

const MainHeader = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  const openModal = () => dispatch(handleNewTweetModalOpen());

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, [setWindowWidth]);

  return (
    <StyledHeader>
      <div className="app-nav-wrapper">
        <BirdMainHeader />
        <MainNav windowWidth={windowWidth} />
        <NewTweetButton onClick={openModal} />
        <LogOutButton />
      </div>
    </StyledHeader>
  );
};

MainHeader.propTypes = {};

export default MainHeader;
