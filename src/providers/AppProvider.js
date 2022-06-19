import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AuthProvider } from 'providers/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <HelmetProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
              </Helmet>
              {children}
            </ThemeProvider>
          </HelmetProvider>
        </AuthProvider>
      </Router>
    </Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
