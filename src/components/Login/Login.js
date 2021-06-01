import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase/context';
import PropTypes from 'prop-types';
import * as ROUTES from '../../constants/routes';

import './Login.css';

const INITIAL_STATE = {
  email: '',
  password: ''
};

class TestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.firebase.testLogin(email, password).then(() => {
 
      this.props.history.push(ROUTES.MAIN);

    }).catch(error => {
      console.log(error);
    });
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <main className='main-content'>
        </main>
        <form onSubmit={this.onSubmit}>
          <div className = "inputCenter">
            <div className = "inputLogin">
              <label>
                  Email
                <br></br>
                <input type="email" value={this.state.email} name="email" placeholder="Email address" id='login_field' onChange={this.onChange}/>
              </label>
              <br></br><br></br>
              <label>
                  Password
                <br></br>
                <input type="password" value={this.state.password} name="password" placeholder="Password" id='password' onChange={this.onChange}/>
              </label>
              <br></br>
              <button className = "button" type="submit" id='btn_submit' data-testid="submit">Log In</button>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

TestLogin.propTypes = {
  firebase: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withFirebase(TestLogin));
