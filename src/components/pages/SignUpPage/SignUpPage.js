import React from 'react';
import { SignUpForm, SignUpWrapper } from './SignUpPage.styles';
import CloseIcon from 'components/atoms/CloseIcon/CloseIcon';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignUpAccountDetails from 'components/molecules/SignUpAccountDetails/SignUpAccountDetails';
import SignUpPersonalDetails from 'components/molecules/SignUpPersonalDetails/SignUpPersonalDetails';
import { useForm } from 'react-hook-form';
import SignUpFinal from 'components/molecules/SignUpFinal/SignUpFinal';
import useSignUp from 'hooks/useSignUp';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const { handleSignUp, step, setStep, canMoveNext, setCanMoveNext, canSubmit, setCanSubmit } = useSignUp();

  const handleCloseForm = () => {
    navigate('/');
  };

  const handleCreateAccount = ({ passwordConfirmation, ...data }) => {
    // if gender is male or female, overwrite undefined with null
    if (data.gender === 'male' || data.gender === 'female') {
      handleSignUp({ pronoun: null, optionalGender: null, ...data });
    } else {
      handleSignUp({ ...data });
    }
  };

  return (
    <SignUpWrapper>
      <SignUpForm onSubmit={handleSubmit(handleCreateAccount)}>
        <CloseIcon onClick={handleCloseForm} />
        <div className="max-width-wrapper">
          <p className="step">Step {step}/3</p>
          <Routes>
            <Route
              path="/personals"
              element={<SignUpPersonalDetails register={register} setStep={setStep} watch={watch} canMoveNext={canMoveNext} canSubmit={canSubmit} setCanSubmit={setCanSubmit} />}
            />
            <Route path="/final" element={<SignUpFinal canMoveNext={canMoveNext} setStep={setStep} />} />
            <Route path="*" element={<SignUpAccountDetails register={register} setStep={setStep} watch={watch} canMoveNext={canMoveNext} setCanMoveNext={setCanMoveNext} />} />
          </Routes>
        </div>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUpPage;
