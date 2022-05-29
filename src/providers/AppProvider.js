import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from 'hooks/useAuth';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        {/* <AuthProvider> */}
        {children}
        {/* </AuthProvider> */}
      </ThemeProvider>
    </HelmetProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
