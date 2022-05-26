import React from 'react';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { OrWithLines, PrivacyTermsDisclaimer, Wrapper } from './SignUpButtons.styles';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

// TRZEBA DODAC IKONKI DO PRZYCISKOW, A PTOEM SPRAWADZIC JAK DZIAŁA STOPKA CZY ZNIKA PO ZALOGOWANIU SIE CZY JEST CALY CZAS

const SignUpButtons = () => {
  return (
    <Wrapper>
      <h2>Join Twitter today.</h2>
      <CylinderButton>
        <FcGoogle style={{ fontSize: '1.5rem' }} />
        <strong>Sign up with Google </strong>
      </CylinderButton>
      <CylinderButton>
        <AiFillApple style={{ fontSize: '1.5rem' }} />
        <strong>Sign up with Apple</strong>
      </CylinderButton>
      <OrWithLines>
        <p>or</p>
      </OrWithLines>
      <CylinderButton bgColor="blue" textColor="white">
        <strong>Sign up with phone number or email</strong>
      </CylinderButton>
      <PrivacyTermsDisclaimer>
        By signing up, you agree to the
        <a href="/"> Terms of Service </a>
        and
        <a href="/"> Privacy Policy </a>, including
        <a href="/"> Cookie Use </a>.
      </PrivacyTermsDisclaimer>
    </Wrapper>
  );
};

export default SignUpButtons;
