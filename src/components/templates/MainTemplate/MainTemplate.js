import React from 'react';
import { TemplateWrapper } from './MainTemplate.styles';
import MainHeader from 'components/organisms/MainHeader/MainHeader';

const MainTemplate = ({ children }) => {
  return (
    <TemplateWrapper>
      <MainHeader />
      <main>{children}</main>
    </TemplateWrapper>
  );
};

export default MainTemplate;
