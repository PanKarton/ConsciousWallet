import React from 'react';
import { useSelector } from 'react-redux';
import ModalViewWrapper from 'components/molecules/ModalViewWrapper/ModalViewWrapper';

const SignInModalWrapper = () => {
  const isSignInModalOpenSlice = useSelector((store) => store.isSignInModalOpenSlice);

  return (
    <ModalViewWrapper isOpen={isSignInModalOpenSlice}>
      <p>czesc</p>
    </ModalViewWrapper>
  );
};

export default SignInModalWrapper;
