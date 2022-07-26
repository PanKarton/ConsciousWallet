import React from 'react';
import { StyledLayoutWrapper, TemplateWrapper } from './MainTemplate.styles';
import MainHeader from 'components/organisms/MainHeader/MainHeader';
import MainSidebar from 'components/organisms/MainSidebar/MainSidebar';

const MainTemplate = ({ children }) => {
  return (
    <TemplateWrapper>
      <MainHeader />
      <main>
        <StyledLayoutWrapper>
          <div className="left">{children}</div>
          <div className="right">
            <MainSidebar />
          </div>
        </StyledLayoutWrapper>
      </main>
    </TemplateWrapper>
  );
};

export default MainTemplate;
