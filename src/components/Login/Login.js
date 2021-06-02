import React, { Component } from 'react';
import './Login.css';
import { withFirebase } from '../Firebase';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  login = () => {
    const { email, password } = this.state;
    this.props.firebase.login(email, password).then(res => {
      console.log(res);
    }).catch(error => {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        this.setState({error: 'Wrong password or email.'});
      }
      else if (error.code === 'auth/invalid-email') {
        this.setState({error: 'Invalid email.'});
      }
      else if (error.code === 'auth/too-many-requests') {
        this.setState({error: 'Too many requests, your account has been temporarily disabled, please reset your password or try again later.'});
      }
      else {
        this.setState({error: error.message});
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
        <form method="post">
          <div className="inputCenter">
            <div className="inputLogin">
              <label>
                Email
              </label>
              <br />
              <input onChange={this.onChange} type="email" name="email" placeholder="Email address" />
              <br /><br />
              <label>
                Password
              </label>
              <br></br>
              <input onChange={this.onChange} type="password" name="password" placeholder="Password" />
              <br></br>
              <input onClick={this.login} className="button" type="button" value="Log In" data-testid="submit" />
              {this.state.error ? <div><label style={{color: 'red'}}>{this.state.error}</label><br /></div> : null}
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
