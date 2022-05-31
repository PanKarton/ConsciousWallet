import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalViewWrapper from 'components/molecules/ModalViewWrapper/ModalViewWrapper';
import { PrivacyTermsDisclaimer } from 'components/molecules/SignUpButtons/SignUpButtons/SignUpButtons.styles';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { handleSignUpModalClose } from 'store/slices/isSignUpModalOpenSlice';
import SignUpForm from 'components/molecules/SignUpForm/SignUpForm';
import { ModalWrapper } from './SignUpModal.styles';

const SignUpModalWrapper = () => {
  const isSignUpModalOpenSlice = useSelector((store) => store.isSignUpModalOpenSlice);
  const dispatch = useDispatch();

  const closeModal = () => dispatch(handleSignUpModalClose());
  return (
    <ModalViewWrapper isOpen={isSignUpModalOpenSlice}>
      <ModalWrapper>
        <CloseIcon onClick={closeModal} />
        <div className="max-width-wrapper">
          <h2>Create your account</h2>
          <SignUpForm />
          <PrivacyTermsDisclaimer>
            By signing up, you agree to the
            <a href="/"> Terms of Service </a>
            and
            <a href="/"> Privacy Policy </a>, including
            <a href="/"> Cookie Use </a>.
          </PrivacyTermsDisclaimer>
        </div>
      </ModalWrapper>
    </ModalViewWrapper>
  );
};

export default SignUpModalWrapper;
