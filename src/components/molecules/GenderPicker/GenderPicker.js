import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from 'components/atoms/RadioInput/RadioInput';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.textGray};
  }

  .radio-inputs-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`;

const GenderPicker = ({ register }) => {
  return (
    <StyledWrapper>
      <span>Gender</span>
      <div className="radio-inputs-wrapper">
        <RadioInput {...register('female')} id="female" labelText="Female" />
        <RadioInput {...register('male')} id="male" labelText="Male" />
        <RadioInput {...register('custom')} id="custom" labelText="Custom" />
      </div>
      <select>
        <option defaultValue="1" disabled="1">
          Select your pronoun
        </option>
        <option value="1"> She: "Wish her a happy birthday!"</option>
        <option value="2"> He: "Wish him a happy birthday!"</option>
        <option value="3"> They: "Wish them a happy birthday!"</option>
      </select>
      <input type="text" placeholder="Gender (optional)" />
    </StyledWrapper>
  );
};

GenderPicker.propTypes = {
  register: PropTypes.func,
};

export default GenderPicker;
