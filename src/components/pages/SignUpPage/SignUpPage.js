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
  const [canMoveNext, setCanMoveNext] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleCloseForm = () => {
    navigate('/');
  };

  const handleCreateAccount = (data) => {
    if (!canSubmit) return console.log('napraw inputy smieciu');
    const { pronoun, optionalGender, ...rest } = data;
    // Remove "pronoun" key if gender is male or female
    if (data.gender === 'male' || data.gender === 'female') {
      console.log({ ...rest });
    } else {
      console.log(data);
    }
  };

  return (
    <SignUpWrapper>
      <SignUpForm onSubmit={handleSubmit(handleCreateAccount)}>
        <CloseIcon onClick={handleCloseForm} />
        <div className="max-width-wrapper">
          <p>Step {step}/2</p>
          <Routes>
            <Route
              path="/personals"
              element={<SignUpPersonalDetails register={register} setStep={setStep} watch={watch} canMoveNext={canMoveNext} canSubmit={canSubmit} setCanSubmit={setCanSubmit} />}
            />
            <Route path="*" element={<SignUpAccountDetails register={register} setStep={setStep} watch={watch} canMoveNext={canMoveNext} setCanMoveNext={setCanMoveNext} />} />
          </Routes>
        </div>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUpPage;
