import React from 'react';
import UnauthenticatedApp from 'components/pages/UnauthenticatedApp/UnauthenticatedApp';
import { useAuth } from 'providers/AuthProvider';
import AuthenticatedApp from 'components/pages/AuthenticatedApp/AuthenticatedApp';
import AppLoadingBoard from 'components/molecules/AppLoadingBoard/AppLoadingBoard';

const Root = () => {
  const { isAuthorised } = useAuth();

  return isAuthorised === null ? <AppLoadingBoard /> : isAuthorised ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
