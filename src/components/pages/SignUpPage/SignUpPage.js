import React from 'react';
import { SignUpForm, SignUpWrapper } from './SignUpPage.styles';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignUpAccountDetails from 'components/molecules/SignUpAccountDetails/SignUpAccountDetails';
import SignUpPersonalDetails from 'components/molecules/SignUpPersonalDetails/SignUpPersonalDetails';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const handleCloseForm = () => {
    navigate('/');
  };

  const handleCreateAccount = (data) => {
    console.log(data);
  };

  return (
    <SignUpWrapper>
      <SignUpForm onSubmit={handleSubmit(handleCreateAccount)}>
        <CloseIcon onClick={handleCloseForm} />
        <div className="max-width-wrapper">
          <Routes>
            <Route path="/personals" element={<SignUpPersonalDetails register={register} />} />
            <Route path="*" element={<SignUpAccountDetails register={register} />} />
          </Routes>
        </div>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUpPage;

{
  /* <SignUpWrapper>
<SignUpForm>
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
</SignUpForm>
</SignUpWrapper> */
}
