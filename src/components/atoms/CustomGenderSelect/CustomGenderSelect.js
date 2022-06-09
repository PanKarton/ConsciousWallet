import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import { StyledSelect } from './CustomGenderSelect.styles';
import useSignUpValidation from 'hooks/useSignUpValidation';

const CustomGenderSelect = ({ register, watch, setCanSubmit }) => {
  const [optionalGenderError, setOptionalGenderError] = useState();
  const { getNameAndSurnameError } = useSignUpValidation();

  useEffect(() => {
    const subscription = watch(({ optionalGender }) => {
      console.log(optionalGender);
      // const newError = getNameAndSurnameError(optionalGender);
      // console.log(newError);
      // setOptionalGenderError(newError);

      // if (newError.length > 0) return setCanSubmit(false);
      setCanSubmit(true);
    });

    return () => subscription.unsubscribe();
  }, [setCanSubmit, watch, getNameAndSurnameError]);

  return (
    <>
      <StyledSelect {...register('pronoun')}>
        <option defaultValue="1" disabled="1">
          Select your pronoun
        </option>
        <option value="She"> She: "Wish her a happy birthday!"</option>
        <option value="He"> He: "Wish him a happy birthday!"</option>
        <option value="They"> They: "Wish them a happy birthday!"</option>
      </StyledSelect>
      <CredentialsInput {...register('optionalGender')} id="optionalGender" type="text" placeholder="Gender (optional)" errorMessage={optionalGenderError} />
    </>
  );
};

CustomGenderSelect.propTypes = {
  register: PropTypes.func,
};

export default CustomGenderSelect;
