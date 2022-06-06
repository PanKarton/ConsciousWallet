import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.25rem;
  height: 2.25rem;
  cursor: pointer;
  width: 100%;
`;

const RadioInput = React.forwardRef(({ name, id, labelText, ...props }, ref) => (
  <StyledWrapper>
    <label htmlFor={id}>{labelText}</label>
    <input type="radio" id={id} name={name} {...props} ref={ref} />
  </StyledWrapper>
));

RadioInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
};

export default RadioInput;
