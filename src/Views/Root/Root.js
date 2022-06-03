import { useAuth } from 'hooks/useAuth';
import React from 'react';
import AuthenticatedApp from 'Views/AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from 'Views/UnauthenticatedApp/UnauthenticatedApp';

const Root = () => {
  const { currentUser } = useAuth();

  return currentUser == null ? <UnauthenticatedApp /> : <AuthenticatedApp />;
};

export default Root;
