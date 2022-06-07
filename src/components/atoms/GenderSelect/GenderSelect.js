import React from 'react';
import PropTypes from 'prop-types';
import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import { StyledSelect } from './GenderSelect.styles';

const GenderSelect = ({ register }) => (
  <>
    <StyledSelect>
      <option defaultValue="1" disabled="1">
        Select your pronoun
      </option>
      <option value="1"> She: "Wish her a happy birthday!"</option>
      <option value="2"> He: "Wish him a happy birthday!"</option>
      <option value="3"> They: "Wish them a happy birthday!"</option>
    </StyledSelect>
    <CredentialsInput {...register('optionalGender')} id="optionalGender" type="text" placeholder="Gender (optional)" />
  </>
);

GenderSelect.propTypes = {};

export default GenderSelect;
