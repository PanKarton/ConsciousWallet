import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 3rem;
  max-height: 40rem;
  overflow-y: hidden;
  overflow-y: scroll;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  ul {
    display: flex;
    flex-direction: column;
  }
`;
