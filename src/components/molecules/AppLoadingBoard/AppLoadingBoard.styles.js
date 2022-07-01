import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  .bird-wrapper {
    svg {
      color: ${({ theme }) => theme.colors.twBlue};
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
  }
`;
