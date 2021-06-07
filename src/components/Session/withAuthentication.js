import React from 'react';
import PropTypes from 'prop-types';

import AuthContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }
    
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        this.setState({authUser: null})
      );
    }

    componentWillUnmount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        this.setState({authUser: null})
      );
    }
    
    render() {
      return (
        <AuthContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthContext.Provider>
      );
    }
  }
  
  WithAuthentication.propTypes = {
    firebase: PropTypes.object
  };
  return withFirebase(WithAuthentication);
};

export default withAuthentication;