import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router';
import AuthContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';


const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }
    
    handleLogout = () => {
      this.setState({ authUser: null });
      console.log('LogOut. Redirecting to LandingPage');
      this.props.history.push(ROUTES.LANDING);
    }
    
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          authUser
            ? this.setState({authUser: authUser}, this.props.history.push(ROUTES.MAIN))
            : this.handleLogout(); 
        }
      );
    }

    componentWillUnmount() {
      if (this.listener) {
        this.listener();
        this.listener = null;
      }
    }
    
    render() {
      return (
        <AuthContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthContext.Provider>
      );
    }
  }
  
  WithAuthentication.contextType = AuthContext;

  WithAuthentication.propTypes = {
    firebase: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  return withRouter(withFirebase(WithAuthentication));
};

export default withAuthentication;