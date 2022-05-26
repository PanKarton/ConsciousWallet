import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1001px) {
    top: 95vh;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
  column-gap: 1rem;
  li {
    a {
      span {
        color: ${({ theme }) => theme.colors.textGray};
        font-size: ${({ theme }) => theme.fontSize.xs};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const UnauthenticatedNav = () => (
  <StyledNav>
    <StyledUl>
      <li>
        <a href="/">
          <span>Information</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Help Center</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Terms of Use</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Privacy Policy</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Cookie Policy</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Availability</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Information about ads</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Blog</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Status</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Work</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Brand Resources</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Ads</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Marketing</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Twitter for Businesses</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Developers</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Track</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>Settings</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span>&copy; 2022 Twitter, Inc.</span>
        </a>
      </li>
    </StyledUl>
  </StyledNav>
);

export default UnauthenticatedNav;
