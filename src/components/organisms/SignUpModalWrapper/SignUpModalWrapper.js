import React from 'react';

import { useSelector } from 'react-redux';
import ModalViewWrapper from 'components/molecules/ModalViewWrapper/ModalViewWrapper';

const SignUpModalWrapper = () => {
  const isSignUpModalOpenSlice = useSelector((store) => store.isSignUpModalOpenSlice);

  return (
    <ModalViewWrapper isOpen={isSignUpModalOpenSlice}>
      <p>czesc</p>
    </ModalViewWrapper>
  );
};

export default SignUpModalWrapper;
