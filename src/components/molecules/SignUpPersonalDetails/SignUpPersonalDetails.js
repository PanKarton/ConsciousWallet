import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BirthDatePicker from '../BirthDatePicker/BirthDatePicker';
import GenderPicker from '../GenderPicker/GenderPicker';
import { HeadingWrapper, StyledWrapper } from './SignUpPersonalDetails.styles';

const SignUpPersonalDetails = ({ register, setStep }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setStep(2);
  }, [setStep]);

  const handlePreviousStep = () => {
    navigate('/signup');
  };

  // TRZEBA PODZIZELIC TO NA KOMPONENTY I DODAC STYLE, A POTEM LOGIKE

  return (
    <StyledWrapper>
      <HeadingWrapper>
        <h2>Sign Up! </h2>
        <p>Your personal details.</p>
      </HeadingWrapper>
      <div className="name-surname-wrapper">
        <CredentialsInput isHalfWidth {...register('name')} id="name" type="text" placeholder="Name" required />
        <CredentialsInput isHalfWidth {...register('surname')} id="surname" type="text" placeholder="Surname" required />
      </div>
      <BirthDatePicker />
      <GenderPicker register={register} />
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

export default SignUpPersonalDetails;
