import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.aside`
  background-color: wheat;
  height: 100vh;
`;

const MainSidebar = (props) => (
  <StyledWrapper>
    <div>search bar</div>
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
