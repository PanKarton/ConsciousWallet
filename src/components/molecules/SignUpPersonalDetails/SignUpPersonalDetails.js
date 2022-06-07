import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import useSignUpValidation from 'hooks/useSignUpValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BirthDatePicker from '../BirthDatePicker/BirthDatePicker';
import GenderPicker from '../GenderPicker/GenderPicker';
import { HeadingWrapper, StyledWrapper } from './SignUpPersonalDetails.styles';
import PropTypes from 'prop-types';

const SignUpPersonalDetails = ({ register, setStep, watch, canMoveNext }) => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const { getNameAndSurnameError } = useSignUpValidation();

  useEffect(() => {
    // Move to step 1/2 if refreshed on step 2/2
    if (!canMoveNext) navigate('/signup');
  }, [canMoveNext, navigate]);

  useEffect(() => {
    setStep(2);
    const subscription = watch(({ name, surname }) => {
      const newNameError = getNameAndSurnameError(name);
      const newSurnameError = getNameAndSurnameError(surname);

      setNameError(newNameError);
      setSurnameError(newSurnameError);
    });

    return () => subscription.unsubscribe();
  }, [setStep, watch, getNameAndSurnameError]);

  const handlePreviousStep = () => {
    navigate('/signup');
  };

  return (
    <StyledWrapper>
      <HeadingWrapper>
        <h2>Sign Up! </h2>
        <p>Your personal details.</p>
      </HeadingWrapper>
      <div className="name-surname-wrapper">
        <div className="inputs-wrapper">
          <CredentialsInput isHalfWidth {...register('name')} id="name" type="text" placeholder="Name" required />
          <CredentialsInput isHalfWidth {...register('surname')} id="surname" type="text" placeholder="Surname" required />
        </div>
        {nameError && <p>{nameError}</p>}
        {surnameError && <p>{surnameError}</p>}
      </div>
      <BirthDatePicker register={register} />
      <GenderPicker register={register} watch={watch} />
      <p className="disclaimer">People who use our service may have uploaded your contact information to Twitter-copy.</p>
      <p className="disclaimer">
        By clicking Sign Up, you agree to our <a href="/">Terms</a>. Learn how we collect, use and share your data in our <a href="/">Data Policy</a> and how we use cookies and similar technology in
        our <a href="/">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
      </p>
      <div className="buttons-wrapper">
        <CylinderButton onClick={handlePreviousStep}>Back</CylinderButton>
        <CylinderButton bgColor="blue" textColor="white" type="submit">
          Sign Up
        </CylinderButton>
      </div>
    </StyledWrapper>
  );
};

SignUpPersonalDetails.propTypes = {
  register: PropTypes.func,
  watch: PropTypes.func,
  setStep: PropTypes.func,
};

export default SignUpPersonalDetails;
