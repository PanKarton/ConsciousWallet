import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UnauthenticatedAppMain from 'components/pages/UnauthenticatedAppMain/UnauthenticatedAppMain';
import SignUpPage from 'components/pages/SignUpPage/SignUpPage';

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/signup/*" element={<SignUpPage />} />
      <Route path="*" element={<UnauthenticatedAppMain />} />
    </Routes>
  );
};
export default UnauthenticatedApp;
