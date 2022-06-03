import { PrivacyTermsDisclaimer } from 'components/molecules/SignUpButtons/SignUpButtons/SignUpButtons.styles';
import styled from 'styled-components';

export const SignUpWrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgcGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpFormWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media screen and (min-width: 700px) {
    border-radius: 2rem;
    width: 37.5rem;
    height: auto;
    padding-inline: 5rem;
    padding-block: 7rem 6rem;
  }

  .max-width-wrapper {
    width: min(100%, 20.75rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1rem;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.l};
      @media screen and (min-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
  }

  svg {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.25rem;
  }

  ${PrivacyTermsDisclaimer} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
