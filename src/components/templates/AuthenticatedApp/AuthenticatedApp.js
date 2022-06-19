import { useAuth } from 'hooks/useAuth';
import React from 'react';

const AuthenticatedApp = () => {
  const { currentUser } = useAuth();

  return currentUser === null ? <p>LOADING</p> : <p>AAAAAAAAAA LOADED LOL</p>;
};

export default AuthenticatedApp;
