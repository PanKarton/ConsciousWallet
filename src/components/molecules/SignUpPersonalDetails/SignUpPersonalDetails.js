import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import useSignUpValidation from 'hooks/useSignUpValidation';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BirthDatePicker from '../BirthDatePicker/BirthDatePicker';
import GenderPicker from '../GenderPicker/GenderPicker';
import { HeadingWrapper, StyledWrapper } from './SignUpPersonalDetails.styles';
import PropTypes from 'prop-types';

const SignUpPersonalDetails = ({ register, setStep, setCanSubmit, watch, canMoveNext, canSubmit }) => {
  const navigate = useNavigate();
  const { nameError, ageError, surnameError, optionalGenderError, validatePersonalDataInputs } = useSignUpValidation();

  useEffect(() => {
    // Move to step 1/2 if refreshed on step 2/2
    if (!canMoveNext) navigate('/signup');
  }, [canMoveNext, navigate]);

  useEffect(() => {
    setStep(2);
    const subscription = watch((data) => {
      validatePersonalDataInputs(data, setCanSubmit);
    });

    return () => subscription.unsubscribe();
  }, [validatePersonalDataInputs, watch, setCanSubmit, setStep]);

  const handlePreviousStep = () => {
    navigate('/signup');
  };

  const handleNextStep = () => {
    navigate('/signup/final');
  };

  return (
    <StyledWrapper>
      <HeadingWrapper>
        <h2>Sign Up! </h2>
        <p>Your personal details.</p>
      </HeadingWrapper>
      <div className="name-surname-wrapper">
        <div className="inputs-wrapper">
          <CredentialsInput isHalfWidth {...register('name')} id="name" type="text" placeholder="Name" />
          <CredentialsInput isHalfWidth {...register('surname')} id="surname" type="text" placeholder="Surname" />
        </div>
        {nameError && <p>{nameError}</p>}
        {surnameError && <p>{surnameError}</p>}
      </div>
      <BirthDatePicker register={register} ageError={ageError} />
      <GenderPicker register={register} watch={watch} setCanSubmit={setCanSubmit} optionalGenderError={optionalGenderError} />
      <p className="disclaimer">People who use our service may have uploaded your contact information to Twitter-copy.</p>
      <p className="disclaimer">
        By clicking Sign Up, you agree to our <a href="/">Terms</a>. Learn how we collect, use and share your data in our <a href="/">Data Policy</a> and how we use cookies and similar technology in
        our <a href="/">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
      </p>
      <div className="buttons-wrapper">
        {canSubmit ? null : <p className="error-message">Please make sure all fields are fulfilled properly.</p>}
        <div className="buttons-flex-wrapper">
          <CylinderButton onClick={handlePreviousStep}>Back</CylinderButton>
          <CylinderButton bgColor="blue" textColor="white" onClick={handleNextStep} disabled={!canSubmit}>
            Sign Up
          </CylinderButton>
        </div>
      </div>
    </StyledWrapper>
  );
};

SignUpPersonalDetails.propTypes = {
  register: PropTypes.func,
  watch: PropTypes.func,
  setStep: PropTypes.func,
  setCanSubmit: PropTypes.func,
};

export default SignUpPersonalDetails;
