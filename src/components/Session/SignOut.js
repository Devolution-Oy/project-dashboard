import React from 'react';
import PropTypes from 'prop-types';

const SignOutButton = () => (
  <button type='button' id='btn_logout'>
    Sign Out
  </button>
);

SignOutButton.propTypes = {
  firebase: PropTypes.object
};
export default SignOutButton;