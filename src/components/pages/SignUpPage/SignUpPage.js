import React, { useState } from 'react';
import { SignUpForm, SignUpWrapper } from './SignUpPage.styles';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignUpAccountDetails from 'components/molecules/SignUpAccountDetails/SignUpAccountDetails';
import SignUpPersonalDetails from 'components/molecules/SignUpPersonalDetails/SignUpPersonalDetails';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const [step, setStep] = useState(1);

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
          <p>Step {step}/2</p>
          <Routes>
            <Route path="/personals" element={<SignUpPersonalDetails register={register} setPrevStep={() => setStep(1)} />} />
            <Route path="*" element={<SignUpAccountDetails register={register} setNextStep={() => setStep(2)} watch={watch} />} />
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
