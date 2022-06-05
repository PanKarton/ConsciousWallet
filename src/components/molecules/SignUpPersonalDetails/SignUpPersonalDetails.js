import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPersonalDetails = ({ register }) => {
  const navigate = useNavigate();

  const handlePreviousStep = () => {
    navigate('/signup');
  };

  return (
    <>
      <CredentialsInput {...register('name')} name="name" id="name" type="text" placeholder="Name" required />
      <button onClick={handlePreviousStep}>Back</button>
      <button type="submit">Sign Up</button>
    </>
  );
};

export default SignUpPersonalDetails;
