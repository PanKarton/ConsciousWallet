import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UnauthenticatedAppMain from 'Views/UnauthenticatedAppMain/UnauthenticatedAppMain';
import SignUpView from 'Views/SignUpView/SignUpView';

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<UnauthenticatedAppMain />} />
      <Route path="/signup" element={<SignUpView />} />
    </Routes>
  );
};
export default UnauthenticatedApp;
