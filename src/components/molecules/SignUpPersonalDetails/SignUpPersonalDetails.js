import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BirthDatePicker from '../BirthDatePicker/BirthDatePicker';
import GenderPicker from '../GenderPicker/GenderPicker';
import { HeadingWrapper, StyledWrapper } from './SignUpPersonalDetails.styles';

const SignUpPersonalDetails = ({ register, setPrevStep }) => {
  const navigate = useNavigate();

  const handlePreviousStep = () => {
    setPrevStep();
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
      <p>People who use our service may have uploaded your contact information to Twitter-copy.</p>
      <p>
        By clicking Sign Up, you agree to our Terms. Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookie Policy. You may
        receive SMS notifications from us and can opt out at any time.
      </p>
      <button onClick={handlePreviousStep}>Back</button>
      <button type="submit">Sign Up</button>
    </StyledWrapper>
  );
};

export default SignUpPersonalDetails;
