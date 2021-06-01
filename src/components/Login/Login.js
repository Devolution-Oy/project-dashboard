import React, { Component } from 'react';
import './Login.css';
import { withFirebase } from '../Firebase';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login = () => {
    const { email, password } = this.state; 
    this.props.firebase.login(email, password).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
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
