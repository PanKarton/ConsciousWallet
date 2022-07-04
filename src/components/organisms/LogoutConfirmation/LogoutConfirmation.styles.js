import styled from 'styled-components';

export const StyledOverlay = styled.section`
  height: calc(100vh - 51px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 501px) {
    height: 100vh;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
  padding-inline: 20vw;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 501px) {
    padding: 2rem;
    width: min(320px, 90%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  & > .bird-icon {
    color: ${({ theme }) => theme.colors.twBlue};
    font-size: 2.5rem;
  }
  & > h2.logout-header {
    font-size: ${({ theme }) => theme.fontSize.xxm};
    width: 100%;
  }
  & > div.logout-message {
    color: ${({ theme }) => theme.colors.textGray};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 20px;
    margin-bottom: 1.5rem;
  }
  button {
    font-weight: 700;
  }
`;
