import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from 'hooks/useAuth';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/img/styles/theme';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>;
    </ThemeProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
