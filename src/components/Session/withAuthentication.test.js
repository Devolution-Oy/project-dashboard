import React, { Component } from 'react';
import { render, screen } from '@testing-library/react';

import { AuthContext } from '../../components/Session';
import withAuthentication from './withAuthentication';
import Firebase, { FirebaseContext } from '../Firebase';
import { validEmail, validPassword } from '../../constants/testData';
import { flushPromises } from '../../constants/testData';
import { BrowserRouter as Router } from 'react-router-dom';

const DummyComponent = withAuthentication(
  class dummyComponent extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {authUser => authUser
            ? <p>Test user set</p>
            : <p>Test user null</p>}
        </AuthContext.Consumer>
      );
    }
  }
);

describe('withAuthentication', () => {
  it('Sets authenticated user to AuthContext after succesful login', async () => {
    const firebase = new Firebase();
    render(
      <FirebaseContext.Provider value={firebase}>
        <Router>
          <DummyComponent />
        </Router>
      </FirebaseContext.Provider>
    );
    expect(screen.getByText('Test user null')).toBeInTheDocument();
    firebase.login(validEmail, validPassword);
    await flushPromises();
    expect(screen.getByText('Test user set')).toBeInTheDocument();
  });

});