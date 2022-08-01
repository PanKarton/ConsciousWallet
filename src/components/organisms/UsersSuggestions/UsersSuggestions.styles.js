import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgcLightGray};
  width: 100%;
  border-radius: 1rem;
  h2 {
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.xm};
  }
  .show-more-button-wrapper {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.colors.twBlue};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.whiteHover};
    }
  }
`;
