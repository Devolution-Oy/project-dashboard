import React, { Component } from 'react';
import './Login.css';
import { withRouter } from 'react-router';
import { withFirebase} from '../Firebase';
import PropTypes from 'prop-types';
import * as ROUTES from '../../constants/routes';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.props.history.push(ROUTES.MAIN)
          : null;
      }
    );
  }

  login = () => {
    const { email, password } = this.state;
    this.props.firebase.login(email, password).then(res => {
      this.props.history.push(ROUTES.MAIN);
      console.log(res);
    }).catch(error => {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        this.setState({ error: 'Wrong password or email.' });
      }
      else if (error.code === 'auth/invalid-email') {
        this.setState({ error: 'Invalid email.' });
      }
      else if (error.code === 'auth/too-many-requests') {
        this.setState({ error: 'Too many requests, your account has been temporarily disabled, please reset your password or try again later.' });
      }
      else {
        this.setState({ error: 'Unknown error.' });
      }
      console.log(error);
    });
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="LoginAll">
        <div className="inputCenter">
          <div className="inputLogin">
            <label>
              Email
            </label>
            <input onChange={this.onChange} type="email" name="email" placeholder="Email address" />
            <label>
              Password
            </label>
            <input onChange={this.onChange} type="password" name="password" placeholder="Password" />
            <input onClick={this.login} className="button" type="button" value="Log In" data-testid="submit" />
            {this.state.error ? <div><b><label style={{ color: 'red' }}>{this.state.error}</label></b><br /></div> : null}
          </div>
        </div>
      </div>

    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withFirebase(Login));
