import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from 'hooks/useAuth';

const AppProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
