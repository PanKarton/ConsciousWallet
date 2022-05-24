import React from 'react';
import PropTypes from 'prop-types';

const SignUpButtons = (props) => {
  return (
    <div>
      <button>Sign up with Google</button>
      <button>
        <strong>Sign up with Apple</strong>
      </button>
      <p>or</p>
      <button>
        <strong>Sign up phone or email</strong>
      </button>
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
