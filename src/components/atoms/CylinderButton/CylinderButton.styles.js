import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 18.75rem;
  border-radius: 1000px;
  background-color: ${({ bgColor, theme }) => {
    switch (bgColor) {
      case 'blue':
        return theme.colors.twBlue;
      default:
        return theme.colors.white;
    }
  }};
  color: ${({ textColor, theme }) => {
    switch (textColor) {
      case 'white':
        return theme.colors.white;
      case 'blue':
        return theme.colors.twBlue;
      default:
        return theme.colors.black;
    }
  }};
  border: 1px solid ${({ theme }) => theme.colors.cylinderButtonBorderGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
`;
