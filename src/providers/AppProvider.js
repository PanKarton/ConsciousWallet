import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from 'hooks/useAuth';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/img/styles/theme';
import { GlobalStyle } from 'assets/img/styles/globalStyles';
import { Helmet } from 'react-helmet';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
