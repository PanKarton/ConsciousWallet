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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    visibility: hidden;
    background-color: ${({ theme, stat }) => {
      if (stat === 'likes') return theme.colors.twBlueLighter;
    }};
    transition: visibility 0.125s;
    & > svg {
      visibility: visible;
      transition: color 0.125s;
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
  &:hover > .icon-wrapper {
    visibility: visible;
  }
  &:hover .number {
    color: ${({ theme }) => theme.colors.twBlue};
  }
  &:hover > .icon-wrapper > svg {
    color: ${({ theme }) => theme.colors.twBlue};
  }
`;
