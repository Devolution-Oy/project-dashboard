import React from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type='button' id='btn_logout' onClick={firebase.doSignOut} datatest-id='btn_logout'>
    Log Out
  </button>
);

SignOutButton.propTypes = {
  firebase: PropTypes.object.isRequired
};
export default withFirebase(SignOutButton);