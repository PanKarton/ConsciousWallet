import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1.25rem;
  span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.textGray};
  }
`;
