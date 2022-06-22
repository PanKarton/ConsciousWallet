import { useAuth } from 'providers/AuthProvider';
import React from 'react';

const AuthenticatedApp = () => {
  const { currentUser } = useAuth();

  return currentUser === null ? <p>LOADING</p> : <p>AAAAAAAAAA LOADED LOL {currentUser.login}</p>;
};

export default AuthenticatedApp;
