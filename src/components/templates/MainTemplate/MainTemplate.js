import React from 'react';
import { StyledLayoutWrapper, TemplateWrapper } from './MainTemplate.styles';
import MainHeader from 'components/organisms/MainHeader/MainHeader';
import SearchBar from 'components/molecules/SearchBar/SearchBar';

const MainTemplate = ({ children }) => {
  return (
    <TemplateWrapper>
      <MainHeader />
      <main>
        <StyledLayoutWrapper>
          <div className="left">{children}</div>
          <div className="right">
            <SearchBar />
          </div>
        </StyledLayoutWrapper>
      </main>
    </TemplateWrapper>
  );
};

export default MainTemplate;
