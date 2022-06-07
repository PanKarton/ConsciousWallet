import React from 'react';
import Select from 'components/atoms/Select/Select';
import { StyledWrapper } from './BirthDatePicker.styles';
import { PropTypes } from 'prop-types';

const BirthDatePicker = ({ register, ageError }) => {
  const dayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const yearNumbers = [];

  for (let i = 2022; i >= 1900; i--) {
    yearNumbers.push(i);
  }

  return (
    <StyledWrapper>
      <span className="component-header">Day of birth</span>
      <div className="selects-wrapper">
        <Select array={dayNumbers} {...register('birthDay')} />
        <Select array={months} {...register('birthMonth')} />
        <Select array={yearNumbers} {...register('birthYear')} />
      </div>
      {ageError && <p className="age-error">{ageError}</p>}
    </StyledWrapper>
  );
};

BirthDatePicker.propTypes = {
  register: PropTypes.func,
  ageError: PropTypes.string,
};

export default BirthDatePicker;
