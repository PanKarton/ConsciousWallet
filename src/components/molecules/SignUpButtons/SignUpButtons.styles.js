import styled from 'styled-components';

export const Wrapper = styled.div`
  width: min(100%, 18.75rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 0.75rem;
    @media screen and (min-width: 501px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin-bottom: 1.5rem;
    }
  }
`;

export const OrWithLines = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.5rem;
  width: 100%;
  p {
    position: relative;
    padding-inline: 0.75rem;
    &::before,
    &::after {
      position: absolute;
      content: '';
      top: 50%;
      width: 8rem;
      border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
    }
    &::before {
      left: 0;
      transform: translateX(-100%);
    }
    &::after {
      right: 0;
      transform: translateX(100%);
    }
  }
`;

export const PrivacyTermsDisclaimer = styled.p`
  width: min(100%, 16rem);
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.colors.textGray};
  a {
    color: ${({ theme }) => theme.colors.twBlue};
  }
`;
