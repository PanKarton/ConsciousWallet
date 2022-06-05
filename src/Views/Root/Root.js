import { useAuth } from 'hooks/useAuth';
import React from 'react';
import AuthenticatedApp from 'components/templates/AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from 'components/pages/UnauthenticatedApp/UnauthenticatedApp';

const Root = () => {
  const { currentUser } = useAuth();

  return currentUser == null ? <UnauthenticatedApp /> : <AuthenticatedApp />;
};

export default Root;
