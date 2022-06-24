import AppLoadingBoard from 'components/molecules/AppLoadingBoard/AppLoadingBoard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useAuth } from 'providers/AuthProvider';
import React from 'react';
import { Routes } from 'react-router-dom';

const AuthenticatedApp = () => {
  const { currentUser } = useAuth();

  return currentUser === null ? (
    <AppLoadingBoard />
  ) : (
    <MainTemplate>
      <div className="wrapper">
        <Routes>
          <div className="route">Home</div>
        </Routes>
      </div>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
