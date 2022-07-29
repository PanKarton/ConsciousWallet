import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RadioInput from 'components/atoms/RadioInput/RadioInput';
import { StyledSelect, StyledWrapper } from './GenderPicker.styles';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';

const GenderPicker = ({ register, watch, optionalGenderError }) => {
  const [isGenderCustom, setIsGenderCustom] = useState(false);

  useEffect(() => {
    const subscription = watch(({ gender }) => {
      gender === 'custom' ? setIsGenderCustom(true) : setIsGenderCustom(false);
    });
    return () => subscription.unsubscribe();
  });

  return (
    <StyledWrapper>
      <span>Gender</span>
      <div className="radio-inputs-wrapper">
        <RadioInput {...register('gender')} value="female" id="female" labelText="Female" />
        <RadioInput {...register('gender')} value="male" id="male" labelText="Male" />
        <RadioInput {...register('gender')} value="custom" id="custom" labelText="Custom" />
      </div>
      {isGenderCustom && (
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
      )}
    </StyledWrapper>
  );
};

GenderPicker.propTypes = {
  register: PropTypes.func,
  watch: PropTypes.func,
  optionalGenderError: PropTypes.string,
};

export default GenderPicker;
