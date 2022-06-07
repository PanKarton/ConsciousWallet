import React from 'react';
import PropTypes from 'prop-types';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import { StyledSelect } from './CustomGenderSelect.styles';

const CustomGenderSelect = ({ register }) => (
  <>
    <StyledSelect {...register('pronoun')}>
      <option defaultValue="1" disabled="1">
        Select your pronoun
      </option>
      <option value="She"> She: "Wish her a happy birthday!"</option>
      <option value="He"> He: "Wish him a happy birthday!"</option>
      <option value="They"> They: "Wish them a happy birthday!"</option>
    </StyledSelect>
    <CredentialsInput {...register('optionalGender')} id="optionalGender" type="text" placeholder="Gender (optional)" />
  </>
);

CustomGenderSelect.propTypes = {
  register: PropTypes.func,
};

export default CustomGenderSelect;
