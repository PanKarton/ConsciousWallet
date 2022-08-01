import React from 'react';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import UsersSuggestions from 'components/organisms/UsersSuggestions/UsersSuggestions';
import { StyledWrapper } from './MainSidebar.styles';

const MainSidebar = () => (
  <StyledWrapper>
    <SearchBar placeholderText="Search Users" />
    <UsersSuggestions />
    <footer>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Accessibility</li>
        <li>Ads info</li>
        <li>&copy; 2022 Twitter, Inc.</li>
      </ul>
    </footer>
  </StyledWrapper>
);

export default MainSidebar;
