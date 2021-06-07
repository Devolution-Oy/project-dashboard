import React, { Component } from 'react';
import { withFirebase} from '../Firebase';
import PropTypes from 'prop-types';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    this.firebase.doLogOut().then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <input onClick={this.logout} className="button" type="button" value="Log Out" data-testid="logout" />
    );
  }
}

Logout.propTypes = {
  firebase: PropTypes.object
};
export default withFirebase(Logout);