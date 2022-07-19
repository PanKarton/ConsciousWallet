import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media screen and (min-width: 700px) {
    width: 37.5rem;
    height: auto;
    border-radius: 2rem;
    padding-inline: 5rem;
    padding-block: 7rem 6rem;
  }
  .max-width-wrapper {
    width: min(100%, 18.75rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem;
  }
  svg:first-child {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.25rem;
  }
  svg:nth-of-type(2) {
    position: absolute;
    left: 50%;
    top: 1.5rem;
    font-size: 2rem;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.twBlue};
  }
`;

export const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 1.5rem;
`;

export const SignUpSuggestion = styled.p`
  margin-top: 1rem;
  a {
    color: ${({ theme }) => theme.colors.twBlue};
    text-decoration: underline;
  }
`;
