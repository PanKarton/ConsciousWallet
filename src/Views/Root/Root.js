import React from 'react';
import UnauthenticatedApp from 'components/pages/UnauthenticatedApp/UnauthenticatedApp';
import { useAuth } from 'providers/AuthProvider';
import AuthenticatedApp from 'components/pages/AuthenticatedApp/AuthenticatedApp';

const Root = () => {
  const { isAuthorised } = useAuth();

  return isAuthorised ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
