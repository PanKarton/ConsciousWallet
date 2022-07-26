import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  label {
    width: inherit;
    display: flex;
    align-items: center;
    padding-left: 0.875rem;
  }
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.colors.searchbarBgcGrey};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.searchbarBgcGrey};
  .search-icon {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.twBlue};
    background-color: ${({ theme }) => theme.colors.white};
    .search-icon {
      color: ${({ theme }) => theme.colors.twBlue};
    }
  }
`;

export const StyledInput = styled.input`
  border: none;
  padding: 0.875rem;
  font-size: ${({ theme }) => theme.fontSize.xm};
  min-height: 18px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const StyledCancelIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translate(-50%, -50%);
  height: 1.5rem;
  aspect-ratio: 1;
  border-radius: 9999rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.twBlue};
  cursor: pointer;
  .close-icon {
    color: white;
    font-size: 1.25rem;
  }
`;
