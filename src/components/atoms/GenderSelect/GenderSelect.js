import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './GenderSelect.styles';

const GenderSelect = () => (
  <StyledSelect>
    <option defaultValue="1" disabled="1">
      Select your pronoun
    </option>
    <option value="1"> She: "Wish her a happy birthday!"</option>
    <option value="2"> He: "Wish him a happy birthday!"</option>
    <option value="3"> They: "Wish them a happy birthday!"</option>
  </StyledSelect>
);

GenderSelect.propTypes = {};

export default GenderSelect;
