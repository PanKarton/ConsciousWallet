import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { HeadingWrapper, StyledWrapper } from './SignUpAccountDetails.styles';
import useSignUpValidation from 'hooks/useSignUpValidation';

const SignUpAccountDetails = ({ register, watch, setStep, canMoveNext, setCanMoveNext }) => {
  const navigate = useNavigate();
  const { loginError, loginAvailabilityError, passwordError, passwordsMatchError, validationEmailError, emailAvailabilityError, validateAccountInputs } = useSignUpValidation();

  useEffect(() => {
    setStep(1);
    const subscription = watch(async (data) => {
      validateAccountInputs(data, setCanMoveNext);
    });

    return () => subscription.unsubscribe();
  }, [setCanMoveNext, setStep, validateAccountInputs, watch]);

  const handleNextStep = () => {
    navigate('/signup/personals');
  };

  return (
    <StyledWrapper>
      <HeadingWrapper>
        <h2>Sign Up! </h2>
        <p>It's quick and easy.</p>
      </HeadingWrapper>
      <CredentialsInput {...register('login')} id="login" type="text" placeholder="Login" required errorMessage={loginError} secondErrorMessage={loginAvailabilityError} />
      <CredentialsInput {...register('password')} value="asdfgH123$" id="password" type="password" placeholder="Password" required errorMessage={passwordError} />
      <CredentialsInput
        {...register('passwordConfirmation')}
        value="asdfgH123$"
        id="passwordConfirmation"
        type="password"
        placeholder="Password confirmation"
        required
        errorMessage={passwordsMatchError}
      />
      <CredentialsInput {...register('email')} id="email" type="email" placeholder="Email" required errorMessage={validationEmailError} secondErrorMessage={emailAvailabilityError} />
      <CylinderButton disabled={!canMoveNext} type="button" bgColor="blue" textColor="white" onClick={handleNextStep}>
        Next
      </CylinderButton>
    </StyledWrapper>
  );
};
SignUpAccountDetails.propTypes = {
  register: PropTypes.func,
  watch: PropTypes.func,
  setStep: PropTypes.func,
  canMoveNext: PropTypes.bool,
  setCanMoveNext: PropTypes.func,
};

export default SignUpAccountDetails;
