import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 3rem;
  max-height: 40rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  /* overflow-y is set based on amount of users given to serach list */
  ${({ isScrollable }) => (isScrollable ? 'overflow-y: scroll;' : '')}

  ul {
    display: flex;
    flex-direction: column;
  }
  .no-users-message {
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.colors.textGray};
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 1.25rem 0.5rem 3rem;
  }
`;
