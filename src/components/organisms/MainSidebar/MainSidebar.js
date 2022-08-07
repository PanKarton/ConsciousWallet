import React from 'react';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import UsersSuggestions from 'components/organisms/UsersSuggestions/UsersSuggestions';
import { StyledWrapper } from './MainSidebar.styles';
import MainSidebarNav from 'components/molecules/MainSidebarNav/MainSidebarNav';

const MainSidebar = () => (
  <StyledWrapper>
    <SearchBar placeholderText="Search Users" />
    <UsersSuggestions />
    <MainSidebarNav />
  </StyledWrapper>
);

export default MainSidebar;
