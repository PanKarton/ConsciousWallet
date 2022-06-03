import React from 'react';
import { PrivacyTermsDisclaimer } from 'components/molecules/SignUpButtons/SignUpButtons/SignUpButtons.styles';
import SignUpForm from 'components/molecules/SignUpForm/SignUpForm';
import { SignUpFormWrapper, SignUpWrapper } from './SignUpView.styles';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';

const SignUpView = () => {
  return (
    <SignUpWrapper>
      <SignUpFormWrapper>
        <CloseIcon />
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
      </SignUpFormWrapper>
    </SignUpWrapper>
  );
};

export default SignUpView;
