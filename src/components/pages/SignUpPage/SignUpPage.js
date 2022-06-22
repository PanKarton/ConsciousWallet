import React, { useState } from 'react';
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
  const [step, setStep] = useState(1);
  const [canMoveNext, setCanMoveNext] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [isStepVisible, setIsStepVisible] = useState(true);
  const { handleSignUp } = useSignUp();

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
          {isStepVisible && <p>Step {step}/2</p>}
          <Routes>
            <Route
              path="/personals"
              element={
                <SignUpPersonalDetails
                  setIsStepVisible={setIsStepVisible}
                  register={register}
                  setStep={setStep}
                  watch={watch}
                  canMoveNext={canMoveNext}
                  canSubmit={canSubmit}
                  setCanSubmit={setCanSubmit}
                />
              }
            />
            <Route path="/final" element={<SignUpFinal setIsStepVisible={setIsStepVisible} canMoveNext={canMoveNext} />} />
            <Route path="*" element={<SignUpAccountDetails register={register} setStep={setStep} watch={watch} canMoveNext={canMoveNext} setCanMoveNext={setCanMoveNext} />} />
          </Routes>
        </div>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUpPage;
