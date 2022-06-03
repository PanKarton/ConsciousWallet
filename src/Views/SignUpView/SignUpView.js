import React from 'react';
import { PrivacyTermsDisclaimer } from 'components/molecules/SignUpButtons/SignUpButtons/SignUpButtons.styles';
import SignUpForm from 'components/molecules/SignUpForm/SignUpForm';
import { SignUpFormWrapper, SignUpWrapper } from './SignUpView.styles';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { useNavigate } from 'react-router-dom';

const SignUpView = () => {
  const navigate = useNavigate();

  const handleCloseForm = () => {
    navigate('/');
  };

  return (
    <SignUpWrapper>
      <SignUpFormWrapper>
        <CloseIcon onClick={handleCloseForm} />
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
