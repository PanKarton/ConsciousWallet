import AppLoadingBoard from 'components/molecules/AppLoadingBoard/AppLoadingBoard';
import { useAuth } from 'providers/AuthProvider';
import React from 'react';

const AuthenticatedApp = () => {
  const { currentUser } = useAuth();

  return currentUser === null ? <AppLoadingBoard /> : <p>AAAAAAAAAA LOADED LOL {currentUser.login}</p>;
};

export default AuthenticatedApp;
