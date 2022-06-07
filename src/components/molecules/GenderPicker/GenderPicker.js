import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RadioInput from 'components/atoms/RadioInput/RadioInput';
import GenderSelect from 'components/atoms/GenderSelect/GenderSelect';
import { StyledWrapper } from './GenderPicker.styles';

const GenderPicker = ({ register, watch }) => {
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
      {isGenderCustom && <GenderSelect register={register} />}
    </StyledWrapper>
  );
};

GenderPicker.propTypes = {
  register: PropTypes.func,
  watch: PropTypes.func,
};

export default GenderPicker;