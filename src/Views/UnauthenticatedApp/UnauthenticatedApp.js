import React from 'react';
import { useAuth } from 'hooks/useAuth';

const UnauthenticatedApp = () => {
  const { setUser } = useAuth(null);

  const handleLogIn = () => {
    setUser(`aaaaaa`);
  };

  return <button onClick={handleLogIn}>klik mi</button>;
};

export default UnauthenticatedApp;
