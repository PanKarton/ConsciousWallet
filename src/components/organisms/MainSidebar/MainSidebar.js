import React from 'react';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import { StyledWrapper } from './MainSidebar.styles';

const MainSidebar = () => (
  <StyledWrapper>
    <SearchBar placeholderText="Search Users" />
    <div>
      <h2>Who to follow</h2>
      <ul>
        <li>jeden</li>
        <li>drugi</li>
      </ul>
    </div>
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
