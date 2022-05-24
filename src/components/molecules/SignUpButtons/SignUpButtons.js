import React from 'react';
import PropTypes from 'prop-types';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';

const SignUpButtons = (props) => {
  return (
    <div>
      <CylinderButton>
        <strong>Sign up with Google </strong>
      </CylinderButton>
      <CylinderButton>
        <strong>Sign up with Apple</strong>
      </CylinderButton>
      <p>or</p>
      <CylinderButton>
        <strong>Sign up phone or email</strong>
      </CylinderButton>
      <p>
        By signing up, you agree to the
        <a href="/">Terms of Service</a>
        and
        <a href="/">Privacy Policy</a>, including
        <a href="/">Cookie Use</a>.
      </p>
    </div>
  );
};

SignUpButtons.propTypes = {};

export default SignUpButtons;
