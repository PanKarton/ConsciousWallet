import React from 'react';
import { TemplateWrapper } from '../MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <TemplateWrapper>
      <header className="app-header">
        <nav className="app-nav">kajsdklaslkdj</nav>
      </header>
      <main>{children}</main>
    </TemplateWrapper>
  );
};

export default MainTemplate;
