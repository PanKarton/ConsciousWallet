import React from 'react';
import styled from 'styled-components';
import SearchBar from 'components/molecules/SearchBar/SearchBar';


const StyledWrapper = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
`;

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
