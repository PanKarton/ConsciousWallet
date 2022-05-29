import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.label`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 0.25rem;
  outline: 2px solid ${({ theme }) => theme.colors.twBlue};
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  p {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    width: 100%;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.xm};
  }
  input {
    border: none;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.xm};
    &:focus {
      outline: none;
    }
  }
`;

// TRZEBA JAKOS TO ZROBIC, POZDRAWIAM SERDECZNIE XD
// W sensie, ze fikuśny inpucik jak na twitterze, ktory po kliknieciu przesuwa p i focusuje inputa

const CredentialsInput = ({ name, id, placeholderText, type = 'text' }) => (
  <StyledInput htmlFor={id}>
    <input name={name} id={id} type={type}></input>
    <p>{placeholderText}</p>
  </StyledInput>
);

export default CredentialsInput;
