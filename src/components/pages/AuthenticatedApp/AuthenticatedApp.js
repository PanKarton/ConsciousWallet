import AppLoadingBoard from 'components/molecules/AppLoadingBoard/AppLoadingBoard';
import NewTweetModal from 'components/molecules/NewTweetModal/NewTweetModal';
import LogoutConfirmation from 'components/organisms/LogoutConfirmation/LogoutConfirmation';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useAuth } from 'providers/AuthProvider';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

const AuthenticatedApp = () => {
  const { currentUser } = useAuth();
  const isNewTweetModalOpenSlice = useSelector((store) => store.isNewTweetModalOpenSlice);

  return currentUser === null ? (
    <AppLoadingBoard />
  ) : (
    <MainTemplate>
      <div className="wrapper">
        <Routes>
          <Route path="/home" element={<div>czesc</div>} />
          <Route path="/logout" element={<LogoutConfirmation />} />
          <Route path="*" element={<div>wrr</div>} />
        </Routes>
        {isNewTweetModalOpenSlice && <NewTweetModal />}
      </div>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
