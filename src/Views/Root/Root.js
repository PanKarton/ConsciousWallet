import React from 'react';
import AuthenticatedApp from 'components/templates/AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from 'components/pages/UnauthenticatedApp/UnauthenticatedApp';
import { useAuth } from 'providers/AuthProvider';

const Root = () => {
  const { isAuthorised } = useAuth();

  return isAuthorised ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
