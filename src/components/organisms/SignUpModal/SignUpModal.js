import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalViewWrapper from 'components/molecules/ModalViewWrapper/ModalViewWrapper';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { PrivacyTermsDisclaimer } from 'components/molecules/SignUpButtons/SignUpButtons/SignUpButtons.styles';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { handleSignUpModalClose } from 'store/slices/isSignUpModalOpenSlice';

const SignUpModalWrapper = () => {
  const isSignUpModalOpenSlice = useSelector((store) => store.isSignUpModalOpenSlice);
  const dispatch = useDispatch();

  const closeModal = () => dispatch(handleSignUpModalClose());
  return (
    <ModalViewWrapper isOpen={isSignUpModalOpenSlice}>
      <div>
        {/* Trzeba zrobic z ptaka komponent do atomów */}
        <CloseIcon onClick={closeModal} />
        <h2>Create your account</h2>
        <form>
          <CredentialsInput name="login" id="login" type="text" placeholder="Login..." />
          <CredentialsInput name="password" id="password" type="password" placeholder="Password..." />
          <CredentialsInput name="passwordConfirmation" id="passwordConfirmation" type="password" placeholder="Password confirmation..." />
          <CredentialsInput name="email" id="email" type="email" placeholder="Email..." />
          <CylinderButton>Sign up</CylinderButton>
        </form>
        <PrivacyTermsDisclaimer>
          By signing up, you agree to the
          <a href="/"> Terms of Service </a>
          and
          <a href="/"> Privacy Policy </a>, including
          <a href="/"> Cookie Use </a>.
        </PrivacyTermsDisclaimer>
      </div>
    </ModalViewWrapper>
  );
};

export default SignUpModalWrapper;
