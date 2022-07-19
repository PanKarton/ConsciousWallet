import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 4rem;
  color: ${({ theme }) => theme.colors.textGray};
  @media screen and (min-width: 501px) {
    width: 4.5rem;
  }
  .icon-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg {
      position: relative;
      transition: color 0.125s;
    }
    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: ${({ theme, stat }) => {
        if (stat === 'likes') return theme.colors.twBlueLighter;
      }};
      opacity: 0;
      transition: opacity 0.125s;
    }
  }
  .number-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .number {
      font-size: ${({ theme }) => theme.fontSize.m};
      transition: color 0.125s;
      font-weight: 400;
    }
  }
  &:hover > .icon-wrapper::after {
    opacity: 1;
  }
  &:hover .number {
    color: ${({ theme }) => theme.colors.twBlue};
  }
  &:hover > .icon-wrapper > svg {
    color: ${({ theme }) => theme.colors.twBlue};
  }
`;
