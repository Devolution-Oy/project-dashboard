import React, { Component } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { withFirebase } from '../Firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onLogin = () => {
    const { email, password } = this.state;
    this.props.firebase.login(email, password).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="LoginAll">
        <form method="post">
          <div className="inputCenter">
            <div className="inputLogin">
              <label>
                Email
              </label>
              <br />
              <input type="email" name="email" placeholder="Email address" />
              <br /><br />
              <label>
                Password
              </label>
              <br></br>
              <input type="password" name="password" placeholder="Password" />
              <br></br>
              <input onClick={this.onLogin} className="button" type="button" value="Log In" data-testid="submit" />
            </div>
          </div>
        </form>
      </div>

    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default withFirebase(Login);
